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
import { useEffect, useState } from "react";

export default function LandscapeProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/landscapeProducts.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Failed to fetch products", error));
  }, []);
  return (
    <div className="max-w-7xl mx-auto mt-[100px] px-4 sm:px-6 lg:px-0">
      <div className="mb-[30px]">
        <SectionTitle title={"Landscape Products"} />
      </div>

      <>
        {products.length > 0 && (
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
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </>
    </div>
  );
}
