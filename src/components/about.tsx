"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <section
      ref={ref}
      id="about"
      className="mb-28 w-full max-w-[50rem] scroll-mt-[6rem] text-center dark:text-white sm:mb-0"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I completed my Bachelor&apos;s in Computer Science & Engineering from Graphic
        Era Hill University (Dehradun) with an overall CGPA of 8.1 out of 10. My
        main focus has been on Backend Development, Data Structures, and
        Algorithms, and I&apos;ve built a strong foundation in various computer
        science subjects. I&apos;m always eager to learn, constantly exploring
        different technologies to improve my problem-solving skills and
        adaptability. I enjoy experimenting with various tech stacks and have
        completed projects using them. I also enjoy solving problems using my
        programming knowledge and skills.
      </p>

      <p>
        <span className="italic">When I&apos;m not coding</span>, I enjoy
        playing video games, watching movies. I also enjoy{" "}
        <span className="font-medium">learning new things</span>.
      </p>
    </section>
  );
}
