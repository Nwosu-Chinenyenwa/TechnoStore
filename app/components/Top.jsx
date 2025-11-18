"use client";

import { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function Top() {
  return (
    <>
      <section className="flex  h-[37px] text-[14px] px-10 justify-between border-b border-[#f28b00] text-[#2d2d2d] items-center">
        <div className="">
          <span className="text-[#f28b00]">Call Us</span>
          <a className="hover:text-[#f28b00] transition-all" href="tel:">
            +77363563882992
          </a>
        </div>

        <ul className="flex items-center">
          <li className="relative group  px-2 border-r border-[#80808064] ">
            <span className="flex items-center hover:text-[#f28b00] cursor-pointer justify-center gap-1">
              <span>My Account</span>
              <IoIosArrowDown />
            </span>

            <ul className="opacity-0 absolute top-10 bg-white flex flex-col gap-1  m-auto rounded-[5px] p-2 shadow-sm translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out z-10">
              <li className="cursor-pointer transition-all hover:text-[#f28b00]">
                Login
              </li>
              <li className="cursor-pointer transition-all hover:text-[#f28b00]">
                Sign Up
              </li>
              <li className="cursor-pointer transition-all hover:text-[#f28b00]">
                My cart
              </li>
              <li className="cursor-pointer transition-all hover:text-[#f28b00]">
                My Account
              </li>
              <li className="cursor-pointer transition-all hover:text-[#f28b00]">
                Checkout
              </li>
            </ul>
          </li>

          <li className="flex px-2 border-r border-[#80808064] items-center hover:text-[#f28b00] cursor-pointer">
            USD
          </li>

          <li className="relative group  px-2 ">
            <span className="flex items-center hover:text-[#f28b00] cursor-pointer justify-center gap-1">
              <span>English</span>
              <IoIosArrowDown />
            </span>

            <ul className="opacity-0 absolute top-10 bg-white flex flex-col gap-1  m-auto rounded-[5px] p-2 shadow-sm translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out z-10">
              <li className="cursor-pointer transition-all hover:text-[#f28b00]">
                Login
              </li>
              <li className="cursor-pointer transition-all hover:text-[#f28b00]">
                Sign Up
              </li>
              <li className="cursor-pointer transition-all hover:text-[#f28b00]">
                My cart
              </li>
              <li className="cursor-pointer transition-all hover:text-[#f28b00]">
                My Account
              </li>
              <li className="cursor-pointer transition-all hover:text-[#f28b00]">
                Checkout
              </li>
            </ul>
          </li>
        </ul>
      </section>
    </>
  );
}
