import React, { useState } from "react";

const medicines = [
  {
    id: 1,
    name: "Paracetamol",
    price: "$5",
    stock: 20,
    category: "Pain Relief",
    image: "https://via.placeholder.com/100",
    description: "Effective pain reliever and fever reducer.",
  },
  {
    id: 2,
    name: "Amoxicillin",
    price: "$12",
    stock: 15,
    category: "Antibiotic",
    image: "https://via.placeholder.com/100",
    description: "Used to treat a variety of bacterial infections.",
  },
];

const Shop = () => {
  const [selectedMedicine, setSelectedMedicine] = useState(null);
  const [cart, setCart] = useState([]);

  const addToCart = (medicine) => {
    setCart([...cart, medicine]);
  };

  return (
    <>
      <div className="bg-[#f3f3f3]">
        <div className="p-8  min-h-screen max-w-[1350px] mx-auto">
          <h1 className="text-3xl lg:text-4xl text-[#164193] font-semibold text-center mb-8">
            Shop Medicines
          </h1>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-md rounded-lg">
              <thead className="bg-[#164193] text-white">
                <tr>
                  <th className="py-3 px-4">Image</th>
                  <th className="py-3 px-6 text-left">Name</th>
                  <th className="py-3 px-6 text-left">Category</th>
                  <th className="py-3 px-6 text-left">Price</th>
                  <th className="py-3 px-6 text-left">Stock</th>
                  <th className="py-3 px-6 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {medicines.map((medicine) => (
                  <tr key={medicine.id} className="border-b hover:bg-gray-100">
                    <td className="py-2 px-4 text-center"><img src={medicine.image} alt={medicine.name} className="w-12 h-12 mx-auto" /></td>
                    <td className="py-4 px-6">{medicine.name}</td>
                    <td className="py-4 px-6">{medicine.category}</td>
                    <td className="py-4 px-6">{medicine.price}</td>
                    <td className="py-4 px-6">{medicine.stock}</td>
                    <td className="py-4 px-6 flex justify-center gap-4">
                      <button
                        onClick={() => setSelectedMedicine(medicine)}
                        className="bg-[#38A7D6] text-white px-4 py-2 rounded-md shadow-md hover:bg-[#1ca288] transition"
                      >
                        👁 View
                      </button>
                      <button
                        onClick={() => addToCart(medicine)}
                        className="bg-[#00B092] text-white px-4 py-2 rounded-md shadow-md hover:bg-[#1ca288] transition"
                      >
                        ➕ Select
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {selectedMedicine && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
              <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
                <button
                  onClick={() => setSelectedMedicine(null)}
                  className="absolute top-2 right-4 text-2xl text-[#164193] hover:text-red-500"
                >
                  &times;
                </button>
                <img
                  src={selectedMedicine.image}
                  alt={selectedMedicine.name}
                  className="w-full h-40 object-cover mb-4 rounded-lg"
                />
                <h2 className="text-2xl font-semibold text-[#164193] mb-2">
                  {selectedMedicine.name}
                </h2>
                <p className="text-gray-600">{selectedMedicine.description}</p>
                <p className="mt-4 font-bold">
                  Price: {selectedMedicine.price}
                </p>
                <p>Stock: {selectedMedicine.stock}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Shop;
