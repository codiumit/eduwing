import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

function Screen1() {
    return (
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper relative">
            <SwiperSlide>
                <img src="image/home/carousel-1.jpg" alt="carousel" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="image/home/carousel-2.jpg" alt="carousel" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="image/home/carousel-1.jpg" alt="carousel" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="image/home/carousel-2.jpg" alt="carousel" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="image/home/carousel-1.jpg" alt="carousel" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="image/home/carousel-2.jpg" alt="carousel" />
            </SwiperSlide>
            <div className="w-[550px] h-[326px] border absolute  inset-y-0 right-40  my-auto z-50 bg-white opacity-70 rounded-lg"></div>
        </Swiper>
    )
}

export default Screen1