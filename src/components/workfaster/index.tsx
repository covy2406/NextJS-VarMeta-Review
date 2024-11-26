import Image from "next/image";
import React from "react";
import assetsBgImage from "../../../public/images/logo";
import { LuCheckCircle } from "react-icons/lu";

export const styleIconWorkFaster = [
  {
    id: 1,
    icon: <LuCheckCircle />,
    title: "Organize",
    description:
      "Utilize integrated messaging features to ensure seamless communication with clients at any time.",
  },
  {
    id: 2,
    icon: <LuCheckCircle />,
    title: "Manage",
    description:
      "Schedule video calls and meetings directly within the app for efficient discussions and feedback.",
  },
  {
    id: 3,
    icon: <LuCheckCircle />,
    title: "Share",
    description:
      "Share project updates and documents in real-time to keep clients informed and engaged.",
  },
  {
    id: 4,
    icon: <LuCheckCircle />,
    title: "Save Time",
    description:
      "Track client interactions and communication history for better relationship management and follow-ups.",
  },
];

const WorkFaster = () => {
  const { thumbnail2 } = assetsBgImage;

  return (
    <div className="bg-bg-workfaster py-16">
      <div className="container px-4 mx-auto grid xl:grid-cols-2 lg:grid-cols-1 items-center bg-cover bg-center">
        {/* Left Section */}
        <div className="w-full lg:w-full flex justify-center mb-8 lg:mb-0">
          <Image
            alt="thumbnail2"
            width={549}
            height={302}
            src={thumbnail2}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-full px-6">
          <h2 className="text-black text-center lg:text-left font-bold text-3xl sm:text-4xl md:text-5xl leading-snug mb-8">
            Work faster with powerful filters
          </h2>
          <ul className="space-y-8">
            {styleIconWorkFaster.map((item) => (
              <li className="flex items-center" key={item.id}>
                <div className="mr-6 text-3xl text-primary-color flex items-center justify-center bg-gray-100 h-14 w-14 rounded-lg shadow-lg">
                  {item.icon}
                </div>
                <p className="text-md text-gray-700">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WorkFaster;
