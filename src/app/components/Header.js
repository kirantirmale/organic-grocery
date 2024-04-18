"use client";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router';

export default function Header() {

  return (
    <>
      <section className="main width100">
        <section className="container first-head flex flex-col lg:flex-row justify-between lg:items-center width80">
          <div className="left-side text-white mb-4 lg:mb-0 lg:mr-4 lg:text-right">
            <p className="text-xs lg:text-sm">
              Welcome to the best TRoo Organic Grocery Store
            </p>
          </div>

          <div className="center text-white mb-4 lg:mb-0 lg:text-center">
            <p className="text-xs lg:text-base">50% Clearance Sale</p>
          </div>

          <div className="right-side flex items-center text-white lg:text-right">
            <p className="mr-2 text-xs lg:text-sm">Follow Us On</p>
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
          <section className="flex items-center justify-between py-4 md:py-6">
            <div className="flex items-center">
              <Image
                src="/logo.jpg"
                alt="Company Logo"
                className=""
                width={300}
                height={40}
              />
            </div>

            <div className="">
              <div className="border border-orange-300 rounded p-1">
                <input
                  type="text"
                  placeholder="Search Your Products"
                  className="focus:outline-none w-auto"
                />
                <button className="bg-orange-500 text-white px-4 py-2 rounded-lg ml-2 md:ml-0 mt-2 md:mt-0 md:inline-block md:items-center">
                  Search
                </button>
              </div>
            </div>


            <div className="flex items-center">
              <div className="hidden md:flex items-center mr-4">
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
              <div className="hidden md:flex items-center ml-4">
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

            <div className="md:hidden mx-4">
              <button className="bg-orange-500 text-white px-4 py-2 rounded-lg">
                Menu
              </button>
            </div>
          </section>
        </section>
      </section>



      <section className="width80">
        <hr />
      </section>


      <section className="width80">
        <header className=" text-dark flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-4">

            <nav className="hidden md:flex space-x-6">

              <Link href="/" className="hover:text-green-800">Home</Link>

              <div className="relative">
                <Link href="/AboutPage" className="hover:text-green-800">About Us</Link>
              </div>

              <Link href="/ProductsPage" className="hover:text-green-800">
                <select id="weight-center" name="weight" className=" w-16" >
                  <option value="shop">Shop</option>
                  <option value="1kg" >Product Page</option>
                  <option value="2kg">FaQs</option>
                  <option value="3kg">Team Page</option>
                </select>
              </Link>

              

              <Link href="/ProductDetailPage" className="hover:text-green-800">
                <select id="product" name="weight" className=" w-20" >
                  <option value="shop">Product</option>
                  <option value="FaQs" >FaQs</option>

                </select>
              </Link>

              <Link href="" className="hover:text-green-800">
                <select id="Pages" name="weight" className=" w-16" >
                  <option value="shop" >Pages</option>
                  <option value="OurTeam">Our Team</option>
                  <option value="FAQsPage">FAQsPage</option>
                </select>
              </Link>

              <Link href="/BlogsPage" className="hover:text-green-800">Blogs</Link>
              <Link href="/ContactUsPage" className="hover:text-green-800">Contact Us</Link>
            </nav>
          </div>


          <div className="flex items-center space-x-4">
            <Link href="#" className="hidden md:block hover:text-green-800">My Account</Link>


            <Link href="/pages/TeamPage">
            <Image
              src="/Icon(2).png"
              alt="Company Logo"
              width={40}
              height={40}
            />
            </Link>
            <Link href="/ShoppingCart">
            <Image
              src="/Icon(3).png"
              alt="Company Logo"
              width={40}
              height={40} 
            />
            </Link>
          </div>
        </header>
      </section>
    </>
  );
}
