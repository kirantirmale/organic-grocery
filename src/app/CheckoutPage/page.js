import React from 'react'
import AboutHome from '../components/AboutHome'
import Subscribe from '@/app/components/home/Subscribe'
import Cart from '@/app/components/Cart/ShoppingCart'
import Checkout from '@/app/components/Checkout/Checkout'



export default function ShoppingCart() {
    return (
        <>
            <AboutHome Title="Checkout" heading='Checkout page' subheading='' />
            <Checkout />
            <Subscribe />
        </>
    )
}

