import { createBrowserRouter } from "react-router-dom";
import ContactPage from "./ContactPage";
import HomePage from "./HomePage";
import Layout from "./Layout";
import UserDetail from "./UserDetail";
import UserPage from "./UserPage";
import ErrorPage from "./ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <HomePage /> },
      {
        path: "/users",
        element: <UserPage />,
        children: [{ path: "/users/:id", element: <UserDetail /> }],
      },
      { path: "/contact", element: <ContactPage /> },
    ],
  },
]);

export default router;
