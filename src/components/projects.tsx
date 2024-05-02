"use client";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import React from "react";
import Project from "./project";

export default function Projects() {
  return (
    <section className="mb-15 scroll-mt-[6rem]" id="projects">
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
