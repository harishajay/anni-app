import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Body from "./body";
import Memories from "./memories"
import Yes from "./yes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Body />
      },// home page

      {
        path: "memories",
        element: <Memories />
      }, // memories page
      {
        path: "yes",
        element: <Yes />
      }, // yes page
    ],
  },
],
   { basename: "/anni-app" }
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
