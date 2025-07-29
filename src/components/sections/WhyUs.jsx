import React from "react";
import badge from "../../assets/badge.png";
import user from "../../assets/user.png";
import hex from "../../assets/hex.png";
import Button from "../common/Button";

export default function WhyUs() {
  return (
    <div className="max-w-7xl mx-auto mt-[60px] px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl sm:text-[36px] md:text-[42px] font-medium">Why Us</h2>
        <p className="text-base sm:text-lg md:text-xl mt-5 mb-20 max-w-[840px] mx-auto">
          We specialize in delivering durable and innovative fencing solutions
          built to last. With a focus on quality and trust, we help secure
          spaces across industries and communities.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
        {/* Card 1 */}
        <div className="relative bg-[#F2F4F6] px-6 sm:px-8 md:px-10 pt-6 sm:pt-8 md:pt-[30px] pb-4 rounded-3xl w-full max-w-[400px] mx-auto overflow-hidden">
          <div
            className="absolute -top-10 -right-10 w-[250px] h-[250px] rounded-full pointer-events-none z-0 blur-[100px]"
            style={{
              background:
                "radial-gradient(circle, rgba(27,127,225) 0%, transparent 90%)",
            }}
          />
          <div className="relative z-10">
            <img className="w-[40px] sm:w-[45px] md:w-[49px]" src={badge} alt="" />
            <h3 className="text-lg sm:text-xl md:text-[26px] font-medium mt-5 mb-4">
              Unmatched Durability with Corrosion-Free Technology
            </h3>
            <p className="text-sm sm:text-base md:text-[17px]">
              Our JF-270 barbed wire features a robust 270 GSM zinc coating,
              ensuring superior resistance against rust and corrosion. Paired
              with stainless steel binding wire, our fencing solutions are
              designed to withstand harsh environmental conditions, offering
              longevity and reliability.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative bg-[#002B55] px-6 sm:px-8 md:px-10 pt-6 sm:pt-8 md:pt-[30px] pb-4 rounded-3xl w-full max-w-[400px] mx-auto overflow-hidden md:bottom-13">
          <div
            className="absolute -top-10 -right-10 w-[250px] h-[250px] rounded-full pointer-events-none z-0 blur-[100px]"
            style={{
              background:
                "radial-gradient(circle, rgba(27,127,225) 0%, transparent 90%)",
            }}
          />
          <div className="relative z-10 text-white">
            <img className="w-[40px] sm:w-[45px] md:w-[49px]" src={user} alt="" />
            <h3 className="text-lg sm:text-xl md:text-[26px] font-medium mt-5 mb-4">
              Customer-Centric Approach
            </h3>
            <p className="text-sm sm:text-base md:text-[17px]">
              At JF Products, customer satisfaction is paramount. We pride
              ourselves on delivering timely services, maintaining transparent
              communication, and ensuring a seamless purchasing experience. Our
              commitment to excellence is reflected in the positive feedback
              from our valued clients.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative bg-[#F2F4F6] px-6 sm:px-8 md:px-10 pt-6 sm:pt-8 md:pt-[30px] pb-4 rounded-3xl w-full max-w-[400px] mx-auto overflow-hidden">
          <div
            className="absolute -top-10 -right-10 w-[250px] h-[250px] rounded-full pointer-events-none z-0 blur-[100px]"
            style={{
              background:
                "radial-gradient(circle, rgba(27,127,225) 0%, transparent 90%)",
            }}
          />
          <div className="relative z-10">
            <img className="w-[40px] sm:w-[45px] md:w-[49px]" src={hex} alt="" />
            <h3 className="text-lg sm:text-xl md:text-[26px] font-medium mt-5 mb-4">
              Innovative and Diverse Product Range
            </h3>
            <p className="text-sm sm:text-base md:text-[17px]">
              We offer a wide array of fencing solutions, including Polyhex
              Mesh, Australian Trellis, and GI Poultry Mesh, catering to various
              needs from agricultural to residential applications. Our products
              combine functionality with aesthetic appeal, ensuring both
              security and style.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center mt-10 sm:mt-[30px]">
        <Button
          width="w-[140px] sm:w-[150px] md:w-[160px]"
          height="h-[45px] sm:h-[48px] md:h-[50px]"
          textSize="text-sm sm:text-base md:text-lg"
          text="Contact Us"
          className="mx-auto"
        />
      </div>
    </div>
  );
}
