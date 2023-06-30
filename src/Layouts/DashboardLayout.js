import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";
import "./DashboardLayout.css";

const DashboardLayout = () => {
  //   const { user } = useContext(AuthContext);
  //   const [isAdmin] = useAdmin(user?.email);
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
          <ul className="menu bg-white p-4 w-80">
            <li className="my-2 abc">
              <Link
                to="/dashboard"
                className="({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'active' : '' "
              >
                My Booking
              </Link>
            </li>

            {/* {isAdmin && ( */}
            <>
              <li className="my-1">
                <NavLink
                  to="/dashboard/users "
                  // className="({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'active' : '' "
                >
                  All Users
                </NavLink>
              </li>
              <li className="my-1">
                <NavLink
                  to="/dashboard/addHotel"
                  // className="({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'active' : '' "
                >
                  Add A Hotel
                </NavLink>
              </li>
              <li className="my-1">
                <NavLink
                  to="/dashboard/manageHotels"
                  // className="({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'active' : '' "
                >
                  Manage Hotels
                </NavLink>
              </li>
            </>
            {/* )} */}
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default DashboardLayout;
