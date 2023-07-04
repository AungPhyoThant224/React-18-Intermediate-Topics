import { createBrowserRouter } from "react-router-dom";
import ContactPage from "./ContactPage";
import HomePage from "./HomePage";
import Layout from "./Layout";
import UserDetail from "./UserDetail";
import UserPage from "./UserPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
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
