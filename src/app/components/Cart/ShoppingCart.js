import React from 'react'
import Image from "next/image";
import Link from 'next/link';
export default function Cart() {
  return (
    <>
      <section className='width100 pt-20 pb-10'>
        <section className='width80'>

          <div className='flex flex-row justify-between bg-lime-50 p-5 rounded border  '>

            {/* <hr className='absolute mt-10 w-4/6 ml-24 z-10 ' /> */}
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
        <section className='width80  flex flex-col  gap-3 md:flex-col  lg:flex-row'>


          <section class='w-full md:w-full'>
            <div class='bg-lime-50 p-2 border'>
              <div class="flex flex-col md:flex-row justify-between items-center p-2 bg-lime-50 mo:flex-col">

                <div class="flex justify-between items-center p-2 bg-lime-50 md:mt-2">
                  <h1 class='font-bold'>Product Name</h1>
                </div>

                <div class="flex justify-between gap-20 mo:gap-2 md:gap-20 items-center p-2 bg-lime-50 md:mt-2 mo:flex-col md:flex-row">
                  <h1 class='font-bold'>Price</h1>
                  <h1 class='font-bold'>Quantity</h1>
                  <h1 class='font-bold'>Subtotal</h1>
                </div>

              </div>

              <hr class='w-full' />

              <div class="flex flex-col md:flex-row justify-between items-center p-2 bg-lime-50 ">

                <div class="flex justify-between items-center p-2 bg-lime-50 md:mt-2 md:gap-5 mo:gap-3">
                  <div class='flex'>
                    <img src="/x-circle.png" alt="" width={25} height={25} class="" />
                  </div>
                  <div class='flex border p-2 rounded'>
                    <img src="/pro8.png" alt="" width={55} height={25} class="" />
                  </div>
                  <p>Fresh Organic Mango</p>
                </div>

                <div class="flex justify-between gap-20 md:gap-20 mo:gap-5 items-center p-2 bg-lime-50 md:mt-2 md:flex-row ">
                  <h1 class=''>$20.00</h1>
                  <div class='border'>
                    <select id="weight-center" name="weight" class="p-1 bg-lime-50 md:w-15">
                      <option value="1kg">1kg</option>
                      <option value="2kg">2kg</option>
                      <option value="3kg">3kg</option>
                      <option value="4kg">4kg</option>
                      <option value="5kg">5kg</option>
                    </select>
                  </div>
                  <h1 class=''>$20.00</h1>
                </div>

              </div>

              <hr class='w-full' />
              <div class="flex flex-col md:flex-row justify-between items-center p-2 bg-lime-50 ">

                <div class="flex justify-between items-center p-2 bg-lime-50 md:mt-2 md:gap-5 mo:gap-3">
                  <div class='flex'>
                    <img src="/x-circle.png" alt="" width={25} height={25} class="" />
                  </div>
                  <div class='flex border p-2 rounded'>
                    <img src="/pro2.png" alt="" width={55} height={25} class="" />
                  </div>

                  <p>Fresh Organic Cabbage</p>
                </div>

                <div class="flex justify-between gap-20 md:gap-20 mo:gap-5 items-center p-2 bg-lime-50 md:mt-2 ">
                  <h1 class=''>$40.00</h1>
                  <div class='border'>
                    <select id="weight-center" name="weight" class="p-1 bg-lime-50 md:w-15">
                      <option value="1kg">1kg</option>
                      <option value="2kg">2kg</option>
                      <option value="3kg">3kg</option>
                      <option value="4kg">4kg</option>
                      <option value="5kg">5kg</option>
                    </select>
                  </div>
                  <h1 class=''>$40.00</h1>
                </div>

              </div>
            </div>
            <div class=" flex flex-row gap-5 pt-10">
              <input
                type="text"
                placeholder="Coupon Code"
                class="focus:outline-none w-full md:w-80 p-3 border rounded"
              />
              <button class="bg-lime-600 text-white px-4 font-bold py-3 rounded-lg ml-2 mt-2 md:mt-0 md:inline-block md:items-center">
                Apply Now
              </button>
            </div>
          </section>






          <section className='withh30 border  md:w-full mo:w-full lg:w-1/3'>

            <div className='border flex flex-col gap-5 p-5 bg-lime-50 '>
              <h1 className='text-xl font-bold '>Cart totals</h1>
              <hr />
              <p className=''>Subtotal:<span className=''> $60.00</span></p>
              <div className="products-up   grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-5">
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

              <div className=" flex flex-col gap-3">

                <Link href='/CheckoutPage' className="bg-lime-600 text-center text-white px-4 font-bold py-3 rounded-lg ml-2 md:ml-0 mt-2 md:mt-0 md:inline-block md:items-center">
                  Proceed to checkout
                </Link>
                <button className="bg-black text-white px-4 font-bold py-3 text-center rounded-lg ml-2 md:ml-0 mt-2 md:mt-0 md:inline-block md:items-center">
                  Continue Shopping
                </button>
              </div>
            </div>
          </section>

        </section>

      </section>

    </>
  )
}
