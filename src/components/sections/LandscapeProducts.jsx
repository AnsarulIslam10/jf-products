import ProductCard from "../common/ProductCard";
import SectionTitle from "../common/SectionTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";
export default function LandscapeProducts() {
  return (
    <div className="max-w-7xl mx-auto mt-[100px]">
      <div className="mb-[30px]">
        <SectionTitle title={"Landscape Products"} />
      </div>

      <>
        <Swiper
          spaceBetween={30}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
          breakpoints={{
            640: {
              // Tailwind sm
              slidesPerView: 1,
            },
            768: {
              // Tailwind md
              slidesPerView: 2,
            },
            1024: {
              // Tailwind lg
              slidesPerView: 3,
            },
            1280: {
              // Tailwind xl
              slidesPerView: 4,
            },
          }}
        >
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
}
