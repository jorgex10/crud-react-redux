import { useEffect, useMemo, useRef, useState } from "react";

import { Badge, Button, TextInput, Title } from "@tremor/react";
import { type Admin } from "../types";
import AdminsList from "../components/admins/AdminsList";

function AdminsPage() {
  const [data, setData] = useState<Admin>([]);
  const [showColors, setShowColors] = useState(false);
  const [sortByCountry, setSortByCountry] = useState(false);
  const [countryValue, setCountryValue] = useState("");
  const originalData = useRef<Admin>([]);

  const toggleColors = () => {
    setShowColors((prev) => !prev);
  };

  const toggleSortByCountry = () => {
    setSortByCountry((prev) => !prev);
  };

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("https://randomuser.me/api/?results=100");
      const resData = await response.json();

      setData(
        resData.results.map(
          (item: {
            login: { uuid: string };
            picture: { thumbnail: string };
            name: { first: string; last: string };
            location: { country: string };
          }) => {
            return {
              id: item.login.uuid,
              photo: item.picture.thumbnail,
              firstName: item.name.first,
              lastName: item.name.last,
              country: item.location.country,
            };
          }
        )
      );
      originalData.current = resData.results.map(
        (item: {
          login: { uuid: string };
          picture: { thumbnail: string };
          name: { first: string; last: string };
          location: { country: string };
        }) => {
          return {
            id: item.login.uuid,
            photo: item.picture.thumbnail,
            firstName: item.name.first,
            lastName: item.name.last,
            country: item.location.country,
          };
        }
      );
    };

    getData();
  }, []);

  const filteredData = useMemo(() => {
    console.log("calculate filtered admins");

    return countryValue
      ? data.filter((item) =>
          item.country.toLowerCase().includes(countryValue.toLowerCase())
        )
      : data;
  }, [data, countryValue]);

  const sortedData = useMemo(() => {
    console.log("calculate sorted admins");

    return sortByCountry
      ? filteredData.toSorted((a, b) => {
          return a.country.localeCompare(b.country);
        })
      : filteredData;
  }, [filteredData, sortByCountry]);

  const deleteHandler = (adminId: string) => {
    setData((prevData) => prevData.filter((item) => item.id !== adminId));
  };

  const resetHandler = () => {
    setData(originalData.current);
  };

  const filterHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountryValue(event.target.value);
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

      <header className="mt-8 flex gap-5 justify-center">
        <Button onClick={toggleColors}>Apply color</Button>
        <Button onClick={toggleSortByCountry}>
          {sortByCountry ? "Not Sort by Country" : "Sort by Country"}
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
      />
    </>
  );
}

export default AdminsPage;
