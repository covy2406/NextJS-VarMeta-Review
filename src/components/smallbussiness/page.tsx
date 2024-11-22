import Image from 'next/image'
import React from 'react'
import assetsBgImage from '../../../public/images/logo'

const SmallBussiness = () => {
  const {slide1} = assetsBgImage;
  return (
    <div className='py-[8.125rem] max-w-[73.125rem] mx-auto'>
      <div className='text-center mx-auto w-[660px]'>
        <p className='text-black font-bold mb-6 text-5xl leading-[1.2em]'>Why Small Business Owner's Loves sApp</p>
        <p>Discover the unique features of sApp that set it apart from the competition, designed to deliver unmatched performance and seamless user experiences.</p>
      </div>
      <div>
        <div className='w-1/2'>
          <div className='bg-bg-phonecase bg-no-repeat bg-center bg-cover bg-scroll  transf pt-[4.1875rem] pr-[23px] pb-[5.625rem] pl-[26px] max-w-[18.125rem] mt-0 mx-auto overflow-hidden'>
            <Image alt='slide1' width={221} height={428.66} src={slide1} />
          </div>
        </div>
        <div className='w-1/2'></div>
      </div>
    </div>
  )
}

export default SmallBussiness