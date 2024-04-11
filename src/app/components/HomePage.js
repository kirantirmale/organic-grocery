import React from "react";
import Image from "next/image";

export default function HomePage() {
    return (
        <>
            {/* -----------------page-1------------------------------ */}
            <section className="home width100">
                <div className="flex justify-center gap-16">
                    <div className="home-left flex flex-col justify-between ">

                        <div className="pl-24 pt-16">
                            <Image
                                src="/patta.png"
                                alt="Company Logo"
                                width={90}
                                height={70}
                            />
                        </div>

                        <div>
                            <Image
                                src="/delivery-boy.png"
                                alt="Delivery Boy"
                                width={270}
                                height={90}
                            />
                        </div>

                    </div>
                    <div className="home-center flex flex-col justify-center gap-9 w-1/3  pt-5 pb-5">
                        <p className="bgcolor text-white p-1 w-48 text-center rounded-md">We are more than faster</p>
                        <h1 className="textcolor text-5xl font-bold">The right store with The right Price</h1>
                        <p className="text-lg font-normal">Lorem ipsum dolor sit amen, consectetur adipescent alit, sed do eiusmod tempor incident ut labored et dolore magna aliquant. Et ejecta's quiz.</p>
                        <button className="btn4 p-3 rounded-md bg-orange-500 text-white w-28">Shop Now</button>
                    </div>
                    <div className="home-right flex  pt-5 pb-5 ">
                        <div className="mt-20 ">


                            <Image
                                src="/img-home.png"
                                alt=""
                                width={520}
                                height={130}

                            />

                        </div>
                    </div>
                </div>
            </section>
            

            
        </>
    );
}
