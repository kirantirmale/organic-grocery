import React from "react";
import Image from "next/image";

export default function HomePage() {
    return (
        <>
            {/* -----------------page-1------------------------------ */}
            <section className="home w-full">
                <div className="flex flex-col lg:flex-row justify-center lg:gap-1">
                    <div className="home-left flex flex-col justify-between ">

                        <div className="pl-6 lg:pl-24 pt-4 lg:pt-16 ">
                            <Image
                                src="/patta.png"
                                alt="Company Logo"
                                width={90}
                                height={70}
                                className='sm:hidden m-auto '
                            />
                        </div>

                        <div className="block lg:hidden m-auto ">
                            <Image
                                src="/delivery-boy.png"
                                alt="Delivery Boy"
                                width={270}
                                height={90}
                                className="mx-auto"
                            />
                        </div>

                        <div className="hidden lg:block ">
                            <Image
                                src="/delivery-boy.png"
                                alt="Delivery Boy"
                                width={270}
                                height={90}
                            />
                        </div>

                    </div>

                    <div className="home-center flex flex-col justify-start gap-3 mo:text-center lg:w-1/3 lg:pt-5 lg:pb-5 mt-28">
                        <p className="bgcolor lg:ml-0 text-white p-1 lg:w-48 md:w-48 mo:text-center mo:w-48 md:m-auto  mo:m-auto text-center rounded-md w-36 hp">We are more than faster</p>
                        <h1 className="textcolor text-3xl lg:text-5xl font-bold md:text-center lg:text-start">The right store with The right Price</h1>
                        <p className="text-lg font-normal md:text-center  lg:text-start">Lorem ipsum dolor sit amen, consectetur adipescent alit, sed do eiusmod tempor incident ut labored et dolore magna aliquant. Et ejecta's quiz.</p>
                        <button className="btn5 p-3 rounded-md bg-orange-500 md:m-auto mo:m-auto mo:text-center mo:w-48 lg:ml-0 text-white w-24 md:w-28 lg:w-28">Shop Now</button>
                    </div>
                    <div className="home-right flex lg:w-1/3 lg:pt-5 lg:pb-5 md:m-auto">
                        <div className="mt-6 lg:mt-20">

                            <Image
                                src="/img-home.png"
                                alt=""
                                width={520}
                                height={130}
                                className="mx-auto "
                            />

                        </div>
                    </div>
                    {/* <div className="block lg:hidden">
                        <Image
                            src="/delivery-boy.png"
                            alt="Delivery Boy"
                            width={270}
                            height={90}
                            className="mx-auto"
                        />
                    </div> */}
                </div>
            </section>



        </>
    );
}
