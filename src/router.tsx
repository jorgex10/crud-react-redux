import { createBrowserRouter } from "react-router-dom";

import RootPage from "./pages/RootPage";
import Page404 from "./pages/Page404";
import UsersPage from "./pages/UsersPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <Page404 />,
    children: [
      {
        path: "/",
        element: <UsersPage />,
      },
      {
        path: "/react-query",
        element: <h1>ReactQuery Page</h1>,
      },
    ],
  },
]);
