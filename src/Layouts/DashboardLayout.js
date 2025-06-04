import { useContext, useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";
import useAdmin from "../hooks/useAdmin";
import { AuthContext } from "../Context/AuthProvider/AuthProvider";
import {
  Menu,
  Users,
  PlusCircle,
  Settings,
  BookOpen,
  Image,
  FileText,
} from "lucide-react";

const DashboardLayout = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  const baseLinkClass =
    "flex items-center gap-3 px-4 py-3 rounded-md text-gray-700 text-base font-medium transition-colors hover:bg-[#ff0336]/20 hover:text-[#ff0336]";
  const activeLinkClass =
    "bg-[#ff0336]/20 text-[#ff0336] font-semibold shadow-md";

  // Sidebar Links data
  const links = [
    {
      to: "/dashboard/myBooking",
      label: "My Booking",
      icon: <BookOpen size={18} />,
    },
  ];

  if (isAdmin) {
    links.push(
      {
        to: "/dashboard/users",
        label: "Manage Users",
        icon: <Users size={18} />,
      },
      {
        to: "/dashboard/addHotel",
        label: "Add A Hotel",
        icon: <PlusCircle size={18} />,
      },
      {
        to: "/dashboard/manageHotels",
        label: "Manage Hotels",
        icon: <Settings size={18} />,
      },
      {
        to: "/dashboard/addBlog",
        label: "Add Blog",
        icon: <FileText size={18} />,
      },
      {
        to: "/dashboard/addGalleryPicture",
        label: "Add Gallery Picture",
        icon: <Image size={18} />,
      }
    );
  }

  const handleLogout = () => {
    logOut()
      .then(() => {
        navigate("/login"); // redirect after logout
      })
      .catch((error) => {
        console.error("Logout failed:", error);
      });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <div className="flex flex-grow relative">
        {/* Sidebar for desktop */}
        <aside className="w-64 bg-white border-r shadow-md hidden lg:flex flex-col">
          <div className="p-6 border-b flex items-center justify-between">
            <h2 className="text-2xl font-extrabold text-[#75313f] tracking-wide">
              Dashboard
            </h2>
          </div>
          <nav className="flex-grow overflow-y-auto px-2 py-4 space-y-1">
            {links.map(({ to, label, icon }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `${baseLinkClass} ${isActive ? activeLinkClass : ""}`
                }
              >
                {icon}
                {label}
              </NavLink>
            ))}
            {/* Logout button */}
            <button
              onClick={() => {
                handleLogout();
                toggleDrawer();
              }}
              className="flex items-center gap-3 px-4 py-3 mt-6 w-full text-left rounded-md text-red-600 font-semibold hover:bg-red-100 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 012 2v1"
                />
              </svg>
              Logout
            </button>
          </nav>
        </aside>

        {/* Mobile sidebar toggle button */}
        <button
          onClick={toggleDrawer}
          className="lg:hidden fixed top-4 left-4 z-30 p-2 rounded-md bg-white shadow-md hover:bg-[#ff0336]/20 transition-colors"
          aria-label="Toggle Menu"
        >
          <Menu className="w-6 h-6 text-[#75313f]" />
        </button>

        {/* Mobile Sidebar Drawer */}
        {isDrawerOpen && (
          <>
            <div
              className="fixed inset-0 z-20 bg-black bg-opacity-50 backdrop-blur-sm"
              onClick={toggleDrawer}
              aria-hidden="true"
            />
            <aside
              className="fixed top-0 left-0 z-30 w-64 h-full bg-white shadow-lg p-6 overflow-y-auto"
              role="dialog"
              aria-modal="true"
            >
              <h2 className="text-2xl font-extrabold text-[#75313f] mb-6 tracking-wide">
                Dashboard
              </h2>
              <nav className="flex flex-col space-y-1">
                {links.map(({ to, label, icon }) => (
                  <NavLink
                    key={to}
                    to={to}
                    onClick={toggleDrawer}
                    className={({ isActive }) =>
                      `${baseLinkClass} ${isActive ? activeLinkClass : ""}`
                    }
                  >
                    {icon}
                    {label}
                  </NavLink>
                ))}

                {/* Logout button */}
                <button
                  onClick={() => {
                    handleLogout();
                    toggleDrawer();
                  }}
                  className="flex items-center gap-3 px-4 py-3 mt-6 w-full text-left rounded-md text-red-600 font-semibold hover:bg-red-100 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 012 2v1"
                    />
                  </svg>
                  Logout
                </button>
              </nav>
            </aside>
          </>
        )}

        {/* Main Content */}
        <main className="flex-1 p-6 md:p-10 overflow-auto">
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default DashboardLayout;
