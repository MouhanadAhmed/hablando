import React, { useEffect } from "react";
import Image from "next/image";
import styles from './styles.module.css'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Benefits() {

    useEffect(() => {
        const benefitContainer = document.querySelector(".benefit-container");
    
        gsap.to(benefitContainer, {
          xPercent: 100, // Scroll horizontally from 0 to -100% (one full page)
          ease: "power1.out",
          duration: 900,
          scrollTrigger: {
            trigger: benefitContainer,
            start: "bottom", // Start scrolling from the middle of the image
            pin: true,
            scrub: 1,
            end: "+=100%", // End scroll after 200% of the container width
          },
        });
      }, []);

    return(
       <div className={`benefit-container  h-[300vh] w-[100vw] ${styles.benefitSection}`}>
        <h3 className="font-anton text-8xl text-center pt-48 ">BENEFITS ALL OVER <span className="text-red-hablando">DUBAI</span></h3>
        


        <div className="container mx-auto">
  <div className="flex flex-wrap gap-24 justify-center">
        <Image
          src="/images/restaurants.png"
          alt="restaurants Image"
          width={180}
          height={300}
          loading="lazy"
          className="object-contain w-full md:w-1/6"
          data-aos="fade-up"
          data-aos-delay="800"
        />  
        <Image
          src="/images/bookshop.png"
          alt="bookshop Image"
          width={180}
          height={300}
          loading="lazy"
          className="object-contain pt-72 w-full md:w-1/6"
          data-aos="fade-up"
          data-aos-delay="1000"
        />   
         <Image
          src="/images/languages.png"
          alt="languages Image"
          width={180}
          height={300}
          loading="lazy"
          className=" w-full align-bottom pt-[660px] md:w-1/6"
          data-aos="fade-up"
          data-aos-delay="1200"
        />
  </div>
  <div className="flex flex-wrap gap-24 justify-center">
        <Image
          src="/images/beauty.png"
          alt="beauty Image"
          width={180}
          height={300}
          loading="lazy"
          className="object-contain pt-24 w-full md:w-1/6"
          data-aos="fade-up"
          data-aos-delay="400"
        />  
        <Image
          src="/images/beachClub.png"
          alt="beachClub Image"
          width={180}
          height={300}
          loading="lazy"
          className="object-contain  w-full md:w-1/6"
          data-aos="fade-up"
          data-aos-delay="200"
        />   
         <Image
          src="/images/fitness.png"
          alt="fitness Image"
          width={180}
          height={300}
          loading="lazy"
          className=" w-full align-bottom pt-72 md:w-1/6"
          data-aos="fade-up"
          data-aos-delay="0"
        />
  </div>  
  <div className="flex flex-wrap gap-24 pb-24 justify-center">
        <Image
          src="/images/wellness.png"
          alt="wellness Image"
          width={180}
          height={300}
          loading="lazy"
          className="object-contain pt-62 w-full md:w-1/6"
          data-aos="fade-up"
          data-aos-delay="200"
        />  
        <Image
          src="/images/melPlan.png"
          alt="melPlan Image"
          width={180}
          height={300}
          loading="lazy"
          className="object-contain  w-full md:w-1/6"
          data-aos="fade-up"
          data-aos-delay="0"
        />   
         <Image
          src="/images/entertainment.png"
          alt="entertainment Image"
          width={180}
          height={300}
          loading="lazy"
          className=" w-full align-bottom pt-96 md:w-1/6"
          data-aos="fade-up"
          data-aos-delay="400"
        />
  </div>
</div>


      </div> 
    )
}