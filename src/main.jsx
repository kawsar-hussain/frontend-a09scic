import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./myStyle.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./Root";
import Home from "./Components/Home/Home";
import AuthenticationLayout from "./Components/Authentication/AuthenticationLayout";
import Login from "./Components/Authentication/Login/Login";
import Register from "./Components/Authentication/Register/Register";
import AuthProvider from "./Provider/AuthProvider";
import PrivateRoute from "./Provider/PrivateRoute";
import Loader from "./Loader";
import RedirectIfAuthenticated from "./Components/Authentication/RedirectIfAuthenticated";
import Error404 from "./Error/Error404";
import Collections from "./Components/Collections/Collections";
import AddWatch from "./Components/AddWatch/AddWatch";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "collections",
        element: <Collections></Collections>,
      },
      {
        path: "add-watch",
        element: <AddWatch></AddWatch>,
      },

      {
        path: "auth",
        Component: AuthenticationLayout,
        children: [
          {
            path: "login",
            element: (
              <RedirectIfAuthenticated>
                <Login></Login>
              </RedirectIfAuthenticated>
            ),
          },
          {
            path: "register",
            element: (
              <RedirectIfAuthenticated>
                <Register></Register>
              </RedirectIfAuthenticated>
            ),
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <Error404></Error404>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
);
