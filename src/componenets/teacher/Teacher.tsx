"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Teacher = () => {
  useEffect(() => {
    if (window.innerWidth >= 768) {
      const image = document.querySelector('.teacher-desktop-img-panel img');

      if (image) {
        image.addEventListener("load", () => {
          const panel = document.querySelector(".teacher-desktop-img-panel");

          if (panel) {
            gsap.fromTo(
              panel,
              { xPercent: 0 },
              {
                xPercent: -100,
                ease: "none",
                scrollTrigger: {
                  trigger: panel,
                  start: "top 20%",
                  end: "+=200%",
                  scrub: true,
                  pin: true,
                  anticipatePin: 1,
                },
              }
            );
          }
        });
      }
    }
  }, []);

  return (
    <div className="outer-container md:h-[210vw] md:pt-[50vw] relative">
      <Image
        src="/images/teacherImg.png"
        alt="Preload Teacher"
        width={10}
        height={10}
        style={{ display: "none" }}
        priority
      />

      <div className="flex w-[200vw]">
        <div className="md:hidden teacher-container max-md:!-left-[20%] max-md:w-[130vw] z-[1000] max-md:absolute max-md:-left-[10vw] w-[100vw] flex items-center justify-center">
          <Image
            src="/images/teacherImg.png"
            alt="Teacher Image"
            width={5000}
            height={250}
            loading="lazy"
            className="object-contain relative z-[1000] md:w-[100vw]"
            data-aos="fade-right"
            data-aos-duration="1000"
          />
          <div className="absolute w-[calc(100%-100px)] h-[250px] left-0 bottom-0 z-[1000] bg-gradient-to-t from-black to-transparent" />
        </div>

        <div
          className="hidden md:block teacher-desktop-img-panel"
          style={{ position: "relative", minHeight: "100vh" }}
        >
          <Image
            src="/images/teacherImg.png"
            alt="Teacher Image"
            width={5000}
            height={250}
            loading="lazy"
            className="object-contain relative z-[1000] absolute bottom-[10vw] -z-[1] -left-[0] md:w-[100vw] will-change-transform opacity-100 transition-opacity duration-500"
          />
        </div>

        {/* Second Panel - Placeholder */}
        {/* <div className="w-[100vw]  flex items-center justify-center ">
          <p className="text-4xl font-bold text-black">Another Panel</p>
        <Benefits/>
        </div> */}
      </div>
    </div>
  );
};

export default Teacher;
