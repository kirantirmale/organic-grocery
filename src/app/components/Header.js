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
          <section className="w-full  flex items-center justify-between second-head">
            <div className="flex items-center">
              <Image
                src="/logo.jpg"
                alt="Company Logo"
                width={300}
                height={90}
              />
            </div>

            <div className=" mx-4 mb-4 lg:mb-0 lg:text-center search">
              <div className="border border-orange-300 p-1 rounded-lg inn">
                <input
                  type="text"
                  placeholder="Search Your Products"
                  className="px-4 py-2 focus:outline-none width-full lg:width-80"
                />
                <button className="bg-orange-500 text-white px-4 py-2 rounded-lg ml-2 lg:ml-4 mt-2 lg:mt-0">
                  Search
                </button>
              </div>
            </div>


            <div className="flex items-center sea">
              <div className="flex items-center mr-4">
                <Image
                  src="/Icon.png"
                  alt="Company Logo"
                  width={40}
                  height={40}
                  className="img1"
                />
                <div className="flex flex-col ml-2">
                  <span>Call Us on</span>
                  <span className="text-lime-600">+44 123 456 7890</span>
                </div>
              </div>
              <Image
                src="/Rectangle.png"
                alt="Company Logo"
                width={1}
                height={1}
              />
              <div className="flex items-center ml-1">
                <Image
                  src="/Icon(1).png"
                  alt="Company Logo"
                  width={40}
                  height={40}
                  className="img1"
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
        <header className=" text-dark flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-4">

            <nav className="hidden md:flex space-x-6">

              <Link href="/" className="hover:text-green-800">Home</Link>

              <div className="relative">
                <Link href="/pages/AboutPage" className="hover:text-green-800">About Us</Link>
              </div>

              <Link href="/pages/ProductsPage" className="hover:text-green-800">
                <select id="weight-center" name="weight" className=" w-16" >
                  <option value="shop">Shop</option>
                  <option value="1kg" >ProductDetailPage</option>
                  <option value="2kg">2kg</option>
                  <option value="3kg">3kg</option>
                </select>
              </Link>

              <Link href="/pages/ProductsPage" className="hover:text-green-800">
                <select id="product" name="weight" className=" w-20" >
                  <option value="shop">Product</option>
                  <option value="FaQs" >FaQs</option>

                </select>
              </Link>

              <Link href="/pages/ProductsPage" className="hover:text-green-800">
                <select id="Pages" name="weight" className=" w-16" >
                  <option value="shop" >Pages</option>
                  <option value="/pages/ProductDetailPage">Our Team</option>
                  <option value="FAQsPage">FAQsPage</option>
                </select>
              </Link>

              <Link href="/pages/BlogsPage" className="hover:text-green-800">Blogs</Link>
              <Link href="/pages/ContactUsPage" className="hover:text-green-800">Contact Us</Link>
            </nav>
          </div>


          <div className="flex items-center space-x-4">
            <a href="#" className="hidden md:block hover:text-green-800">My Account</a>

            <Image
              src="/Icon(2).png"
              alt="Company Logo"
              width={40}
              height={40}
            /><Image
              src="/Icon(3).png"
              alt="Company Logo"
              width={40}
              height={40}
            />
          </div>
        </header>
      </section>
    </>
  );
}
