
import { createBrowserRouter, Outlet } from "react-router-dom";
import Main from "../Layout/Main";
import Carousels from "../Shared/Carousels/Carousels";

export const router =createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                
             }
           
] 
},


])