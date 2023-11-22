"use client";
import React, { useState } from "react";
import ProjectCards from "./ProjectCards";
import ProjectTag from "./ProjectTag";
import linkedIn from "../assets/images/projects/linkedin.png";

const projectData = [
  {
    id: 1,
    title: "LinkedIn 2.0 Clone",
    description:
      "LinkedIn Case Study using Material UI Design and firebase Backend",
    image: 'https://content.linkedin.com/content/dam/press/images/linkedin-new-newsfeed.jpg' ,
    tag: ["All", "Web"],
    gitUrl: "https://github.com/anuj-srivastava/linkedin-clone",
    previewUrl: "https://anuj-srivastava.github.io/linkedin-clone/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const handleChangeTag = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectData.filter((project) => {
    return project.tag.includes(tag);
  });
  return (
    <>
      <h2 className="text-4xl font-bold items-center">My Projects</h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleChangeTag}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleChangeTag}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleChangeTag}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectData.map((project) => {
          return (
            <ProjectCards
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              tag={project.tag}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          );
        })}
      </div>
    </>
  );
};

export default ProjectsSection;
