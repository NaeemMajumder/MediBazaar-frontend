import React, { useEffect, useState } from "react";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "./category.css";
import { Link } from "react-router-dom";
import UseAxiosPublic from "../../../../customHooks/UseAxiosPublic";

const Category = () => {
  let [categories, setCategories] = useState([]);

  const axiosPublic = UseAxiosPublic();

  useEffect(() => {
    axiosPublic.get("/categories").then((res) => {
      console.log(res.data);
      setCategories(res.data);
    });
  }, []);

  
  return (
    <>
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl text-[#164193] font-semibold heading lg:mb-20 md:mb-14 mb-10">
        Browse Our Product Categories
      </h1>
      <div>
        <Swiper
          spaceBetween={30}
          freeMode={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          speed={2000}
          modules={[FreeMode, Pagination, Autoplay]}
          className="mySwiper mySwiper1"
          breakpoints={{
            400: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
        >
          {categories.map((category, index) => {
            return (
              <SwiperSlide key={index}>
                <Link
                  to={`/categories/${category.title
                    .toLowerCase()
                    .replace(" ", "-")}`}
                  className="max-w-xs p-4 border rounded-lg shadow-md bg-white flex flex-col items-center relative h-full swiper-slide1"
                >
                  <img src={category.image_url} alt="Drugs" className="mb-4" />
                  <h2 className="md:text-md lg:text-lg text-sm font-semibold mb-2">
                    {category.title}
                  </h2>
                  <span className="bg-[#00B092] text-white text-xs font-bold px-3 py-1 rounded-full absolute top-2 right-2">
                    {category.stock}
                  </span>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div className="lg:mt-20 md:mt-14 mt-10 text-center">
        <Link
          to="/categories"
          className="border py-2 px-4 border-blue-500 text-blue-500 rounded-md font-semibold hover:bg-blue-500 hover:text-white"
        >
          See All Category
        </Link>
      </div>
    </>
  );
};

export default Category;
