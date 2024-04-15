import React from 'react'
import AboutHome from '../../components/About/AboutHome'
import Subscribe from '@/app/components/home/Subscribe'
import ContactUs from '@/app/components/ContactUs/ContactUs'
import ContactForm from '@/app/components/ContactUs/ContactForm'


export default function ContactUsPage() {
  return (
    <>
      <AboutHome Title="Contact Us" heading='Contact with us any time' />
      <ContactUs />
      <ContactForm/>
      <Subscribe />
    </>
  )
}
