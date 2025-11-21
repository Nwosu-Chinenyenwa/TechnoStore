"use client";

import { useState, useEffect } from "react";
import Top from "./Top";
import Nav from "./Nav";
import Links from "./Links";

export default function Header() {
  return (
    <>
     <header>
      <Top/>
      <Nav/>
      <Links/>
     </header>
    </>
  );
}
