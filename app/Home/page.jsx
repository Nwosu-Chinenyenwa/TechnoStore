"use client";

import { useState, useEffect } from "react";
import Subscribe from "../components/Subscribe";
import Top from "../components/Top";

export default function page() {
  return (
    <>
      <Subscribe />

      <Top/>
    </>
  );
}
