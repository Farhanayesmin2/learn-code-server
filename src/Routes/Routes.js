
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import LogIn from "../RegisterForm/LogIn/LogIn";
import Register from "../RegisterForm/Register/Register";
import Home from "../Pages/Home/Home"
import Profile from "../RegisterForm/Profile/Profile";
import Category from "../Pages/Category/Category"

import CourseDetails from "../Pages/CourseDetails/CourseDetails";


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
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: "/profile",
                element: <Profile></Profile>
            },
            {
                path: "/courses",
                element: <CourseDetails ></CourseDetails>,
              loader: ()  => fetch('https://learn-code-server-theta.vercel.app/courses-categories') 
            },
           
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({params}) => fetch(`https://learn-code-server-theta.vercel.app/category/${params.id}`)
            },
            {
                path: '/home'
            }
            // {
            //     path: '/courses/:id',
            //     element: ,
            //     loader: ({params}) => fetch(`https://learn-code-server-theta.vercel.app/courses/${params.id}`)
            // },
           
           
] 
},


])