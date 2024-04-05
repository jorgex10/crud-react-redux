import { useEffect, useMemo, useRef, useState } from "react";

import { Badge, Button, TextInput, Title } from "@tremor/react";
import { SortBy, type Admin } from "../types.d";
import AdminsList from "../components/admins/AdminsList";
import Info from "../components/Info";

interface Results {
  login: { uuid: string };
  picture: { thumbnail: string };
  name: { first: string; last: string };
  location: { country: string };
}

function AdminsPage() {
  const [data, setData] = useState<Admin>([]);
  const [showColors, setShowColors] = useState(false);
  const [sorting, setSorting] = useState<SortBy>(SortBy.NONE);
  const [countryValue, setCountryValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const originalData = useRef<Admin>([]);

  const toggleColors = () => {
    setShowColors((prev) => !prev);
  };

  const toggleSortByCountry = () => {
    const newSortingValue =
      sorting !== SortBy.COUNTRY ? SortBy.COUNTRY : SortBy.NONE;
    setSorting(newSortingValue);
  };

  useEffect(() => {
    setLoading(true);
    fetch("https://randomuser.me/api/?results=10")
      .then((response) => {
        return response.json();
      })
      .then((resData) => {
        setData(
          resData.results.map((item: Results) => {
            return {
              id: item.login.uuid,
              photo: item.picture.thumbnail,
              firstName: item.name.first,
              lastName: item.name.last,
              country: item.location.country,
            };
          })
        );
        originalData.current = resData.results.map((item: Results) => {
          return {
            id: item.login.uuid,
            photo: item.picture.thumbnail,
            firstName: item.name.first,
            lastName: item.name.last,
            country: item.location.country,
          };
        });
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      })
      .finally(() => setLoading(false));
  }, []);

  const filteredData = useMemo(() => {
    return countryValue
      ? data.filter((item) =>
          item.country.toLowerCase().includes(countryValue.toLowerCase())
        )
      : data;
  }, [data, countryValue]);

  const sortedData = useMemo(() => {
    if (sorting === SortBy.COUNTRY) {
      return filteredData.toSorted((a, b) =>
        a.country.localeCompare(b.country)
      );
    } else if (sorting === SortBy.FIRST) {
      return filteredData.toSorted((a, b) =>
        a.firstName.localeCompare(b.firstName)
      );
    } else if (sorting === SortBy.LAST) {
      return filteredData.toSorted((a, b) =>
        a.lastName.localeCompare(b.lastName)
      );
    } else {
      return filteredData;
    }
  }, [filteredData, sorting]);

  const deleteHandler = (adminId: string) => {
    setData((prevData) => prevData.filter((item) => item.id !== adminId));
  };

  const resetHandler = () => {
    setData(originalData.current);
  };

  const filterHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountryValue(event.target.value);
  };

  const handleChangeSort = (sort: SortBy) => {
    setSorting(sort);
  };

  return (
    <>
      <div className="sm:flex sm:items-center sm:justify-between sm:space-x-10">
        <div>
          <Title className="text-2xl font-semibold flex">
            Users
            <Badge style={{ marginLeft: "8px" }}>{data.length}</Badge>
          </Title>
          <p className="mt-1 text-tremor-default leading-6 text-tremor-content dark:text-dark-tremor-content">
            Overview of all admins within your organization using Fetch and
            randomuser.me API.
          </p>
        </div>
      </div>

      {loading && <Info>Loading ...</Info>}
      {!loading && error && <Info>Something went wrong!</Info>}
      {!loading && !error && data.length === 0 && <Info>No admins!</Info>}
      {!loading && !error && data.length > 0 && (
        <>
          <header className="mt-8 flex gap-5 justify-center">
            <Button onClick={toggleColors}>Apply color</Button>
            <Button onClick={toggleSortByCountry}>
              {sorting !== SortBy.COUNTRY
                ? "Sort by Country"
                : "Not Sort by Country"}
            </Button>
            <Button onClick={resetHandler}>Restore deleted admins</Button>
            <TextInput
              id="country"
              name="country"
              placeholder="Filter by country"
              onChange={filterHandler}
            />
          </header>

          <AdminsList
            data={sortedData}
            showColors={showColors}
            onDelete={deleteHandler}
            onFilterColumns={handleChangeSort}
          />
        </>
      )}
    </>
  );
}

export default AdminsPage;
