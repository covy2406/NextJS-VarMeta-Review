'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { LuSearch } from "react-icons/lu";

const Header = () => {
  const [scrolling, setScrolling] = React.useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])
  return (
    <nav className='flex relative z-20 items-center justify-between h-[92px] top-0 left-0 right-0 px-36 uppercase bg-transparent'>
      <ul>
        <Link className='inline-block font-semibold p-2' href={'/'}>
          <Image alt='logo' width='52' height='52' src={'https://theme-land.com/sapp/demo/assets/img/logo/logo.png'}/>
        </Link>
      </ul>
      <ul className='md:flex hidden'>
        <Link className='inline-block font-semibold p-2 mx-2' href={'/home'}>home</Link>
        <Link className='inline-block font-semibold p-2 mx-2' href={'/feature'}>feature</Link>
        <Link className='inline-block font-semibold p-2 mx-2' href={'/page'}>page</Link>
        <Link className='inline-block font-semibold p-2 mx-2' href={'/screenshort'}>screenshort</Link>
        <Link className='inline-block font-semibold p-2 mx-2' href={'/pricing'}>pricing</Link>
        <Link className='inline-block font-semibold p-2 mx-2' href={'/contact'}>contact</Link>
      </ul>
      <ul>
        <LuSearch /> 
      </ul>
    </nav>
  )
}

export default Header