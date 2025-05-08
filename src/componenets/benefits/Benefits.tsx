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
            start: "center -50%", // Start scrolling from the middle of the image
            pin: true,
            scrub: 1,
            end: "+=100%", // End scroll after 200% of the container width
          },
        });
      }, []);

    return(
       <div className={`benefit-container  h-[300vh] w-[100vw] ${styles.benefitSection}`}>
        <h3 className={`font-anton text-8xl text-center pb-64  ${styles.benefitText}`}>BENEFITS ALL OVER <span className="text-red-hablando">DUBAI</span></h3>
        


        <div className={`container mx-auto pt-12 ${styles.imgContainer}`}>
  <div className="flex flex-wrap gap-16 lg:gap-24 justify-center ">
        <Image
          src="/images/restaurants.png"
          alt="restaurants Image"
          width={180}
          height={300}
          loading="lazy"
          className={`object-contain pt-12 w-full md:w-1/8 ${styles.restaurantsImg}`}
          // data-aos="fade-up"
          // data-aos-delay="1200"
        />  
        <Image
          src="/images/bookshop.png"
          alt="bookshop Image"
          width={180}
          height={300}
          loading="lazy"
          className={`object-contain pt-48 w-full md:w-1/6 ${styles.bookshopImg}`}
          // data-aos="fade-up"
          // data-aos-delay="1000"
        />   
         <Image
          src="/images/languages.png"
          alt="languages Image"
          width={180}
          height={300}
          loading="lazy"
          className={`w-full align-bottom pt-72 md:w-1/8 ${styles.languagesImg}`}
          // data-aos="fade-up"
          // data-aos-delay="1600"
        />
  </div>
  <div className="flex flex-wrap gap-16 lg:gap-24  justify-center">
        <Image
          src="/images/beauty.png"
          alt="beauty Image"
          width={180}
          height={300}
          loading="lazy"
          className={`object-contain pb-48 w-full md:w-1/8 ${styles.beautyImg}`}
          // data-aos="fade-up"
          // data-aos-delay="1400"
        />  
        <Image
          src="/images/beachClub.png"
          alt="beachClub Image"
          width={180}
          height={300}
          loading="lazy"
          className={`object-contain pb-72 w-full md:w-1/8 ${styles.beachImg}`}
          // data-aos="fade-up"
          // data-aos-delay="1200"
        />   
         <Image
          src="/images/fitness.png"
          alt="fitness Image"
          width={180}
          height={300}
          loading="lazy"
          className={` w-full align-bottom pt-48 md:w-1/6 ${styles.fitnessImg}`}
          // data-aos="fade-up"
          // data-aos-delay="1000"
        />
  </div>  
  <div className={`flex flex-wrap gap-16 lg:gap-24  pb-24 justify-center ${styles.lastRow}`}>
        <Image
          src="/images/wellness.png"
          alt="wellness Image"
          width={180}
          height={300}
          loading="lazy"
          className={`object-contain pt-62 w-full md:w-1/6 ${styles.wellnessImg}`}
          // data-aos="fade-up"
          // data-aos-delay="1000"
        />  
        <Image
          src="/images/melPlan.png"
          alt="melPlan Image"
          width={180}
          height={300}
          loading="lazy"
          className={`object-contain  w-full md:w-1/6 ${styles.mealImg}`}
          // data-aos="fade-up"
          // data-aos-delay="800"
        />   
         <Image
          src="/images/entertainment.png"
          alt="entertainment Image"
          width={180}
          height={300}
          loading="lazy"
          className={` w-full align-bottom pt-96 md:w-1/6 ${styles.entertainmentImg}`}
          // data-aos="fade-up"
          // data-aos-delay="1200"
        />
  </div>
</div>


      </div> 
    )
}