import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CommitsPage from "./pages/Commits/index.tsx";

import "./index.css";
import "./styles/reset-styles.css";
import "./styles/fonts.css";

const router = createBrowserRouter([
  {
    path: "/commits",
    element: <CommitsPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
