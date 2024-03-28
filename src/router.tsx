import { createBrowserRouter } from "react-router-dom";

import RootPage from "./pages/RootPage";
import Page404 from "./pages/Page404";
import ListOfUsers from "./components/ListOfUsers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <Page404 />,
    children: [
      {
        path: "/",
        element: <ListOfUsers />,
      },
      {
        path: "/react-query",
        element: <h1>ReactQuery Page</h1>,
      },
    ],
  },
]);
