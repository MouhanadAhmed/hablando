"use client";

import { useRef, ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type ScrollDirection = "left" | "right";

type HorizontalScrollerProps = {
  children: ReactNode[];
  className?: string;
  direction?: ScrollDirection;
};

export default function HorizontalScroller({
  children,
  className = "",
  direction = "right",
}: HorizontalScrollerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<HTMLDivElement[]>([]);

  useGSAP(() => {
    const sections = sectionRefs.current;
    const scrollAmount = 100 * (sections.length - 1);
    const xPercent = direction === "left" ? scrollAmount : -scrollAmount;

    gsap.to(sections, {
      xPercent,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "bottom right", 
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + (containerRef.current?.offsetWidth ?? 0),
      },
    });
  }, { scope: containerRef, dependencies: [direction] });

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`}>
      <div className="flex">
        {children.map((child, index) => (
          <div
            key={index}
            className="min-w-full"
            ref={(el) => {
              if (el) sectionRefs.current[index] = el;
            }}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}

// "use client";

// import { useRef } from "react";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Teacher from "../teacher/Teacher";

// gsap.registerPlugin(ScrollTrigger);

// export default function HorizontalScroller() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const sectionRef = useRef<HTMLDivElement>(null);

//   useGSAP(() => {
//     gsap.to(sectionRef.current, {
//       xPercent: -100,
//       ease: "none",
//       scrollTrigger: {
//         trigger: containerRef.current,
//         pin: true,
//         scrub: 1,
//         snap: 1,
//         end: () => "+=" + (containerRef.current?.offsetWidth ?? 0),
//       },
//     });
//   }, { scope: containerRef });

//   return (
//     <div ref={containerRef} className="overflow-hidden h-screen">
//       <div ref={sectionRef} className="flex w-[250vw]">
//         <Teacher />
//       </div>
//     </div>
//   );
// }


