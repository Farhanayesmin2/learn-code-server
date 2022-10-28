
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import LogIn from "../RegisterForm/LogIn/LogIn";
import Register from "../RegisterForm/Register/Register";
import Home from "../Pages/Home/Home"
import Profile from "../RegisterForm/Profile/Profile";
import Category from "../Pages/Category/Category"
import CheckOut from "../Pages/CheckOut/CheckOut"
import CourseDetails from "../Pages/CourseDetails/CourseDetails";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Blog from "../Pages/Blog/Blog";


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
                path: '/blog',
                element: <Blog></Blog>
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
                path: '/courses/:id',
                element: <PrivateRoute>
          <CheckOut></CheckOut> 
                </PrivateRoute> ,
                loader: ({params}) => fetch(`https://learn-code-server-theta.vercel.app/courses/${params.id}`)
            },
           
            // https://learn-code-server-theta.vercel.app/checkout/f69a695f037cd9484cecaea37ca71012
] 
},
{
    path: '*',
    element: <PageNotFound></PageNotFound>
}

])

// https://learn-code-b31de.web.app