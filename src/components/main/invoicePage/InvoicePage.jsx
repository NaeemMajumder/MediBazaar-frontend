import React, { useEffect, useState } from "react";
import { FaPrint } from "react-icons/fa";
import jsPDF from "jspdf";
import "jspdf-autotable";
import UseAxiosSecure from "../../../customHooks/UseAxiosSecure";
import AuthProviderHook from "../../../customHooks/AuthProviderHook";

const InvoicePage = () => {
  let [paymentHistory, setPaymentHistory] = useState([]);
  let { user } = AuthProviderHook();
  const axiosSecure = UseAxiosSecure();

  useEffect(() => {
    axiosSecure.get(`/payments?email=${user?.email}`).then((res) => {
      setPaymentHistory(res.data);
    });
  }, [axiosSecure, user?.email]);

  const handlePrint = () => {
    const doc = new jsPDF();
    doc.setFontSize(22);
    doc.text("MediBazaar Invoice", 15, 20);
    doc.setFontSize(14);
    
    doc.autoTable({
      startY: 40,
      head: [["Email", "Date", "Transaction ID", "Price", "Currency", "Status"]],
      body: paymentHistory.map(payment => [
        payment.email,
        payment.date,
        payment.transactionId,
        payment.price,
        payment.currency,
        payment.status,
      ]),
    });

    doc.save("invoice.pdf");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-2xl border border-gray-200 text-gray-800">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-[#164193]">Invoice</h1>
        <img src="/images/logo.png" alt="MediBazaar Logo" className="w-16" />
      </div>

      <table className="w-full border-collapse border border-gray-300 mb-6">
        <thead>
          <tr className="bg-[#AAF0F0]">
            <th className="border border-gray-300 p-2">Date</th>
            <th className="border border-gray-300 p-2">Transaction ID</th>
            <th className="border border-gray-300 p-2">Price</th>
            <th className="border border-gray-300 p-2">Currency</th>
            <th className="border border-gray-300 p-2">Status</th>
          </tr>
        </thead>
        {paymentHistory.map((payment) => (
          <tbody key={payment._id}>
            <tr className="text-center">
              <td className="border border-gray-300 p-2">{payment.date}</td>
              <td className="border border-gray-300 p-2">{payment.transactionId}</td>
              <td className="border border-gray-300 p-2">{payment.price}</td>
              <td className="border border-gray-300 p-2">{payment.currency}</td>
              <td className="border border-gray-300 p-2">{payment.status}</td>
            </tr>
          </tbody>
        ))}
      </table>

      <button
        className="bg-[#3AB092] text-white py-2 px-4 rounded-xl shadow-md"
        onClick={handlePrint}
      >
        <FaPrint className="inline mr-2" /> Print Invoice
      </button>
    </div>
  );
};

export default InvoicePage;
