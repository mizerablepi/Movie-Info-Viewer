import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./Pages/Error.jsx";
import Index from "./Pages/Index.jsx";
import ShowDetail from "./Pages/ShowDetail.jsx";
import ShowList from "./Pages/ShowList.jsx";
import Root from "./Root.jsx";
import Login from "./Pages/Login.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "/shows",
        element: <ShowList />,
      },
      {
        path: "/shows/:id",
        element: <ShowDetail />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
