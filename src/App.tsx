import React, { useState } from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
import SearchPage from "./pages/search/SearchPage";
import ShowPage from "./pages/show/ShowPage";
import "./App.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SearchPage />,
  },
  {
    path: "/show:id",
    element: <ShowPage />,
  },
]);

function App() {
  const [count, setCount] = useState(0);

  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  );
}

export default App;
