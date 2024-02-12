import { createHashRouter } from "react-router-dom";
import SearchPage from "../pages/search/SearchPage";
import { ShowPage } from "../pages/show/ShowPage";
import ErrorPage from "../pages/error/ErrorPage";

const router = createHashRouter([
  {
    path: "/",
    element: <SearchPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "#/show/:index/:nasaId",
    element: <ShowPage />,
  },
  {
    path: "#/404",
    element: <ErrorPage />,
  },
]);

export { router };
