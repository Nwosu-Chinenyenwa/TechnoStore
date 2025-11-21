"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../public/images/logo.png";
import { useRouter } from "next/navigation";
import Game from "./components/Game";
import Nav from "./components/Nav";

export default function Home() {
  const [load, setload] = useState(true);
  const route = useRouter();

  useEffect(() => {
    const loader = setTimeout(() => {
      setload(false);
    }, 1000);
    return () => clearTimeout(loader);
  }, []);

  if (load) {
    return (
      <>
        <section className=" flex h-[100vh] w-[100vw] items-center justify-center">
          <div className="flex flex-col items-center gap-10">
            <Image className="w-[40vw] lg:w-[20vw]" src={logo} alt="Logo" />
            <div className="loader-wrapper w-[200px] h-1 rounded-full bg-black/20 relative overflow-hidden">
              <div className="loader-bar absolute top-0 left-0 h-full w-0 bg-[#f28b00] rounded-full animate-loader"></div>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <Game />
    </>
  );
}
