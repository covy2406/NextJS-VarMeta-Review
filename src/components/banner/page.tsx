import Image from "next/image";
import React from "react";
import Link from "next/link";
import assetsBgImage from "../../../public/images/logo";

const Banner = () => {
  const { iphone, brand, googleplay, appstore } = assetsBgImage;
  return (
    <div className="relative bg-banner-image has-overlay bg-cover bg-scroll bg-no-repeat bg-center h-full py-[8.125rem]">
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-bg-overlay"></div> */}
      <div className=" max-w-[73.125rem] grid-cols-2 flex mx-auto align-middle">
        <div className="relative z-10 w-1/2 px-2 animate-bounce">
          <Image
            className="align-middle "
            alt="iphone"
            width={474}
            height={550}
            src={iphone}
          />
        </div>
        <div className="flex flex-col z-10 items-start justify-center w-1/2 px-2 text-left align-middle">
          <Image
            alt="logo-brand"
            width="52"
            height="52"
            src={brand}
          />
          <h3 className="text-white font-bold my-6 text-[2rem]">
            Premium App Landing page
          </h3>
          <p className="text-xl text-white my-6 font-semibold leading-[1.6em]">
            Create high-quality landing pages for your app that exude
            professionalism and attract users, ensuring a strong first
            impression.
          </p>
          <div className="flex items-center">
            <Link className="mr-4" href={'/'}>
              <Image alt="ggplay" width={190} height={100} src={googleplay} />
            </Link>
            <Link href={'/'}>
              <Image alt="appstore" width={190} height={100} src={appstore} />
            </Link>
          </div>
          <em className="mt-6 text-lg text-white">* Available on iPhone, iPad and all Android devices</em>
        </div>
      </div>
    </div>
  );
};

export default Banner;
