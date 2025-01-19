import React from "react";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "./category.css";
import { Link } from "react-router-dom";

const Category = () => {
  let categories = [
    {
      title: "OTC Medicine",
      stock: 12,
      image_url:
        "https://medeasy.health/_next/image?url=https%3A%2F%2Fapi.medeasy.health%2Fmedia%2Fmedicines%2Fcategories%2Fdrugs.png&w=96&q=75",
    },
    {
      title: "Women's Choice",
      stock: 24,
      image_url:
        "https://medeasy.health/_next/image?url=https%3A%2F%2Fapi.medeasy.health%2Fmedia%2Fmedicines%2Fcategories%2Fwoman.png&w=96&q=75",
    },
    {
      title: "Sexual Wellness",
      stock: 14,
      image_url:
        "https://medeasy.health/_next/image?url=https%3A%2F%2Fapi.medeasy.health%2Fmedia%2Fmedicines%2Fcategories%2Fcontraceptive.png&w=96&q=75",
    },
    {
      title: "Diabetic Care",
      stock: 67,
      image_url:
        "https://medeasy.health/_next/image?url=https%3A%2F%2Fapi.medeasy.health%2Fmedia%2Fmedicines%2Fcategories%2FDiabetics-Care.png&w=96&q=75",
    },
    {
      title: "Baby Care",
      stock: 23,
      image_url:
        "https://medeasy.health/_next/image?url=https%3A%2F%2Fapi.medeasy.health%2Fmedia%2Fmedicines%2Fcategories%2Fbaby-boy.png&w=96&q=75",
    },
    {
      title: "Dental Care",
      stock: 87,
      image_url:
        "https://medeasy.health/_next/image?url=https%3A%2F%2Fapi.medeasy.health%2Fmedia%2Fmedicines%2Fcategories%2Fteeth.png&w=96&q=75",
    },
    {
      title: "Supplement",
      stock: 75,
      image_url:
        "https://medeasy.health/_next/image?url=https%3A%2F%2Fapi.medeasy.health%2Fmedia%2Fmedicines%2Fcategories%2Fsupplement.png&w=96&q=75",
    },
    {
      title: "Diapers",
      stock: 23,
      image_url:
        "https://medeasy.health/_next/image?url=https%3A%2F%2Fapi.medeasy.health%2Fmedia%2Fmedicines%2Fcategories%2Fdiaper.png&w=96&q=75",
    },
    {
      title: "Personal Care",
      stock: 55,
      image_url:
        "https://medeasy.health/_next/image?url=https%3A%2F%2Fapi.medeasy.health%2Fmedia%2Fmedicines%2Fcategories%2FPersonal-Care.png&w=96&q=75",
    },
    {
      title: "Devices",
      stock: 12,
      image_url:
        "https://medeasy.health/_next/image?url=https%3A%2F%2Fapi.medeasy.health%2Fmedia%2Fmedicines%2Fcategories%2Fglucosemeter_NutCdvY.png&w=96&q=75",
    },
    {
      title: "Prescription Medicine",
      stock: 12,
      image_url:
        "https://medeasy.health/_next/image?url=https%3A%2F%2Fapi.medeasy.health%2Fmedia%2Fmedicines%2Fcategories%2Fmedical-prescription.png&w=96&q=75",
    },
  ];

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
                <Link to={'/login'} className="max-w-xs p-4 border rounded-lg shadow-md bg-white flex flex-col items-center relative h-full swiper-slide1">
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
        <Link to="/categories" className="border py-2 px-4 border-blue-500 text-blue-500 rounded-md font-semibold hover:bg-blue-500 hover:text-white">See All Category</Link>
      </div>
    </>
  );
};

export default Category;
