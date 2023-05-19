import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Page/ErrorPage/ErrorPage";
import Home from "../Page/Home/Home/Home";
import Alltoys from "../Page/Alltoys/Alltoys";
import Blog from "../Page/Blogs/Blog";

const router = createBrowserRouter([
  {
    path: '/',
    element:<Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/alltoys',
        element:<Alltoys></Alltoys>
      },
      {
        path:'/blog',
        element:<Blog></Blog>
      }
    ]
  },
]);

export default router;