import {
  User,
  UserId,
  UserWithId,
  addNewUser,
  editExistingUser,
  deleteUserById,
} from "../store/users/slice";
import { useAppDispatch } from "./store";

export const useUserActions = () => {
  const dispatch = useAppDispatch();

  const addUser = ({ name, email, github }: User) => {
    dispatch(addNewUser({ name, email, github }));
  };

  const editUser = ({ id, name, email, github }: UserWithId) => {
    dispatch(editExistingUser({ id, name, email, github }));
  };

  const removeUser = (id: UserId) => {
    dispatch(deleteUserById(id));
  };

  return { addUser, editUser, removeUser };
};
