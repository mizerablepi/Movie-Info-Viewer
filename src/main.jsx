import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./Root.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Root />
    </RouterProvider>
  </React.StrictMode>
);
