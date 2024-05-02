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
        I completed my B.Tech in Computer Science & Engineering from Graphic Era
        Hill University (Dehradun). I achieved an overall CGPA of 8.1 out of 10.
        With a strong focus on Backend Development, Data Structures and
        Algorithms, and a solid foundation in various computer science courses,
        I possess the technical and analytical aptitude necessary to excel in
        this role. I am a passionate learner who constantly explores different
        tech stacks, which enhances my ability to analyze complex problems and
        quickly adapt to new technologies. A tech enthusiast with a learn & grow
        attitude. I like to explore & learn about various tech stacks and have
        developed projects with the tech stacks I have come across. Also I have
        a keen interest is solving problems with the existing knowledge of
        programming that I possess.
      </p>

      <p>
        <span className="italic">When I&apos;m not coding</span>, I enjoy
        playing video games, watching movies. I also enjoy{" "}
        <span className="font-medium">learning new things</span>.
      </p>
    </section>
  );
}
