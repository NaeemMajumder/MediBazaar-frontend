import React, { useEffect, useState } from "react";
import UseAxiosSecure from "../../../../../customHooks/UseAxiosSecure";
import UseCart from "../../../../../customHooks/UseCart";
import { useNavigate } from "react-router-dom";

const ManagePayment = () => {
  const [payments, setPayments] = useState([]);
  const axiosSecure = UseAxiosSecure();
  const [refetch, cartData] = UseCart();
  const navigate = useNavigate();

  useEffect(() => {
    axiosSecure
      .get("/payments")
      .then((res) => {
        if (Array.isArray(res.data)) {
          setPayments(res.data);
        } else {
          console.error("Received unexpected data format:", res.data);
        }
      })
      .catch((error) => console.error("Error fetching payments:", error));
  }, [axiosSecure]);

  const handleAcceptPayment = (id) => {
    axiosSecure.patch(`/payments/${id}`, { status: "paid" }).then((res) => {
      navigate('/dashboard/paymentManagement');
      alert("payment status changed")
    });
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-2xl border border-gray-200 text-gray-800">
      <h1 className="text-3xl font-bold text-[#164193] mb-6">
        Payment Management
      </h1>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-[#AAF0F0] text-left">
              <th className="border border-gray-300 p-2">Email</th>
              <th className="border border-gray-300 p-2">Date</th>
              <th className="border border-gray-300 p-2">Transaction ID</th>
              <th className="border border-gray-300 p-2">Price</th>
              <th className="border border-gray-300 p-2">Status</th>
              <th className="border border-gray-300 p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(payments) && payments.map((payment) => (
              <tr key={payment._id} className="text-center">
                <td className="border border-gray-300 p-2">{payment.email}</td>
                <td className="border border-gray-300 p-2">{payment.date}</td>
                <td className="border border-gray-300 p-2">
                  {payment.transactionId}
                </td>
                <td className="border border-gray-300 p-2">
                  {payment.price} {payment.currency.toUpperCase()}
                </td>
                <td
                  className={`border border-gray-300 p-2 ${
                    payment.status === "paid"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {payment.status}
                </td>
                <td className="border border-gray-300 p-2">
                  {payment.status === "pending" && (
                    <button
                      className="bg-[#3AB092] text-white py-1 px-3 rounded-lg shadow-md"
                      onClick={() => handleAcceptPayment(payment._id)}
                    >
                      Accept Payment
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManagePayment;
