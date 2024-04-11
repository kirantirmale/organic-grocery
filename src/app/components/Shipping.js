import React from 'react'
import Image from "next/image";
export default function Shipping() {
    return (
        <>
            <section className="free width100">
                <section className=" width80 p-10">
                    <div className="flex gap-10 justify-center">
                        <div className="flex border border-spacing-1 p-2">
                            <Image
                                src="/truck.png"
                                alt=""
                                width={70}
                                height={70}
                                className="-ml-11"
                            />
                            <div className="">
                                <h5>Free Shipping.</h5>
                                <p className="text-black">No one rejects, dislikes.</p>
                            </div>
                        </div>
                        <div className="flex  border border-spacing-1  p-2">
                            <Image
                                src="/natural.png"
                                alt=""
                                width={70}
                                height={70}
                                className="-ml-11"
                            />
                            <div className="">
                                <h5>Free Shipping.</h5>
                                <p className="text-black">No one rejects, dislikes.</p>
                            </div>
                        </div>
                        <div className="flex  border border-spacing-1  p-2">
                            <Image
                                src="/retry.png"
                                alt=""
                                width={70}
                                height={70}
                                className="-ml-11"
                            />
                            <div className="">
                                <h5>Free Shipping.</h5>
                                <p className="text-black">No one rejects, dislikes.</p>
                            </div>
                        </div>
                        <div className="flex  border border-spacing-1  p-2">
                            <Image
                                src="/wallate.png"
                                alt=""
                                width={70}
                                height={70}
                                className="-ml-11"
                            />
                            <div className="">
                                <h5>Free Shipping.</h5>
                                <p className="text-black">No one rejects, dislikes.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}
