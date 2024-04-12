import React from 'react'
import Image from "next/image";
export default function Blogs() {
    return (
        <>
            <section className='width100 flex  men'>
                <section className=' width80 flex flex-col justify-center gap-16 pb-10' >
                    <div className=' flex flex-col gap-5'>
                        <p className="bgcolor text-white  w-40 m-auto text-center rounded-md">Latest News & Blogs</p>
                        <h1 className='text-4xl text-orange-600 font-bold text-center'>Most Popular News <br /> & Top Blogs</h1>
                    </div>

                    <div className='flex flex-row gap-16  justify-between'>
                        <div className='p-3 flex flex-col gap-2 border rounded-lg blog relative hover:border-orange-500 gro  group'>
                            <Image
                                src="/carrate.png"
                                alt=""
                                width={360}
                                height={20}
                                className=""
                            />
                            <div className='p-3 flex flex-col gap-2'>
                                <h1 className='text-lg font-bold'>Reasons to Include Organic Fennel
                                    <br />
                                    in Your Diet</h1>
                                <p className='text-sm text-slate-400'>
                                    Lorem ipsum dolor sit nad amet, consectetur
                                    adipiscing elit.
                                </p>
                                <hr />
                                <div className=''>
                                    <Image
                                        src="/admin.png"
                                        alt=""
                                        width={220}
                                        height={90}
                                        className=""
                                    />
                                </div>
                            </div>
                            {/* Arrow */}
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


                        <div className='p-3 flex flex-col gap-2 border rounded-lg blog relative hover:border-orange-500 gro  group'>

                            <Image
                                src="/bit.png"
                                alt=""
                                width={360}
                                height={20}
                                className=""
                            />
                            <div className='p-3 flex flex-col gap-2'>

                                <h1 className='text-lg font-bold'>Healthy Snacks to Get You Through
                                    <br />
                                    the Work Day</h1>
                                <p className='text-sm text-slate-400'>
                                    Lorem ipsum dolor sit nad amet, consectetur
                                    adipiscing elit.
                                </p>
                                <hr />
                                <div className=''>
                                    <Image
                                        src="/admin.png"
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
                        <div className='p-3 flex flex-col gap-2 border rounded-lg blog relative hover:border-orange-500 gro  group'>

                            <Image
                                src="/honny.png"
                                alt=""
                                width={360}
                                height={20}
                                className=""
                            />
                            <div className='p-3 flex flex-col gap-2'>

                                <h1 className='text-lg font-bold'>Discover a new way to shop for
                                    <br />
                                    fresh & healthy food!</h1>
                                <p className='text-sm text-slate-400'>
                                    Lorem ipsum dolor sit nad amet, consectetur
                                    adipiscing elit.
                                </p>

                                <hr />
                                <div className=''>
                                    <Image
                                        src="/admin.png"
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

                    </div>
                    <div className='m-auto'>
                        <button className="border border-orange-600 p-3 rounded-md bg-white text-orange-600 font-bold  m-auto">View All Blogs</button>
                    </div>
                    <div className='flex pt-10 '>
                        <div className='flex flex-col gap-5'>
                            <p className="bgcolor text-white  w-40  text-center rounded-md">Our Trusted Partner</p>
                            <h1 className='text-4xl text-orange-600 font-bold '>We have 523+ more  <br /> trusted partner</h1>
                            <p>There are many variations of passages of Lorem <br/> Ipsum available, but the majority.</p>
                            <button className="btn4 p-3 rounded-md bg-orange-500  text-white w-40 ">Become a Partner</button>
                        </div>
                        <div className='m-auto grid grid-cols-4 gap-14'>
                            <Image src="/logo_01.png" alt="img" width={170} height={75}/>
                            <Image src="/logo_02.png" alt="img" width={170} height={75}/>
                            <Image src="/logo_03.png" alt="img" width={170} height={75}/>
                            <Image src="/logo_04.png" alt="img" width={170} height={75}/>
                            <Image src="/logo_05.png" alt="img" width={170} height={75}/>
                            <Image src="/logo_06.png" alt="img" width={170} height={75}/>
                            <Image src="/logo_01.png" alt="img" width={170} height={75}/>
                            <Image src="/logo_02.png" alt="img" width={170} height={75}/>
                            <Image src="/logo_03.png" alt="img" width={170} height={75}/>
                            <Image src="/logo_04.png" alt="img" width={170} height={75}/>
                            <Image src="/logo_05.png" alt="img" width={170} height={75}/>
                            <Image src="/logo_06.png" alt="img" width={170} height={75}/>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}
