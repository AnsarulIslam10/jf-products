import React from 'react'
import { Hero } from '../components/sections/Hero'
import AgriculturalProducts from '../components/sections/AgriculturalProducts'
import LandscapeProducts from '../components/sections/LandscapeProducts'

export default function Home() {
  return (
    <div>
        <Hero />
        <AgriculturalProducts />
        <LandscapeProducts />
    </div>
  )
}
