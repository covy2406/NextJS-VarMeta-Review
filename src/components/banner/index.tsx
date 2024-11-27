import Image from "next/image";
import React from "react";
import Link from "next/link";
import assetsBgImage from "../../../public/images/logo";

const Banner = () => {
  const { iphone, brand, googleplay, appstore } = assetsBgImage;
  return (
    <div className="relative px-4 item bg-banner-image has-overlay bg-cover bg-scroll bg-no-repeat bg-center h-full py-[8.125rem]">
      <div className="container md:px-4 grid xl:grid-cols-2 md:grid-cols-1 gap-y-6 justify-center items-center mx-auto align-middle">
        <div className="relative z-10 px-2 animate-bounce ">
          <Image
            className="align-middle items-center flex justify-center"
            alt="iphone"
            width={474}
            height={550}
            src={iphone}
          />
        </div>
        <div className="relative flex flex-col z-10 items-start justify-center px-2 md:w-full leading-[1.2] text-left align-middle">
          <Image alt="logo-brand" width="52" height="52" src={brand} />
          <h3 className="text-white font-semibold mt-6 text-[2rem]">
            Premium App Landing page
          </h3>
          <p className="text-xl text-white my-6 text-[1.2rem] font-medium leading-[1.6]">
            Create high-quality landing pages for your app that exude
            professionalism and attract users, ensuring a strong first
            impression.
          </p>
          <div className="flex items-center">
            <Link className="mr-4" href={"/"}>
              <Image alt="ggplay" width={190} height={100} src={googleplay} />
            </Link>
            <Link href={"/"}>
              <Image alt="appstore" width={190} height={100} src={appstore} />
            </Link>
          </div>
          <em className="mt-6 text-lg font-light text-[1rem] text-white">
            * Available on iPhone, iPad and all Android devices
          </em>
        </div>
      </div>
    </div>
  );
};

export default Banner;
