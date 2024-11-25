"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { LuSearch } from "react-icons/lu";
import assetsBgImage from "../../../public/images/logo";
import { LuAlignJustify } from "react-icons/lu";

const Header = () => {
  const { logo } = assetsBgImage;
  const [scrolling, setScrolling] = React.useState(false);
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
    <nav className="flex fixed bg-bg-header bg-scroll backdrop-blur-md animate-animate-header top-0 py-5 px-36 md:px-6 sm:px-6 left-0 right-0 z-50 items-center justify-between h-[92px] uppercase">
      <ul className="z-50">
        <Link className="inline-block py-2 px-4 font-semibold" href={"/"}>
          <Image alt="logo" width={52} height={52} src={logo} />
        </Link>
      </ul>
      <ul className="hidden md:flex">
        <Link className="inline-block py-2 px-4 mx-2 font-semibold" href={"/"}>
          home
        </Link>
        <Link className="inline-block py-2 px-4 mx-2 font-semibold" href={"/feature"}>
          feature
        </Link>
        <Link className="inline-block py-2 px-4 mx-2 font-semibold" href={"/page"}>
          page
        </Link>
        <Link
          className="inline-block py-2 px-4 mx-2 font-semibold"
          href={"/screenshort"}
        >
          screenshort
        </Link>
        <Link className="inline-block py-2 px-4 mx-2 font-semibold" href={"/pricing"}>
          pricing
        </Link>
        <Link className="inline-block py-2 px-4 mx-2 font-semibold" href={"/contact"}>
          contact
        </Link>
      </ul>
      <ul className="cursor-pointer flex items-center">
        <li className="mr-8">
        <LuSearch width={32} height={32} className="w-8 h-8"/>
        </li>
        <li className="md:flex xl:hidden lg:hidden">
          <LuAlignJustify width={32} height={32} className="w-8 h-8"/>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
