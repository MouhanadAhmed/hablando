// import React, { useEffect } from "react";
// import Image from "next/image";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const Teacher = () => {
//   useEffect(() => {
//     const teacherContainer = document.querySelector(".teacher-container");

//     gsap.to(teacherContainer, {
//       xPercent: -100, // Scroll horizontally from 0 to -100% (one full page)
//       ease: "none",
//       scrollTrigger: {
//         trigger: teacherContainer,
//         start: "bottom center", // Start scrolling from the middle of the image
//         pin: true,
//         scrub: 1,
//         end: "+=100%", // End scroll after 200% of the container width
//       },
//     });
//   }, []);

//   return (
//     <div className="teacher-container w-[100vw] pt-96 h-[100vh] mt-[80vh]">
//       <div className="w-[100vw]">
//         <Image
//           src="/images/teacherImg.png"
//           alt="Teacher Image"
//           width={5000}
//           height={250}
//           loading="lazy"
//           className="object-contain"
//           style={{transform:"scale(0.9"}}
//         />
//       </div>
//     </div>
//   );
// };

// export default Teacher;



"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Benefits from "../benefits/Benefits";
import styles from './styles.module.css'

gsap.registerPlugin(ScrollTrigger);

const Teacher = () => {
  useEffect(() => {
    // Only run on desktop
    if (window.innerWidth >= 768) {
      const imagePanel = document.querySelector('.teacher-desktop-img-panel');
      if (imagePanel) {
        gsap.fromTo(
          imagePanel,
          { xPercent: 0 },
          {
            xPercent: -100, 
            ease: 'none',
            scrollTrigger: {
              trigger: imagePanel,
              start: 'top 20%',
              end: '+=200%',
              scrub: true,
              pin: true,
              anticipatePin: 1,
            },
          }
        );
      }
    }
  }, []);

  return (
    <div className="outer-container md:h-[210vw] md:pt-[50vw] relative">
      <div className="flex w-[200vw]">
        {/* First Panel with Image */}
        <div className="md:hidden teacher-container max-md:!-left-[20%] max-md:w-[130vw] z-[1000] max-md:absolute max-md:-left-[10vw] w-[100vw] flex items-center justify-center ">
          <Image
            src="/images/teacherImg.png"
            alt="Teacher Image"
            width={5000}
            height={250}
            loading="lazy"
            className={`object-contain relative z-[1000] md:w-[100vw]`}
          />
          <div className="absolute w-[calc(100%-100px)] h-[250px] left-0 bottom-0 z-[1000] bg-gradient-to-t from-black to-transparent" />
        </div>
        {/* Desktop Panel with horizontal scroll effect */}
        <div className="hidden md:block teacher-desktop-img-panel" style={{position:'relative'}}>
          <Image
            src="/images/teacherImg.png"
            alt="Teacher Image"
            width={5000}
            height={250}
            loading="lazy"
            className={`object-contain relative z-[1000] absolute bottom-[10vw] -z-[1] -left-[0] md:w-[100vw]`}
          />
        </div>
        {/* Second Panel - Placeholder Content */}
        {/* <div className="w-[100vw]  flex items-center justify-center ">
          <p className="text-4xl font-bold text-black">Another Panel</p>
        <Benefits/>
        </div> */}
      </div>
    </div>
  );
};

export default Teacher;
