import { RiDeleteBin7Line } from "@remixicon/react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@tremor/react";

import { type Admin } from "../../types";

const FILL_COLOR_CLASSES =
  "even:bg-tremor-background-muted even:dark:bg-dark-tremor-background-muted";

interface Props {
  data: Admin;
  showColors: boolean;
  onDelete: (adminId: string) => void;
}

function AdminsList({ data, showColors, onDelete }: Props) {
  return (
    <Table className="mt-8">
      <TableHead>
        <TableRow>
          <TableHeaderCell>Photo</TableHeaderCell>
          <TableHeaderCell>First Name</TableHeaderCell>
          <TableHeaderCell>Last Name</TableHeaderCell>
          <TableHeaderCell>Country</TableHeaderCell>
          <TableHeaderCell>Actions</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((item) => (
          <TableRow
            key={item.id}
            className={showColors ? FILL_COLOR_CLASSES : ""}
          >
            <TableCell style={{ display: "flex", alignItems: "center" }}>
              <img
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  marginRight: "10px",
                }}
                src={item.photo}
                alt="Picture"
              />
            </TableCell>
            <TableCell>{item.firstName}</TableCell>
            <TableCell>{item.lastName}</TableCell>
            <TableCell>{item.country}</TableCell>
            <TableCell>
              <button onClick={() => onDelete(item.id)} type="button">
                <RiDeleteBin7Line className="h-8 w-8" aria-hidden={true} />
              </button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default AdminsList;
