import { steplists } from "@/components/howapp/constants/data";
import Image from "next/image";
import React from "react";

const HowApp = () => {
  return (
    <div className="relative has-overlay arrow-right">
      <div className="z-10 text-white py-[8.125rem] px-4 container relative">
        <div className="text-center mn:px-4 smn:px-4 mx-auto max-w-[41.25rem] mb-16">
          <p className="text-white text-[2rem] font-semibold mb-6 leading-[1.2]">
            How sApp works?
          </p>
          <p className="text-md font-normal leading-[1.4]">
            Explore the intuitive and powerful features of sApp, making it easy
            to build, customize, and launch effective landing pages in just a
            few steps.
          </p>
        </div>
        <div className="grid gap-3 gap-y-2 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-1 md:grid-cols-2 sm:grid-cols-1 text-center">
          {steplists.map((item) => (
            <div key={item.id} className="xs:mb-8">
              <div className="text-center flex justify-center">
                <Image alt="icon1" width={64} height={64} src={item.icon} />
              </div>
              <div className="my-6">
                <p className="text-2xl leading-[1.2] font-semibold capitalize">{item.title}</p>
              </div>
              <div>
                <p className="text-md leading-[1.4] font-normal">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowApp;
