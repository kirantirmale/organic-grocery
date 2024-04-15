import React from 'react'

import Image from "next/image";
import { Blogimages, blogs } from '../../data/Blog';
export default function AboutBlogs() {
  return (
   <>
     <section className='width100 flex  men'>
                <section className=' width80 flex flex-col justify-center gap-16 pb-10' >
                    <div className='flex pt-10 justify-center'>

                        <div className='flex flex-col gap-5 justify-center'>
                            <p className="bgcolor text-white  w-40  text-center rounded-md">Our Trusted Partner</p>
                            <h1 className='text-4xl text-orange-600 font-bold '>We have 523+ more  <br /> trusted partner</h1>
                            <p>There are many variations of passages of Lorem <br /> Ipsum available, but the majority.</p>
                            <button className="btn4 p-3 rounded-md bg-orange-500  text-white w-40 ">Become a Partner</button>
                        </div>

                        <div className='m-auto grid grid-cols-4 gap-14 '>
                            {Blogimages.map((image, index) => (
                                <Image key={index} src={image} alt="img" width={170} height={75} />
                            ))}
                        </div>

                    </div>
                </section>
            </section>
   </>
  )
}
