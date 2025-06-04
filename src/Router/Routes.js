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
import PrivateRouter from "./PrivateRoute";
import AddBlog from "../Components/Dashboard/AddBlog/AddBlog";
import HotelDetail from "../Components/HotelDetail/HotelDetail";
import AdminRoute from "./AdminRoute";
import AddGalleryPicture from "../Components/Dashboard/AddGalleryPicture/AddGalleryPicture";
import Review from "../Components/Review/Review";
import Payments from "../Components/Dashboard/Payments/Payments";
import Dashboard from "../Components/Dashboard/Dashboard/Dashboard";

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
          path: "/hotels/:id",
          loader: async ({ params }) => {
            return fetch(
              `https://hotel-booking-backend-server-skrehad.vercel.app/hotels/${params.id}`
            );
          },
          element: <HotelDetail></HotelDetail>,
        },
        {
          path: "/review",
          element: (
            <PrivateRouter>
              <Review></Review>
            </PrivateRouter>
          ),
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
      element: (
        <PrivateRouter>
          <DashboardLayout></DashboardLayout>
        </PrivateRouter>
      ),
      children: [
        {
          path: "/dashboard",
          element: <Dashboard></Dashboard>,
        },
        {
          path: "/dashboard/myBooking",
          element: <MyBooking></MyBooking>,
        },
        {
          path: "/dashboard/users",
          element: (
            <AdminRoute>
              <AllUsers></AllUsers>
            </AdminRoute>
          ),
        },
        {
          path: "/dashboard/addHotel",
          element: (
            <AdminRoute>
              <AddHotel></AddHotel>
            </AdminRoute>
          ),
        },
        {
          path: "/dashboard/manageHotels",
          element: (
            <AdminRoute>
              <ManageHotel></ManageHotel>
            </AdminRoute>
          ),
        },
        {
          path: "/dashboard/addBlog",
          element: (
            <AdminRoute>
              <AddBlog></AddBlog>
            </AdminRoute>
          ),
        },
        {
          path: "/dashboard/addGalleryPicture",
          element: (
            <AdminRoute>
              <AddGalleryPicture></AddGalleryPicture>
            </AdminRoute>
          ),
        },
        {
          path: "/dashboard/payment/:id",
          loader: ({ params }) =>
            fetch(
              `https://hotel-booking-backend-server-skrehad.vercel.app/booking/${params.id}`
            ),
          element: <Payments></Payments>,
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
