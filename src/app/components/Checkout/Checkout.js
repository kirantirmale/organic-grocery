"use client"
import React, { useState } from 'react'
import Image from "next/image";
import Link from 'next/link';

export default function Checkout() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        localStorage.setItem('formData', JSON.stringify(formData));

        console.log('Form Data:', formData);

        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            message: ''
        });
    };
    return (
        <>
            <section className='width100 pt-20 pb-10'>
                <section className='width80'>

                    <div className='flex flex-row justify-between bg-lime-50 p-5 rounded border'>

                        {/* <hr className='absolute mt-10 w-4/6 ml-24 z-10' /> */}
                        <div className='flex flex-col gap-2 text-center '>
                            <div className='bg-orange-600 text-center p-6  rounded-full'>
                                <Image
                                    src="/shop.png"
                                    alt=""
                                    width={25}
                                    height={25}
                                    className=""
                                />
                            </div>
                            <h1 className='font-bold'>Shop Page</h1>
                        </div>
                        <div className='flex flex-col gap-2 text-center z-20'>
                            <div className='bg-lime-600 text-center p-6 rounded-full'>
                                <Image
                                    src="/cart.png"
                                    alt=""
                                    width={25}
                                    height={25}
                                    className=""
                                />
                            </div>

                            <h1 className='font-bold'>My Cart</h1>
                        </div>
                        <div className='flex flex-col gap-2 text-center z-200 '>
                            <div className='bg-orange-600 text-center p-6  rounded-full'>
                                <Image
                                    src="/credit.png"
                                    alt=""
                                    width={25}
                                    height={25}
                                    className=""
                                />
                            </div>


                            <h1 className='font-bold'>   Checkout</h1>
                        </div>
                    </div>


                </section>
            </section>

            <section className='width100 pb-20'>
                <section className='width80 flex flex-row gap-3 mo:flex-col md:flex-col lg:flex-row'>

                    <section className='withh70  flex flex-col gap-3 mo:w-full lg:w-9/12'>
                        <div className='bg-lime-50 p-2  border'>

                            <div className="flex  flex-col   p-2 bg-lime-50">

                                <div className="flex    p-2 bg-lime-50 mt-2">
                                    <h1 className='font-bold'>Billing details</h1>
                                </div>

                                <hr className='w-full' />
                            </div>


                            <div className="container mx-auto p-3">
                                <form onSubmit={handleSubmit} className="pb-5 mb-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                                        <div className='flex flex-col gap-5'>
                                            <div className="mb-4">
                                                <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">First Name:</label>
                                                <input
                                                    type="text"
                                                    id="firstName"
                                                    name="firstName"
                                                    placeholder="First Name"
                                                    value={formData.firstName}
                                                    onChange={handleChange}
                                                    required
                                                    className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Phone Number:</label>
                                                <input
                                                    type="tel"
                                                    id="email"
                                                    name="email"
                                                    placeholder="Phone Number:"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                />
                                            </div>
                                        </div>
                                        <div className='flex flex-col gap-5'>
                                            <div className="mb-4">
                                                <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">Last Name:</label>
                                                <input
                                                    type="text"
                                                    id="lastName"
                                                    name="lastName"
                                                    placeholder="Last Name"
                                                    value={formData.lastName}
                                                    onChange={handleChange}
                                                    required
                                                    className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Email Address:</label>
                                                <input
                                                    type="email"
                                                    id="phone"
                                                    name="phone"
                                                    placeholder="Email Address:"

                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    required
                                                    className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                                        <div className='flex flex-col gap-5'>
                                            <div className="mb-4">
                                                <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">Country / Region</label>
                                                <input
                                                    type="text"
                                                    id="firstName"
                                                    name="firstName"
                                                    placeholder="Country / Region"
                                                    value={formData.firstName}
                                                    onChange={handleChange}
                                                    required
                                                    className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Town / City</label>
                                                <input
                                                    type="text"
                                                    id="email"
                                                    name="email"
                                                    placeholder="Town / City"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                />
                                            </div>
                                        </div>
                                        <div className='flex flex-col gap-5'>
                                            <div className="mb-4">
                                                <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">Street address</label>
                                                <input
                                                    type="text"
                                                    id="lastName"
                                                    name="lastName"
                                                    placeholder="Street address"
                                                    value={formData.lastName}
                                                    onChange={handleChange}
                                                    required
                                                    className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">State:</label>
                                                <input
                                                    type="text"
                                                    id="phone"
                                                    name="phone"
                                                    placeholder="State"

                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    required
                                                    className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                                        <div className='flex flex-col gap-5'>
                                            <div className="mb-4">
                                                <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">ZIP Code</label>
                                                <input
                                                    type="text"
                                                    id="firstName"
                                                    name="firstName"
                                                    placeholder="ZIP Code"
                                                    value={formData.firstName}
                                                    onChange={handleChange}
                                                    required
                                                    className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                />
                                            </div>

                                        </div>
                                        <div className='flex flex-col gap-5'>

                                            <div className="mb-4">
                                                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Company Name (optional)</label>
                                                <input
                                                    type="text"
                                                    id="phone"
                                                    name="phone"
                                                    placeholder="Company Name"

                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    required
                                                    className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-6 flex flex-col gap-6 mt-6">
                                        <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Order notes (optional)</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            placeholder="Order notes "
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            className="shadow appearance-none border rounded w-full h-40 py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        ></textarea>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className='flex fle gap-3'>
                                            <input type="checkbox" id="checkbox1" name="checkbox"/>
                                                <label for="checkbox1" className='font-medium'>Ship to a different address?</label>
                                        </div>

                                    </div>
                                </form>
                            </div>

                        </div>
                    </section>





                    <section className='withh30  mo:w-full lg:w-3/12'>

                        <div className='border flex flex-col gap-5 p-5 bg-lime-50 '>
                            <h1 className='text-xl font-bold '>Your order</h1>
                            <hr />
                            <h1 className='font-bold'>Product</h1>
                            <div className='flex justify-between'>

                                <p className=''>Fresh Mango - 2 KG× 1</p>
                                <span className=''> $20.00</span>
                            </div>
                            <hr />
                            <div className='flex justify-between'>

                                <p className=''>Organic Vabbage 5 KG× 1</p>
                                <span className=''>$40.00</span>
                            </div>

                            <hr />
                            <div className='flex justify-between'>

                                <p className=''>Subtotal</p>
                                <span className=''> $498.00</span>
                            </div>
                            <div className="products-up bg-white  p-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-5">
                                <h1 className='font-bold'>Shipping</h1>
                                <div className='flex justify-between'>
                                    <h1 className=''>Flat rate</h1>
                                    <h1 className=''>$60.00</h1>
                                </div>
                                <div className='flex justify-between'>
                                    <h1 className=''>Shipping to</h1>
                                    <h1 className=''>Mumbai</h1>
                                </div>
                                <div className='flex justify-between'>
                                    <h1 className=''>Shipping Charge</h1>
                                    <h1 className=''>$10.00</h1>
                                </div>
                            </div>
                            <div className='flex justify-between'>

                                <p className=''>Grand Total:</p>
                                <span className=''> $70.00</span>
                            </div>
                            <div className='flex justify-between'>
                                <div className=' justify-between flex flex-col gap-2'>
                                    <div className='flex fle gap-3'>
                                        <input type="radio" id="radio1" name="radios" />
                                        <label for="radio1" className='font-bold'>Direct bank transfer</label>
                                    </div>
                                    <div className='flex fle gap-3'>
                                        <input type="radio" id="radio2" name="radios" />
                                        <label for="radio2" className='font-bold'>Check payments</label>
                                    </div>
                                    <p className='ml-6'>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                                    <div className='flex fle gap-3'>
                                        <input type="radio" id="radio3" name="radios" />
                                        <label for="radio3" className='font-bold'>Cash on delivery</label>
                                    </div>
                                </div>

                            </div>
                            <div className=" flex flex-col gap-3">

                                <Link href='#' className="bg-lime-600 text-center text-white px-4 font-bold py-3 rounded-lg ml-2 md:ml-0 mt-2 md:mt-0 md:inline-block md:items-center">
                                    Place Order
                                </Link>

                            </div>
                        </div>
                    </section>

                </section>

            </section>

        </>
    )
}
