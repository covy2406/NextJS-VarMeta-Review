import Image from "next/image";
import React from "react";
import assetsBgImage from "../../../public/images/logo";
import { listIcons } from "@/components/smallbussiness/constants/data";

const SmallBussiness = () => {
  const { slide1 } = assetsBgImage;

  return (
    <div className="bg-fixed bg-cover bg-center py-16">
      {/* Tiêu đề */}
      <div className="text-center mx-auto max-w-[41.25rem] px-4">
        <h2 className="text-black font-semibold mb-6 text-[2rem] text-center sm:text-4xl md:text-5xl leading-[1.2]">
          Why Small Business Owner's Loves sApp
        </h2>
        <p className="text-gray-600 text-base sm:text-lg">
          Discover the unique features of sApp that set it apart from the
          competition, designed to deliver unmatched performance and seamless
          user experiences.
        </p>
      </div>

      {/* Nội dung chính */}
      <div className="container mx-auto grid xl:grid-cols-2 lg:grid-cols-1 items-center mt-12 px-4">
        {/* Hình ảnh bên trái */}
        <div className="w-full xs:mt-4 lg:w-full flex justify-center mb-8 lg:mb-0">
          <div className="bg-bg-phonecase bg-no-repeat bg-center bg-cover pt-16 pr-6 pb-20 pl-6 max-w-[18.125rem] mx-auto overflow-hidden rounded-lg">
            <Image
              alt="slide1"
              width={230}
              height={428.66}
              src={slide1}
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Danh sách tính năng bên phải */}
        <div className="w-full lg:w-full lg:mt-4">
          <ul className="space-y-6 px-3">
            {listIcons.map((item) => (
              <li key={item.id} className="flex items-start gap-4">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <Image
                    alt={item.title}
                    width={50}
                    height={50}
                    src={item.icon}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                {/* Nội dung */}
                <div>
                  <h3 className="text-black font-bold text-lg sm:text-xl capitalize mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-6">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SmallBussiness;
