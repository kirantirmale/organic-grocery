import React from 'react'
import AboutHome from '../../components/AboutHome'
import Subscribe from '@/app/components/home/Subscribe'
import ContactForm from '@/app/components/ContactUs/ContactForm'
import BlogDetails from '@/app/components/BlogDetail/BlogsDetail'


export default function BlogDetailPage() {
  return (
    <>
      <AboutHome Title="Blog Detail" heading='Read our news and blogs' subheading='Our Blogs -' />
      <BlogDetails/>
      <Subscribe />
    </>
  )
}

