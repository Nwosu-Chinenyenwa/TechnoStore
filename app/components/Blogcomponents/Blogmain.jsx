import React from "react";
import post1 from "../../../public/category/post-01.jpg";
import post2 from "../../../public/category/post-02.jpg";
import post3 from "../../../public/category/post-03.jpg";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import Image from "next/image";

export default function Blogmain() {
  const post = [
    {
      title: "  There are many variations of passages",
      dis: "  This is a Rebel that surrendered to us. Although he denies it, i believe there may be more of them, and I request permission to conduct a further search of the area. He was armed only with this. Good work, Commander. Leave us. Conduct your search and bring his companions to me. Yes, my Lord.",
      img: post1,
    },
    {
      title: " Many desktop publishing",
      dis: " This is a Rebel that surrendered to us. Although he denies it, I believe there may be more of them, and I request permission to conduct a further search of the area. He was armed only with this. Good work, Commander. Leave us. Conduct your search and bring his companions to me. Yes, my Lord.",
      img: post2,
    },
    {
      title: "Lorem Ipsum is simply dummy text",
      dis: "This is a Rebel that surrendered to us. Although he denies it, I believe there may be more of them, and I request permission to conduct a further search of the area. He was armed only with this. Good work, Commander. Leave us. Conduct your search and bring his companions to me. Yes, my Lord.",
      img: post3,
    },
  ];
  return (
    <div className="lg:max-w-[60%] lg:ml-10 p-2 lg::p-0">
      <div>
        {post.map((item, index) => (
          <div key={index} className="mb-[44px]">
            <Image
              src={item.img}
              alt="post1"
              className="rounded-[10px] max-w-[100%] mb-[18px]"
            />
            <h2 className="text-[#2d2d2d] text-[20px] mb-[18px] text-[500]">
              {item.title}
            </h2>
            <div className="flex mb-[11px]">
              <h3 className="text-[14px] font-[400] ml-[2px] mr-[23px] text-[#f92400]">
                2 Comments
              </h3>
              <h3 className="text-[14px] font-[400] text-[#f28b00]">
                February 20, 2017
              </h3>
            </div>
            <p className="text-[#919191] text-[16px]">{item.dis}</p>

            <button className="rounded-full mt-[29px] border hover:bg-[#f28b00] hover:text-white transition-colors border-[#e5e5e5] px-[33px] text-[#2d2d2d] py-[5px] cursor-pointer text-[14px] font-[400] flex flex-nowrap items-center gap-2 whitespace-nowrap">
              <span>Shop Now</span>
              <span className="text-3xl">&rarr;</span>
            </button>
          </div>
        ))}
      </div>

      <div>
        <div>
          <ul className="pt-[16px] pb-[10px] cursor-pointer mb-[70px] border-t border-[#e5e5e5] border-b flex items-center justify-center">
            <li className="flex items-center text-[14px] mx-[10px] gap-5 text-[#484848] group font-[400]">
              <FaLongArrowAltLeft />
              <h4 className=" hidden md:flex group-hover:text-[#f28b00] capitalize transition-all">
                prev page
              </h4>
            </li>
            <div className="flex">
              <h4 className="mx-[5px] h-[40px] w-[40px] text-center flex items-center justify-center text-[#484848] border-2 overflow-hidden rounded-full border-[#e5e5e5] hover:bg-[#f28b00] hover:text-white transition-colors hover:border-0">01</h4>
              <h4 className="mx-[5px] h-[40px] w-[40px] text-center flex items-center justify-center text-[#484848] border-2 overflow-hidden rounded-full border-[#e5e5e5] hover:bg-[#f28b00] hover:text-white transition-colors hover:border-0">02</h4>
              <h4 className="mx-[5px] h-[40px] w-[40px] text-center flex items-center justify-center text-[#484848] text-white overflow-hidden rounded-full  bg-[#f28b00] border-0">03</h4>
              <h4 className="mx-[5px] h-[40px] w-[40px] text-center flex items-center justify-center text-[#484848] border-2 overflow-hidden rounded-full border-[#e5e5e5] hover:bg-[#f28b00] hover:text-white transition-colors hover:border-0">04</h4>
            </div>
            <li className="flex items-center capitalize text-[14px] mx-[10px] gap-5 text-[#484848] group font-[400]">
              <h4 className=" hidden md:flex group-hover:text-[#f28b00] transition-all">
                next page
              </h4>
              <FaLongArrowAltRight />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
