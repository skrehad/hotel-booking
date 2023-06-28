import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "../Components/About/About";
import Contact from "../Components/Contact/Contact";
import Home from "../Components/Home/Home";
import NotFound from "../Components/NotFound/NotFound";
import Products from "../Components/Products/Products";
import Main from "../Layouts/Main";
import SignUp from "../Components/SignUp/SignUp";
import Login from "../Components/Login/Login";
import Blog from "../Components/Blog/Blog";

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
        // {
        //   path: "/products/:id",
        //   loader: async ({ params }) => {
        //     return fetch(
        //       `https://easy-shop-backend-server.vercel.app/products/${params.id}`
        //     );
        //   },
        //   element: (
        //     <PrivateRouter>
        //       <DetailsProduct></DetailsProduct>
        //     </PrivateRouter>
        //   ),
        // },
        // {
        //   path: "/myOrders",
        //   element: (
        //     <PrivateRouter>
        //       <MyOrder></MyOrder>
        //     </PrivateRouter>
        //   ),
        // },
        // {
        //   path: "/addReview",
        //   element: (
        //     <PrivateRouter>
        //       <OverAllReview></OverAllReview>
        //     </PrivateRouter>
        //   ),
        // },

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
      path: "*",
      element: <NotFound></NotFound>,
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
};

export default Routes;
