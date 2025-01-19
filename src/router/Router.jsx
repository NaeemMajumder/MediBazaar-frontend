import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error from "../error/Error";
import Main from "../components/main/Main";
import Login from "../components/main/authForm/Login";
import Register from "../components/main/authForm/Register";

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
        ]
    },
    {
        path:"*",
        element: <Error />
    }
])
