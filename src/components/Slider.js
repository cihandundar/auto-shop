import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import slide_1 from "../assets/images/slide_1.jpg";
import slide_2 from "../assets/images/slide_2.jpg";
import slide_3 from "../assets/images/slide_3.jpg";
import slide_4 from "../assets/images/slide_4.jpg";
import "swiper/css/bundle";
import { Autoplay, Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="slide__img" src={slide_1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="slide__img" src={slide_2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="slide__img" src={slide_3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="slide__img" src={slide_4} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
