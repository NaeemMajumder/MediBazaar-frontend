import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import UseAxiosPublic from "../../../customHooks/UseAxiosPublic";
import AuthProviderHook from "../../../customHooks/AuthProviderHook";
import UseCart from "../../../customHooks/UseCart";

const CategoryKit = ({ medicines, category }) => {
  const [selectedMedicine, setSelectedMedicine] = useState(null);
  const [cart, setCart] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const navigate = useNavigate();
  let axiosSecure = UseAxiosPublic();
  const {user} = AuthProviderHook();
  const [refetch] = UseCart();



  const totalMedicines = medicines.length;
  const uniqueCategories = category;

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentMedicines = medicines.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(totalMedicines / itemsPerPage);

  const handleViewDetails = (medicine) => {
    setSelectedMedicine(medicine);
  };

  const handleAddToCart = (medicine) => {
    setCart([...cart, medicine]);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleAddCart = (medicine) => {
    if (user && user?.email) {
      console.log("data added");
      const shoppingCartItems = {
        productId: medicine._id,
        email: user.email,
        productImg: medicine.imageUrl,
        productName: medicine.itemName,
        productCategory: medicine.category,
        productPrice: medicine.discount_price,
      };

      axiosSecure.post("/cartDetails", shoppingCartItems).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          // refetch will update the cart... like because of this we do not need to use specific state variable to re-render again.
          refetch();
          alert('cart added')
        }
      });
    } else {
      alert("login first");
      navigate("/login");
    }
  };

  return (
    <div className="p-6 max-w-[1350px] mx-auto min-h-screen">
      <h1 className="text-[#164193] text-3xl font-bold text-center mb-6 heading">
        Medicine Category
      </h1>

      <div className="mb-4 text-center text-lg font-semibold text-[#164193]">
        <p className="font-bold">Total Medicines: {totalMedicines}</p>
        <p className="font-bold">Unique Categories: <span className="text-[#1ca288]">{uniqueCategories}</span></p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white shadow-lg rounded-lg">
          <thead className="bg-[#164193] text-white">
            <tr>
              <th className="p-4 text-left">Image</th>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Category</th>
              <th className="p-4 text-left">Price</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentMedicines.map((medicine) => (
              <tr
                key={medicine.itemName}
                className="border-b hover:bg-gray-100"
              >
                <td className="p-4">
                  <img
                    src={medicine.imageUrl}
                    alt={medicine.itemName}
                    className="w-16 h-16 rounded-md"
                  />
                </td>
                <td className="p-4 text-[#164193] font-semibold">
                  {medicine.itemName}
                </td>
                <td className="p-4">{medicine.category}</td>
                <td className="p-4">{medicine.discount_price}</td>
                <td className="p-4 flex gap-2">
                  <button
                    onClick={() => handleViewDetails(medicine)}
                    className="bg-[#164193] text-white px-4 py-2 rounded-md hover:bg-[#1ca288]"
                  >
                    <FaEye />
                  </button>
                  <button
                    onClick={() => handleAddCart(medicine)}
                    className="bg-[#00B092] text-white px-4 py-2 rounded-md hover:bg-[#1ca288]"
                  >
                    Add to Cart
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-6 space-x-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="bg-[#164193] text-white px-4 py-2 rounded-md disabled:opacity-50"
        >
          Prev
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => handlePageChange(i + 1)}
            className={`px-4 py-2 rounded-md ${
              currentPage === i + 1
                ? "bg-[#1ca288] text-white"
                : "bg-gray-200 text-[#164193]"
            }`}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages ||  medicines.length === 0}
          className="bg-[#164193] text-white px-4 py-2 rounded-md disabled:opacity-50"
        >
          Next
        </button>
      </div>

      {selectedMedicine && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center p-4">
          <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-lg w-full">
            <button
              onClick={() => setSelectedMedicine(null)}
              className="absolute top-4 right-4 bg-red-500 text-white w-8 h-8 flex items-center justify-center rounded-full hover:bg-red-700"
            >
              &times;
            </button>
            <h2 className="text-3xl font-bold text-[#164193] mb-6 text-center">
              {selectedMedicine.itemName}
            </h2>
            <div className="flex flex-col items-center gap-4">
              <img
                src={selectedMedicine.imageUrl}
                alt={selectedMedicine.itemName}
                className="w-40 h-40 rounded-xl shadow-md border-4 border-[#1ca288]"
              />
              <div className="text-center">
                <p className="text-lg text-[#1ca288] font-semibold">
                  Category: {selectedMedicine.category}
                </p>
                <p className="text-md text-[#164193] mt-2">
                  Price:{" "}
                  <span className="font-bold">
                    $ {selectedMedicine.discount_price}
                  </span>
                </p>
                <p className="text-md text-gray-600 mt-2 max-w-xs">
                  {selectedMedicine.description}
                </p>
              </div>
              <button
                onClick={() => setSelectedMedicine(null)}
                className="mt-6 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-red-600 transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryKit;
