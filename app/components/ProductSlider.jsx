"use client";

import { useState, useEffect } from "react";
import product1 from "../../public/images/08.jpg";
import product2 from "../../public/product1/1.jpg";
import product3 from "../../public/product1/02.jpg";
import product4 from "../../public/product1/03.jpg";
import product5 from "../../public/product1/04.jpg";
import product6 from "../../public/product1/05.jpg";
import product7 from "../../public/product1/06.jpg";
import { GoGitCompare } from "react-icons/go";
import { CiHeart } from "react-icons/ci";
import Image from "next/image";

const products = [
  {
    id: 1,
    img: product1,
    cat: "Laptops",
    name: "Apple iPad Mini G2356",
    old: "$2,999.00",
    price: "$1,250.00",
  },
  {
    id: 2,
    img: product2,
    cat: "Laptops",
    name: "Apple iPad Mini G2356",
    old: "$2,999.00",
    price: "$1,250.00",
  },
  {
    id: 3,
    img: product3,
    cat: "Laptops",
    name: "Apple iPad Mini G2356",
    old: "$2,999.00",
    price: "$1,250.00",
  },
  {
    id: 4,
    img: product4,
    cat: "Laptops",
    name: "Apple iPad Mini G2356",
    old: "$2,999.00",
    price: "$1,250.00",
  },
  {
    id: 5,
    img: product5,
    cat: "Laptops",
    name: "Apple iPad Mini G2356",
    old: "$2,999.00",
    price: "$1,250.00",
  },
  {
    id: 6,
    img: product6,
    cat: "Laptops",
    name: "Apple iPad Mini G2356",
    old: "$2,999.00",
    price: "$1,250.00",
  },
  {
    id: 7,
    img: product7,
    cat: "Laptops",
    name: "Apple iPad Mini G2356",
    old: "$2,999.00",
    price: "$1,250.00",
  },
  {
    id: 8,
    img: product1,
    cat: "Laptops",
    name: "Apple iPad Mini G2356",
    old: "$2,999.00",
    price: "$1,250.00",
  },
  {
    id: 9,
    img: product2,
    cat: "Laptops",
    name: "Apple iPad Mini G2356",
    old: "$2,999.00",
    price: "$1,250.00",
  },
  {
    id: 10,
    img: product3,
    cat: "Laptops",
    name: "Apple iPad Mini G2356",
    old: "$2,999.00",
    price: "$1,250.00",
  },
  {
    id: 11,
    img: product4,
    cat: "Laptops",
    name: "Apple iPad Mini G2356",
    old: "$2,999.00",
    price: "$1,250.00",
  },
  {
    id: 12,
    img: product5,
    cat: "Laptops",
    name: "Apple iPad Mini G2356",
    old: "$2,999.00",
    price: "$1,250.00",
  },
  {
    id: 13,
    img: product6,
    cat: "Laptops",
    name: "Apple iPad Mini G2356",
    old: "$2,999.00",
    price: "$1,250.00",
  },
  {
    id: 14,
    img: product1,
    cat: "Laptops",
    name: "Apple iPad Mini G2356",
    old: "$2,999.00",
    price: "$1,250.00",
  },
  {
    id: 15,
    img: product2,
    cat: "Laptops",
    name: "Apple iPad Mini G2356",
    old: "$2,999.00",
    price: "$1,250.00",
  },
  {
    id: 16,
    img: product3,
    cat: "Laptops",
    name: "Apple iPad Mini G2356",
    old: "$2,999.00",
    price: "$1,250.00",
  },
  {
    id: 17,
    img: product4,
    cat: "Laptops",
    name: "Apple iPad Mini G2356",
    old: "$2,999.00",
    price: "$1,250.00",
  },
  {
    id: 18,
    img: product5,
    cat: "Laptops",
    name: "Apple iPad Mini G2356",
    old: "$2,999.00",
    price: "$1,250.00",
  },
  {
    id: 19,
    img: product6,
    cat: "Laptops",
    name: "Apple iPad Mini G2356",
    old: "$2,999.00",
    price: "$1,250.00",
  },
  {
    id: 20,
    img: product7,
    cat: "Laptops",
    name: "Apple iPad Mini G2356",
    old: "$2,999.00",
    price: "$1,250.00",
  },
  {
    id: 21,
    img: product1,
    cat: "Laptops",
    name: "Apple iPad Mini G2356",
    old: "$2,999.00",
    price: "$1,250.00",
  },
  {
    id: 22,
    img: product2,
    cat: "Laptops",
    name: "Apple iPad Mini G2356",
    old: "$2,999.00",
    price: "$1,250.00",
  },
  {
    id: 23,
    img: product3,
    cat: "Laptops",
    name: "Apple iPad Mini G2356",
    old: "$2,999.00",
    price: "$1,250.00",
  },
  {
    id: 24,
    img: product4,
    cat: "Laptops",
    name: "Apple iPad Mini G2356",
    old: "$2,999.00",
    price: "$1,250.00",
  },
  {
    id: 25,
    img: product5,
    cat: "Laptops",
    name: "Apple iPad Mini G2356",
    old: "$2,999.00",
    price: "$1,250.00",
  },
  {
    id: 26,
    img: product6,
    cat: "Laptops",
    name: "Apple iPad Mini G2356",
    old: "$2,999.00",
    price: "$1,250.00",
  },
  {
    id: 27,
    img: product3,
    cat: "Laptops",
    name: "Apple iPad Mini G2356",
    old: "$2,999.00",
    price: "$1,250.00",
  },
  {
    id: 28,
    img: product4,
    cat: "Laptops",
    name: "Apple iPad Mini G2356",
    old: "$2,999.00",
    price: "$1,250.00",
  },
  {
    id: 29,
    img: product5,
    cat: "Laptops",
    name: "Apple iPad Mini G2356",
    old: "$2,999.00",
    price: "$1,250.00",
  },
  {
    id: 30,
    img: product6,
    cat: "Laptops",
    name: "Apple iPad Mini G2356",
    old: "$2,999.00",
    price: "$1,250.00",
  },
];

const chunkProducts = (arr, size) =>
  arr.reduce(
    (acc, _, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]),
    []
  );

export default function ProductSlider() {
  const [active, setActive] = useState(0);

  const slides = chunkProducts(products, 6);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-[90%] m-auto py-10">
      <div className="flex justify-between items-center py-1 border-b-1 border-[#e5e5e5]">
        <h2 className="text-[24px] font-[500] mb-5">Our Products</h2>

        <div className="flex gap-3 mt-4 justify-end pr-5">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`h-4 w-4 rounded-full border-2 flex items-center justify-center ${
                active === i ? "border-[#f28b00]" : "border-[gray]"
              }`}
            >
              <button
                onClick={() => setActive(i)}
                className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                  active === i ? "bg-[#f28b00] scale-110 shadow-md" : "bg-white"
                }`}
              ></button>
            </div>
          ))}
        </div>
      </div>

      <div className="relative w-full overflow-hidden py-10">
        <div
          className="flex transition-all duration-500"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {slides.map((group, i) => (
            <div
              key={i}
              className="flex w-full justify-between flex-wrap shrink-0 px-5"
            >
              {group.map((item) => (
                <div key={item.id} className="group w-[30%] mb-10">
                  <div className="h-[250px] flex items-center rounded-[10px] group">
                    <div>
                      <div className="flex items-center gap-4">
                        <Image
                          className="w-[15vw]"
                          src={item.img}
                          alt="products"
                        />

                        <div className="flex flex-col gap-2">
                          <span className="text-[#919191] text-[13px]">
                            {item.cat}
                          </span>

                          <span className="leading-[20px] text-[#484848] text-[16px] block w-[160px]">
                            {item.name}
                          </span>

                          <div className="mt-1">
                            <span className="text-[14px] line-through text-[#c5c5c5] block">
                              {item.old}
                            </span>
                            <span className="text-[#f28b00] text-[21px] font-[600]">
                              {item.price}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-center opacity-0 transition-all group-hover:opacity-100 gap-5 mt-1">
                        <div className="flex items-center gap-1">
                          <div className="text-[#919191] text-[12px] font-[600] flex items-center gap-2">
                            <GoGitCompare className="text-[16px]" />
                            <span>Compare</span>
                          </div>

                          <div className="text-[#919191] text-[12px] font-[600] flex items-center gap-2">
                            <CiHeart className="text-[16px]" />
                            <span>Wishlist</span>
                          </div>
                        </div>

                        <button className="flex bg-[#f92400] hover:bg-[#f28b00] transition-all text-white text-[14px] cursor-pointer font-[600] px-5 py-2 rounded-full">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
