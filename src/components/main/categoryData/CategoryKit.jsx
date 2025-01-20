import React, { useState } from "react";

const medicines = [
  {
    id: 1,
    name: "Paracetamol",
    category: "Tablet",
    price: "$5",
    stock: 50,
    image: "https://medeasy.health/_next/image?url=https%3A%2F%2Fapi.medeasy.health%2Fmedia%2Fmedicines%2Fcategories%2Fdiaper.png&w=96&q=75",
    description: "Used to treat fever and pain."
  },
  {
    id: 2,
    name: "Cough Syrup",
    category: "Syrup",
    price: "$8",
    stock: 30,
    image: "https://via.placeholder.com/100",
    description: "Relieves cough and cold symptoms."
  },
  // Add more medicines as needed
];

const CategoryKit = () => {
  const [selectedMedicine, setSelectedMedicine] = useState(null);
  const [cart, setCart] = useState([]);

  const handleViewDetails = (medicine) => {
    setSelectedMedicine(medicine);
  };

  const handleAddToCart = (medicine) => {
    setCart([...cart, medicine]);
  };

  return (
    <div className="p-6  max-w-[1350px] mx-auto min-h-screen">
      <h1 className="text-[#164193] text-3xl font-bold text-center mb-6 heading">
        Medicine Category
      </h1>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white shadow-lg rounded-lg">
          <thead className="bg-[#164193] text-white">
            <tr>
              <th className="p-4 text-left">Image</th>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Category</th>
              <th className="p-4 text-left">Price</th>
              <th className="p-4 text-left">Stock</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {medicines.map((medicine) => (
              <tr key={medicine.id} className="border-b hover:bg-gray-100">
                <td className="p-4">
                  <img
                    src={medicine.image}
                    alt={medicine.name}
                    className="w-16 h-16 rounded-md"
                  />
                </td>
                <td className="p-4 text-[#164193] font-semibold">{medicine.name}</td>
                <td className="p-4">{medicine.category}</td>
                <td className="p-4">{medicine.price}</td>
                <td className="p-4">{medicine.stock}</td>
                <td className="p-4 flex gap-2">
                  <button
                    onClick={() => handleViewDetails(medicine)}
                    className="bg-[#164193] text-white px-4 py-2 rounded-md hover:bg-[#1ca288]"
                  >
                    View
                  </button>
                  <button
                    onClick={() => handleAddToCart(medicine)}
                    className="bg-[#00B092] text-white px-4 py-2 rounded-md hover:bg-[#1ca288]"
                  >
                    Select
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedMedicine && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg">
            <h2 className="text-2xl font-bold text-[#164193] mb-4">
              {selectedMedicine.name}
            </h2>
            <img
              src={selectedMedicine.image}
              alt={selectedMedicine.name}
              className="w-32 h-32 mx-auto rounded-md mb-4"
            />
            <p className="text-[#1ca288] text-lg">{selectedMedicine.description}</p>
            <button
              onClick={() => setSelectedMedicine(null)}
              className="mt-4 bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryKit;
