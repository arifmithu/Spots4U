import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const Banner = () => {
  const pagination = {
    clickable: true,

    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <div className="h-[500px] mt-5 lg:mt-10 mx-5 lg:mx-[80px]">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={pagination}
        loop={true}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="overflow-hidden mySwiper rounded-xl "
      >
        <SwiperSlide>
          <div className="absolute bg-white opacity-80 w-[550px] rounded-lg">
            <h1 className="text-4xl font-bold my-5">Cox Bazar</h1>
            <p className=" pb-5 px-3">
              The longest natural sea beach globally, attracting visitors with
              its stunning scenery, leisure activities, and vibrant seafood
              market.
            </p>
          </div>
          <img
            src="https://i.ibb.co/kKkmddR/coxs-bazar-2894646-1920.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <div className="absolute bg-white opacity-80 w-[550px] rounded-lg">
            <h1 className="text-4xl font-bold my-5">Sundarban</h1>
            <p className=" pb-5 px-3">
              World's largest mangrove forest, home to Bengal tigers and diverse
              wildlife, located in Bangladesh.
            </p>
          </div>
          <img
            src="https://i.ibb.co/xhC8s94/sundarbans-8477703-1920.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <div className="absolute bg-white opacity-80 w-[550px] rounded-lg">
            <h1 className="text-4xl font-bold my-5">Wat Arun Temple</h1>
            <p className=" pb-5 px-3">
              Iconic Buddhist temple in Bangkok, Thailand, known for its
              stunning riverside location and intricately decorated spires.
            </p>
          </div>
          <img src="https://i.ibb.co/7jf5PJr/bangkok-5477405-1920.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="absolute bg-white opacity-80 w-[550px] rounded-lg">
            <h1 className="text-4xl font-bold my-5">Bali</h1>
            <p className=" pb-5 px-3">
              Indonesian island renowned for its stunning beaches, lush rice
              terraces, vibrant culture, and spiritual attractions.
            </p>
          </div>
          <img src="https://i.ibb.co/tQssQcX/bali-2975787-1920.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="absolute bg-white opacity-80 w-[550px] rounded-lg">
            <h1 className="text-4xl font-bold my-5">Twilight Penang Bridge</h1>
            <p className=" pb-5 px-3">
              Iconic bridge spanning the strait between Penang Island and the
              Malaysian mainland, offering stunning twilight views of the
              cityscape and sea.
            </p>
          </div>
          <img
            src="https://i.ibb.co/T1ZwCtz/twilight-7429964-1920.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
