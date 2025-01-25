import React, { useEffect, useState } from "react";
import UseAxiosPublic from "../../../../../customHooks/UseAxiosPublic";
import AddCategory from "./AddCategory";

const ManageCategory = () => {
  let [categories, setCategories] = useState([]);

  const axiosPublic = UseAxiosPublic();

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    axiosPublic.get("/categories").then((res) => {
      console.log(res.data);
      setCategories(res.data);
    });
  }, []);

  return (
    <section className="py-10 px-4">
      <div className="container mx-auto lg:max-w-[1000px] md:max-w-[800px]">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-[#164193] mb-4 md:mb-0 heading">
            Manage Categories
          </h2>
          <h2 className="text-xl font-bold text-[#164193]">
            Total Categories:{" "}
            <span className="text-[#1ca288]">{categories.length}</span>
          </h2>
          <>
            <button
              className="bg-[#00B092] text-white px-4 py-2 rounded-md shadow-md hover:bg-[#1ca288] transition duration-300 mt-4 md:mt-0"
              onClick={() => setShowPopup(true)}
            >
              Add Category
            </button>

            {showPopup && (
              <AddCategory onClose={() => setShowPopup(false)} />
            )}
          </>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4 overflow-x-auto">
          <table className="w-full border-collapse border border-gray-200 text-sm md:text-base">
            <thead>
              <tr className="bg-[#AAF0F0] text-[#164193]">
                <th className="p-3 border">Image</th>
                <th className="p-3 border">Title</th>
                <th className="p-3 border">Stock</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => (
                <tr key={category._id} className="text-center">
                  <td className="p-3 border">
                    <img
                      src={category.image_url}
                      alt={category.title}
                      className="w-12 h-12 rounded-full mx-auto object-cover"
                    />
                  </td>
                  <td className="p-3 border">{category.title}</td>
                  <td className="p-3 border">{category.stock}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ManageCategory;
