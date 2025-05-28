"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from '../public/logo.png'

const Navbar = () => {
  return (
    <div className="fixed bg-white top-0 left-0 z-50 w-full">
    <nav className="flex  justify-between  md:bg-green-700 lg:bg-white bg-blue-600  mx-auto  items-center max-w-6xl w-full">
      {/* Logo 
      
       <nav className="flex items-center justify-between px-5 mx-auto shadow-sm md:bg-green-700 lg:bg-red-600 bg-blue-600 md:w-full md:max-w-3xl lg:w-">*/}
      <div className="text-2xl font-bold text-white  px-4 py-1 rounded-tl-lg rounded-br-lg tracking-wide">
        <Image src={logo} alt="logo"/>
      </div>

      {/* Navigation Links     rgb(255, 255, 255) */}
      <ul className="flex space-x-6 text-[#a7282f] font-semibold">
        <li><Link href="#" className="hover:text-[#871f26]">Home</Link></li>
        <li><Link href="#" className="hover:text-[#871f26]">About Us</Link></li>
        <li><Link href="#" className="hover:text-[#871f26]">Explore Foods</Link></li>
        <li><Link href="#" className="hover:text-[#871f26]">Reviews</Link></li>
        <li><Link href="#" className="hover:text-[#871f26]">FAQ</Link></li>
        <li><Link href="#" className="bg-[#a7282f] text-white font-semibold px-6 py-3 "> 1800 789 123</Link></li>
      </ul>

      
    </nav>
    </div>
  );
};

export default Navbar;
