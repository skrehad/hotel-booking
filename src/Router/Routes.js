import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "../Components/About/About";
import Contact from "../Components/Contact/Contact";
import Home from "../Components/Home/Home";
import NotFound from "../Components/NotFound/NotFound";
import Main from "../Layouts/Main";
import SignUp from "../Components/SignUp/SignUp";
import Login from "../Components/Login/Login";
import Blog from "../Components/Blog/Blog";
import Hotels from "../Components/Hotels/Hotels";
import ManageHotel from "../Components/Dashboard/ManageHotel/ManageHotel";
import AddHotel from "../Components/Dashboard/AddHotel/AddHotel";
import AllUsers from "../Components/Dashboard/AllUsers/AllUsers";
import MyBooking from "../Components/Dashboard/MyBooking/MyBooking";
import DashboardLayout from "../Layouts/DashboardLayout";

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/about",
          element: <About></About>,
        },
        {
          path: "/hotels",
          element: <Hotels></Hotels>,
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
        {
          path: "/contact",
          element: <Contact></Contact>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/signUp",
          element: <SignUp></SignUp>,
        },
      ],
    },
    {
      path: "/dashboard",
      element: <DashboardLayout></DashboardLayout>,
      children: [
        {
          path: "/dashboard",
          element: <MyBooking></MyBooking>,
        },
        // {
        //   path: "/dashboard",
        //   element: <MyBooking></MyBooking>,
        // },
        {
          path: "/dashboard/users",
          element: <AllUsers></AllUsers>,
        },
        {
          path: "/dashboard/addHotel",
          element: <AddHotel></AddHotel>,
        },
        {
          path: "/dashboard/manageHotels",
          element: <ManageHotel></ManageHotel>,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound></NotFound>,
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
};

export default Routes;
