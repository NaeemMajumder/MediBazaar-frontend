import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./heroSlider.css";

// import required modules
import { EffectFade, Pagination, Autoplay } from "swiper/modules";
import UseAxiosPublic from "../../customHooks/UseAxiosPublic";
import { useEffect, useState } from "react";

const HeroSlider = () => {
  const [images, setImages] = useState("");

  const axiosPublic = UseAxiosPublic();

  useEffect(() => {
    axiosPublic.get("/manageAds").then((res) => {
      console.log(res.data);
      setImages(res.data);
    });
  }, [axiosPublic]);

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
          {images.length && images.map((image) => {
            return (
              <SwiperSlide key={image._id}>
                <img src={image.imageUrl} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </header>
    </>
  );
};

export default HeroSlider;
