import React, { useContext } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";
import useAdmin from "../hooks/useAdmin";
import { AuthContext } from "../Context/AuthProvider/AuthProvider";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  return (
    <div>
      <Header></Header>
      <div className="drawer lg:drawer-open">
        <input id="dashboardDrawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content p-4">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboardDrawer" className="drawer-overlay"></label>
          <ul className="menu bg-white px-6 py-14 lg:py-8">
            <li className="my-2 text-[#75313f]">
              <Link
                to="/dashboard"
                className="hover:text-[#ff0336] text-[18px]"
              >
                My Booking
              </Link>
            </li>

            {isAdmin && (
              <>
                <li className="my-1">
                  <NavLink
                    to="/dashboard/users "
                    className="hover:text-[#ff0336] text-black text-[18px]"
                  >
                    Manage Users
                  </NavLink>
                </li>
                <li className="my-1">
                  <NavLink
                    to="/dashboard/addHotel"
                    className="hover:text-[#ff0336] text-black text-[18px]"
                  >
                    Add A Hotel
                  </NavLink>
                </li>
                <li className="my-1">
                  <NavLink
                    to="/dashboard/manageHotels"
                    className="hover:text-[#ff0336] text-black text-[18px]"
                  >
                    Manage Hotels
                  </NavLink>
                </li>
                <li className="my-1">
                  <NavLink
                    to="/dashboard/addBlog"
                    className="hover:text-[#ff0336] text-black text-[18px]"
                  >
                    Add Blog
                  </NavLink>
                </li>
                <li className="my-1">
                  <NavLink
                    to="/dashboard/addGalleryPicture"
                    className="hover:text-[#ff0336] text-black text-[18px]"
                  >
                    Add Gallery Picture
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default DashboardLayout;
