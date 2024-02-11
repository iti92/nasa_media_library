import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import Layout from "./components/Layout/Layout";
import { CssBaseline } from "@mui/material";
import "./App.scss";

function App() {
  return (
    <Layout>
      <CssBaseline />
      <RouterProvider router={router} />
    </Layout>
  );
}

export default App;
