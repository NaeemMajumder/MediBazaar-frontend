import React from "react";
import { Link } from "react-router-dom";

const categories = [
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

const AllCategories = () => {
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
