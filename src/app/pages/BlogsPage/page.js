import React from 'react'
import AboutHome from '../../components/AboutHome'
import Blogs from '@/app/components/Blogs/Blogs'
import Subscribe from '@/app/components/home/Subscribe'


export default function BlogsPage() {
  return (
   <>
   <AboutHome Title="Our Blogs" heading='Read our news and blogs'/>
   <Blogs/>
   <Subscribe />
   </>
  )
}
