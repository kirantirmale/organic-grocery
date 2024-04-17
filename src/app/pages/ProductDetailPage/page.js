import React from 'react'
import AboutHome from '../../components/AboutHome'
import Subscribe from '@/app/components/home/Subscribe'
import ProductDetail from '@/app/components/ProductDetail/ProductDetail'
import RelatedProduct from '@/app/components/ProductDetail/RelatedProduct'
import ProductDescription from '@/app/components/ProductDetail/ProductDescription'


export default function BlogDetailPage() {
  return (
    <>
      <AboutHome Title="Shop" heading='Our organic products' subheading='' />
      <ProductDetail/>
      <ProductDescription/>
      <RelatedProduct/>
      <Subscribe />
    </>
  )
}

