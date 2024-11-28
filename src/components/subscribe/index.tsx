import SubscribeForm from "@/components/subscribe/subscribeform";
import React from "react";

const Subscribe = () => {
  return (
    <div>
      <div className="containter mx-auto py-[8.125rem] max-w-[43.75rem] px-8 bg-center flex justify-center flex-wrap bg-bg-subscribe bg-scroll bg-no-repeat bg-cover">
        <p className="text-[2.5rem] font-bold mb-6 leading-[1.2] text-center">
          Subscribe to get updates
        </p>
        <p className="text-[#565656] text-base font-light my-6 text-center">
          Stay in the loop! Subscribe now to receive the latest news, updates,
          and exclusive offers from sApp directly to your inbox.
        </p>
        <SubscribeForm />
      </div>
    </div>
  );
};

export default Subscribe;
