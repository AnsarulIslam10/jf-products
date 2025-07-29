// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Autoplay } from "swiper/modules";

import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { FaQuoteLeft } from "react-icons/fa";
import imgBg from "../../assets/imgBg.png";
import user from "../../assets/testimonial.png";
export default function Testimonial() {
  return (
    <div className="max-w-7xl mx-auto mt-[100px]">
      <h2 className="text-[42px] font-medium text-center mb-10">
        Why Customers Love <span className="ml-5">Us?</span>
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
        <SwiperSlide className="">
          <div className="flex items-center justify-between gap-[60px]">
            <div className="bg-[#F2F4F6] w-[881px] h-[608px] rounded-3xl p-16">
              <span className="text-6xl text-[#B0DD1D]">
                <FaQuoteLeft />
              </span>
              <p className="text-[28px] mt-10">
                I had initial issue with stock availability and delivery. Once
                the product arrived on site the work has completed very
                fast(400ft.) Value for money and easy to install. Happy with the
                product
              </p>
              <div
                className="relative p-0 h-40 -bottom-12 rounded-3xl w-full flex items-center justify-between gap-10"
                style={{
                  backgroundImage: `url(${imgBg})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <p className="text-[32px] font-semibold ml-12">
                  - Samuel Varughese
                </p>
                <div className="flex items-center gap-4 text-4xl mr-12">
                  <BsArrowLeftCircle />
                  <BsArrowRightCircle />
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-[#F2F4F6] p-5">
              <img className="h-[568px]" src={user} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="flex items-center justify-between gap-[60px]">
            <div className="bg-[#F2F4F6] w-[881px] h-[608px] rounded-3xl p-16">
              <span className="text-6xl text-[#B0DD1D]">
                <FaQuoteLeft />
              </span>
              <p className="text-[28px] mt-10">
                I had initial issue with stock availability and delivery. Once
                the product arrived on site the work has completed very
                fast(400ft.) Value for money and easy to install. Happy with the
                product
              </p>
              <div
                className="relative p-0 h-40 -bottom-12 rounded-3xl w-full flex items-center justify-between gap-10"
                style={{
                  backgroundImage: `url(${imgBg})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <p className="text-[32px] font-semibold ml-12">
                  - Samuel Varughese
                </p>
                <div className="flex items-center gap-4 text-4xl mr-12">
                  <BsArrowLeftCircle />
                  <BsArrowRightCircle />
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-[#F2F4F6] p-5">
              <img className="h-[568px]" src={user} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="flex items-center justify-between gap-[60px]">
            <div className="bg-[#F2F4F6] w-[881px] h-[608px] rounded-3xl p-16">
              <span className="text-6xl text-[#B0DD1D]">
                <FaQuoteLeft />
              </span>
              <p className="text-[28px] mt-10">
                I had initial issue with stock availability and delivery. Once
                the product arrived on site the work has completed very
                fast(400ft.) Value for money and easy to install. Happy with the
                product
              </p>
              <div
                className="relative p-0 h-40 -bottom-12 rounded-3xl w-full flex items-center justify-between gap-10"
                style={{
                  backgroundImage: `url(${imgBg})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <p className="text-[32px] font-semibold ml-12">
                  - Samuel Varughese
                </p>
                <div className="flex items-center gap-4 text-4xl mr-12">
                  <BsArrowLeftCircle />
                  <BsArrowRightCircle />
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-[#F2F4F6] p-5">
              <img className="h-[568px]" src={user} />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
