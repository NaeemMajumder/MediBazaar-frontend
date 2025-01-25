import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CategoryKit from "./CategoryKit";
import UseAxiosPublic from "../../../customHooks/UseAxiosPublic";


const CategoryData = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeCategory, setActiveCategory] = useState("");
  const [medicines, setMedicines] = useState([])

  const [categories,setCategories] = useState([])

  const axiosPublic =UseAxiosPublic();

  useEffect(()=>{
    axiosPublic.get('/categories')
    .then(res=>{
      setCategories(res.data);
    })
  },[])


  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleCategoryClick = (category) => {

    setActiveCategory(category)
    console.log(category);
    axiosPublic.get(`/medicine?category=${category}`)
    .then(res=>{
      setMedicines(res.data);
    })
  };

  return (
    <>
      <section>
        <div className="relative">
          {/* All Categories Button */}

          {/* Sidebar */}
          <div
            className={`fixed top-0 left-0 h-full w-80 bg-white shadow-lg transform ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out z-50 overflow-y-auto`}
          >
            {/* Close Button */}
            <button
              onClick={toggleSidebar}
              className="absolute top-4 right-4 text-2xl font-bold text-[#164193] hover:text-red-500 transition"
            >
              &times;
            </button>

            <h2 className="text-center text-2xl font-semibold text-[#164193] py-6 border-b">
              Categories
            </h2>

            <ul className="p-4 flex flex-col gap-3">
              {categories.map((category, index) => (
                <Link
                  key={index}
                  to={`/categories/${category.title
                    .toLowerCase()
                    .replace(" ", "-")}`}
                >
                  <li
                    onClick={() => handleCategoryClick(category.title)}
                    className={`flex items-center p-4 rounded-lg cursor-pointer transition ${
                      activeCategory === category.title
                        ? "bg-[#164193] text-white"
                        : "bg-gray-100 text-[#164193]"
                    }`}
                  >
                    <img
                      src={category.image_url}
                      alt={category.title}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="ml-4 flex-1">
                      <h3 className="text-lg font-bold">{category.title}</h3>
                    </div>
                    <span className="bg-[#00B092] text-white text-sm font-bold px-3 py-1 rounded-full">
                      {category.stock}
                    </span>
                  </li>
                </Link>
              ))}
            </ul>
          </div>

          {/* Overlay when sidebar is open */}
          {isOpen && (
            <div
              className="fixed inset-0 bg-black opacity-50 z-40"
              onClick={toggleSidebar}
            ></div>
          )}
        </div>

        <div className="bg-[#AAF0F0]">
          <div className="text-center pt-12 mb-4">
            <button
              onClick={toggleSidebar}
              className="bg-[#00B092] text-white px-6 py-3 rounded-md shadow-md hover:bg-[#1ca288] transition duration-300"
            >
              All Categories
            </button>
          </div>
          <CategoryKit medicines={medicines} category={activeCategory}/>
        </div>
      </section>
    </>
  );
};

export default CategoryData;
