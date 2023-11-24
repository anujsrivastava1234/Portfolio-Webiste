"use client";
import Image from "next/image";
import React, { useState, useTransition } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>QT & QT Quick C++</li>
        <li>Next.js</li>
        <li>Javascript</li>
        <li>React</li>
        <li>Redux</li>
        <li>Tailwind</li>
      </ul>
    ),
  },
  {
    title: "education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Bachelors of Technology from Galgotias University</li>
      </ul>
    ),
  },
  {
    title: "certification",
    id: "certification",
    content: (
      <ul className="list-disc pl-2"> 
        <li>Winner of U.P Police 2022 Hackathon</li>
        <li>SIH 2023 Finalist </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleChangeTab = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section>
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src={require("../assets/images/setup-image.png")}
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full justify-start">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            <span className="p-2 pb-5 text-white">
              👋 Hello there! I'm Anuj Srivastava, a dedicated web developer
              with a keen focus on Next.js and JavaScript. Currently navigating
              the exciting realm of the MERN Stack, I am on a mission to craft
              seamless and innovative web experiences. <br />
            </span>{" "}
            <br />
            <span className="p-2 pb-5 text-white">
              🖥️ In my professional journey, I wear multiple hats. As a Junior
              QT QML developer at Bridge Healthcare, I delve into the
              intricacies of QT C++ and QML, contributing to both research and
              development and UI design. Simultaneously, at Dike Intelligence
              Agency, I proudly serve as a Senior R&D member, bringing my skills
              to the forefront of cutting-edge projects.
              <br />
            </span>
            <br />
           <span className="p-2 pb-5 text-white">Let's create something extraordinary together! 💻✨</span> 
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              active={tab === "skills"}
              selectTab={() => handleChangeTab("skills")}
            >
              Skills
            </TabButton>
            <TabButton
              active={tab === "education"}
              selectTab={() => handleChangeTab("education")}
            >
              Education
            </TabButton>
            <TabButton
              active={tab === "certification"}
              selectTab={() => handleChangeTab("certification")}
            >
              Certification
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
