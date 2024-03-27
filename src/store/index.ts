import {
  configureStore,
  Tuple,
  PayloadAction,
  type Middleware,
} from "@reduxjs/toolkit";

import usersReducer, { rollbackUser } from "./users/slice";
import uiReducer from "./ui/slice";

import { toast } from "sonner";

const persistanceLocalStorage: Middleware = (store) => (next) => (action) => {
  next(action);
  localStorage.setItem("__redux_state__", JSON.stringify(store.getState()));
};

const syncWithDatabase: Middleware = (store) => (next) => (action) => {
  const previousState = store.getState();
  next(action);

  const { type, payload } = action as PayloadAction;

  if (type === "users/deleteUserById") {
    const userToRemove = previousState.users.find(
      (user: { id: void }) => user.id === payload
    );

    fetch(`https://jsonplaceholder.typicode.com/users/${payload}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          return toast.success("User deleted successfully!");
        }

        throw new Error("Error deleting user!");
      })
      .catch(() => {
        if (userToRemove) store.dispatch(rollbackUser(userToRemove));

        toast.error("Something went wrong!");
      });
  }
};

export const store = configureStore({
  reducer: {
    users: usersReducer,
    ui: uiReducer,
  },
  middleware: () => new Tuple(persistanceLocalStorage, syncWithDatabase),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
