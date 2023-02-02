import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Login from "./pages/Login";
import Page from "./layout/page";
import Complete from "./pages/Complete";

function App() {
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
      element: makePage(Home),
      errorElement: <Error />,
    },
    {
      path: "/Login",
      element: makePage(Login),
    },
    {
      path: "/Complete",
      element: makePage(Complete),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
