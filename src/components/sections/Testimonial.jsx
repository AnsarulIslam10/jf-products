// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// Import required modules
import { Autoplay } from "swiper/modules";

import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { FaQuoteLeft } from "react-icons/fa";
import imgBg from "../../assets/imgBg.png";
import user from "../../assets/testimonial.png";

export default function Testimonial() {
  return (
    <div className="max-w-7xl mx-auto mt-[100px] px-4">
      <h2 className="text-[32px] sm:text-[38px] md:text-[42px] font-medium text-center mb-10">
        Why Customers Love <span className="ml-2">Us?</span>
      </h2>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={false}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-[30px] lg:gap-[60px]">
            {/* Text Card */}
            <div className="bg-[#F2F4F6] w-full lg:w-[881px] lg:h-[608px] rounded-3xl p-6 sm:p-10 md:p-14 lg:p-16">
              <span className="text-4xl sm:text-5xl lg:text-6xl text-[#B0DD1D]">
                <FaQuoteLeft />
              </span>
              <p className="text-[20px] sm:text-[24px] lg:text-[28px] mt-6 sm:mt-8 lg:mt-10">
                I had initial issue with stock availability and delivery. Once
                the product arrived on site the work has completed very fast
                (400ft.) Value for money and easy to install. Happy with the
                product.
              </p>
              <div
                className="relative p-0 h-28 sm:h-36 lg:h-40 -bottom-2 sm:-bottom-6 md:-bottom-18 rounded-3xl w-full flex items-center justify-between gap-4 sm:gap-10"
                style={{
                  backgroundImage: `url(${imgBg})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <p className="text-[20px] sm:text-[26px] lg:text-[32px] font-semibold ml-6 sm:ml-10">
                  - Samuel Varughese
                </p>
                <div className="flex items-center gap-2 sm:gap-4 text-2xl sm:text-3xl lg:text-4xl mr-6 sm:mr-10">
                  <BsArrowLeftCircle />
                  <BsArrowRightCircle />
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="rounded-3xl bg-[#F2F4F6] p-4 sm:p-5">
              <img
                className="h-[300px] sm:h-[420px] md:h-[500px] lg:h-[568px] object-contain"
                src={user}
                alt="testimonial user"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-[30px] lg:gap-[60px]">
            {/* Text Card */}
            <div className="bg-[#F2F4F6] w-full lg:w-[881px] lg:h-[608px] rounded-3xl p-6 sm:p-10 md:p-14 lg:p-16">
              <span className="text-4xl sm:text-5xl lg:text-6xl text-[#B0DD1D]">
                <FaQuoteLeft />
              </span>
              <p className="text-[20px] sm:text-[24px] lg:text-[28px] mt-6 sm:mt-8 lg:mt-10">
                I had initial issue with stock availability and delivery. Once
                the product arrived on site the work has completed very fast
                (400ft.) Value for money and easy to install. Happy with the
                product.
              </p>
              <div
                className="relative p-0 h-28 sm:h-36 lg:h-40 -bottom-2 sm:-bottom-6 md:-bottom-18 rounded-3xl w-full flex items-center justify-between gap-4 sm:gap-10"
                style={{
                  backgroundImage: `url(${imgBg})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <p className="text-[20px] sm:text-[26px] lg:text-[32px] font-semibold ml-6 sm:ml-10">
                  - Samuel Varughese
                </p>
                <div className="flex items-center gap-2 sm:gap-4 text-2xl sm:text-3xl lg:text-4xl mr-6 sm:mr-10">
                  <BsArrowLeftCircle />
                  <BsArrowRightCircle />
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="rounded-3xl bg-[#F2F4F6] p-4 sm:p-5">
              <img
                className="h-[300px] sm:h-[420px] md:h-[500px] lg:h-[568px] object-contain"
                src={user}
                alt="testimonial user"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-[30px] lg:gap-[60px]">
            {/* Text Card */}
            <div className="bg-[#F2F4F6] w-full lg:w-[881px] lg:h-[608px] rounded-3xl p-6 sm:p-10 md:p-14 lg:p-16">
              <span className="text-4xl sm:text-5xl lg:text-6xl text-[#B0DD1D]">
                <FaQuoteLeft />
              </span>
              <p className="text-[20px] sm:text-[24px] lg:text-[28px] mt-6 sm:mt-8 lg:mt-10">
                I had initial issue with stock availability and delivery. Once
                the product arrived on site the work has completed very fast
                (400ft.) Value for money and easy to install. Happy with the
                product.
              </p>
              <div
                className="relative p-0 h-28 sm:h-36 lg:h-40 -bottom-2 sm:-bottom-6 md:-bottom-18 rounded-3xl w-full flex items-center justify-between gap-4 sm:gap-10"
                style={{
                  backgroundImage: `url(${imgBg})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <p className="text-[20px] sm:text-[26px] lg:text-[32px] font-semibold ml-6 sm:ml-10">
                  - Samuel Varughese
                </p>
                <div className="flex items-center gap-2 sm:gap-4 text-2xl sm:text-3xl lg:text-4xl mr-6 sm:mr-10">
                  <BsArrowLeftCircle />
                  <BsArrowRightCircle />
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="rounded-3xl bg-[#F2F4F6] p-4 sm:p-5">
              <img
                className="h-[300px] sm:h-[420px] md:h-[500px] lg:h-[568px] object-contain"
                src={user}
                alt="testimonial user"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
