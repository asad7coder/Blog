import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import Component from "./components/BlogPages/React/Component.jsx";
import DGarid from "./components/BlogPages/Css/DGarid.jsx";
import Transform from "./components/BlogPages/Css/Transform.jsx";
import Animation from "./components/BlogPages/Css/Animation.jsx";
import ContextProvider from "./ContextApi/StoreData/StoreData.jsx";
import JavaScript from "./components/BlogPages/JavaScript/JavaScript.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "components",
        element: <Component />,
      },
      {
        path: "dgarid",
        element: <DGarid />,
      },
      {
        path: "transform",
        element: <Transform />,
      },
      {
        path: "animation",
        element: <Animation />,
      },
      {
        path: "jsRagular",
        element:<JavaScript/>
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextProvider>
    <RouterProvider router={router} />
    </ContextProvider>
  </StrictMode>
);
