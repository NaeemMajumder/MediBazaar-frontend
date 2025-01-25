import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaCreditCard, FaMoneyBillWave, FaUsersCog } from "react-icons/fa";
import { GrDocumentUpdate } from "react-icons/gr";
import { MdOutlineCategory, MdOutlinePayment } from "react-icons/md";
import { FcSalesPerformance } from "react-icons/fc";
import { FaMoneyBillTrendUp } from "react-icons/fa6";

const Dashboard = () => {
  let isRole = "admin";

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar */}
      <aside className="bg-[#2facb7] lg:w-1/4 md:h-screen h-auto flex md:flex-col flex-row items-center justify-between md:justify-start md:gap-8 gap-0 md:p-8 p-4 fixed bottom-0 left-0 w-full md:relative shadow-xl border-t-4  border-[#1ca288] z-50 overflow-x-auto">
        <NavLink
          to="/dashboard/cartDetails"
          className="flex flex-col items-center justify-center md:justify-start md:flex-row md:items-start md:gap-4 gap-2 text-white transition-all duration-300 hover:text-[#1b7a67] md:w-full p-3 rounded-lg md:hover:bg-[#9cc8bf]"
        >
          <FaShoppingCart size={28} className="text-white" />
          <span className="hidden md:inline text-lg font-semibold">
            Cart Items
          </span>
        </NavLink>

        <NavLink
          to="/dashboard/payment-history"
          className="flex flex-col items-center justify-center md:justify-start md:flex-row md:items-start md:gap-4 gap-2 text-white transition-all duration-300 hover:text-[#1b7a67] md:w-full p-3 rounded-lg md:hover:bg-[#9cc8bf]"
        >
          <FaCreditCard size={28} className="text-white" />
          <span className="hidden md:inline text-lg font-semibold">
            Payment History
          </span>
        </NavLink>

        <NavLink
          to="/dashboard/pay-now"
          className="flex flex-col items-center justify-center md:justify-start md:flex-row md:items-start md:gap-4 gap-2 text-white transition-all duration-300 hover:text-[#1b7a67] md:w-full p-3 rounded-lg md:hover:bg-[#9cc8bf]"
        >
          <FaMoneyBillWave size={28} className="text-white" />
          <span className="hidden md:inline text-lg font-semibold">
            Pay Now
          </span>
        </NavLink>

        {/* for admin */}

        {isRole === "admin" && (
          <>
            <NavLink
              to="/dashboard/adminHome"
              className="flex flex-col items-center justify-center md:justify-start md:flex-row md:items-start md:gap-4 gap-2 text-white transition-all duration-300 hover:text-[#1b7a67] md:w-full p-3 rounded-lg md:hover:bg-[#9cc8bf]"
            >
              <GrDocumentUpdate size={28} className="text-white" />
              <span className="hidden md:inline text-lg font-semibold">
              Admin Home
              </span>
            </NavLink>
            <NavLink
              to="/dashboard/manageUsers"
              className="flex flex-col items-center justify-center md:justify-start md:flex-row md:items-start md:gap-4 gap-2 text-white transition-all duration-300 hover:text-[#1b7a67] md:w-full p-3 rounded-lg md:hover:bg-[#9cc8bf]"
            >
              <FaUsersCog size={28} className="text-white" />
              <span className="hidden md:inline text-lg font-semibold">
              Manage Users
              </span>
            </NavLink>
            <NavLink
              to="/dashboard/manageCategory"
              className="flex flex-col items-center justify-center md:justify-start md:flex-row md:items-start md:gap-4 gap-2 text-white transition-all duration-300 hover:text-[#1b7a67] md:w-full p-3 rounded-lg md:hover:bg-[#9cc8bf]"
            >
              <MdOutlineCategory size={28} className="text-white" />
              <span className="hidden md:inline text-lg font-semibold">
              Manage Category
              </span>
            </NavLink>
            <NavLink
              to="/dashboard/paymentManagement"
              className="flex flex-col items-center justify-center md:justify-start md:flex-row md:items-start md:gap-4 gap-2 text-white transition-all duration-300 hover:text-[#1b7a67] md:w-full p-3 rounded-lg md:hover:bg-[#9cc8bf]"
            >
              <MdOutlinePayment size={28} className="text-white" />
              <span className="hidden md:inline text-lg font-semibold">
              Payment management
              </span>
            </NavLink>
            <NavLink
              to="/dashboard/salesReport"
              className="flex flex-col items-center justify-center md:justify-start md:flex-row md:items-start md:gap-4 gap-2 text-white transition-all duration-300 hover:text-[#1b7a67] md:w-full p-3 rounded-lg md:hover:bg-[#9cc8bf]"
            >
              <FaMoneyBillTrendUp size={28} className="text-white" />
              <span className="hidden md:inline text-lg font-semibold">
              Sales Report
              </span>
            </NavLink>
            <NavLink
              to="/dashboard/manageBanner"
              className="flex flex-col items-center justify-center md:justify-start md:flex-row md:items-start md:gap-4 gap-2 text-white transition-all duration-300 hover:text-[#1b7a67] md:w-full p-3 rounded-lg md:hover:bg-[#9cc8bf]"
            >
              <FaMoneyBillWave size={28} className="text-white" />
              <span className="hidden md:inline text-lg font-semibold">
              Manage banner Advertise
              </span>
            </NavLink>
          </>
        )}
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-[#AAF0F0] p-8 min-h-screen">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
