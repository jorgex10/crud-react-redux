import { createSlice } from "@reduxjs/toolkit";

export interface User {
  name: string;
  email: string;
  github: string;
}

export interface UserWithId extends User {
  id: string;
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
  reducers: {},
});

export default usersSlice.reducer;
