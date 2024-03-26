import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const DEFAULT_STATE = [
  {
    id: crypto.randomUUID(),
    name: "John Doe",
    email: "john@example.com",
    github: "jorgex10",
  },
  {
    id: crypto.randomUUID(),
    name: "Lisa Smith",
    email: "lisa@example.com",
    github: "jjercx",
  },
  {
    id: crypto.randomUUID(),
    name: "Peter One",
    email: "peter@example.com",
    github: "midudev",
  },
];

export type UserId = string;

export interface User {
  name: string;
  email: string;
  github: string;
}

export interface UserWithId extends User {
  id: UserId;
}

const initialState: UserWithId[] = (() => {
  const persistedState = localStorage.getItem("__redux_state__");

  return persistedState ? JSON.parse(persistedState).users : DEFAULT_STATE;
})();

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addNewUser: (state, action: PayloadAction<User>) => {
      const id = crypto.randomUUID();
      return [...state, { id, ...action.payload }];
    },

    deleteUserById: (state, action: PayloadAction<UserId>) => {
      const id = action.payload;
      return state.filter((user) => user.id !== id);
    },
  },
});

export const { addNewUser, deleteUserById } = usersSlice.actions;

export default usersSlice.reducer;
