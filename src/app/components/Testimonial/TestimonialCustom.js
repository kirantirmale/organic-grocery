import React from 'react';
import Image from 'next/image';
import { customers9 } from '../../data/Custo';
import Link from 'next/link';

export default function TestimonialCustomers() {
  return (
    <>
      <section className="width100">
        <section className="width80">
          <div className="Customers-down md:grid-cols-2 lg:grid-cols-3 mo:grid-cols-1 grid gap-10 pt-10 pb-10 justify-center">
            {customers9.map((customer, index) => (
              <div key={index} className="mask border cursor-pointer rounded text-center p-2 transition-colors duration-300 hover:bg-lime-600">
                <div className="maskk bg-white flex flex-col gap-5 p-6">
                  <div className='bg-black m-auto p-4 rounded-full Mask'>
                    <Image
                      src={customer.image}
                      alt={customer.alt}
                      width={25}
                      height={30}
                      className="m-auto"
                    />
                  </div>
                  <p className="text-sm">{customer.text}</p>
                  <div className="text-center flex flex-col gap-1">
                    <Image
                      src={customer.avatar}
                      alt=""
                      width={50}
                      height={50}
                      className="m-auto"
                    />
                    <h1 className="font-bold">{customer.name}</h1>
                    <p className="text-sm">{customer.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
    </>
  );
}
