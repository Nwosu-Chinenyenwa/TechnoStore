"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import about from "../../public/images/about.jpg";
import Image from "next/image";
import about1 from "../../public/images/about1.jpg";
import about2 from "../../public/images/about2.jpg";
import about3 from "../../public/images/about3.jpg";
import teams1 from "../../public/images/teams1.jpg";
import teams2 from "../../public/images/teams2.jpg";
import teams3 from "../../public/images/teams3.jpg";
import teams4 from "../../public/images/teams4.jpg";

export default function page() {
  const [current, setCurrent] = useState(0);

  const people = [
    {
      id: 1,
      title: "There are many",
      discription:
        "This is a Rebel that surrendered to us. Although he denies it, I believe there may be more of them, and I request permission to conduct a further search of the area. He was",
      img: about1,
    },
    {
      id: 1,
      title: "Many desktop publishing",
      discription:
        "This is a Rebel that surrendered to us. Although he denies it, I believe there may be more of them, and I request permission to conduct a further search of the area. He was",
      img: about2,
    },
    {
      id: 1,
      title: "Lorem Ipsum is simply",
      discription:
        "This is a Rebel that surrendered to us. Although he denies it, I believe there may be more of them, and I request permission to conduct a further search of the area. He was",
      img: about3,
    },
  ];

  const teams = [
    {
      id: 1,
      name: "John Swim",
      dis: "Ceo/Founder",
      img: teams1,
    },
    {
      id: 2,
      name: "John Swim",
      dis: "Ceo/Founder",
      img: teams2,
    },
    {
      id: 3,
      name: "John Swim",
      dis: "Ceo/Founder",
      img: teams3,
    },
    {
      id: 4,
      name: "John Swim",
      dis: "Ceo/Founder",
      img: teams4,
    },
  ];

  const testimonials = [
    {
      name: "Garry Stil",
      image: teams1,
      text: "Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat facer possim assum. Mirum est notare quam littera gothica.",
    },
    {
      name: "John Doe",
      image: teams2,
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
    },
    {
      name: "Isco felix",
      image: teams3,
      text: "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.",
    },
    {
      name: "Adam Fox",
      image: teams4,
      text: "Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem.",
    },
  ];

  return (
    <>
      <Header />
      <section className="py-20">
        <div className="flex flex-col md:flex-row items-center p-3 lg:p-0 justify-center">
          <Image
            className="rounded-2xl relative bottom-15"
            src={about}
            alt="about image"
          />
          <div className="mt-6 h-auto md:-ml-16 mr-1.5 py-[76px] px-5 md:pl-[74px] md:pr-[38px] border-2 border-gray-200 rounded-lg relative -z-10 md:w-[50vw]">
            <div>
              <h3 className="mb-[23px] font-[400] text-[20px] text-[#2d2d2d]">
                There are many variations of passages
              </h3>
              <div>
                <p className="mb-[24px] text-[13px] text-[#919191]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  quis diam erat. Duis velit lectus, posuere a blandit sit amet,
                  tempor at lorem. Donec ultricies, lorem sed ultrices interdum,
                  leo metus luctus sem, vel vulputate diam ipsum sed lorem.
                  Donec tempor arcu nisl, et molestie massa scelerisque ut. Nunc
                  at rutrum leo. Mauris metus mauris, tristique quis sapien eu,
                  rutrum vulputate enim.
                </p>
                <p className="text-[13px] text-[#919191]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  tincidunt, erat in malesuada aliquam, est erat faucibus purus,
                  eget viverra nulla sem vitae neque.
                  <span className="font-bold text-[#484848]">
                    Quisque id sodales libero. In nec enim nisi, in ultricies
                    quam. Sed lacinia feugiat velit, cursus molestie lectus
                    mollis et.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[90vw] flex flex-col items-center justify-center m-auto pt-[73px] pb-[16px]">
          <div className="flex md:flex-row flex-col justify-center text-center md:text-left gap-5">
            {people.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center md:justify-start md:items-start justify-center"
              >
                <Image
                  className="rounded-2xl"
                  src={item.img}
                  alt={item.title}
                />
                <div className="h-[37px]"></div>
                <h3 className="mb-[13px] font-[400] text-[20px] text-[#2d2d2d]">
                  {item.title}
                </h3>
                <p className="text-[13px] text-[#919191]">{item.discription}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-[73px] pb-[16px] w-[90vw] m-auto">
          <div>
            <h1 className="mb-[30px] text-[20px] font-[400] text-[#2d2d2d]">
              Meet Our Team
            </h1>

            <div>
              <div className="flex md:flex-row flex-col sm:grid sm:grid-cols-2 md:flex gap-5 md:gap-0 justify-center md:justify-between">
                {teams.map((item, index) => (
                  <div key={index} className=" md:w-[20vw]">
                    <div className="rounded-[8px] flex items-center justify-center border-2 hover:border-[#f28b00] transition-all border-[#e5e5e5]">
                      <Image src={item.img} alt="" />
                    </div>
                    <h2 className="text-[16px] font-[600] mt-[18px] mb-[1px] text-[#484848]">
                      {item.name}
                    </h2>
                    <p className="text-[#919191]">{item.dis}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="pt-[73px] pb-[16px] w-[90vw] m-auto">
          <h1 className="mb-[30px] text-[20px] font-[400] text-[#2d2d2d]">
            Testimonals
          </h1>

          <div className="w-full py-10 flex flex-col items-center">
            <div className="relative w-[90%] md:w-[75%] lg:w-[85%] border-[2px] border-[#e5e5e5] rounded-[15px] py-20 px-10 text-center">
              <div className="absolute left-1/2 -top-14 -translate-x-1/2">
                <div className="w-[110px] h-[110px] rounded-full border-[2px] border-[#e5e5e5] overflow-hidden bg-white">
                  <Image
                    src={testimonials[current].image}
                    width={110}
                    height={110}
                    alt="profile"
                    className="object-cover"
                  />
                </div>
              </div>

              <h3 className="mt-10 text-[22px] font-semibold text-[#333]">
                {testimonials[current].name}
              </h3>

              <p className="mt-4 text-[15px] text-[#777] max-w-[700px] mx-auto leading-relaxed">
                {testimonials[current].text}
              </p>
            </div>

            <div className="flex gap-4 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-4 w-4 rounded-full border-2 flex items-center justify-center ${
                    current === index ? "border-[#f28b00]" : "border-[gray]"
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                      current === index
                        ? "bg-[#f28b00] scale-110 shadow-md"
                        : "bg-white"
                    }`}
                  ></span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
