import React from "react";
import Marquee from "react-fast-marquee";
import marq from "../../assets/marq.svg";
export default function MarqueeSection() {
  return (
    <div className="bg-[#D9ECFF] py-4 mt-[100px] border -skew-y-5">
      <Marquee pauseOnHover={true} speed={200} className="space-x-10">
        <div className="ml-20 flex items-center gap-10">
          <img src={marq} alt="" />
          <h3 className="text-[32px] font-medium">Quality Product</h3>
        </div>
        <div className="ml-20 flex items-center gap-10">
          <img src={marq} alt="" />
          <h3 className="text-[32px] font-medium">Shipping across India</h3>
        </div>
        <div className="ml-20 flex items-center gap-10">
          <img src={marq} alt="" />
          <h3 className="text-[32px] font-medium">Quality Product</h3>
        </div>
        <div className="ml-20 flex items-center gap-10">
          <img src={marq} alt="" />
          <h3 className="text-[32px] font-medium">Shipping across India</h3>
        </div>
      </Marquee>
    </div>
  );
}
