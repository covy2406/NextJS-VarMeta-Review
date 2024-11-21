import Image from 'next/image';
import React from 'react'
import { LuBookCopy } from "react-icons/lu";
import { LuBadgeCheck } from "react-icons/lu";
import { LuRepeat2 } from "react-icons/lu";
import { LuClock } from "react-icons/lu";
import { RxArrowRight } from "react-icons/rx";
import assetsBgImage from '../../../public/images/logo';

export const styleIcons = [
  {
    id: 1,
    icon: <LuBookCopy />,
    title: 'Organize',
    description: 'Automate routine tasks to boost your efficiency and productivity while saving valuable time for other activities'
  },
  {
    id: 2,
    icon: <LuBadgeCheck />,
    title: 'Manage',
    description: 'Seamlessly synchronize data across all your devices, ensuring effortless access to information.'
  },
  {
    id: 3,
    icon: <LuRepeat2 />,
    title: 'Share',
    description: 'Control and monitor your smart home devices from a single, intuitive interface, simplifying your daily interactions.'
  },
  {
    id: 4,
    icon: <LuClock />,
    title: 'Save Time',
    description: 'Receive personalized notifications and reminders tailored to your schedule, keeping you organized and on track.'
  }
]

const OrganizeMedia = () => {
  const { thumbnail1 } = assetsBgImage;
  return (
    <div className='flex max-w-[73.125rem] w-full bg-fixed py-[8.125rem] mx-auto'>
      <div className='w-1/2'>
        <p className='text-black font-bold mb-6 text-5xl leading-[1.2em]'>Organize all your media content easily</p>
        <ul>
          {styleIcons.map((item) => (
            <li className='flex items-center' key={item.id}>
              <div className='my-6 mr-4 text-2xl rounded-sm shadow-md text-primary-color'>
                <span className='flex items-center justify-center h-14 w-14'>{item.icon}</span>
              </div>
              <span className="text-md">{item.description}</span>
            </li>
          ))}
          <button className='flex hover:bg-hover-btn hover:text-white hover:btn-right items-center py-4 px-[2.125rem] border border-solid rounded-full border-primary-color'>
            <span className='mr-1 text-lg font-medium'>Learn More</span>
            <RxArrowRight size={24}/>
          </button>
        </ul>
      </div>
      <div className='flex flex-col items-center justify-center w-1/2 align-middle'>
          <Image alt='thumbnail1' width={561} height={414} src={thumbnail1} />
      </div>
    </div>
  )
}

export default OrganizeMedia