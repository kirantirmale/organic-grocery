import Image from "next/image";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { categories, customerSupportItems, navigationItems } from "../data/Footer";
export default function Footer() {
  return (
    <div>
      <footer className="bg-green footer1 shadow   foot width100">
        <div className="w-full max-w-screen-xl mx-auto p-2 sm:p-8 width80">

          <div class="sm:flex sm:items-center sm:justify-between width80 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 fu">

            <div class=" items-center sea grid grid-cols-1 md:grid-cols-1 sm:w-auto lg:grid-cols-2 ">
              <div class="flex items-center mr-4 ">
                <Image src="/Icon.png" alt="Company Logo" width={40}
                  height={40}
                  className="img2" />
                <div class="flex flex-col ml-2 text-white">
                  <span>Call Us on</span>
                  <span class="text-white">+44 123 456 7890</span>
                </div>
              </div>

              <div class="flex items-center ml-1">
                <Image src="/Icon(1).png" alt="Company Logo"
                 width={40}
                  height={40}
                  className="img2" 
                  />
                <div class="flex flex-col ml-2 text-white">
                  <span>Email Us</span>
                  <span class="text-white">info@troothemes.com</span>
                </div>
              </div>
            </div>

            <div class="right-side  items-center text-white lg:text-right grid grid-cols-1 md:grid-cols-1 sm:w-auto lg:grid-cols-2">
              <p class="mr-2 text-xs lg:text-sm">Follow Us On --------</p>
              <div class="social-icons flex it">
                <FaFacebook class="icon mx-1 text-orange-500 text-base lg:text-2xl" />
                <FaInstagram class="icon mx-1 text-base lg:text-2xl" />
                <FaTwitter class="icon mx-1 text-base lg:text-2xl" />
                <FaLinkedin class="icon mx-1 text-base lg:text-2xl" />
              </div>
            </div>

          </div>





          <section className="width80 hrr">
            <hr />
          </section>

          <section className="width80 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
            <div className="left  text-white grid grid-cols-1 md:grid-cols-1 sm:w-auto">
              <div className="log">
                <Image
                  src="/Logo(1).png"
                  alt="Company Logo"
                  width={300}
                  height={90}
                  className='foti'
                />
              </div>
              <p className=" sm:text-sm">
                Lorem Ipsum is simply it is dummy rummy dummy text of the since it is printing and typesetting’s the and it industry's standard dummy text ever since the 150.
              </p>
              <p className=" sm:text-sm">Address</p>
              <div className="typografy text-white">
                <p className=" sm:text-sm">4516 School Street, Danbury, CT, Canada, 458068</p>
              </div>
            </div>

            <div className=' grid grid-cols-1 md:grid-cols-3 gap-5 mo:pt-16'>
              <div className="Navigation flex flex-col">
                <h1 className="heading text-white sm:text-base">Navigation</h1>
                <hr className="hrline" />
                <ul>
                {navigationItems.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="Customer flex flex-col">
                <h1 className="heading text-white sm:text-base">Customer Support</h1>
                <hr className="hrline" />
                <ul>
                  {customerSupportItems.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="Catogories flex flex-col">
                <h1 className="heading text-white sm:text-base">Categories</h1>
                <hr className="hrline" />
                <ul>
                  {categories.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
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
