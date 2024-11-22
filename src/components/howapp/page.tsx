import { steplists } from "@/components/howapp/constants/data";
import Image from "next/image";
import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";

const HowApp = () => {
  return (
    <div className="relative has-overlay arrow-right">
      <div className="z-10 text-white py-[8.125rem] container mx-auto relative">
        <div className="text-center mx-auto w-[660px] mb-16">
          <p className="text-white font-bold mb-6 text-5xl leading-[1.2em]">
            How sApp works?
          </p>
          <p>
            Explore the intuitive and powerful features of sApp, making it easy
            to build, customize, and launch effective landing pages in just a
            few steps.
          </p>
        </div>
        <div className="grid gap-3 mx-8 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 text-center">
          {steplists.map((item) => (
            <div key={item.id}>
              <div className="text-center flex justify-center">
                <Image alt="icon1" width={64} height={64} src={item.icon} />
              </div>
              <div className="my-6">
                <p className="text-2xl font-semibold capitalize">{item.title}</p>
              </div>
              <div>
                <p className="text-xl font-normal">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowApp;
