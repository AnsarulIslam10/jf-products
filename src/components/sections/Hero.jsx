import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Navigation } from "swiper/modules";

import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import imgBg from "../../assets/imgBg.png";
import Button from "../common/Button";

export const Hero = () => {
  return (
    // TODO: Fix The Carousel
    <>
      <div className="max-w-screen mx-auto mt-[45px]">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="">
            <div className="bg-[#F2F4F6] flex justify-center items-center gap-[70px] p-5 rounded-3xl">
              <div
                className="p-[46px] rounded-3xl"
                style={{ backgroundImage: `url(${imgBg})` }}
              >
                <img className="h-" src={img1} />
              </div>
              <div className="px-[70px]">
                <h2 className="text-[62px] font-medium leading-[72px] mb-5">
                  JF Privezy Grass Wall
                </h2>
                <p className="text-2xl mb-[50px]">The perfact Blend of Greenery</p>

                <Button />
                
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div className="bg-[#F2F4F6] flex justify-center items-center gap-[70px] p-5 rounded-3xl">
              <div
                className="p-[46px] rounded-3xl"
                style={{ backgroundImage: `url(${imgBg})` }}
              >
                <img className="h-" src={img3} />
              </div>
              <div className="px-[70px]">
                <h2 className="text-[62px] font-medium leading-[72px] mb-5">
                  JF Privezy Grass Wall
                </h2>
                <p className="text-2xl mb-[50px]">The perfact Blend of Greenery</p>

                <Button />
                
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div className="bg-[#F2F4F6] flex justify-center items-center gap-[70px] p-5 rounded-3xl">
              <div
                className="p-[46px] rounded-3xl"
                style={{ backgroundImage: `url(${imgBg})` }}
              >
                <img className="h-" src={img2} />
              </div>
              <div className="px-[70px]">
                <h2 className="text-[62px] font-medium leading-[72px] mb-5">
                  JF Australian Trellis
                </h2>
                <p className="text-2xl mb-[50px]">Where aesthetics meet durability</p>

                <Button />
                
              </div>
            </div>
          </SwiperSlide>
          
        </Swiper>
      </div>
    </>
  );
};
