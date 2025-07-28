import React from "react";
import badge from "../../assets/badge.png";
import user from "../../assets/user.png";
import hex from "../../assets/hex.png";
import Button from "../common/Button";
export default function WhyUs() {
  return (
    <div className="max-w-7xl mx-auto mt-[100px]">
      <div className="text-center">
        <h2 className="text-[42px] font-medium">Why Us</h2>
        <p className="text-xl mt-[30px] mb-[110px] max-w-[840px] mx-auto">
          We specialize in delivering durable and innovative fencing solutions
          built to last. With a focus on quality and trust, we help secure
          spaces across industries and communities.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {/* Card 1 */}
        <div className="relative bg-[#F2F4F6] px-10 pt-[30px] pb-[15px] rounded-3xl w-[400px] overflow-hidden">
          <div
            className="absolute -top-10 -right-10 w-[250px] h-[250px] rounded-full pointer-events-none z-0 blur-[100px]"
            style={{
              background:
                "radial-gradient(circle, rgba(27,127,225) 0%, transparent 90%)",
            }}
          />

          <div className="relative z-10">
            <img className="w-[49px]" src={badge} alt="" />
            <h3 className="text-[26px] font-medium mt-[30px] mb-5">
              Unmatched Durability with Corrosion-Free Technology
            </h3>
            <p className="text-[17px]">
              Our JF-270 barbed wire features a robust 270 GSM zinc coating,
              ensuring superior resistance against rust and corrosion. Paired
              with stainless steel binding wire, our fencing solutions are
              designed to withstand harsh environmental conditions, offering
              longevity and reliability.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative bg-[#002B55] px-10 pt-[30px] pb-[15px] rounded-3xl w-[400px] overflow-hidden bottom-20">
          <div
            className="absolute -top-10 -right-10 w-[250px] h-[250px] rounded-full pointer-events-none z-0 blur-[100px]"
            style={{
              background:
                "radial-gradient(circle, rgba(27,127,225) 0%, transparent 90%)",
            }}
          />

          <div className="relative z-10 text-white">
            <img className="w-[49px]" src={user} alt="" />
            <h3 className="text-[26px] font-medium mt-[30px] mb-5">
              Customer-Centric Approach
            </h3>
            <p className="text-[17px]">
              At JF Products, customer satisfaction is paramount. We pride
              ourselves on delivering timely services, maintaining transparent
              communication, and ensuring a seamless purchasing experience. Our
              commitment to excellence is reflected in the positive feedback
              from our valued clients.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative bg-[#F2F4F6] px-10 pt-[30px] pb-[15px] rounded-3xl w-[400px] overflow-hidden">
          <div
            className="absolute -top-10 -right-10 w-[250px] h-[250px] rounded-full pointer-events-none z-0 blur-[100px]"
            style={{
              background:
                "radial-gradient(circle, rgba(27,127,225) 0%, transparent 90%)",
            }}
          />

          <div className="relative z-10">
            <img className="w-[49px]" src={hex} alt="" />
            <h3 className="text-[26px] font-medium mt-[30px] mb-5">
              Innovative and Diverse Product Range
            </h3>
            <p className="text-[17px]">
              We offer a wide array of fencing solutions, including Polyhex
              Mesh, Australian Trellis, and GI Poultry Mesh, catering to various
              needs from agricultural to residential applications. Our products
              combine functionality with aesthetic appeal, ensuring both
              security and style.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-[30px]">
        <Button
          width={"w-[160px]"}
          height={"h-[50px]"}
          textSize={"text-lg"}
          text={"Contact Us"}
        />
      </div>
    </div>
  );
}
