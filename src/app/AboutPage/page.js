import React from 'react'
import AboutHome from '../components/AboutHome'
import Subscribe from '../components/home/Subscribe'
import AboutBlogs from '../components/About/AboutBlogs'
import AboutShipping from '../components/About/AboutShipping'
import AboutVegetables from '../components/About/AboutVegetables'
import AboutCustomers from '../components/About/AboutCustomers'
import AboutApp from '../components/About/AboutApp'
import OrganicProducts from '../components/About/OrganicProducts'
import Store from '../components/About/Store'

export default function AboutPage() {
  return (
    <>
      <AboutHome Title="About Us" heading='Learn more about us' subheading=''/>
      <OrganicProducts/>
      <Store/>
      <AboutShipping/>
      <AboutVegetables/>
      <AboutCustomers/>
      <AboutApp/>
      <AboutBlogs />
      <Subscribe />
    </>
  )
}
