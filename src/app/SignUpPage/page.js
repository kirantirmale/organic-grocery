import React from 'react'
import Image from "next/image";
const page = () => {
    return (
        <>
            <section className='width100 sig'>
                <section className='w70 pt-20 pb-20 '>
                    <div className=' flex'>
                        <div className='w-1/2'>

                            < Image src="/kanda.png"
                                alt=""
                                width={440}
                                height={216}
                                className=""
                            />
                        </div>
                        <div className='w-1/2 p-5'>
                            <div className="">
                                <div className='flex flex-col gap-2'>
                                    <h1 className='font-bold'>Welcome to TRoo Grocery</h1>
                                    <p className=''>Create your account by filling the form below</p>
                                    <hr className="border-b-2 border-lime-600 w-11" />
                                </div>
                                <form className="space-y-4 mt-4">
                                    <div>
                                        <label for="full-name" className="block text-base font-medium text-gray-700 ">Full Name</label>
                                        <input type="text" name="full-name" id="full-name" className="mt-1 p-3 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                    </div>
                                    <div>
                                        <label for="email" className="block text-base font-medium text-gray-700">Email</label>
                                        <input type="email" name="email" id="email" className="mt-1 p-3 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                    </div>
                                    <div>
                                        <label for="password" className="block text-base font-medium text-gray-700">Password</label>
                                        <input type="password" name="password" id="password" className="mt-1 p-3 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                    </div>
                                    <div>
                                        <label for="confirm-password" className="block text-base font-medium text-gray-700">Confirm Password</label>
                                        <input type="password" name="confirm-password" id="confirm-password" className="mt-1 p-3 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                    </div>
                                    <div className="flex items-center">
                                        <input id="remember-me" name="remember-me" type="checkbox" className="h-4 p-3 border w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                                        <label for="remember-me" className="ml-2 block text-base text-gray-900">
                                        I agree to the terms and conditions
                                        </label>
                                    </div>
                                    <div>
                                        <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-lime-600 hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                            Sign Up
                                        </button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}

export default page

