import React, { useState } from "react";
import UseAxiosPublic from "../../../../../customHooks/UseAxiosPublic";
import { CgArrowsExchange } from "react-icons/cg";
import UseCart from "../../../../../customHooks/UseCart";
import { useQueryClient } from "@tanstack/react-query";

const AddCategory = ({ onClose, setShowPopup }) => {
  const axiosPublic = UseAxiosPublic();
  const [refetch, cartData] = UseCart();
  const queryClient = useQueryClient()
  

  const [category, setCategory] = useState({
    image_url: "",
    title: "",
  });

  const handleChange = (e) => {
    setCategory({ ...category, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log(category);
    category.stock = 0;

    axiosPublic.post("/categories", category).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        setShowPopup(false);
        queryClient.invalidateQueries({ queryKey: ['cartData'] })
        refetch();
      }
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-[#164193] mb-4">
          Add New Category
        </h2>
        <form onSubmit={handleSubmitForm} className="space-y-4">
          <div>
            <label className="block text-[#164193] font-semibold mb-1">
              Title:
            </label>
            <input
              type="text"
              name="title"
              value={category.title}
              onChange={handleChange}
              placeholder="Enter category title"
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
              name="image_url"
              value={category.image_url}
              onChange={handleChange}
              placeholder="Enter image URL"
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1ca288]"
              required
            />
          </div>

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="bg-red-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-600 transition duration-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-[#00B092] text-white px-4 py-2 rounded-md shadow-md hover:bg-[#1ca288] transition duration-300"
            >
              Add Category
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCategory;
