"use client";
import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left justify-self-start">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text  bg-gradient-to-r from-primary-500 to-secondary-600">
              Hello, I am{" "}
            </span>
          </h1>
          <span className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl font-extrabold">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Anuj",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "QT & QML Developer",
                1000,
                "Mobile Developer",
                1000,
                "Web Developer",
                1000,
                "Desktop App Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </span>

          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            {" "}
            Lorem Ipsum is when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.{" "}
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 via-purple-500 to-secondary-500 hover:bg-slate-200 text-white">
              Hire Me
            </button>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-transparent hover:bg-slate-800 text-white border border-white mt-3">
              Download CV
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] relative lg:w-[400px] lg:h-[400px] ">
            <Image
              src={require("../assets/images/hero-image.png")}
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
