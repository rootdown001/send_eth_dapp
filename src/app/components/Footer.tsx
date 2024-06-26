"use client";
import logo from "/public/rootdowncrypto5.png";
import React from "react";
import Image from "next/image";
import { links } from "./Navbar";
import { NavItem } from "./Navbar";

export default function Footer() {
  return (
    <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 ">
      <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
        <div className="flex justify-center items-center flex-[0.5]">
          <div className="bg-white rounded-xl p-3">
            <Image
              src={logo}
              alt="logo"
              className=" cursor-pointer w-32 rounded-lg bg-white"
            />
          </div>
        </div>

        <div className="flex text-white flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
          {links.map((item, index) => (
            <NavItem
              key={item.id}
              title={item.name}
              target={item.target}
              rel={item.rel}
              url={item.url}
              internal={item.internal}
            />
          ))}

          {/* <p className="text-white text-base text-center mx-2 cursor-pointer">
            Market
          </p>
          <p className="text-white text-base text-center mx-2 cursor-pointer">
            Exchange
          </p>
          <p className="text-white text-base text-center mx-2 cursor-pointer">
            Tutorials
          </p>
          <p className="text-white text-base text-center mx-2 cursor-pointer">
            Wallets
          </p> */}
        </div>
      </div>
      <div className="flex justify-center items-center flex-col mt-2">
        <p className="text-white text-sm text-center">
          Site feedback & suggestions
        </p>
        <p className="text-white text-sm text-center">
          rootdowncrypto@gmail.com
        </p>
      </div>
      <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5" />
      <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
        <p className="text-white text-sm text-center">Rootdown Crypto 2024</p>
        <p className="text-white text-sm text-center">All rights reserved</p>
      </div>
    </div>
  );
}
