import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import arrow from "../../public/images/arrow-right.png";
import Image from "next/image";

export default function () {
  const terms = [
    {
      title: "What are Terms and Conditions",
      dis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in accumsan dui. Donec imperdiet, nisl non pharetra convallis, nunc sapien laoreet massa, ac elementum arcu neque vitae enim. Praesent convallis leo est, scelerisque tincidunt magna ultricies eu. Ut placerat est a eros faucibus feugiat. Nullam a urna sit amet sem porttitor quis nibh. In hac habitasse platea dictumst. Donec sit amet auctor leo. Sed venenatis posuere risus quis dictum. Vivamus ullamcorper orci vitae eros tincidunt, a aliquet lacus Sed consectetur, est vel tincidunt imperdiet, justo est dignissim lorem, nec tincidunt lacus lacus ac risus. Cras pretium enim nec vestibulum aliquam. Vestibulum ante ipsum faucibus orci luctus et ultrices posuere cubilia Curae;",
    },
    {
      title: "What to include in a Terms and Conditions",
      dis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in accumsan dui. Donec imperdiet, nisl non pharetra convallis, nunc sapien laoreet massa, ac elementum arcu neque vitae enim. Praesent convallis leo est, scelerisque tincidunt magna ultricies eu. Ut placerat est a eros faucibus feugiat. Nullam a urna sit amet sem porttitor quis nibh. In hac habitasse platea dictumst. Donec sit amet auctor leo. Sed venenatis posuere risus quis dictum. Vivamus ullamcorper orci vitae eros tincidunt, a aliquet lacus Sed consectetur, est vel tincidunt imperdiet, justo est dignissim lorem, nec tincidunt lacus lacus ac risus. Cras pretium enim nec vestibulum aliquam. Vestibulum ante ipsum faucibus orci luctus et ultrices posuere cubilia Curae;",
    },
  ];
  return (
    <>
      <Header />
      <div className="border-b border-[#00000022] py-3 ">
        <div className="flex items-center gap-5 ml-[19px]">
          <h2 className="font-[500] text-[#8c8c8c] cursor-pointer hover:text-[#f28b00] transition-all">
            Home
          </h2>
          <Image src={arrow} alt="arrow right" />
          <h2 className="font-[500] text-[#8c8c8c]">Terms & Conditions</h2>
        </div>
      </div>
      <section className="mt-[46px] mb-[10px]">
        <div className="flex items-center justify-center">
          <div className="w-[1170px] px-[15px]">
            {terms.map((item, _) => (
              <div key={item.title} className="mb-[81px]">
                <h3 className="mb-[28px] text-[20px] font-[400] text-[#2d2d2d]">
                  {item.title}
                </h3>
                <p className="md:pr-[100px] text-[#919191] text-[14px]">
                  {item.dis}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
