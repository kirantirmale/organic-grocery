import React from 'react'
import Image from "next/image";
import Link from 'next/link';
export default function ThankYou() {
  return (
    <>
      <div className='pt-20 pb-20'>


        <section className='width100 mt-20 mb-20 thank'>
          <section className='width80 flex flex-col gap-5'>
            <div className='m-auto flex justify-center'>
              <Image
                src="/ThankYou.png"
                alt=""
                width={280}
                height={216}
                className=""
              />
            </div>
            <div className='m-auto flex justify-center'>
              <h1 className='text-lime-700 text-2xl'> We Have Received Your Payment Successfully.</h1>
            </div>
            <div className='m-auto flex justify-center'>
              It is a long established fact that a reader will be distracted b
              <br />
              the readable content of a page when looking at its layout.
            </div>
            <div className=" flex  justify-center m-auto">

              <Link href='#' className="bg-lime-700 text-center text-white px-4 font-bold py-3 rounded-lg ml-2 md:ml-0 mt-2 md:mt-0 md:inline-block md:items-center">
                Continue Shopping
              </Link>

            </div>
          </section>
        </section>
      </div>
    </>
  )
}
