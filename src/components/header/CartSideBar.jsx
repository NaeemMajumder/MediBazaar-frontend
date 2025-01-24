import { BiCut } from "react-icons/bi";
import { Link } from "react-router-dom";

const CartSiteBar = ({ isSidebarOpen, toggleSidebar, cartData }) => {
  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed inset-0 z-40 flex justify-end transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black bg-opacity-50"
          onClick={toggleSidebar}
        ></div>

        {/* Sidebar */}
        <div className="relative w-80 sm:w-96 bg-white h-full shadow-lg dark:bg-gray-800 transition-transform transform">
          {/* Close Button */}
          <button
            className="absolute mt-1 top-4 right-4 p-2 text-gray-600 hover:text-red-600 dark:text-gray-300 dark:hover:text-red-400"
            onClick={toggleSidebar}
            aria-label="Close Sidebar"
          >
            <BiCut className="w-5 h-5" />
          </button>

          {/* Sidebar Content */}
          <div className="p-6 h-full flex flex-col">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">
              Your Cart
            </h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
              You have {cartData?.length} items in your cart.
            </p>

            {/* Cart Items with Scroll */}
            <div className="mt-4 space-y-4 overflow-y-auto max-h-[70vh] pr-2">
              {cartData?.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 border rounded-lg shadow-sm bg-gray-50 dark:bg-gray-700 dark:border-gray-600"
                >
                  <img
                    src={item.productImg}
                    alt={item.productName}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="text-sm font-semibold text-gray-800 dark:text-white">
                      {item.productName}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Price: {item.productPrice}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="mt-6">
              <Link to="/dashboard/cartDetails">
                <button
                  className="w-full py-2 text-white bg-blue-700 rounded hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  View Cart
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartSiteBar;
