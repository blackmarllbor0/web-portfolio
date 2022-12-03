import "./Slider.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";

export const Slider = () => {
  return (
    <Swiper spaceBetween={150} slidesPerView={1}>
      <SwiperSlide className="project_slide">1</SwiperSlide>
      <SwiperSlide className="project_slide">2</SwiperSlide>
      <SwiperSlide className="project_slide">13</SwiperSlide>
      <SwiperSlide className="project_slide">41</SwiperSlide>
      <SwiperSlide className="project_slide">15</SwiperSlide>
    </Swiper>
  );
};
