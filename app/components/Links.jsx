import React from "react";

export default function Links() {
  return (
    <div className="bg-[#f28b00] px-10 py-3 flex justify-between">
      <ul className="flex">
        <li className="text-[14px] text-[#fefefe] border-r border-[#fec579] px-5 cursor-pointer">
          Home
        </li>
        <li className="text-[14px] text-[#fefefe] border-r border-[#fec579] px-5 cursor-pointer">
          About
        </li>
        <li className="text-[14px] text-[#fefefe] border-r border-[#fec579] px-5 cursor-pointer">
          Services
        </li>
        <li className="text-[14px] text-[#fefefe] border-r border-[#fec579] px-5 cursor-pointer">
          Shop
        </li>
        <li className="text-[14px] text-[#fefefe] border-r border-[#fec579] px-5 cursor-pointer">
          Cart
        </li>
        <li className="text-[14px] text-[#fefefe] border-r border-[#fec579] px-5 cursor-pointer">
          Faq
        </li>
        <li className="text-[14px] text-[#fefefe] border-r border-[#fec579] px-5 cursor-pointer">
          Checkout
        </li>
        <li className="text-[14px] text-[#fefefe] border-r border-[#fec579] px-5 cursor-pointer">
          Contact
        </li>
      </ul>
      <h6 className="uppercase text-[14px] font-[600] text-[#fff] cursor-pointer hover:underline">
        Today's Deal
      </h6>
    </div>
  );
}
