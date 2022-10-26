
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ToastAdd from "../ToastAdd/ToastAdd";


export const router =createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <ToastAdd></ToastAdd>
             }
           
] 
},


])