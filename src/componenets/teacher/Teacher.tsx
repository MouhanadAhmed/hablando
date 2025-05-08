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
    const container = document.querySelector(".teacher-container");

    gsap.to(container, {
      xPercent: -120, // move one full screen (100vw out of 200vw)
      ease: "none",
      scrollTrigger: {
        trigger: ".outer-container",
        start: "50vw",
        // end: () => "+=200vw", // Adjust scroll distance if needed
        scrub: 2,
        pin: true,
        anticipatePin: 1,
      } ,
    });
  }, []);

  return (
    <div className="outer-container h-[200vh] lg:pt-[50vw] relative">
      <div className="teacher-container flex w-[200vw]">
        {/* First Panel with Image */}
        <div className="w-[100vw] flex items-center justify-center ">
          <Image
            src="/images/teacherImg.png"
            alt="Teacher Image"
            width={5000}
            height={250}
            loading="lazy"
            className={`object-contain max-lg:scale-[0.9] lg:w-[100vw] ${styles.teacherImg}`}
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
