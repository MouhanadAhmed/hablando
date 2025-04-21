import React, { useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Teacher = () => {
  useEffect(() => {
    const teacherContainer = document.querySelector(".teacher-container");

    gsap.to(teacherContainer, {
      xPercent: -100, // Scroll horizontally from 0 to -100% (one full page)
      ease: "none",
      scrollTrigger: {
        trigger: teacherContainer,
        start: "bottom center", // Start scrolling from the middle of the image
        pin: true,
        scrub: 1,
        end: "+=100%", // End scroll after 200% of the container width
      },
    });
  }, []);

  return (
    <div className="teacher-container w-[100vw] pt-96 h-[100vh] mt-[80vh]">
      <div className="w-[100vw]">
        <Image
          src="/images/teacherImg.png"
          alt="Teacher Image"
          width={5000}
          height={250}
          loading="lazy"
          className="object-contain"
          style={{transform:"scale(0.9"}}
        />
      </div>
    </div>
  );
};

export default Teacher;
