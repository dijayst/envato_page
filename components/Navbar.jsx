"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from '../public/logo.png'
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    
    <div className="fixed bg-white top-0 left-0 z-50 w-full">
    <nav className="flex  justify-between  md:bg-green-700 lg:bg-white bg-blue-600  mx-auto  items-center max-w-6xl w-full">
      {/* Logo 
      
       <nav className="flex items-center justify-between px-5 mx-auto shadow-sm md:bg-green-700 lg:bg-red-600 bg-blue-600 md:w-full md:max-w-3xl lg:w-">*/}
      <div className="text-2xl font-bold text-white  px-4 py-1 rounded-tl-lg rounded-br-lg tracking-wide">
        <Image src={logo} alt="logo"/>
      </div>

      {/* Navigation Links     rgb(255, 255, 255) */}
      <ul className=" space-x-6 text-[#a7282f] font-semibold       hidden md:flex ">
        <li><Link href="#" className="hover:text-[#871f26]">Home</Link></li>
        <li><Link href="#" className="hover:text-[#871f26]">About Us</Link></li>
        <li><Link href="#" className="hover:text-[#871f26]">Explore Foods</Link></li>
        <li><Link href="#" className="hover:text-[#871f26]">Reviews</Link></li>
        <li><Link href="#" className="hover:text-[#871f26]">FAQ</Link></li>
        <li><Link href="#" className="bg-[#a7282f] text-white font-semibold px-6 py-3 "> 1800 789 123</Link></li>
      </ul>

       {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <p className="bg-red-600">gfgffgh</p> :<RxHamburgerMenu size={25} color="white" />}
          </button>
        </div>
    </nav>



<section
        onClick={() => setIsOpen(true)}
        className="burger-container lg:hidden block"
      >
        <RxHamburgerMenu size={25} color="white" />
      </section>


    {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col space-y-4 px-6 pb-4 text-[#a7282f] font-semibold bg-white">
          <li><Link href="#" className="hover:text-[#871f26]">Home</Link></li>
          <li><Link href="#" className="hover:text-[#871f26]">About Us</Link></li>
          <li><Link href="#" className="hover:text-[#871f26]">Explore Foods</Link></li>
          <li><Link href="#" className="hover:text-[#871f26]">Reviews</Link></li>
          <li><Link href="#" className="hover:text-[#871f26]">FAQ</Link></li>
          <li><Link href="#" className="bg-[#a7282f] text-white px-6 py-2 rounded hover:bg-[#871f26]">1800 789 123</Link></li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
