import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import bhulekh from "../../public/bhulekh.png";
import landuse from "../../public/landuse.png";
import devbhoomi from "../../public/devbhoomi.png";
import ulaabh from "../../public/ulaabh.jpg";

import java from "../../public/skills/java.png";
import drf from "../../public/skills/drf.png";
import fm from "../../public/skills/fm.png";
import js from "../../public/skills/js.png";
import git from "../../public/skills/git.png";
import mui from "../../public/skills/mui.png";
import nextjs from "../../public/skills/nextjs.png";
import postgres from "../../public/skills/postgres.png";
import tailwind from "../../public/skills/tailwind.jpg";
import typescript from "../../public/skills/typescript.png";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Ulaabh Project",
    description:
      "I worked as a full-stack developer on this project for 1 year. Users can file application for government schemes.",
    tags: ["React", "Next.js", "MongoDB", "MUI v5", "Node Js"],
    imageUrl: ulaabh,
    link: "https://ulaabh.org",
  },
  {
    title: "Devbhoomi Abhilekh",
    description:
      "I worked as a full-stack developer on this project.a web application for the Uttarakhand Govt. Board of Revenue, catering to the specific requirements of storing land details",
    tags: ["React", "Next.js", "MUI v5", "Django", "PostgreSQL"],
    imageUrl: devbhoomi,
    link: "https://devbhoomi.uk.gov.in/"
  },
  {
    title: "Bhulekh Project",
    description:
      "A public web app for monitoring land records. It shows land details, owner details, and land area used for various purposes , like agriculture, residential, commercial and in geo informatics services etc.",
    tags: ["Java", "Struts", "SQL"],
    imageUrl: bhulekh,
    link: "https://bhulekh.uk.gov.in/"
  },
  {
    title: "Landuse",
    description:
      "A public web app used for monitoring land permission and land use.",
    tags: ["Java", "JSP", "SQL"],
    imageUrl: landuse,
    link: "https://landuse.uk.gov.in/"
  },
] as const;

export const skillsData = [
  {
  img: drf,
  name: "Django",
  },
  {
    img: fm,
    name: "Framer Motion",
  },
  {
    img: git,
    name: "Git",
  },
  {
    img: java,
    name: "Java",
  },
  {
    img: js,
    name: "JavaScript",
  },
  {
    img: mui,
    name: "Material UI",
  },
  {
    img: nextjs,
    name: "Next.js",
  },
  {
    img: postgres,
    name: "PostgreSQL",
  },
  {
    img: tailwind,
    name: "Tailwind CSS",
  },
  {
    img: typescript,
    name: "TypeScript",
  },
] as const;
