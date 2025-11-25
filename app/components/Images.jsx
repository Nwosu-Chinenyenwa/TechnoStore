import React from "react";
import Image from "next/image";
import home1 from "../../public/images/home-01.jpg";
import home2 from "../../public/images/home-03.jpg";
import home3 from "../../public/images/home-04.jpg";
import home4 from "../../public/images/home-05.jpg";

export default function Images() {
  return (
    <section className="w-[90vw] hidden md:block m-auto py-10">
      <div className="flex items-center justify-center gap-5">
        <div className="max-w-[779.99px]">
          <div className="flex gap-5">
            <div className="relative overflow-hidden group cursor-pointer">
              <Image src={home1} alt="home1" />
              <div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
                translate-x-[-100%] group-hover:translate-x-[150%]
                transition-transform duration-700 ease-out rotate-[25deg]"
              ></div>
            </div>

            <div className="relative overflow-hidden group cursor-pointer">
              <Image src={home4} alt="home4" />
              <div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
                translate-x-[-100%] group-hover:translate-x-[150%]
                transition-transform duration-700 ease-out rotate-[25deg]"
              ></div>
            </div>
          </div>

          <div className="relative overflow-hidden group mt-10 cursor-pointer">
            <Image src={home3} alt="home3" />
            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
              translate-x-[-100%] group-hover:translate-x-[150%]
              transition-transform duration-700 ease-out rotate-[25deg]"
            ></div>
          </div>
        </div>

        <div className="relative overflow-hidden group cursor-pointer">
          <Image src={home2} alt="home2" />
          <div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
            translate-x-[-100%] group-hover:translate-x-[150%]
            transition-transform duration-700 ease-out rotate-[25deg]"
          ></div>
        </div>
      </div>
    </section>
  );
}
