import React from 'react'

export default function AboutHome({Title,heading,subheading}) {
  return (
    <>
      <section className='width100 about'>
        <section className='width80'>
          <div className='text-center flex flex-col gap-4 items-center justify-center p-20'>
            <h1 className='text-3xl font-bold text-lime-600'>
              {heading}
            </h1>
            <p className='text-xl'>Home - {subheading}<span className='text-orange-500'> {Title}</span></p>
          </div>
        </section>
      </section>
    </>
  )
}
