import React, { useEffect, useState } from "react";
import UseAxiosSecure from "../../../../../customHooks/UseAxiosSecure";

const AdminHome = () => {
  let AxiosSecure = UseAxiosSecure();

  let [totalSales, setTotalSales] = useState(0);
  let [paidTotal, setPaidTotal] = useState(0);
  let [pendingTotal, setPendingTotal] = useState(0);

  useEffect(() => {
    AxiosSecure.get("/allPayment").then((res) => {
      setPaidTotal(res.data?.paidTotal);
      setPendingTotal(res.data?.pendingTotal);
      setTotalSales(paidTotal + pendingTotal);
    });
  }, [AxiosSecure, paidTotal, pendingTotal]);

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-2xl border border-gray-200 text-gray-800">
      <h1 className="text-3xl font-bold text-[#164193] text-center mb-6">
        Admin Dashboard
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-[#3AB092] text-white rounded-2xl shadow-md text-center">
          <h2 className="text-2xl font-bold">Total Sales</h2>
          <p className="text-4xl font-bold mt-2">
            {totalSales.toLocaleString("en-BD", {
              style: "currency",
              currency: "BDT",
            })}
          </p>
        </div>

        <div className="p-6 bg-[#164193] text-white rounded-2xl shadow-md text-center">
          <h2 className="text-2xl font-bold">Paid Total</h2>
          <p className="text-4xl font-bold mt-2">
            {paidTotal.toLocaleString("en-BD", {
              style: "currency",
              currency: "BDT",
            })}
          </p>
        </div>

        <div className="p-6 bg-[#AAF0F0] text-gray-800 rounded-2xl shadow-md text-center">
          <h2 className="text-2xl font-bold">Pending Total</h2>
          <p className="text-4xl font-bold mt-2">
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

export default AdminHome;
