import React from "react";
import { LiaGreaterThanSolid } from "react-icons/lia";
import product6 from "../../../public/product1/05.jpg";
import product2 from "../../../public/product1/1.jpg";
import product3 from "../../../public/product1/02.jpg";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

export default function BlogAside() {
  const cateories = [
    {
      name: "Accessories",
      number: "(03)",
    },
    {
      name: " Cameras",
      number: "(19)",
    },
    {
      name: "Computers",
      number: "(56)",
    },
    {
      name: "Old Product",
      number: "(89)",
    },
    {
      name: "Laptops",
      number: "(03)",
    },
    {
      name: "Smartphones",
      number: "(90)",
    },
    {
      name: "Software",
      number: "(23)",
    },
  ];

  const products1 = [
    {
      id: 1,
      img: product6,
      name: "  Razer RZ02-01071500-R3M1",
      old: "$2,999.00",
      price: "$1,250.00",
    },
    {
      id: 2,
      img: product3,
      name: "  Razer RZ02-01071500-R3M1",
      old: "$2,999.00",
      price: "$1,250.00",
    },
    {
      id: 3,
      img: product2,
      name: "  Razer RZ02-01071500-R3M1",
      old: "$2,999.00",
      price: "$1,250.00",
    },
  ];


  const tag = [
    {
        name:"phone",
    },
    {
        name:"cameras",
    },
    {
        name:"computers",
    },
    {
        name:"laptops",
    },
    {
        name:"Headphones",
    },
  ]
  return (
    <div className="lg:w-[20vw] p-2 md:p-1 lg:p-0">
      <span className="flex transition-all mb-[36px] hover:border-2 border-[#e5e5e5] bg-[#f5f5f5] active:border-[#d7d2d2] h-[40px] rounded-full w-fit items-center  p-1 px-5">
        <input
          className="placeholder:text-[#919191] pl-[27px] outline-none  p-1 text-[#727272]"
          type="text"
          placeholder="Search"
        />
      </span>

      <div className="mb-[36px]">
        <h1 className="mb-[22px] pb-[15px] border-b border-[#e5e5e5] text-[20px] font-[400] text-[#2d2d2d]">
          Categories
        </h1>
        <ul className="font-[400]">
          {cateories.map((item, index) => (
            <li
              key={index}
              className="mb-[15px] flex items-center hover:text-[#f28b00] transition-all cursor-pointer font-[13px] text-[#484848]"
            >
              <LiaGreaterThanSolid className="text-[12px]" />
              <h3 className="ml-[13px]">{item.name}</h3>
              <span className="ml-[10px] text-[12px] text-[#bababa]">
                {item.number}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h1 className="mb-[22px] pb-[15px] border-b border-[#e5e5e5] text-[20px] font-[400] text-[#2d2d2d]">
          Latest Products
        </h1>

        <div>
          {products1.map((item, index) => (
            <div key={index} className="mb-10 group items-center flex gap-5">
              <div className="flex items-center justify-center rounded-[5px] border-[#48484829] w-[40%] bg-white">
                <Image
                  className="object-contain  transition-all rounded-2xl"
                  src={item.img}
                  alt="products"
                />
              </div>

              <div>
                <div className="flex flex-col gap-2 mb-5">
                  <span className="text-[#333333] text-[14px] hover:text-[#f28b00] transition-all cursor-pointer">
                    {item.name}
                  </span>
                  <div className="flex  gap-2">
                    <FaStar className="text-[12px] text-[#f28b00]" />
                    <FaStar className="text-[12px] text-[#f28b00]" />
                    <FaStar className="text-[12px] text-[#f28b00]" />
                    <FaStar className="text-[12px] text-[#f28b00]" />
                    <FaStar className="text-[12px] text-[#f28b00]" />
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-[500] text-[18px] text-[#484848]">
                    {item.price}
                  </span>
                  <span className="text-[14px] line-through text-[#c5c5c5] block">
                    {item.old}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h1 className="mb-[22px] pb-[15px] border-b border-[#e5e5e5] text-[20px] font-[400] text-[#2d2d2d]">
         Popular Tags
        </h1>

        <div>
            {tag.map((item,_) => (
            <h4 key={item.name} className="py-[5px] mr-[17px] mb-[11px] px-[28px] hover:bg-[#f28b00] hover:text-[#fff] transition-all inline-block text-[#8c8c8c] text-[13px] rounded-[30px] bg-[#f5f5f5] relative cursor-pointer">{item.name
            }</h4>
            ))}
        </div>
      </div>
    </div>
  );
}
