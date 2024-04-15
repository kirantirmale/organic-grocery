import React from 'react'
import Image from "next/image";
export default function Store() {
    return (
        <>
            <section className='width100 store-main pt-20 pb-20'>
                <section className='width80 store flex flex-col gap-6'>
                    <div className='flex flex-col items-center gap-6'>
                        <div className=''>
                            <div className='   bg-white p-8'>
                                <h1 className='font-bold text-center '>Launched our product on
                                    <br />
                                    28 Nov 2013</h1>
                            </div>
                            <Image
                                src="/Vector.png"
                                alt=""
                                width={23}
                                height={90}
                                className="m-auto"
                            />
                        </div>
                        <p className='bg-lime-700 text-center pl-3 pr-3 pt-1 pb-1 text-white rounded'>Lounch</p>
                    </div>
                    <div className=' flex relative flex-col gap-10'>
                        <Image
                            src="/linee.png"
                            alt=""
                            width={2}
                            height={10}
                            className="m-auto relative"
                        />

                        <div className='flex absolute translate-x-48 '>
                            <div className='w-96 flex flex-col bg-white text-right p-5 rounded items-end gap-2'>
                                <hr className="border-b-2 border-orange-600 w-12  " />
                                <h1 className='font-bold'>Started Our Online Store</h1>
                                <p className='text-slate-400'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece.</p>
                            </div>
                            <Image
                                src="/Vector2.png"
                                alt=""
                                width={23}
                                height={90}
                                className="m-auto"
                            />

                            <div className="bg-orange-600 p-1 rounded-full m-auto ml-5">
                                <div className=" bg-white p-2 rounded-full">
                                </div>
                            </div>

                            <div className='flex  flex-col align-middle m-auto ml-10'>
                                <h1 className='text-2xl font-bold text-orange-600'>20 November,2013</h1>
                            </div>
                        </div>


                        <div className='flex absolute translate-x-80 pt-48'>
                            <div className='flex  flex-col align-middle m-auto ml-10'>
                                <h1 className='text-2xl font-bold text-green-600'>05 December,2015</h1>
                            </div>

                            <div className="bg-green-600 p-1 rounded-full m-auto ml-14">
                                <div className=" bg-white p-2 rounded-full">
                                </div>
                            </div>

                            <Image
                                src="/Vector3.png"
                                alt=""
                                width={23}
                                height={90}
                                className="m-auto ml-10"
                            />
                            <div className='w-96 flex flex-col bg-white text-left p-5 rounded items-start gap-2'>
                                <hr className="border-b-2 border-green-600 w-12  " />
                                <h1 className='font-bold'>Hired 20 employee</h1>
                                <p className='text-slate-400'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece.</p>
                            </div>
                        </div>

                        <div className='flex absolute translate-x-48 mt-96'>
                            <div className='w-96 flex flex-col bg-white text-right p-5 rounded items-end gap-2'>
                                <hr className="border-b-2 border-orange-600 w-12  " />
                                <h1 className='font-bold'>Lounched 25+ more Products</h1>
                                <p className='text-slate-400'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece.</p>
                            </div>
                            <Image
                                src="/Vector2.png"
                                alt=""
                                width={23}
                                height={90}
                                className="m-auto"
                            />

                            <div className="bg-orange-600 p-1 rounded-full m-auto ml-5">
                                <div className=" bg-white p-2 rounded-full">
                                </div>
                            </div>

                            <div className='flex  flex-col align-middle m-auto ml-10'>
                                <h1 className='text-2xl font-bold text-orange-600'>07 June,2016</h1>
                            </div>
                        </div>


                        <div className='flex absolute translate-x-80 pt-48 mt-96'>
                            <div className='flex  flex-col align-middle m-auto ml-10'>
                                <h1 className='text-2xl font-bold text-green-600'>13 August ,2020</h1>
                            </div>

                            <div className="bg-green-600 p-1 rounded-full m-auto ml-20">
                                <div className=" bg-white p-2 rounded-full">
                                </div>
                            </div>

                            <Image
                                src="/Vector3.png"
                                alt=""
                                width={23}
                                height={90}
                                className="m-auto ml-10"
                            />
                            <div className='w-96 flex flex-col bg-white text-left p-5 rounded items-start gap-2'>
                                <hr className="border-b-2 border-green-600 w-12  " />
                                <h1 className='font-bold'>Open Second Store in NYC</h1>
                                <p className='text-slate-400'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece.</p>
                            </div>
                        </div>
                        <div className='flex flex-col items-center gap-6'>

                        <p className='bg-orange-600 text-center pl-3 pr-3 pt-1 pb-1 text-white rounded'>Lounch</p>
                        </div>
                    </div>

                </section>
            </section>
        </>
    )
}
