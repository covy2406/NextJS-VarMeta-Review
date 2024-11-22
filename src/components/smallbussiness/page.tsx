import Image from 'next/image'
import React from 'react'
import assetsBgImage from '../../../public/images/logo'
import { listIcons } from '@/components/smallbussiness/constants/data';

const SmallBussiness = () => {
  const {slide1} = assetsBgImage;
  return (
    <div className='py-[8.125rem] container mx-auto'>
      <div className='text-center mx-auto w-[660px]'>
        <p className='text-black font-bold mb-6 text-5xl leading-[1.2em]'>Why Small Business Owner's Loves sApp</p>
        <p>Discover the unique features of sApp that set it apart from the competition, designed to deliver unmatched performance and seamless user experiences.</p>
      </div>
      <div className='flex items-center mt-8'>
        <div className='w-1/2'>
          <div className='bg-bg-phonecase bg-no-repeat bg-center bg-cover bg-scroll  transf pt-[4.1875rem] pr-[23px] pb-[5.625rem] pl-[26px] max-w-[18.125rem] mt-0 mx-auto overflow-hidden'>
            <Image alt='slide1' width={230} height={428.66} src={slide1} />
          </div>
        </div>
        <div className='w-1/2'>
          <ul>
            {listIcons.map((item) => (
              <li key={item.id} className='flex mb-4 gap-1'>
                <div className='mr-4'>
                  <Image alt='icon1' width={50} height={50} src={item.icon} />
                </div>
                <div className='text-left'>
                  <p className='text-black font-bold text-2xl capitalize'>{item.title}</p>
                  <p className='leading-6 break-words'>{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SmallBussiness