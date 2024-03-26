import { RiDeleteBin7Line, RiSettings5Line } from "@remixicon/react";
import {
  Badge,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Title,
} from "@tremor/react";

import { useAppSelector } from "../hooks/store";
import { useUserActions } from "../hooks/useUserActions";

export default function ListOfUsers() {
  const users = useAppSelector((state) => state.users);
  const { removeUser } = useUserActions();

  return (
    <Card>
      <Title>
        Users
        <Badge style={{ marginLeft: "8px" }}>{users.length}</Badge>
      </Title>
      <Table className="mt-8">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Id</TableHeaderCell>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Email</TableHeaderCell>
            <TableHeaderCell>Actions</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell style={{ display: "flex", alignItems: "center" }}>
                <img
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    marginRight: "10px",
                  }}
                  src={`https://unavatar.io/github/${item.github}`}
                  alt="Github"
                />
                {item.name}
              </TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>
                <button type="button">
                  <RiSettings5Line className="h-8 w-8" aria-hidden={true} />
                </button>
                <button onClick={() => removeUser(item.id)} type="button">
                  <RiDeleteBin7Line className="h-8 w-8" aria-hidden={true} />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
