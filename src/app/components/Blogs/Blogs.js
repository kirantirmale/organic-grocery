import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import { blogs2 } from '@/app/data/Blog'

export default function Blogs() {
  return (
    <>
      <section className='width100'>
        <section className='width80'>
          <div className='grid grid-cols-3 gap-16 justify-center blog mt-20 mb-20'>
            {blogs2.map((blog, index) => (
              <Link href={`/pages/BlogDetailPage?id=${blog.id}`} key={index}>
                <div className='p-3 cursor-pointer border rounded-lg blog relative hover:border-orange-500 group justify-center flex flex-col'>
                  <Image
                    src={blog.image}
                    alt={blog.alt}
                    width={360}
                    height={200} 
                    className="object-cover"
                  />
                  <div className='p-3 flex flex-col gap-2'>
                    <h1 className='text-lg font-bold'>{blog.title}</h1>
                    <p className='text-sm text-slate-400'>{blog.description}</p>
                    <hr />
                    <div>
                      <Image
                        src={blog.adminImage}
                        alt=""
                        width={220}
                        height={90}
                        className=""
                      />
                    </div>
                    <div className="absolute top-32 right-0 left-40 transform translate-x-2 -translate-y-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <Image
                        src="/aarow.png"
                        alt=""
                        width={40}
                        height={90}
                        className=""
                      />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </section>
    </>
  )
}
