import React from "react";
import "./Banner.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import before2 from "../../../img/_before.png";
import before from "../../../img/_before@2x.png";
import banner from "../../../img/banner-13.png.png";
import { Pagination } from "swiper/modules";
function Banner() {
  return (
    <div className="swap_banner">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="swp">
          <img src={before2} alt="" width={150} />
        </SwiperSlide>
        <SwiperSlide className="swp">
          <img src={before} alt="" width={150} />
        </SwiperSlide>
        <SwiperSlide className="swp">
          <img src={banner} alt="" width={150} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
export default Banner;
