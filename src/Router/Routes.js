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
          element: (
            <PrivateRouter>
              <About></About>
            </PrivateRouter>
          ),
        },
        {
          path: "/hotels",
          element: (
            <PrivateRouter>
              <Hotels></Hotels>
            </PrivateRouter>
          ),
        },
        {
          path: "/hotels/:id",
          loader: async ({ params }) => {
            return fetch(`http://localhost:5000/hotels/${params.id}`);
          },
          element: (
            <PrivateRouter>
              <HotelDetail></HotelDetail>
            </PrivateRouter>
          ),
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
