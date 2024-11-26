"use client";
import { StayForm } from "@/components/stay/stayform";
import React from "react";
import { LuPhone } from "react-icons/lu";
import { LuMail } from "react-icons/lu";
import { TfiLocationPin } from "react-icons/tfi";

export const stayList = [
  {
    id: 1,
    icon: <LuPhone />,
    des: "+1.890.473.5102",
  },
  {
    id: 2,
    icon: <LuMail />,
    des: "hello@yourmail.com",
  },
  {
    id: 3,
    icon: <TfiLocationPin />,
    des: "912 Park Ave, Ketchikan, Alaska 99901, USA",
  },
];

const Stay = () => {
  return (
    <div className="bg-fixed bg-cover bg-center py-16 bg-[#F6F9FE]">
      <div className="container mx-auto px-20 flex flex-col items-center">
        {/* Section Title */}
        <div className="text-center mx-auto max-w-[660px] mb-12">
          <h2 className="text-black font-bold mb-6 text-4xl md:text-5xl leading-tight">
            Stay Tuned
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Keep an eye out for exciting news and updates from the app, as we
            continue to enhance your experience and introduce new features.
          </p>
        </div>

        {/* Content */}
        <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 gap-8 w-full">
          {/* Left Content */}
          <div>
            <div className="mb-8">
              <h3 className="text-black font-bold mb-4 text-2xl leading-snug">
                Schedule a call with us to see if we can help
              </h3>
              <p className="text-gray-700">
                Whether you’re looking to start a new project or simply want to
                chat, feel free to reach out to us!
              </p>
            </div>
            {/* Contact List */}
            <ul className="space-y-4">
              {stayList.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center gap-4 bg-white shadow-md p-4 rounded-lg"
                >
                  <div className="p-4 rounded-md bg-primary-color text-white text-lg">
                    {item.icon}
                  </div>
                  <p className="text-black text-md">{item.des}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Content */}
          <div className="w-full">
            <StayForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stay;
