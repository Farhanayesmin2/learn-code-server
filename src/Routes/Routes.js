
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import LogIn from "../RegisterForm/LogIn/LogIn";
import Home from "../Pages/Home/Home"


export const router =createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            }
           
] 
},


])