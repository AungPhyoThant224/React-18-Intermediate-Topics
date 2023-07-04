import { createBrowserRouter } from "react-router-dom";
import ContactPage from "./ContactPage";
import HomePage from "./HomePage";
import Layout from "./Layout";
import UserDetail from "./UserDetail";
import UserPage from "./UserPage";
import ErrorPage from "./ErrorPage";
import LoginPage from "./LoginPage";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/login", element: <LoginPage /> },
    ],
  },
  {
    element: <PrivateRoute />,
    children: [
      {
        path: "/users",
        element: <UserPage />,
        children: [{ path: "/users/:id", element: <UserDetail /> }],
      },
    ],
  },
]);

export default router;
