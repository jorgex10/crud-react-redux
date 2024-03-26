import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type UserId = string;

export interface User {
  name: string;
  email: string;
  github: string;
}

export interface UserWithId extends User {
  id: UserId;
}

const initialState: UserWithId[] = [
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

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    deleteUserById: (state, action: PayloadAction<UserId>) => {
      const id = action.payload;
      return state.filter((user) => user.id !== id);
    },
  },
});

export const { deleteUserById } = usersSlice.actions;

export default usersSlice.reducer;
