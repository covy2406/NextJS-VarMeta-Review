"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { LuSearch, LuAlignJustify, LuX } from "react-icons/lu";
import assetsBgImage from "../../../public/images/logo";

const Header = () => {
  const { logo } = assetsBgImage;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className={`fixed flex max-w-full uppercase font-medium container mx-auto h-[5.75rem] items-center justify-between top-0 left-0 right-0 z-50 transition-all duration-300 bg-bg-header bg-scroll backdrop-blur-md animate-animate-header 
      }`}
    >
      {/* Logo */}
      <Link href={"/"} className="flex items-center">
        <Image alt="logo" width={52} height={52} src={logo} />
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden custom-range:hidden md:flex space-x-6">
        <li>
          <Link href={"/"} className="hover:text-blue-500">
            Home
          </Link>
        </li>
        <li>
          <Link href={"/feature"} className="hover:text-blue-500">
            Feature
          </Link>
        </li>
        <li>
          <Link href={"/page"} className="hover:text-blue-500">
            Page
          </Link>
        </li>
        <li>
          <Link href={"/screenshort"} className="hover:text-blue-500">
            Screenshot
          </Link>
        </li>
      </ul>

      {/* Icons */}
      <div className="flex items-center space-x-4">
        <button className="text-xl">
          <LuSearch />
        </button>
        {/* Mobile Menu Toggle */}
        <button
          className="text-xl md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <LuX /> : <LuAlignJustify />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="absolute top-20 left-0 right-0 bg-gray-800 text-white flex flex-col space-y-4 py-4 px-6 lg:hidden md:hidden">
          <li>
            <Link
              href={"/"}
              className="block hover:text-blue-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href={"/feature"}
              className="block hover:text-blue-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Feature
            </Link>
          </li>
          <li>
            <Link
              href={"/page"}
              className="block hover:text-blue-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Page
            </Link>
          </li>
          <li>
            <Link
              href={"/screenshort"}
              className="block hover:text-blue-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Screenshot
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Header;
