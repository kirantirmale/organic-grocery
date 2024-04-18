import React from 'react'
import AboutHome from '../components/AboutHome'
import Subscribe from '@/app/components/home/Subscribe'
import Cart from '@/app/components/Cart/ShoppingCart'



export default function ShoppingCart() {
    return (
        <>
            <AboutHome Title="Cart" heading='Shopping cart' subheading='' />
            <Cart />
            <Subscribe />
        </>
    )
}

