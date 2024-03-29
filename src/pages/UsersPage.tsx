import { RiDeleteBin7Line, RiSettings5Line } from "@remixicon/react";
import {
  Badge,
  Button,
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
import CreateUser from "../components/users/CreateUser";
import { useUiActions } from "../hooks/useUiActions";
import { UserId } from "../store/users/slice";
import { useState } from "react";
import EditUser from "../components/users/EditUser";

export default function UsersPage() {
  const users = useAppSelector((state) => state.users);
  const showAddUser = useAppSelector((state) => state.ui.showAddUser);
  const { removeUser } = useUserActions();
  const { showAddUserBlock } = useUiActions();
  const [updateUserId, setUpdateUserId] = useState<string | null>(null);

  const handleAddUser = () => {
    setUpdateUserId(null);
    showAddUserBlock();
  };

  const handleEditUser = (userId: UserId) => {
    showAddUserBlock();
    setUpdateUserId(userId);
  };

  return (
    <>
      <div className="sm:flex sm:items-center sm:justify-between sm:space-x-10">
        <div>
          <Title className="text-2xl font-semibold flex">
            Users
            <Badge style={{ marginLeft: "8px" }}>{users.length}</Badge>
          </Title>
          <p className="mt-1 text-tremor-default leading-6 text-tremor-content dark:text-dark-tremor-content">
            Overview of all users within your organization using Redux Toolkit
            and Custom Hooks.
          </p>
        </div>
        <Button onClick={handleAddUser} type="button">
          Add User
        </Button>
      </div>

      {showAddUser && !updateUserId && <CreateUser />}
      {showAddUser && updateUserId && <EditUser userId={updateUserId} />}

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
                <button onClick={() => handleEditUser(item.id!)} type="button">
                  <RiSettings5Line className="h-8 w-8" aria-hidden={true} />
                </button>
                <button onClick={() => removeUser(item.id!)} type="button">
                  <RiDeleteBin7Line className="h-8 w-8" aria-hidden={true} />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
