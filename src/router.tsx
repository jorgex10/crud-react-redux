import { createBrowserRouter } from "react-router-dom";

import RootPage from "./pages/RootPage";
import Page404 from "./pages/Page404";
import UsersPage from "./pages/UsersPage";
import AdminsPage from "./pages/AdminsPage";

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
        element: <AdminsPage />,
      },
    ],
  },
]);
