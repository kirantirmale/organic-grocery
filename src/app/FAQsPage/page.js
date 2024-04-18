import React from 'react'
import AboutHome from '../components/AboutHome'
import Subscribe from '@/app/components/home/Subscribe'
import PageFAQs from '@/app/components/FAQs/PageFAQs'


export default function FAQsPage() {
  return (
   <>
   <AboutHome Title="FAQs" heading='Do You Have Any Question?'/>
   <PageFAQs/>
   <Subscribe />
   </>
  )
}
