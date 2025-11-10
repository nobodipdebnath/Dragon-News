import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import { Home } from "../Page/Home";
import CategoryNews from "../Page/CategoryNews";
import LoginPage from "../Page/LoginPage";
import Register from "../Page/Register";
import AuthLayout from "../Layout/AuthLayout";
import NewsDetails from "../Page/NewsDetails";
import PrivetRoute from "./PrivetRoute";
import Loading from "../components/Loading/Loading";
import Error from "../components/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    loader: () => fetch('/news.json'),
    hydrateFallbackElement:<Loading></Loading>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "category/:id",
        Component: CategoryNews,
        loader: () => fetch("/news.json"),
        hydrateFallbackElement: <Loading></Loading>,
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/login",
        Component: LoginPage,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
    ],
  },
  {
    path: "/news-details/:id",
    element: (
      <PrivetRoute>
        <NewsDetails></NewsDetails>
      </PrivetRoute>
    ),
    loader: () => fetch("/news.json"),
    hydrateFallbackElement: <Loading></Loading>,
  },
  {
    path: "*",
    Component: Error
  },
]);

export default router;
