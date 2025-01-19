import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error from "../error/Error";
import Main from "../components/main/Main";

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
        ]
    },
    {
        path:"*",
        element: <Error />
    }
])
