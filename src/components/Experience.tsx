"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import ExperienceCard from "./ExperienceCard";
import Image from "next/image";
// import { useTheme } from "@/context/theme-context";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.3);
  //   const { theme } = useTheme();
  const theme = "light";

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 dark:text-white">
      <SectionHeading>My Work Experience</SectionHeading>
      <div className="mb-15 max-w-[53rem] scroll-mt-28 text-center ">
        <p className="text-lg font-medium sm:mb-20">
          I have worked with some of the well known organizations as well as a
          startup. Internships have played a crucial role in exposing me to the
          industry standards. Internships have not only helped me get hands-on
          experience with the cutting edge tech stacks but also I have got the
          honor to interact with some of the industry experts and brilliant
          minds across the country.
        </p>
        <div className="m-4 grid grid-cols-1 gap-4 p-2 sm:grid-cols-2">
          <ExperienceCard
            title="Full Stack Developer"
            company="Hueleafs Consultancy"
            date="2022 - Cont."
            website="https://hueleafs.com"
          />

          <div
            className="saturate-3 flex items-center
            justify-center filter-none transition duration-300 ease-in-out hover:grayscale hover:filter
            dark:grayscale-0
          "
          >
            <Image
              src="/webdev.jpg"
              alt="webdev"
              width={200}
              height={200}
              className="hidden rounded-full shadow-lg dark:shadow-none sm:block"
            />
          </div>
          <div
            className="saturate-3 flex items-center
            justify-center filter-none transition duration-300 ease-in-out hover:grayscale hover:filter
            dark:grayscale-0
          "
          >
            <Image
              src="/intern.jpg"
              alt="Internship"
              width={200}
              height={200}
              className="hidden rounded-full shadow-lg dark:shadow-none sm:block"
            />
          </div>

          <ExperienceCard
            title="Web Development Intern"
            company="Board Of Revenue Uttarakhand Govt."
            date="July 2022 - Oct 2022"
            website="https://revenue.uk.gov.in/"
          />
          <ExperienceCard
            title="Mobile App Development Intern"
            company="Qurinom Solutions"
            date="April 2022 - June 2022"
            website="https://qurinomsolutions.com/"
          />
          <div
            className="saturate-3 flex items-center
            justify-center filter-none transition duration-300 ease-in-out hover:grayscale hover:filter
            dark:grayscale-0
          "
          >
            <Image
              src="/appdev.jpg"
              alt="appdev"
              width={200}
              height={200}
              className="hidden rounded-full shadow-lg dark:shadow-none sm:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
