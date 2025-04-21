// hooks/useGsap.ts
"use client"

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useGsap = ({
  svgRef,
  containerRef,
}: {
  svgRef: React.RefObject<HTMLDivElement>,
  containerRef: React.RefObject<HTMLDivElement>
}) => {
  useEffect(() => {
    // Stroke animation
    gsap.to("#line", {
      strokeDashoffset: 0,
      duration: 300,
      ease: "power1.out",
      scrollTrigger: {
        trigger: svgRef.current,
        start: "top 0%",
        end: "bottom 0%",
        scrub: true,
      },
    });

    // Horizontal scroll animation
    const sections = gsap.utils.toArray(".section");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + (containerRef.current?.offsetWidth ?? 0),
      },
    });
  }, [svgRef, containerRef]);
};
