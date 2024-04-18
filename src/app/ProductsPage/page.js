import React from 'react'
import AboutHome from '../components/AboutHome'
import Subscribe from '@/app/components/home/Subscribe'
import OurProducts from '@/app/components/OurProducts/OurProducts'
import FeaturedProduct from '@/app/components/OurProducts/FeaturedProduct'



export default function ProductsPage() {
  return (
    <>
      <AboutHome Title="Shop" heading='Our organic products' subheading='' />
      <OurProducts/>
      <FeaturedProduct/>
      <Subscribe />
    </>
  )
}

