import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div className='bg-banner-image bg-cover bg-no-repeat bg-center h-[690px] py-[130px]'>
      <div className=' max-w-[1170px] mx-auto'>
        <div className='flex'>
          <div className='relative animate-bounce w-[50%]'>
            <Image className='max-w-full h-auto align-middle' alt='iphone' width='474' height='550' src={'https://theme-land.com/sapp/demo/assets/img/content/hero-thumb-2.png'} />
          </div>
          <div className='w-[50%]'>
            <Image alt='logo-banner' width='52' height='52' src={'https://theme-land.com/sapp/demo/assets/img/logo/logo-white.png'} />
            <h3 className='text-white font-bold text-[2rem]'>Premium App Landing page</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner