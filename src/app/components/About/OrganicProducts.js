import React from 'react'
import Image from "next/image";
export default function OrganicProducts() {
  return (
    <>
      <section className='w-full '>
        <section className='w-full lg:w-4/5 mx-auto p-5 lg:p-10'>
          <div className='flex flex-col lg:flex-row justify-center lg:gap-10'>
            <div className='lg:w-1/2'>
              <Image
                src="/tamater.png"
                alt=""
                width={698}
                height={90}
                className=""
              />
            </div>

            <div className='lg:w-1/2 flex flex-col gap-5 pl-0 lg:pl-10 justify-center'>
              <div className='flex flex-col gap-2'>
                <h1 className='text-3xl lg:text-4xl font-bold'>We believe in pure and <br />
                  organic quality Products</h1>
                <p className='text-sm lg:text-base text-slate-400'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam inta <br /> nonumy eirmod tempor invidunt ut labore. Lorem ipsum dolor sit amet,<br /> consetetur sadipscing elitr, sed diam.</p>
              </div>
              <div className='flex flex-col lg:flex-row gap-2'>

                <div className=''>
                  <h1 className='font-bold'>Organic Products</h1>
                  <p className='text-sm lg:text-base text-slate-400'>There are many variations passages Lorem Ipsum available, but we are the majority have suffered alteration..</p>
                </div>
                <div className=''>
                  <h1 className='font-bold'>50+ Delivery Partner</h1>
                  <p className='text-sm lg:text-base text-slate-400'>There are many variations passages Lorem Ipsum available, but we are the majority have suffered alteration..</p>
                </div>

              </div>
              <div className='flex flex-col gap-3'>

                <div className='flex flex-col lg:flex-row gap-2 md:flex-row mo:flex-row'>
                  <Image
                    src="/paytm.png"
                    alt=""
                    width={20}
                    height={90}
                    className=""
                  />
                  <p className='text-sm lg:text-base text-slate-400'>Emergency  time is one hour or less .</p>
                </div>
                <div className='flex flex-col lg:flex-row gap-2 md:flex-row mo:flex-row'>
                  <Image
                    src="/paytm.png"
                    alt=""
                    width={20}
                    height={90}
                    className=""
                  />
                  <p className='text-sm lg:text-base text-slate-400'>Until the eleifend elit is a lot of great .</p>
                </div>
                <div className='flex flex-col lg:flex-row md:flex-row mo:flex-row gap-2'>
                  <Image
                    src="/paytm.png"
                    alt=""
                    width={20}
                    height={90}
                    className=""
                  />
                  <p className='text-sm lg:text-base text-slate-400'>Lorem Ipsum is simply dummy text</p>
                </div>


              </div>

              <div className='flex flex-col lg:flex-row gap-2'>

                <div className=''>
                  <Image
                    src="/co.png"
                    alt=""
                    width={40}
                    height={90}
                    className=""
                  />
                </div>
                <div className=''>
                  <h1 className='font-bold text-sm lg:text-base'>Adam Andreson</h1>
                  <p className='text-sm lg:text-base text-slate-400'>CEO and Founder</p>
                </div>

              </div>
            </div>
          </div>
        </section>

      </section>
    </>
  )
}
