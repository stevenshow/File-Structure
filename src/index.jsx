import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Error from "./pages/Error";
import Login from "./pages/Login";
import Page from "./layout/page";
import Header from "./components/ui/Header";

const makePage = (Component) => {
  return (
    <Page>
      <Component />
    </Page>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: makePage(App),
    errorElement: <Error />,
  },
  {
    path: "/Login",
    element: makePage(Login),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
