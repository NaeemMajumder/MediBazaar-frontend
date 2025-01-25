import React, { useEffect, useState } from "react";
import { CgAdd } from "react-icons/cg";
import UseAxiosPublic from "../../../../../customHooks/UseAxiosPublic";
import AuthProviderHook from "../../../../../customHooks/AuthProviderHook";
import UseAxiosSecure from "../../../../../customHooks/UseAxiosSecure";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import UseCart from "../../../../../customHooks/UseCart";
import { TiDeleteOutline } from "react-icons/ti";

const ManageMedicines = () => {
  const [showModal, setShowModal] = useState(false);
  const [categories, setCategories] = useState([]);
  const [refetch] = UseCart();
  const { user } = AuthProviderHook();

  const queryClient = useQueryClient();

  const { data: medicines = [] } = useQuery({
    queryKey: ["medicines"],
    queryFn: async () => {
      let res = await axiosSecure(`/medicine?email=${user.email}`);
      console.log(res.data);
      return res.data;
    },
  });

  //   console.log(medicines);

  // State for form fields
  const [medicineData, setMedicineData] = useState({
    itemName: "",
    imageUrl: "",
    category: "",
    original_price: "",
    discount: 0,
  });

  const axiosPublic = UseAxiosPublic();
  const axiosSecure = UseAxiosSecure();

  // Fetch categories
  useEffect(() => {
    axiosPublic.get("/categories").then((res) => {
      setCategories(res.data);
    });
  }, []);

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMedicineData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    medicineData.userName = user.displayName;
    medicineData.userEmail = user.email;

    if (parseInt(medicineData.discount)) {

      let original_price = parseInt(medicineData.original_price);
      let discount = parseInt(medicineData.discount);
      let discount_price = original_price - original_price * (discount / 100);
      medicineData.discount_price = discount_price;
    } else {
      medicineData.discount_price = medicineData.original_price;
    }

    axiosSecure.post("/medicine", medicineData).then((res) => {
      if (res.data.insertedId) {
        alert("item added");
        setShowModal(false);
        setMedicineData([]);
        queryClient.invalidateQueries({ queryKey: ["medicines"] });
        refetch();
      }
    });
  };

  let handleItemDelete = (id)=>{
    axiosSecure.delete(`/medicine/${id}`)
    .then(res=>{
        console.log(res.data);
        if(res.data.deletedCount>0){
            alert('item deleted');
            queryClient.invalidateQueries({ queryKey: ["medicines"] });
            refetch();
        }
    })
  }

  return (
    <section className="py-10 px-4">
      <div className="container m-auto lg:max-w-[1000px] md:max-w-[800px]">
        <div className="flex md:flex-row gap-3 md:justify-between md:items-center items-center flex-col mb-6">
          <h2 className="text-3xl font-bold text-[#164193]">
            Manage Medicines
          </h2>
          <p className="text-xl font-bold text-[#164193]">
            Total Medicine:{" "}
            <span className="text-[#00B092]">{medicines.length}</span>{" "}
          </p>
          <div>
            <button
              onClick={() => setShowModal(true)}
              className="bg-[#00B092] text-white flex items-center px-4 py-2 rounded-md shadow-md hover:bg-[#1ca288] transition duration-300"
            >
              <CgAdd className="mr-2" /> Add Medicine
            </button>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4 overflow-x-auto">
          <table className="w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-[#AAF0F0] text-[#164193]">
                <th className="p-3 border">Image</th>
                <th className="p-3 border">Item Name</th>
                <th className="p-3 border">Category</th>
                <th className="p-3 border">Original Price</th>
                <th className="p-3 border">Discount</th>
                <th className="p-3 border">Discount Price</th>
                <th className="p-3 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {medicines.map((medicine) => {
                return (
                  <tr key={medicine._id} className="text-center">
                    <td className="p-3 border">
                      <img
                        src={medicine.imageUrl}
                        alt="Medicine"
                        className="w-12 h-12 object-cover rounded-md"
                      />
                    </td>
                    <td className="p-3 border">{medicine.itemName}</td>
                    <td className="p-3 border">{medicine.category}</td>
                    <td className="p-3 border">{medicine.original_price}</td>
                    <td className="p-3 border">{medicine.discount}%</td>
                    <td className="p-3 border">{medicine.discount_price}</td>
                    <td className="p-2 border">
                      <button onClick={()=>handleItemDelete(medicine._id)} className="bg-red-500 text-white rounded-full">
                        <TiDeleteOutline size={25} />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal for Adding Medicine */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 m-6 h-[70vh] rounded-lg shadow-lg w-full max-w-md md:max-w-[600px] lg:max-w-[800px] overflow-auto">
            <h2 className="text-2xl font-bold text-[#164193] mb-4">
              Add New Medicine
            </h2>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-[#164193] font-semibold mb-1">
                  Item Name:
                </label>
                <input
                  type="text"
                  name="itemName"
                  value={medicineData.itemName}
                  onChange={handleInputChange}
                  placeholder="Enter medicine name"
                  className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1ca288]"
                  required
                />
              </div>
              <div>
                <label className="block text-[#164193] font-semibold mb-1">
                  Image URL:
                </label>
                <input
                  type="text"
                  name="imageUrl"
                  value={medicineData.imageUrl}
                  onChange={handleInputChange}
                  placeholder="Enter image URL"
                  className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1ca288]"
                />
              </div>
              <div>
                <label className="block text-[#164193] font-semibold mb-1">
                  Category:
                </label>
                <select
                  name="category"
                  value={medicineData.category}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1ca288]"
                >
                  {categories.map((category, index) => (
                    <option key={index} value={category.title}>
                      {category.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[#164193] font-semibold mb-1">
                  Price:
                </label>
                <input
                  type="number"
                  name="original_price"
                  value={medicineData.original_price}
                  onChange={handleInputChange}
                  placeholder="Enter price"
                  className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1ca288]"
                />
              </div>
              <div>
                <label className="block text-[#164193] font-semibold mb-1">
                  Discount (%)
                </label>
                <input
                  type="number"
                  name="discount"
                  min={0}
                  max={100}
                  value={medicineData.discount}
                  onChange={handleInputChange}
                  placeholder="Enter discount percentage"
                  className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1ca288]"
                />
              </div>
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="bg-red-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-600 transition duration-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#00B092] text-white px-4 py-2 rounded-md shadow-md hover:bg-[#1ca288] transition duration-300"
                >
                  Add Medicine
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default ManageMedicines;
