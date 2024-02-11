import { createBrowserRouter } from "react-router-dom";
import SearchPage from "../pages/search/SearchPage";
import { ShowPage } from "../pages/show/ShowPage";
import ErrorPage from "../pages/error/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SearchPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/show/:index/:nasaId",
    element: <ShowPage />,
  },
  {
    path: "/404",
    element: <ErrorPage />,
  },
]);

export { router };
