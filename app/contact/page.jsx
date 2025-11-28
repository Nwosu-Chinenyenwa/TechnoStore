import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import arrow from "../../public/images/arrow-right.png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { TbWorld } from "react-icons/tb";

export default function page() {
  return (
    <>
      <Header />
      <div className="border-b border-[#00000022] py-3 ">
        <div className="flex items-center gap-5 ml-[19px]">
          <h2 className="font-[500] text-[#8c8c8c] cursor-pointer hover:text-[#f28b00] transition-all">
            Home
          </h2>
          <Image src={arrow} alt="arrow right" />
          <h2 className="font-[500] text-[#8c8c8c]">contact</h2>
        </div>
      </div>
      <section className="py-20">
        <div className="w-[90vw] m-auto mb-10 h-[450px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.576849635824!2d7.544376273982893!3d5.480959594498789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1042c5a3b597c15f%3A0x9654b1f3cace9baa!2sUmuariaga%20Primary%20School!5e0!3m2!1sen!2sng!4v1761515598894!5m2!1sen!2sng"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-2xl"
          ></iframe>
        </div>
        <div className="lg:w-[90vw] w-[90vw] md:w-full m-auto flex  items-center justify-center">
          <div className="flex md:flex-row flex-col justify-center">
            <div className="w-[90vw] m-auto md:w-[50vw]">
              <div className="mb-[20px]">
                <h3 className="mb-[13px] font-[400] text-[20px] text-[#2d2d2d]">
                  Leave us a Message
                </h3>
                <p className="leading-[24px] text-[#838383] text-[13px]">
                  Maecenas dolor elit, semper a sem sed, pulvinar molestie
                  lacus. Aliquam dignissim, elit non mattis ultrices, neque odio
                  ultricies tellus, eu porttitor nisl ipsum eu massa
                </p>
              </div>

              <form>
                <div className="flex md:flex-row flex-col">
                  <span className="flex flex-col mb-[12px] pr-[15px] md:w-[50%]">
                    <label className="text-[#656565] mb-[12px]">
                      First name*
                    </label>
                    <input
                      className="h-[40px] placeholder:text-[#727272] text-[#727272] rounded-[20px] border-2 border-[#e5e5e5] outline-none text-[13px] hover:border-[#cacaca] pt-2 pr-[15px] pb-2 pl-[30px]"
                      type="text"
                      placeholder="Ali"
                    />
                  </span>
                  <span className="flex flex-col md:mb-0 mb-[12px] pr-[15px] md:w-[50%]">
                    <label className="text-[#656565] mb-[12px]">
                      Last name*
                    </label>
                    <input
                      className="h-[40px] placeholder:text-[#727272] text-[#727272] rounded-[20px] border-2 border-[#e5e5e5] outline-none text-[13px] hover:border-[#cacaca] pt-2 pr-[15px] pb-2 pl-[30px]"
                      type="text"
                      placeholder="Ali"
                    />
                  </span>
                </div>

                <span className="flex flex-col mb-[12px] pr-[15px]">
                  <label className="text-[#656565] mb-[12px]">Subject*</label>
                  <input
                    className="h-[40px] placeholder:text-[#727272] text-[#727272] rounded-[20px] border-2 border-[#e5e5e5] outline-none text-[13px] hover:border-[#cacaca] pt-2 pr-[15px] pb-2 pl-[30px]"
                    type="text"
                    placeholder="Ali"
                  />
                </span>

                <span className="flex flex-col mb-[12px] pr-[15px]">
                  <label className="text-[#656565] mb-[12px]">Comment*</label>
                  <textarea
                    className="h-[159px] placeholder:text-[#727272] text-[#727272] rounded-[20px] border-2 border-[#e5e5e5] outline-none text-[10px] hover:border-[#cacaca] pt-2 pr-[15px] pb-2 pl-[30px]"
                    type="text"
                  />
                </span>

                <button className="h-[55px] text-[15px] font-[600] text-[#ffff] px-[92px] rounded-full mt-[10px] cursor-pointer bg-[#f92400]">
                  Send
                </button>
              </form>
            </div>

            <div className="w-[90vw] md:w-[40vw] lg:w-[30vw] mt-10 md:mt-0 bg-[#f5f5f5] rounded-[8px] pt-[34px] pr-[47px] pl-[47px] mx-[15px]">
              <div>
                <ul>
                  <li className="mb-[32px]">
                    <h3 className="mb-[13px] text-[#2d2d2d] text-[20px] font-[400]">
                      Address
                    </h3>
                    <p className="text-[#919191] text-[13px]">
                      PO Box CT16122 Collins Street West, Victoria 8007,
                      Australia.
                    </p>
                  </li>
                  <li className="mb-[32px]">
                    <h3 className="mb-[13px] text-[#2d2d2d] text-[20px] font-[400]">
                      Phone
                    </h3>
                    <p className="text-[#919191] text-[13px]">
                      (888) 123 456 789
                    </p>
                    <p className="text-[#919191] text-[13px]">
                      (888) 123 456 789
                    </p>
                  </li>
                  <li className="mb-[32px]">
                    <h3 className="mb-[13px] text-[#2d2d2d] text-[20px] font-[400]">
                      Email
                    </h3>
                    <p className="text-[#919191] text-[13px]">
                      info@technostore.com
                    </p>
                  </li>
                  <li className="mb-[32px]">
                    <h3 className="mb-[13px] text-[#2d2d2d] text-[20px] font-[400]">
                      Opening Hours
                    </h3>
                    <p className="text-[#919191] text-[13px]">
                      Monday to Friday: 10am to 6pm
                    </p>
                    <p className="text-[#919191] text-[13px]">
                      Saturday: 10am to 4pm
                    </p>
                    <p className="text-[#919191] text-[13px]">
                      Sunday: 12am t0 4pm
                    </p>
                  </li>
                  <li className="mb-[32px]">
                    <h3 className="mb-[13px] text-[#2d2d2d] text-[20px] font-[400]">
                      Follow Us
                    </h3>

                    <div className="flex gap-7">
                      <FaFacebookF className="text-[#d5d5d5] cursor-pointer transition-all hover:text-[#656565]" />
                      <IoLogoWhatsapp className="text-[#d5d5d5] cursor-pointer transition-all hover:text-[#656565]" />
                      <FaTwitter className="text-[#d5d5d5] cursor-pointer transition-all hover:text-[#656565]" />
                      <FaInstagram className="text-[#d5d5d5] cursor-pointer transition-all hover:text-[#656565]" />
                      <FaPinterest className="text-[#d5d5d5] cursor-pointer transition-all hover:text-[#656565]" />
                      <TbWorld className="text-[#d5d5d5] cursor-pointer transition-all hover:text-[#656565]" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
