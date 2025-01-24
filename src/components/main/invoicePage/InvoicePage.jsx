import React from "react";

const InvoicePage = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="container mx-auto p-6 max-w-[900px] border shadow-lg bg-white rounded-lg">
      <div className="text-center mb-8">
        <img
          src="/logo.png"
          alt="MediBazaar Logo"
          className="mx-auto h-20"
        />
        <h2 className="text-3xl font-bold text-[#164193] mt-2">Invoice</h2>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold text-[#1ca288]">Customer Details</h3>
        <p className="text-[#164193]">Name: John Doe</p>
        <p className="text-[#164193]">Email: johndoe@example.com</p>
        <p className="text-[#164193]">Phone: +1234567890</p>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold text-[#1ca288]">Order Summary</h3>
        <table className="w-full border border-gray-200">
          <thead className="bg-[#AAF0F0] text-[#164193]">
            <tr>
              <th className="border p-2">Medicine</th>
              <th className="border p-2">Quantity</th>
              <th className="border p-2">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td className="border p-2">Paracetamol</td>
              <td className="border p-2">2</td>
              <td className="border p-2">$20</td>
            </tr>
            <tr className="text-center">
              <td className="border p-2">Amoxicillin</td>
              <td className="border p-2">1</td>
              <td className="border p-2">$15</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-6">
        <h3 className="text-2xl font-bold text-[#164193]">Grand Total: $35</h3>
        <button
          onClick={handlePrint}
          className="bg-[#00B092] text-white px-6 py-2 rounded-md shadow-md hover:bg-[#1ca288] transition duration-300"
        >
          Print Invoice
        </button>
      </div>
    </div>
  );
};

export default InvoicePage;
