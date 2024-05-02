import { useRef, useEffect } from "react";
import { useInView } from "framer-motion";
import { useActiveSectionContext } from "@/context/active-section-context";
import { links } from "@/lib/data";

type SectionName = (typeof links)[number]["name"];

export function useSectionInView(SectionName: SectionName, amount = 0.75) {
  const ref = useRef(null);
  const inView = useInView(ref, {
    amount: amount,
  });

  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(SectionName);
    }
  }, [inView, setActiveSection, SectionName, timeOfLastClick]);

  return {
    ref,
  };
}
