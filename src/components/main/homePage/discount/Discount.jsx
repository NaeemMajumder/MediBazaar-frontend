import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import ProductCard from "../../shared/ProductCard";

import "./discount.css";
import UseAxiosPublic from "../../../../customHooks/UseAxiosPublic";
import { useEffect, useState } from "react";

const Discount = () => {

  let axiosPublic = UseAxiosPublic();

  let [products, setProducts] = useState([]);

  useEffect(()=>{
    axiosPublic.get('/medicineLimit')
    .then(res=>{
      setProducts(res.data);
    })
  },[])

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
          {products.map((product) => (
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
