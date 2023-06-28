import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "../Components/About/About";
import Blogs from "../Components/Blogs/Blogs";
import Contact from "../Components/Contact/Contact";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import NotFound from "../Components/NotFound/NotFound";
import Register from "../Components/Register/Register";
import MyOrder from "../Components/MyOrder/MyOrder";
import Products from "../Components/Products/Products";
import DetailsProduct from "../Components/DetailsProduct/DetailsProduct";
import PrivateRouter from "./PrivateRouter";
import OverAllReview from "../Components/OverAllReview/OverAllReview";
import Main from "../Layouts/Main";

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
          path: "/products",
          element: <Products></Products>,
        },
        {
          path: "/products/:id",
          loader: async ({ params }) => {
            return fetch(
              `https://easy-shop-backend-server.vercel.app/products/${params.id}`
            );
          },
          element: (
            <PrivateRouter>
              <DetailsProduct></DetailsProduct>
            </PrivateRouter>
          ),
        },
        {
          path: "/myOrders",
          element: (
            <PrivateRouter>
              <MyOrder></MyOrder>
            </PrivateRouter>
          ),
        },
        {
          path: "/addReview",
          element: (
            <PrivateRouter>
              <OverAllReview></OverAllReview>
            </PrivateRouter>
          ),
        },

        {
          path: "/blog",
          element: <Blogs></Blogs>,
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
          path: "/register",
          element: <Register></Register>,
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
