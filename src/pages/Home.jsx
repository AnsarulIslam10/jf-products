import React from "react";
import { Hero } from "../components/sections/Hero";
import AgriculturalProducts from "../components/sections/AgriculturalProducts";
import LandscapeProducts from "../components/sections/LandscapeProducts";
import Trusted from "../components/sections/Trusted";
import WhyUs from "../components/sections/WhyUs";

export default function Home() {
  return (
    <div>
      <Hero />
      <AgriculturalProducts />
      <LandscapeProducts />
      <Trusted />
      <WhyUs />
    </div>
  );
}
