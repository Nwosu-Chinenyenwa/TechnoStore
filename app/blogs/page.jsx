import React from "react";
import BlogAside from "../components/Blogcomponents/BlogAside";
import Blogmain from "../components/Blogcomponents/Blogmain";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function page() {
  return (
    <>
      <Header />
      <section>
        <div className="flex md:flex-row flex-col justify-center mt-[40px]">
          <BlogAside />
          <Blogmain />
        </div>
      </section>
      <Footer />
    </>
  );
}
