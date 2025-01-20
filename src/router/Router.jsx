import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error from "../error/Error";
import Main from "../components/main/Main";
import Login from "../components/main/authForm/Login";
import Register from "../components/main/authForm/Register";
import AllCategories from "../components/main/allCategories/allCategories";
import CategoryData from "../components/main/categoryData/CategoryData";

export const Router = createBrowserRouter([
    {
        path:"/",
        element:<App />,
        errorElement: <Error/>,
        children:[
            {
                path:"/",
                element:<Main/>
            },
            {
                path:"login",
                element:<Login/>
            },
            {
                path:"Register",
                element:<Register/>
            },
            {
                path:"categories",
                element:<AllCategories/>
            },
            {
                path:"/categories/:category",
                element:<CategoryData/>
            },
        ]
    },
    {
        path:"*",
        element: <Error />
    }
])
