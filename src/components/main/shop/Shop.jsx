import React, { useEffect, useState } from "react";
import UseAxiosPublic from "../../../customHooks/UseAxiosPublic";
import UseAxiosSecure from "../../../customHooks/UseAxiosSecure";
import AuthProviderHook from "../../../customHooks/AuthProviderHook";
import { useNavigate } from "react-router-dom";
import UseCart from "../../../customHooks/UseCart";

const Shop = () => {
  const axiosPublic = UseAxiosPublic();
  const axiosSecure = UseAxiosSecure();
  const {user} = AuthProviderHook();
  const navigate = useNavigate();
  const [refetch, cartData] = UseCart();
  const [medicines, setMedicines] = useState([]);
  const [selectedMedicine, setSelectedMedicine] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  useEffect(() => {
    axiosPublic.get("/medicine").then((res) => {
      setMedicines(res.data);
    });
  }, [axiosPublic]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSort = () => {
    const sortedMedicines = [...medicines].sort((a, b) => {
      return sortOrder === "asc"
        ? a.discount_price - b.discount_price
        : b.discount_price - a.discount_price;
    });
    setMedicines(sortedMedicines);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const filteredMedicines = medicines.filter((medicine) =>
    medicine.itemName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginatedMedicines = filteredMedicines.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleAddCart = (medicine) => {
    if (user && user?.email) {
      const shoppingCartItems = {
        productId: medicine._id,
        email: user.email,
        productImg: medicine.imageUrl,
        productName: medicine.itemName,
        productCategory: medicine.category,
        productPrice: medicine.discount_price,
      };

      axiosSecure.post("/cartDetails", shoppingCartItems).then((res) => {
        if (res.data.insertedId) {
          refetch();
          alert("Added to cart!");
        }
      });
    } else {
      alert("Please login first!");
      navigate("/login");
    }
  };

  return (
    <div className="container max-w-[1350px] mx-auto p-4">
      <h1 className="text-3xl font-bold text-center text-[#164193] my-6">Shop Medicines</h1>
      <div className="flex justify-between mb-4">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={handleSearch}
          className="p-2 border border-gray-300 rounded w-full max-w-sm"
        />
        <button
          onClick={handleSort}
          className="bg-[#1ca288] text-white px-4 py-2 rounded ml-4"
        >
          Sort by Price ({sortOrder === "asc" ? "Ascending" : "Descending"})
        </button>
      </div>
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="w-full text-left border-collapse">
          <thead className="bg-[#AAF0F0] text-[#164193]">
            <tr>
              <th className="p-4 border">Image</th>
              <th className="p-4 border">Name</th>
              <th className="p-4 border">Category</th>
              <th className="p-4 border">Original Price</th>
              <th className="p-4 border">Discount Price</th>
              <th className="p-4 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedMedicines.map((medicine) => (
              <tr key={medicine._id} className="border-b hover:bg-gray-100">
                <td className="p-4 border">
                  <img
                    src={medicine.imageUrl}
                    alt={medicine.itemName}
                    className="w-12 h-12 rounded"
                  />
                </td>
                <td className="p-4 border">{medicine.itemName}</td>
                <td className="p-4 border">{medicine.category}</td>
                <td className="p-4 border">${medicine.original_price}</td>
                <td className="p-4 border text-green-600">${medicine.discount_price}</td>
                <td className="p-4 border flex gap-2">
                  <button
                    className="bg-[#1ca288] text-white px-4 py-2 rounded"
                    onClick={() => setSelectedMedicine(medicine)}
                  >
                    👁 View
                  </button>
                  <button onClick={()=>handleAddCart(medicine)}  className="bg-[#3AB092] text-white px-4 py-2 rounded">
                    ➕ Select
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center mt-4">
        {Array.from({ length: Math.ceil(filteredMedicines.length / itemsPerPage) }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`mx-1 px-4 py-2 rounded ${currentPage === i + 1 ? "bg-[#1ca288] text-white" : "bg-gray-200"}`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {selectedMedicine && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg h-[60vh] overflow-auto w-full">
            <h2 className="text-2xl font-semibold text-[#164193] mb-4">
              {selectedMedicine.itemName}
            </h2>
            <img
              src={selectedMedicine.imageUrl}
              alt={selectedMedicine.itemName}
              className="w-full h-auto rounded-lg mx-auto"
            />
            <p className="mt-4 text-gray-700">
              <strong>Category:</strong> {selectedMedicine.category}
            </p>
            <p className="text-gray-700">
              <strong>Original Price:</strong> ${selectedMedicine.original_price}
            </p>
            <p className="text-green-600 font-bold">
              <strong>Discount Price:</strong> ${selectedMedicine.discount_price}
            </p>
            <p className="text-gray-500 mt-2">
              <strong>Seller:</strong> {selectedMedicine.userName} ({selectedMedicine.userEmail})
            </p>
            <button
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
              onClick={() => setSelectedMedicine(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;