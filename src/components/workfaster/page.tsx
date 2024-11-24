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
    <div className="bg-bg-workfaster">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center bg-fixed bg-cover bg-center py-[8.125rem]">
        <div className="w-full smd:w-1/2 px-6">
          <Image alt="thumbnail2" width={549} height={302} src={thumbnail2} />
        </div>
        <div className="w-full smd:w-1/2 px-6 md:mb-4">
          <p className="text-black text-center font-bold mb-6 text-5xl leading-[1.2em]">
            Work faster with powerful filters
          </p>
          <ul>
            {styleIconWorkFaster.map((item) => (
              <li className="flex items-center" key={item.id}>
                <div className="my-6 mr-4 text-2xl rounded-sm shadow-md text-primary-color">
                  <span className="flex items-center justify-center h-14 w-14">
                    {item.icon}
                  </span>
                </div>
                <p className="text-md">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WorkFaster;