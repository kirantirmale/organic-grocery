import React from 'react'
import AboutHome from '../components/AboutHome'
import Subscribe from '@/app/components/home/Subscribe'
import ThankYou from '@/app/components/ThankYou/ThankYouPage'

export default function ThankYouPage() {
    return (
        <>
            <AboutHome Title="Thank You" heading='Thank You Page' subheading='' />
            <ThankYou />
            <Subscribe />
        </>
    )
}

