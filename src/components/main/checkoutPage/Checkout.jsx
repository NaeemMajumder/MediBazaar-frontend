import React from "react";
import { useNavigate } from "react-router-dom";
import { FaCreditCard, FaUser, FaShoppingCart } from "react-icons/fa";

const Checkout = () => {
  const navigate = useNavigate();

  const handlePayment = () => {
    navigate("/invoice");
  };

  return (
    <div className="container mx-auto p-6 max-w-[1350px] min-h-screen">
      <h2 className="text-3xl font-bold text-[#164193] mb-6 flex items-center gap-2">
        <FaShoppingCart className="text-[#00B092]" /> Checkout
      </h2>

      <div className="bg-white shadow-lg rounded-lg p-8">
        <div className="mb-6">
          <label className="block text-[#164193] font-semibold mb-2 flex items-center gap-2">
            <FaUser /> Full Name
          </label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00B092]"
            placeholder="Enter your full name"
          />
        </div>

        <div className="mb-6">
          <label className="block text-[#164193] font-semibold mb-2 flex items-center gap-2">
            <FaCreditCard /> Card Details
          </label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00B092]"
            placeholder="Enter your card details"
          />
        </div>

        <div className="mb-6">
          <label className="block text-[#164193] font-semibold mb-2">Total Amount</label>
          <p className="text-xl font-bold text-[#1ca288]">$150.00</p>
        </div>

        <button
          onClick={handlePayment}
          className="w-full bg-[#00B092] text-white py-3 rounded-md shadow-md text-lg font-semibold hover:bg-[#1ca288] transition duration-300"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default Checkout;
