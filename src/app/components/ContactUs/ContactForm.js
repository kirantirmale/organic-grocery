"use client"
import React, { useState } from 'react';
import GoogleMapComponent from './Map';



export default function ContactForm() {


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
            <section className="w-full bg-orange-50 pt-20">
                <section className="width80">
                    <div className="flex flex-row gap-52">
                        <div className="flex flex-col items-start gap-5">
                            <p className="bgcolor text-white p-1 text-center rounded-md">Leave A Message</p>
                            <h1 className='text-3xl font-bold text-orange-600'>Don’t hesitate to contact us if you need more help</h1>
                        </div>
                        <div className="flex flex-col align-middle m-auto">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since. dummy text.</p>
                        </div>
                    </div>
                    <div className="container mx-auto p-6">
                        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-20 mb-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-12">
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
                                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address:</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="Email Address"
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
                                        <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number:</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            placeholder="Phone Number "

                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mb-6 flex flex-col gap-6">
                                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Write a Message ...</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Enter your message here"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="shadow appearance-none border rounded w-full h-40 py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                ></textarea>
                            </div>
                            <div className="flex items-center justify-between">
                                <button type="submit" className="bg-lime-700 text-white font-medium py-3 px-4 rounded focus:outline-none focus:shadow-outline">
                                    Submit Now
                                </button>
                            </div>
                        </form>
                    </div>

                </section>
            </section>

            <div className="w-full">
            <GoogleMapComponent />
            </div>

        </> 
    );
}
