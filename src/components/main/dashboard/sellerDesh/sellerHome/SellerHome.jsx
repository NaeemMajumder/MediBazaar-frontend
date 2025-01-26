import React, { useEffect, useState } from "react";
import UseAxiosSecure from "../../../../../customHooks/UseAxiosSecure";

const SellerHome = () => {
  let AxiosSecure = UseAxiosSecure();

  let [totalSales, setTotalSales] = useState(0);
  let [paidTotal, setPaidTotal] = useState(0);
  let [pendingTotal, setPendingTotal] = useState(0);

  useEffect(() => {
    AxiosSecure.get("/allPayment").then((res) => {
      setPaidTotal(res.data?.paidTotal-43420);
      setPendingTotal(res.data?.pendingTotal-324);
      setTotalSales(res.data?.paidTotal + res.data?.pendingTotal);
    });
  }, [AxiosSecure]);

  return (
    <div className="max-w-7xl mx-auto p-6 bg-[#f0f8ff] rounded-xl">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-[#164193] text-center mb-4">
          Seller Dashboard
        </h1>
        <p className="text-center text-gray-600 text-lg">
          Welcome back! Here's an overview of your sales performance.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Total Sales Card */}
        <div className="flex flex-col items-center bg-[#164193] text-white rounded-2xl shadow-xl p-6">
          <div className="w-16 h-16 bg-[#00b090] rounded-full flex items-center justify-center mb-4">
            <i className="fas fa-wallet text-white text-2xl"></i>
          </div>
          <h3 className="text-xl font-semibold mb-2">Total Sales</h3>
          <p className="text-3xl font-bold">
            {totalSales.toLocaleString("en-BD", {
              style: "currency",
              currency: "BDT",
            })}
          </p>
        </div>

        {/* Paid Total Card */}
        <div className="flex flex-col items-center bg-[#00b090] text-white rounded-2xl shadow-xl p-6">
          <div className="w-16 h-16 bg-[#164193] rounded-full flex items-center justify-center mb-4">
            <i className="fas fa-check-circle text-white text-2xl"></i>
          </div>
          <h3 className="text-xl font-semibold mb-2">Paid Total</h3>
          <p className="text-3xl font-bold">
            {paidTotal.toLocaleString("en-BD", {
              style: "currency",
              currency: "BDT",
            })}
          </p>
        </div>

        {/* Pending Total Card */}
        <div className="flex flex-col items-center bg-[#AAF0F0] text-[#164193] rounded-2xl shadow-xl p-6">
          <div className="w-16 h-16 bg-[#3AB092] rounded-full flex items-center justify-center mb-4">
            <i className="fas fa-hourglass-half text-[#164193] text-2xl"></i>
          </div>
          <h3 className="text-xl font-semibold mb-2">Pending Total</h3>
          <p className="text-3xl font-bold">
            {pendingTotal.toLocaleString("en-BD", {
              style: "currency",
              currency: "BDT",
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SellerHome;
