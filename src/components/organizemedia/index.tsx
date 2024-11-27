import Image from "next/image";
import React from "react";
import { LuBookCopy, LuBadgeCheck, LuRepeat2, LuClock } from "react-icons/lu";
import { RxArrowRight } from "react-icons/rx";
import assetsBgImage from "../../../public/images/logo";

export const styleIcons = [
  {
    id: 1,
    icon: <LuBookCopy />,
    title: "Organize",
    description:
      "Automate routine tasks to boost your efficiency and productivity while saving valuable time for other activities",
  },
  {
    id: 2,
    icon: <LuBadgeCheck />,
    title: "Manage",
    description:
      "Seamlessly synchronize data across all your devices, ensuring effortless access to information.",
  },
  {
    id: 3,
    icon: <LuRepeat2 />,
    title: "Share",
    description:
      "Control and monitor your smart home devices from a single, intuitive interface, simplifying your daily interactions.",
  },
  {
    id: 4,
    icon: <LuClock />,
    title: "Save Time",
    description:
      "Receive personalized notifications and reminders tailored to your schedule, keeping you organized and on track.",
  },
];

const OrganizeMedia = () => {
  const { thumbnail1 } = assetsBgImage;

  return (
    <div className="container mx-auto grid xl:grid-cols-2 gap-2 lg:grid-cols-1 items-center bg-fixed bg-cover bg-center py-16 px-4">
      {/* Left Section */}
      <div className="flex-col w-full lg:w-full px-4">
        <h2 className="text-black text-[2rem] text-left lg:text-left font-semibold mb-8 sm:text-4xl md:text-5xl leading-[1.2]">
          Organize all your media content easily
        </h2>
        <ul className="space-y-8">
          {styleIcons.map((item) => (
            <li className="flex items-center" key={item.id}>
              <div className="mr-6 text-2xl rounded-lg shadow-lg bg-gray-100 p-4 text-primary-color">
                {item.icon}
              </div>
              <span className="text-md text-gray-700 leading-[1.4]">{item.description}</span>
            </li>
          ))}
        </ul>
        <button className="mt-8 flex items-center justify-center py-3 px-6 text-lg font-medium border border-primary-color text-primary-color rounded-full hover:bg-primary-color hover:text-white transition">
          <span className="mr-2">Learn More</span>
          <RxArrowRight size={24} />
        </button>
      </div>

      {/* Right Section */}
      <div className="w-full xs:mt-4 lg:w-full px-4 flex items-center justify-center mb-8 lg:mb-0">
        <Image
          alt="Organize Media Thumbnail"
          width={561}
          height={414}
          src={thumbnail1}
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default OrganizeMedia;
