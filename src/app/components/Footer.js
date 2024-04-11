import Image from "next/image";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
export default function Footer() {
  return (
    <div>
      <footer className="bg-green footer1 shadow   foot width100">
        <div className="w-full max-w-screen-xl mx-auto p-2 sm:p-8 width80">
          <div className="sm:flex sm:items-center sm:justify-between width80">
            <div className="flex items-center sea">
              <div className="flex items-center mr-4">
                <Image
                  src="/Icon.png"
                  alt="Company Logo"
                  width={40}
                  height={40}
                  className="img2"
                />
                <div className="flex flex-col ml-2 text-white">
                  <span>Call Us on</span>
                  <span className="text-white">+44 123 456 7890</span>
                </div>
              </div>

              <div className="flex items-center ml-1">
                <Image
                  src="/Icon(1).png"
                  alt="Company Logo"
                  width={40}
                  height={40}
                  className="img2"
                />
                <div className="flex flex-col ml-2 text-white">
                  <span>Email Us </span>
                  <span className="text-white">info@troothemes.com</span>
                </div>
              </div>

            </div>
            <Image
              src="/Rectangle62.png"
              alt="Company Logo"
              width={1}
              height={1}
              className="ml-20"
            />

            <div className="right-side flex items-center text-white lg:text-right">
              <p className="mr-2 text-xs lg:text-sm">Follow Us On --------</p>
              <div className="social-icons flex">
                <FaFacebook className="icon mx-1 text-orange-500 text-base lg:text-2xl" />
                <FaInstagram className="iconn mx-1 text-base lg:text-2xl" />
                <FaTwitter className="iconn mx-1 text-base lg:text-2xl" />
                <FaLinkedin className="iconn mx-1 text-base lg:text-2xl" />
              </div>
            </div>
          </div>
          <section className="width80 hrr">
            <hr />
          </section>

          <section className="width80">
            <div className=" flex">
              
              <div className="left text-white">
                <div className="log">

                  <Image
                    src="/Logo(1).png"
                    alt="Company Logo"
                    width={300}
                    height={90}
                  />
                </div>
                <p className="p-2">
                  Lorem Ipsum is simply it is dummy rummy dummy text of the since it is printing and typesetting’s the and it industry's standard dummy text ever since the 150.
                </p>
                <p className="p-2">Address</p>
                <div className="typografy text-white">

                  <p className="p-2">4516 School Street, Danbury, CT, Canada, 458068</p>
                </div>
              </div>

              <div className="flex justify-between gap-14" >

                <div className="Navigation flex flex-col ml-5">
                  <h1 className="heading  text-white">
                    Navigation
                  </h1>
                  <hr  className="hrline"/>
                  <ul>
                    <li>Homepage</li>
                    <li>About Us</li>
                    <li>Our Products</li>
                    <li>Our Testimonial</li>
                    <li>Our Blogs </li>
                  </ul>
                </div>

                <div className="Customer flex flex-col ">
                  <h1 className="heading  text-white">
                  Customer Support
                  </h1>
                  <hr className="hrline" />
                  <ul>
                    <li>Order</li>
                    <li>Track Your Order</li>
                    <li>Help & Support</li>
                    <li>Shipping & Delivery</li>
                    <li>Contact Us</li>
                  </ul>
                </div>

                <div className="Catogories flex flex-col ">
                  <h1 className="heading text-white">
                  Catogories
                  </h1>
                  <hr  className="hrline"/>
                  <ul>
                    <li>Fresh Vegetable</li>
                    <li>Fresh Fruits</li>
                    <li>Fresh Beverage</li>
                    <li>Fresh Backery Items</li>
                    <li>Netural Drinks</li>
                  </ul>
                </div>
              </div>

            </div>
          </section>
          <section className="width80 hrr">
            <hr />
          </section>
          <section className="width80  flex justify-between">
           <div className="left-side text-white">
           <p>Copyright © 2023. Themes. All rights reserved.</p>
           </div>
           <div className="center">
           <Image
                    src="/payment.png"
                    alt="Company Logo"
                    width={250}
                    height={40}
                  />
           </div>
           <div className="rigth-side text-white"> 
              <p>Privacy Policy  /  Terms & Conditions</p>
           </div>
          </section>
        </div>
      </footer>
    </div>
  );
}
