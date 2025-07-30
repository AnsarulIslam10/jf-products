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
    <>
      <div className="max-w-7xl mx-auto mt-[45px] px-4 sm:px-6 lg:px-8">
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
          className="mySwiper hero-swiper"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="bg-[#F2F4F6] flex justify-center items-center gap-4 sm:gap-6 md:gap-10 lg:gap-[70px] p-3 sm:p-5 md:p-7 lg:p-10 rounded-3xl">
              <div
                className="p-4 sm:p-6 md:p-8 lg:p-[46px] rounded-3xl"
                style={{
                  backgroundImage: `url(${imgBg})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <img
                  className="w-[120px] sm:w-[160px] md:w-[220px] lg:w-auto"
                  src={img1}
                  alt="Slide 1"
                />
              </div>
              <div className="px-2 sm:px-4 md:px-6 lg:px-[70px]">
                <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-[62px] font-medium leading-tight lg:leading-[72px] mb-2 md:mb-4 lg:mb-5">
                  JF Privezy Grass Wall
                </h2>
                <p className="text-sm sm:text-base md:text-xl lg:text-2xl mb-3 md:mb-5 lg:mb-[50px]">
                  The perfact Blend of Greenery
                </p>
                <Button
                  width="w-[130px] sm:w-[140px] md:w-[150px]"
                  height="h-[45px] sm:h-[48px] md:h-[50px]"
                  textSize="text-sm sm:text-base md:text-lg"
                  text="Shop Now"
                  className="mx-auto lg:mx-0"
                />
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="bg-[#F2F4F6] flex justify-center items-center gap-4 sm:gap-6 md:gap-10 lg:gap-[70px] p-3 sm:p-5 md:p-7 lg:p-10 rounded-3xl">
              <div
                className="p-4 sm:p-6 md:p-8 lg:p-[46px] rounded-3xl"
                style={{
                  backgroundImage: `url(${imgBg})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <img
                  className="w-[120px] sm:w-[160px] md:w-[220px] lg:w-auto"
                  src={img3}
                  alt="Slide 2"
                />
              </div>
              <div className="px-2 sm:px-4 md:px-6 lg:px-[70px]">
                <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-[62px] font-medium leading-tight lg:leading-[72px] mb-2 md:mb-4 lg:mb-5">
                  JF Privezy Grass Wall
                </h2>
                <p className="text-sm sm:text-base md:text-xl lg:text-2xl mb-3 md:mb-5 lg:mb-[50px]">
                  The perfact Blend of Greenery
                </p>
                <Button
                  width="w-[130px] sm:w-[140px] md:w-[150px]"
                  height="h-[45px] sm:h-[48px] md:h-[50px]"
                  textSize="text-sm sm:text-base md:text-lg"
                  text="Shop Now"
                  className="mx-auto lg:mx-0"
                />
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="bg-[#F2F4F6] flex justify-center items-center gap-4 sm:gap-6 md:gap-10 lg:gap-[70px] p-3 sm:p-5 md:p-7 lg:p-10 rounded-3xl">
              <div
                className="p-4 sm:p-6 md:p-8 lg:p-[46px] rounded-3xl"
                style={{
                  backgroundImage: `url(${imgBg})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <img
                  className="w-[120px] sm:w-[160px] md:w-[220px] lg:w-auto"
                  src={img2}
                  alt="Slide 3"
                />
              </div>
              <div className="px-2 sm:px-4 md:px-6 lg:px-[70px]">
                <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-[62px] font-medium leading-tight lg:leading-[72px] mb-2 md:mb-4 lg:mb-5">
                  JF Australian Trellis
                </h2>
                <p className="text-sm sm:text-base md:text-xl lg:text-2xl mb-3 md:mb-5 lg:mb-[50px]">
                  Where aesthetics meet durability
                </p>
                <Button
                  width="w-[130px] sm:w-[140px] md:w-[150px]"
                  height="h-[45px] sm:h-[48px] md:h-[50px]"
                  textSize="text-sm sm:text-base md:text-lg"
                  text="Shop Now"
                  className="mx-auto lg:mx-0"
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
