import React from 'react'
import AboutHome from '../../components/AboutHome'
import Subscribe from '@/app/components/home/Subscribe'
import ContactForm from '@/app/components/ContactUs/ContactForm'
import BlogDetails from '@/app/components/BlogDetail/BlogsDetail'
import OurTeams from '@/app/components/OurTeams/Teams'


export default function BlogDetailPage() {
  return (
    <>
      <AboutHome Title="" heading='Meet our team member' subheading='Our Team' />
      <OurTeams/>
      <Subscribe />
    </>
  )
}

