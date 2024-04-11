import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './globals.css';

const NotFound = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen">
      <div className="text-center items-center justify-center">
        <h1 className="text-4xl font-bold">Oops!</h1>
        <p className="text-lg mt-2">
          The page you are looking for doesn't exist.
        </p>
        <div className=" ">
          <Image
          className="m-auto"
            src="/image.png"
            alt="Company Logo"
            width={700}
            height={200}
          />
        </div>
        <p className="text-lg">
          The page you are looking for does not exist or another error occurred.
          Please refresh the page or return to the homepage.
        </p>
        <div className="flex mt-8 space-x-4 justify-center">
          <button className="btn1">Go to Homepage</button>
          <button className="btn2">Help Center</button>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
