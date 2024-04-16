import React from 'react';
import { Team } from '../../data/Team';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
export default function OurTeams() {
    return (
        <section className="w-full flex flex-col justify-center">
            <section className="w-4/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 pb-20 pt-20">
                {Team.map((teamMember, index) => (
                    <Link href='' key={index} className="bg-white rounded-lg border relative shadow-lg p-2 hover:border-lime-500">
                        <Image
                            src={teamMember.image}
                            alt={teamMember.alt}
                            width={310}
                            height={30}
                            className="m-auto"
                        />
                        <div className="p-4 text-center">
                            <h2 className="text-lg font-bold">{teamMember.name}</h2>
                            <p className="text-gray-600">{teamMember.role}</p>
                            <div className="mt-4 flex justify-center space-x-3">
                                <div className="absolute top-0 pt-56 mt-1 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                                    <div className="flex bg-lime-600 text-center  gap-2 pl-2 rounded pt-1 pb-1">
                                        <div className="social-icons flex">
                                            <FaFacebook className="icon mx-1 text-white text-base lg:text-2xl" />
                                            <FaInstagram className=" rounded-full mx-1 text-white text-base lg:text-2xl" />
                                            <FaTwitter className="rounded-full mx-1 text-white text-base lg:text-2xl" />
                                            <FaLinkedin className="rounded-full mx-1 text-white text-base lg:text-2xl" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </section>
            {/* <div className='text-center mb-10'>
        <Link href='/pages/ContactUsPage'> Don’t find your answer?<span className='text-xl font-bold text-lime-600'> Contact us</span></Link>
        </div> */}
        </section>
    );
}
