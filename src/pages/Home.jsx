import React from "react";
import { Hero } from "../components/sections/Hero";
import AgriculturalProducts from "../components/sections/AgriculturalProducts";
import LandscapeProducts from "../components/sections/LandscapeProducts";
import Trusted from "../components/sections/Trusted";
import WhyUs from "../components/sections/WhyUs";
import Testimonial from "../components/sections/Testimonial";
import ContactUs from "../components/sections/ContactUs";
import MarqueeSection from "../components/sections/MarqueeSection";


export default function Home() {
  return (
    <div>
      <Hero />
      <AgriculturalProducts />
      <LandscapeProducts />
      <Trusted />
      <WhyUs />
      <MarqueeSection />
      <Testimonial />
      <ContactUs />
    </div>
  );
}
