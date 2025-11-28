import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import about from "../../public/images/about.jpg";
import Image from "next/image";
import about1 from "../../public/images/about1.jpg";
import about2 from "../../public/images/about2.jpg";
import about3 from "../../public/images/about3.jpg";

export default function page() {
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
              <div key={index} className="flex flex-col items-center md:justify-start md:items-start justify-center">
                <Image className="rounded-2xl" src={item.img} alt="" />
                <div className="h-[37px]"></div>
                <h3 className="mb-[13px] font-[400] text-[20px] text-[#2d2d2d]">
                  {item.title}
                </h3>
                <p className="text-[13px] text-[#919191]">{item.discription}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
