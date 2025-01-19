import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import ProductCard from "../../shared/ProductCard";
import { Card } from "flowbite-react";

import "./discount.css";

const Discount = () => {
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

          <SwiperSlide >
            <ProductCard/>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Discount;
