import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error from "../error/Error";
import Main from "../components/main/Main";
import Login from "../components/main/authForm/Login";
import Register from "../components/main/authForm/Register";
import AllCategories from "../components/main/allCategories/allCategories";
import CategoryData from "../components/main/categoryData/CategoryData";
import MyProfile from "../components/main/myProfile/MyProfile";
import Shop from "../components/main/shop/Shop";
import CartPage from "../components/main/cart/CartPage";
import Checkout from "../components/main/checkoutPage/Checkout";
import InvoicePage from "../components/main/invoicePage/InvoicePage";
import DashBoard from "../components/main/dashboard/DashBoard";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "Register",
        element: <Register />,
      },
      {
        path: "myProfile",
        element: <MyProfile />,
      },
      {
        path: "categories",
        element: <AllCategories />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "dashboard",
        element: <DashBoard />,
        children: [
          {
            path: "cartDetails",
            element: <CartPage />,
          },
        ],
      },

      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "invoice",
        element: <InvoicePage />,
      },
      {
        path: "/categories/:category",
        element: <CategoryData />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);
