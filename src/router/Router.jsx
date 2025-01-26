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
import ManageUsers from "../components/main/dashboard/adminDesh/ManageUsers";
import ManageCategory from "../components/main/dashboard/adminDesh/manageCagetory/ManageCategory";
import ManageMedicines from "../components/main/dashboard/sellerDesh/manageMedicine/ManageMedicines";
import ManagePayment from "../components/main/dashboard/adminDesh/managePayment.jsx/ManagePayment";
import AdminHome from "../components/main/dashboard/adminDesh/adminHome/AdminHome";
import SellsReport from "../components/main/dashboard/adminDesh/sellsReport/SellsReport";
import ManageAds from "../components/main/dashboard/adminDesh/manageAds/ManageAds";
import SellerHome from "../components/main/dashboard/sellerDesh/sellerHome/SellerHome";
import PrivateRoute from "../provider/PrivateRouter";

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
        element: <PrivateRoute><MyProfile /></PrivateRoute>,
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
        element: <PrivateRoute><DashBoard /></PrivateRoute>,
        children: [
          {
            path: "cartDetails",
            element: <PrivateRoute><CartPage /></PrivateRoute>,
          },
          {
            path: "manageUsers",
            element: <PrivateRoute><ManageUsers /></PrivateRoute>,
          },
          {
            path: "manageCategory",
            element: <PrivateRoute><ManageCategory /></PrivateRoute>,
          },
          {
            path: "manageMedicines",
            element: <PrivateRoute><ManageMedicines /></PrivateRoute>,
          },
          {
            path: "checkout",
            element: <PrivateRoute><Checkout /></PrivateRoute>,
          },
          {
            path: "paymentHistory",
            element: <PrivateRoute><InvoicePage /></PrivateRoute>,
          },

          // admin
          {
            path: "paymentManagement",
            element: <PrivateRoute><ManagePayment /></PrivateRoute>,
          },
          {
            path: "adminHome",
            element: <PrivateRoute><AdminHome /></PrivateRoute>,
          },
          {
            path: "sellerHome",
            element: <PrivateRoute><SellerHome /></PrivateRoute>,
          },
          {
            path: "salesReport",
            element: <PrivateRoute><SellsReport /></PrivateRoute>,
          },
          {
            path: "manageBanner",
            element: <PrivateRoute><ManageAds /></PrivateRoute>,
          },
        ],
      },


      // {
      //   path: "invoice",
      //   element: <InvoicePage />,
      // },
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
