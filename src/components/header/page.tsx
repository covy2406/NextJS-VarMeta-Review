"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { LuSearch, LuAlignJustify } from "react-icons/lu";
import assetsBgImage from "../../../public/images/logo";

const Header = () => {
  const { logo } = assetsBgImage;
  const [scrolling, setScrolling] = useState(false);
  // const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="relative flex 3xl:relative 3xl:px-4 xl:fixed md:relative smd:flex smd:px-4 sm:px-4 sm:relative mn:relative transition-all duration-300 bg-bg-header bg-scroll backdrop-blur-md animate-animate-header top-0 py-5 left-0 right-0 z-50 items-center justify-between uppercase">
      <Link className="inline-block py-2 px-4 font-semibold" href={"/"}>
        <Image alt="logo" width={52} height={52} src={logo} />
      </Link>
      <ul className="flex sxl:flex 5xl:flex 3xl:hidden md:hidden sm:hidden xs:hidden mn:hidden smn:hidden smd:flex items-center">
        <Link className="inline-block py-2 px-4 mx-2 font-semibold" href={"/"}>
          home
        </Link>
        <Link
          className="inline-block py-2 px-4 mx-2 font-semibold"
          href={"/feature"}
        >
          feature
        </Link>
        <Link
          className="inline-block py-2 px-4 mx-2 font-semibold"
          href={"/page"}
        >
          page
        </Link>
        <Link
          className="inline-block py-2 px-4 mx-2 font-semibold"
          href={"/screenshort"}
        >
          screenshort
        </Link>
        <Link
          className="inline-block py-2 px-4 mx-2 font-semibold"
          href={"/pricing"}
        >
          pricing
        </Link>
        <Link
          className="inline-block py-2 px-4 mx-2 font-semibold"
          href={"/contact"}
        >
          contact
        </Link>
      </ul>
      <ul className="flex items-center">
        <li className="mr-8">
          <LuSearch width={32} height={32} className="w-8 h-8" />
        </li>
        <li className="md:flex sxl:hidden 5xl:hidden 3xl:flex smd:hidden">
          <LuAlignJustify width={32} height={32} className="w-8 h-8" />
        </li>
      </ul>
    </nav>
  );
};

export default Header;
