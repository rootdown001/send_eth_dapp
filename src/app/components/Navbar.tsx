import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import logo from "/public/rootdowncrypto.png";

export default function Navbar() {
  return (
    <nav className=" w-full flex md:justify-center justify-between items-center p-4">
      <div className=" md:flex-[0.5] flex-initial justify-center items-center">
        <Image src={logo} alt="logo" className=" cursor-pointer w-32 " />
      </div>
    </nav>
  );
}