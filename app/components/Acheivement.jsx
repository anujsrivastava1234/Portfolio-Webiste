"use client";
import { animations } from "framer-motion";
import dynamic from "next/dynamic";
import React from "react";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const acheivementList = [
  {
    metric: "Projects",
    value: "100",
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "Users",
    value: "100,000",
  },
  {
    metric: "Awards",
    value: "10+",
  },
  {
    metric: "Years",
    value: "1+",
  },
];

const Acheivement = () => {
  return (
    <div className="py-8 px-4  xl:gap-16 sm:py-16 xl:px-16">
      <div className="border-[#33353F] border rounded-md py-8 px-17 flex flex-row items-center justify-between">
        {acheivementList.map((acheivement, index) => {
          return (
            <div key={index} className="flex flex-col items-center mx-4">
              <h2 className="text-white text-4xl font-bold flex flex-row">
              {acheivement.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(acheivement.value)}
                  locale="en-US"
                  className="text-white font-bold text-4xl" 
                  config={((_,index) =>{
                    return {
                        mass:1,
                        friction:100,
                        tension:140*(index+1),
                    }
                  })}
                />
                {acheivement.postfix}
              </h2>
              <p className="text-[#ADB7BE] text-base">{acheivement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Acheivement;
