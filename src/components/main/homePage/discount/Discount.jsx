import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import ProductCard from "../../shared/ProductCard";

import "./discount.css";

const Discount = () => {
  let discountProducts = [
    {
      _id: 1,
      image_url:
        "https://c8.alamy.com/comp/RAJ29M/shelves-with-a-variety-of-products-such-as-gelatine-rice-pudding-custard-powders-self-service-food-department-supermarket-RAJ29M.jpg",
      name: "Paracetamol 500mg",
      category: "Medicine",
      original_price: 100,
      now_price: 80,
      discount: "20% OFF",
    },
    {
      _id: 2,
      image_url:
        "https://c8.alamy.com/comp/DCB80A/variety-of-grocery-products-fruits-vegetables-meat-cheese-and-bread-DCB80A.jpg",
      name: "Vitamin C Tablets",
      category: "Medicine",
      original_price: 500,
      now_price: 450,
      discount: "10% OFF",
    },
    {
      _id: 3,
      image_url:
        "https://www.shutterstock.com/image-photo/shenzhen-china-november-21-2019-260nw-2370734813.jpg",
      name: "Hand Sanitizer 500ml",
      category: "Health & Hygiene",
      original_price: 300,
      now_price: 240,
      discount: "20% OFF",
    },
    {
      _id: 4,
      image_url:
        "https://www.shutterstock.com/image-illustration/shopping-basket-full-variety-grocery-260nw-1978733351.jpghttps://m.media-amazon.com/images/I/61FaTO+FXTL._AC_.jpg",
      name: "Digital Thermometer",
      category: "Medical Equipment",
      original_price: 1200,
      now_price: 1000,
      discount: "17% OFF",
    },
    {
      _id: 5,
      image_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi27d9xGoAweKtnrGKJj4t7qJ7hcr9mUkSlA&shttps://www.ayaadevarieties.com.ng/public/assets/images/products/KVBNDDVZ-1.jpeg",
      name: "Blood Pressure Monitor",
      category: "Medical Equipment",
      original_price: 2500,
      now_price: 2000,
      discount: "20% OFF",
    },
    {
      _id: 6,
      image_url:
        "https://media.istockphoto.com/id/96826250/photo/digital-camera-with-clipping-path.jpg?s=612x612&w=0&k=20&c=ceAF827zi_UfczajJAWkXowWxdu5tfisZHRoCiSq94w=",
      name: "Face Mask (50 pcs)",
      category: "Health & Hygiene",
      original_price: 300,
      now_price: 270,
      discount: "10% OFF",
    },
    {
      _id: 7,
      image_url:
        "https://media.istockphoto.com/id/618066222/photo/camera-capturing-a-forest.jpg?s=612x612&w=0&k=20&c=Mqr3fFI2QPY09_bu3GyRYJvcdwBO2qeHPT88GFsLTS4=",
      name: "Cough Syrup 100ml",
      category: "Medicine",
      original_price: 150,
      now_price: 120,
      discount: "20% OFF",
    },
    {
      _id: 8,
      image_url:
        "https://www.mobiledokan.com/media/apple-iphone-15-pink-official-image_1.webp",
      name: "Pain Relief Gel",
      category: "Medicine",
      original_price: 400,
      now_price: 320,
      discount: "20% OFF",
    },
    {
      _id: 9,
      image_url:
        "https://www.mobiledokan.com/media/apple-iphone-15-pink-official-image_1.webp",
      name: "Glucometer Kit",
      category: "Medical Equipment",
      original_price: 1800,
      now_price: 1600,
      discount: "11% OFF",
    },
    {
      _id: 10,
      image_url:
        "https://www.mobiledokan.com/media/apple-iphone-15-pink-official-image_1.webp",
      name: "Herbal Green Tea",
      category: "Health & Wellness",
      original_price: 600,
      now_price: 540,
      discount: "10% OFF",
    },
  ];

  return (
    <>
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl text-[#164193] font-semibold heading lg:mb-20 md:mb-14 mb-10">
        Wellness Deals
      </h1>

      <div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          breakpoints={{
            400: {
              slidesPerView: 1.5,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          className="mySwiper2 "
        >
          {/* <SwiperSlide>
            <ProductCard />
          </SwiperSlide> */}
          {discountProducts.map((product) => (
            <SwiperSlide key={product._id} >
              <ProductCard product={product}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Discount;
