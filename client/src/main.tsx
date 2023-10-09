import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import CommitsPage from "./pages/Commits/index.tsx";

import "./index.css";
import "./styles/reset-styles.css";
import "./styles/fonts.css";

import { ROUTES } from "./config/routes";

const router = createBrowserRouter([
  {
    path: ROUTES.COMMITS,
    element: <CommitsPage />,
  },
  {
    path: "*",
    element: <Navigate to={ROUTES.COMMITS} replace />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
