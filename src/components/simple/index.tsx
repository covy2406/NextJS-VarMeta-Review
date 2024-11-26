import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Simple = () => {
  return (
    <div className="bg-fixed bg-cover bg-center py-[8.125rem] container mx-auto">
      <div className="text-center mx-auto max-w-[660px] mb-12">
        <p className="text-black text-center font-bold mb-6 text-5xl leading-[1.2em]">
          Frequently Asked Questions
        </p>
        <p>
          Find answers to the most common questions, covering everything from
          setup to advanced features, to help you get the most out of the
          platform.
        </p>
      </div>
      <div>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>How to install sApp?</AccordionTrigger>
            <AccordionContent>
              To install sApp, follow the step-by-step instructions in the
              provided documentation. It covers everything you need to set up
              and customize the theme effortlessly.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Simple;
