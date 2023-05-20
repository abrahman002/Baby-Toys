import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Page/ErrorPage/ErrorPage";
import Home from "../Page/Home/Home/Home";
import Alltoys from "../Page/Alltoys/Alltoys";
import Blog from "../Page/Blogs/Blog";
import Login from "../Page/Login/Login";
import Register from "../Page/Register/Register";
import PrivetRouter from "../PrivetRouter/PrivetRouter";
import AddAToy from "../Page/Add A Toy/AddAToy";
import MyToys from "../Page/Mytoys/MyToys";

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
      },
      {
        path:'/addatoy',
        element:<PrivetRouter><AddAToy></AddAToy></PrivetRouter>
      },
      {
        path:'/mytoys',
        element:<PrivetRouter><MyToys></MyToys></PrivetRouter>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      }
    ]
  },
]);

export default router;