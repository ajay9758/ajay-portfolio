import About from "@/components/about";
import LandingLayout from "./LandingLayout";
import Header from "@/components/header";
import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <>
      <LandingLayout>
        <Header />
        <Intro />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Projects/>
      </LandingLayout>
    </>
  );
}
