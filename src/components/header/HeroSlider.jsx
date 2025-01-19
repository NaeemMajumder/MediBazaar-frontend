
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./heroSlider.css";

// import required modules
import { EffectFade, Pagination, Autoplay } from "swiper/modules";

const HeroSlider = () => {
  return (
    <>
      <header>
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{
            clickable: true,
          }}
          loop={true}
          modules={[EffectFade, Pagination, Autoplay]}
          speed={3000}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="/images/banner1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/banner2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/banner3.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/banner4.jpg" />
          </SwiperSlide>
        </Swiper>
      </header>
    </>
  );
};

export default HeroSlider;
