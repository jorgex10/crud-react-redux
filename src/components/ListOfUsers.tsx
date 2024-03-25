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

const users: {
  id: string;
  name: string;
  email: string;
  github: string;
}[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    github: "jorgex10",
  },
  {
    id: "2",
    name: "Lisa Smith",
    email: "lisa@example.com",
    github: "jjercx",
  },
  {
    id: "3",
    name: "Peter One",
    email: "peter@example.com",
    github: "midudev",
  },
];

export default function ListOfUsers() {
  return (
    <Card>
      <Title>
        Users
        <Badge style={{ marginLeft: "8px" }}>{users.length}</Badge>
      </Title>
      <Table className="mt-8">
        <TableHead>
          <TableRow className="border-b border-tremor-border dark:border-dark-tremor-border">
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Id
            </TableHeaderCell>
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Name
            </TableHeaderCell>
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Email
            </TableHeaderCell>
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Actions
            </TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                {item.id}
              </TableCell>
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
                <button type="button">
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
