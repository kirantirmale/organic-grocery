"use client";
import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <section className="main width100">
        <section className="container first-head flex mo:flex-col lg:flex-row justify-between lg:items-center width80 ">
          <div className="left-side text-white mb-4 lg:mb-0 lg:mr-4 lg:text-right">
            <p className="text-xs lg:text-sm">
              Welcome to the best TRoo Organic Grocery Store
            </p>
          </div>

          <div className="center text-white mb-4 lg:mb-0 lg:text-center mo:hidden lg:block">
            <p className="text-xs lg:text-base">50% Clearance Sale</p>
          </div>

          <div className="right-side flex items-center text-white lg:text-right mo:hidden lg:block ">
            <div>
              <p className="mr-2 text-xs lg:text-sm">Follow Us On</p>
            </div>
            <div className="social-icons flex">
              <FaFacebook className="icon mx-1 text-orange-500 text-base lg:text-2xl" />
              <FaInstagram className="iconn mx-1 text-base lg:text-2xl" />
              <FaTwitter className="iconn mx-1 text-base lg:text-2xl" />
              <FaLinkedin className="iconn mx-1 text-base lg:text-2xl" />
            </div>
          </div>
        </section>
      </section>

      {/* --------------second-head---------------------- */}

      <section className="width100">
        <section className="width80">
          <section className=" items-center justify-between py-4 md:py-6 grid mo:grid-1 lg:gap-10 md:gap-5 mo:gap-2 mo:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 ">

            <div className="flex items-center">
              <Image
                src="/logo.jpg"
                alt="Company Logo"
                className=""
                width={300}
                height={40}
              />
            </div>

            <div className="md:hidden mo:hidden lg:block">
              <div className="border flex border-orange-300 justify-between rounded p-1  mo:grid-cols-1  lg:grid-cols-2 lg:w-full md:w-1/2 m-auto">
                <input
                  type="text"
                  placeholder="Search Your Products"
                  className="focus:outline-none  w-full"
                />
                <button className="bg-orange-500 text-white px-4 py-2 rounded-lg lg:ml-2 md:ml-0 mt-2 mo:mt-0 md:mt-0 md:inline-block md:items-center lg:w-28">
                  Search
                </button>
              </div>
            </div>


            <div className=" items-center grid md:grid-cols-2 mo:grid-cols-1 gap-2 ">
              <div className=" md:flex mo:flex items-center mr-4 mo:hidden">
                <Image
                  src="/Icon.png"
                  alt="Company Logo"
                  className=""
                  width={30}
                  height={40}
                />
                <div className="flex flex-col ml-2">
                  <span>Call Us on</span>
                  <span className="text-lime-600">+44 123 456 7890</span>
                </div>
              </div>
              <div className="mo:flex md:flex items-center mo:hidden">
                <Image
                  src="/Icon(1).png"
                  alt="Company Logo"
                  className=""
                  width={30}
                  height={40}
                />
                <div className="flex flex-col ml-2">
                  <span>Email Us </span>
                  <span className="text-lime-600">info@troothemes.com</span>
                </div>
              </div>
            </div>
          </section>
        </section>
      </section>



      <section className="width80">
        <hr />
      </section>


      <section className="width80">
        <header className="text-dark items-center justify-between px-6 py-4 mo:text-center grid md:grid-cols-2 mo:grid-cols-2 lg:grid-cols-2 md:grid-rows-1 ">

          <div className="flex items-center space-x-4 ">
            <Link href="#" className="lg:hidden  md:block hover:text-green-800 text-right" onClick={toggleNavbar}>
              <svg className="h-6 w-6 text-gray-500 hover:text-green-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </Link>



            <nav className={`lg:flex space-x-6 md:grid-cols-2 grid mo:grid-col md:grid-col ${isOpen ? 'block' : 'hidden'}`}>


              <Link href="/" className="hover:text-green-800">Home</Link>

              <div className="relative">
                <Link href="/AboutPage" className="hover:text-green-800">About Us</Link>
              </div>

              <Link href="/ProductsPage" className="hover:text-green-800">
              Shop
                {/* <select id="weight-center" name="weight" className="w-16">
                  <option value="shop">Shop</option>
                  <option value="1kg">Product Page</option>
                  <option value="2kg">FaQs</option>
                  <option value="3kg">Team Page</option>
                </select> */}
              </Link>

              <Link href="/ProductDetailPage" className="hover:text-green-800">
              Product
                {/* <select id="product" name="weight" className="w-20">
                  <option value="shop">Product</option>
                  <option value="FaQs">FaQs</option>
                </select> */}
              </Link>

              <Link href="/TeamPage" className="hover:text-green-800">
              Pages
                {/* <select id="Pages" name="weight" className="w-16">
                  <option value="shop">Pages</option>
                  <option value="OurTeam">Our Team</option>
                  <option value="FAQsPage">FAQsPage</option>
                </select> */}
              </Link>

              <Link href="/BlogsPage" className="hover:text-green-800">Blogs</Link>

              <Link href="/ContactUsPage" className="hover:text-green-800">Contact Us</Link>

            </nav>
          </div>

          <div className="lg:grid-cols-3 items-center space-x-1 grid md:grid-cols-1 lg:ml-52 lg:w-2/4 mo:ml-10 mo:grid-cols-2">

            <Link href="#" className="hidden md:block hover:text-green-800 text-right">My Account</Link>

            <Link href="/TeamPage" className='flex flex-row justify-end'>
              <Image src="/Icon(2).png" alt="Company Logo" width={40} height={40} />
            </Link>

            <Link href="/ShoppingCart" className='flex flex-row justify-end'>
              <Image src="/Icon(3).png" alt="Company Logo" width={40} height={40} />
            </Link>
          </div>

        </header>
      </section>


    </>
  );
}
