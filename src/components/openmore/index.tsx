"use client";
import { dataMore } from "@/components/openmore/constants/data";
import React from "react";
import { LuPlus } from "react-icons/lu";
import { LuMinus } from "react-icons/lu";

const OpenMore = () => {
  const [open, setOpen] = React.useState<number | null>(null);
  const handleOpen = (id: number) => {
    setOpen(open === id ? null : id);
  };
  return (
    // <div>
      <div className='container mx-auto py-[8.125rem]'>
        {dataMore.map((item) => (
          <div key={item.id} >
            <div onClick={() => handleOpen(item.id)} className='bg-[#f6f9fe] mb-4 flex p-5 rounded-md justify-between text-lg font-medium cursor-pointer'>
              <p>{item.title}</p>
              {open === item.id ? <LuMinus /> : <LuPlus />}
            </div>
            {open === item.id && (
              <div className='text-base font-normal px-5 pb-5 text-[#565656]'>
                <p>You can easily edit your personal information by navigating to the profile settings within the app. From there, update your details and save the changes instantly.</p>
              </div>
            )}
          </div>
        ))}
      </div>
    // </div>
  );
};

export default OpenMore;
