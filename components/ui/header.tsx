"use client"
import Link from "next/link";

import Image from "next/image";
import { useState } from "react";
function Header() {
    const [isClick, setisClick] = useState(false);

    const toggleNav = (): void => {
      setisClick(!isClick);
    };
  return (
    <>
    <header className="bg-[url('/images/hero1.svg')] bg-cover gap-3 flex lg:flex-col justify-center w-screen items-center bg-center p-5">
        <div className="flex items-center lg:justify-center w-[70%] sm:w-[40%] lg:w-[100%]">
        <h2 className=" text-primary1 text-2xl font-bold">
        Food<span className=" text-text">tuck</span>
      </h2>
      </div>
        <div className=" flex items-center justify-between w-[55
        %] lg:w-[95%] xl:w-[75%]">
      
    <nav className=" hidden lg:block">
        <ul className=" flex gap-5">
            <li className=" font-inter font-normal text-base text-text">
                <Link href="/home">
                  Home
                </Link>
            </li>
            <li className=" font-inter font-normal text-base text-text">
                <Link href="/menu">
                  Menu
                </Link>
            </li>
            <li className=" font-inter font-normal text-base text-white">
                <Link href="/blog">
                  Blog
                </Link>
            </li>
            <li className=" font-inter font-normal text-base text-white">
                <Link href="/signup">
                  Sign Up
                </Link>
            </li>
            <li className=" font-inter font-normal text-base text-text">
                <Link href="/about">
                  About
                </Link>
            </li>
            <li className=" font-inter font-normal text-base text-text">
                <Link href="/shop">
                  Shop
                </Link>
            </li>
            <li className=" font-inter font-normal text-base text-text">
                <Link href="/chef">
                 Our Chef&apos;s
                </Link>
            </li>
           
        </ul>
    </nav>
    <div className="flex gap-3">
        <div className=" hidden sm:flex">
        <input type="text"
        className=" bg-transparent border border-primary1 border-r-0 rounded-l-3xl px-4 py-2"
         placeholder="Search..." />
        
         <Image 
         className=" border border-primary1 border-l-0 rounded-r-3xl  pr-4 "
         src={'/icons/search.svg'}
         alt="icons"
         height={39}
         width={39}
         />
         </div>
         <Image 
         src={'/icons/Handbag.svg'}
         alt="icons"
         height={27}
         width={27}
         />
         <button
            className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500
      "
            onClick={toggleNav}
          >
            {isClick ? (
              <Image
                src={"/icons/xmark-solid.svg"}
                alt="menu"
                width={20}
                height={20}
              />
            ) : (
              <Image
                src={"/icons/bars-solid.svg"}
                alt="menu"
                width={20}
                height={20}
              />
            )}
          </button>
         </div>
         </div>
        
    </header>
     {isClick && (
        <div>
          <div className="px-2 bg-[#0d0d0d] pt-2 pb-5 space-y-1 sm:px-3">
            <ul className=" flex flex-col items-center p-3 bg-[#0d0d0d] text-slate-300 gap-5 border-b border-b-gray-900">
              <li className="hover:text-primary1 hover:underline">
                <Link href="/home">Home</Link>
              </li>
              <li className="hover:text-primary1 hover:underline">
                <Link href="/shop">Shop</Link>
              </li>
              <li className="hover:text-primary1 hover:underline">
                <Link href="/detail">detail</Link>
              </li>
              <li className="hover:text-primary1 hover:underline">
                <Link href="/cart ">Cart</Link>
              </li>
              <li className="hover:text-primary1 hover:underline">
                <Link href="/menu ">Menu</Link>
              </li>
              <li className="hover:text-primary1 hover:underline">
                <Link href="/checkout ">Check Out</Link>
              </li>
              <li className="hover:text-primary1 hover:underline">
                <Link href="/blog ">Blog</Link>
              </li>
              <li className="hover:text-primary1 hover:underline">
                <Link href="/signup ">Sign Up</Link>
              </li>
              <li className="hover:text-primary1 hover:underline">
                <Link href="/about ">About Us</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
      </>
  )
}

export default Header;