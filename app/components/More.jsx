import React from "react";
import data1 from "../../public/car.png";
import data2 from "../../public/return.png";
import data3 from "../../public/order.png";
import data4 from "../../public/payment.png";
import Image from "next/image";

export default function More() {
  const data = [
    {
      id: 1,
      img: data1,
      name: "Worldwide Shipping",
      desc: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      id: 2,
      img: data2,
      name: "Worldwide Shipping",
      desc: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      id: 3,
      img: data3,
      name: "Worldwide Shipping",
      desc: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      id: 4,
      img: data4,
      name: "Worldwide Shipping",
      desc: "We offer competitive prices on our 100 million plus product any range.",
    },
  ];
  return (
    <section className="w-[90vw] m-auto py-20 flex gap-5 items-center justify-center border-b border-[#00000022]">
      {data.map((item, index) => (
        <div className="" key={index}>
          <div className="group flex items-center justify-center flex-col">
            <div className="h-[88px] w-[88px] flex items-center justify-center rounded-full leading-[88px] transition-all border-[#c5c5c5] group-hover:border-[#f28b00] border-[2px]">
              <Image src={item.img} alt={item.name} />
            </div>
            <h3 className="mt-[32px] text-[20px] text-center text-[#2d2d2d] font-[500] mb-[5px]">
              {item.name}
            </h3>
          </div>
          <p className="text-[#919191]  text-center">{item.desc}</p>
        </div>
      ))}
    </section>
  );
}
