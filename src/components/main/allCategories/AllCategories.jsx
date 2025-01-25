import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UseAxiosPublic from "../../../customHooks/UseAxiosPublic";


const AllCategories = () => {

  let [categories, setCategories] = useState([]);

  const axiosPublic = UseAxiosPublic();

  useEffect(()=>{
    axiosPublic.get('/categories')
    .then(res=>{
      console.log(res.data);
      setCategories(res.data);
    })
  },[])


  return (
    <div className="bg-[#f3f3f3] py-16 px-4">
      <h1 className="text-center text-3xl lg:text-4xl text-[#164193] font-semibold mb-12 heading">
        Explore Our Categories
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {categories.map((category, index) => (
          <Link
            to={`/categories/${category.title.toLowerCase().replace(" ", "-")}`}
            key={index}
            className="p-4 border rounded-lg shadow-md bg-white flex flex-col items-center relative hover:shadow-xl transition-shadow duration-300 h-full"
          >
            <img
              src={category.image_url}
              alt={category.title}
              className="w-24 h-24 object-contain mb-4"
            />
            <h2 className="text-lg font-semibold text-[#164193] mb-2">
              {category.title}
            </h2>
            <span className="bg-[#00B092] text-white text-xs font-bold px-3 py-1 rounded-full absolute top-2 right-2">
              {category.stock}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllCategories;
