
import React from 'react'
import Image from "next/image";
import { Contact } from '../../data/Contact';
export default function ContactUs() {
  return (
    <>
      <section className="w-full">
        <section className="w-full lg:w-4/5 mx-auto  lg:p-10">
          <div className="flex flex-col lg:flex-row gap-2 lg:gap-10 justify-center ">
            {Contact.map((item, index,) => (
              <div key={index} className="flex border border-spacing-1 p-1 lg:w-1/2 xl:w-1/4  mo:m-auto">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={50}
                  height={30}
                  className=""
                />
                <div className="ml-2 lg:ml-4 ">
                  <p className="text-black text-xs lg:text-sm">{item.description}</p>
                  <h5 className="text-sm lg:text-base font-bold ">{item.title}</h5>
                  <h5 className="text-sm lg:text-base font-bold ">{item.title1}</h5>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
    </>
  )
}
