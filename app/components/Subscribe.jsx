"use client";

import { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { FaLongArrowAltRight } from "react-icons/fa";
import Image from "next/image";
import popup from "../../public/images/popup.png";

export default function Subscribe() {
  const [showPopup, setShowPopup] = useState(true);
  return (
    <>
    {showPopup &&
      <section className="flex justify-center items-center bg-[#0000004e] fixed w-screen h-screen p-2">
        <div className="bg-[#ffff] flex rounded-2xl relative w-fit items-center justify-center p-7 h-fit">
          <div className="flex flex-col">
            <span>
              <IoClose onClick={() => setShowPopup(false)}  className="absolute right-[-10] top-[-10] text-white bg-[#f28b00] p-2 text-[40px] rounded-full cursor-pointer" />
            </span>
            <div className="flex flex-col gap-7">
              <h2 className="text-[#2d2d2d] text-[25px] font-[400]">Join our newsletter and get discount!</h2>
              <p className="text-[#919191] text-[14px]">
                Subscribe to the newsletter to receive updates about new
                products.
              </p>
              <span className="flex border-2 border-[#e5e5e5] active:border-[#d7d2d2] rounded-full w-fit items-center  p-1 px-5">
                <input className="placeholder:text-[#919191] outline-none  p-1 text-[#727272]" type="text" placeholder="Your E-Mail"/>
                <FaLongArrowAltRight className="mr-5 text-[#2d2d2de5] cursor-pointer"/>
              </span>
              <div className="flex items-center gap-2 text-[16px] text-[#5e5d5d] font-sans">
                <input
                  type="checkbox"
                  id="dont-show"
                  className="w-5 h-5 accent-[#f59e0b] cursor-pointer"
                />
                <label className="cursor-pointer">
                  Don't show this popup again
                </label>
              </div>
            </div>
          </div>

          <div className="w-[49%] overflow-hidden md:block hidden">
            <Image className="max-w-full h-auto" src={popup} alt="logo image" />
          </div>
        </div>
      </section>
}
    </>
  );
}
