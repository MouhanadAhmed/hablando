import React, { useEffect } from "react";
import Image from "next/image";
import styles from './styles.module.css'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Benefits() {

  // useEffect(() => {
  //   const benefitContainer = document.querySelector(".benefit-container");

  //   gsap.to(benefitContainer, {
  //     xPercent: 100, // Scroll horizontally from 0 to -100% (one full page)
  //     ease: "power1.out",
  //     duration: 900,
  //     scrollTrigger: {
  //       trigger: benefitContainer,
  //       start: "center -50%", // Start scrolling from the middle of the image
  //       pin: true,
  //       scrub: 1,
  //       end: "+=100%", // End scroll after 200% of the container width
  //     },
  //   });
  // }, []);

  return (
    <div className={`!h-full relative w-[100vw] ${styles.benefitSection}`}>
      <Image className='w-full h-full object-contain absolute -top-[80vw] -z-[2]' src='/images/catCardTeacherImg.png' alt="catCardTeacherImg" width={180} height={300} loading="lazy" />
      <h3 className={`min-h-[550px] md:!text-[5vw] w-[70vw] -translate-x-[50%] font-anton text-[20vw] text-center max-md:leading-[24vw] absolute max:md:min-[680px]:!-top-[28vw] md:top-[10vw] max-md:min-[715px]:!-top-[26vw] -top-[30.5vw] left-[50%] ${styles.benefitText}`}>BENEFITS ALL OVER <span className="text-red-hablando">DUBAI</span></h3>

      <div className={` mx-auto pt-[70vw] md:pt-12`}>
        <div className="flex flex-wrap justify-center ">
          <div className="hidden max-md:block relative min-[710px]:mt-[17vw] mr-[20vw] mt-[9vw]">
            <Image
              src="/images/benefits-1.png"
              alt="restaurants Image"
              width={180}
              height={300}
              loading="lazy"
              className={`max-md:w-[70vw] object-contain w-full md:w-1/8 ${styles.restaurantsImg}`}
            />
            <span className={`absolute uppercase text-nowrap -top-[8vw] -translate-x-[50%] left-[50%] max-md:!tracking-[0.5vw]  font-bebasNeue text-[12vw] font-bold ${styles.benefitsTextShadow}`}>
              RESTAURANTS
            </span>
          </div>
          <div className="hidden max-md:block relative ml-[15vw] mt-[32vw]">
            <Image
              src="/images/benefits-2.png"
              alt="restaurants Image"
              width={180}
              height={300}
              loading="lazy"
              className={`max-md:w-[70vw] object-contain w-full md:w-1/8 ${styles.restaurantsImg}`}
            />
            <span className={`absolute uppercase text-nowrap -top-[8vw] -translate-x-[50%] left-[50%] max-md:!tracking-[0.5vw]  font-bebasNeue text-[12vw] font-bold ${styles.benefitsTextShadow}`}>
              BOOK SHOPS
            </span>
          </div>
          <div className="hidden max-md:block relative min-[710px]:mt-[37vw] mr-[20vw] mt-[34vw]">
            <Image
              src="/images/benefits-3.png"
              alt="restaurants Image"
              width={180}
              height={300}
              loading="lazy"
              className={`max-md:w-[70vw] object-contain w-full md:w-1/8 ${styles.restaurantsImg}`}
            />
            <span className={`absolute uppercase text-nowrap -top-[8vw] -translate-x-[50%] left-[50%] max-md:!tracking-[0.5vw]  font-bebasNeue text-[12vw] font-bold ${styles.benefitsTextShadow}`}>
              Languages
            </span>
          </div>
          <div className="hidden max-md:block relative ml-[15vw] mt-[32vw]">
            <Image
              src="/images/benefits-4.png"
              alt="restaurants Image"
              width={180}
              height={300}
              loading="lazy"
              className={`max-md:w-[70vw] object-contain w-full md:w-1/8 ${styles.restaurantsImg}`}
            />
            <span className={`absolute uppercase text-nowrap -top-[8vw] -translate-x-[50%] left-[50%] max-md:!tracking-[0.5vw]  font-bebasNeue text-[12vw] font-bold ${styles.benefitsTextShadow}`}>
              beauty
            </span>
          </div>
          <div className="hidden max-md:block relative min-[710px]:mt-[37vw] mr-[20vw] mt-[32vw]">
            <Image
              src="/images/benefits-5.png"
              alt="restaurants Image"
              width={180}
              height={300}
              loading="lazy"
              className={`max-md:w-[70vw] object-contain w-full md:w-1/8 ${styles.restaurantsImg}`}
            />
            <span className={`absolute uppercase text-nowrap -top-[8vw] -translate-x-[50%] left-[50%] max-md:!tracking-[0.5vw]  font-bebasNeue text-[12vw] font-bold ${styles.benefitsTextShadow}`}>
              beach clubs
            </span>
          </div>
          <div className="hidden max-md:block relative ml-[15vw] mt-[30vw]">
            <Image
              src="/images/benefits-6.png"
              alt="restaurants Image"
              width={180}
              height={300}
              loading="lazy"
              className={`max-md:w-[70vw] object-contain w-full md:w-1/8 ${styles.restaurantsImg}`}
            />
            <span className={`absolute uppercase text-nowrap -top-[8vw] -translate-x-[50%] left-[50%] max-md:!tracking-[0.5vw]  font-bebasNeue text-[12vw] font-bold ${styles.benefitsTextShadow}`}>
              fitness
            </span>
          </div>
          <div className="hidden max-md:block relative mr-[20vw] mt-[40vw]">
            <Image
              src="/images/benefits-7.png"
              alt="restaurants Image"
              width={180}
              height={300}
              loading="lazy"
              className={`max-md:w-[70vw] object-contain w-full md:w-1/8 ${styles.restaurantsImg}`}
            />
            <span className={`absolute uppercase text-nowrap -top-[8vw] -translate-x-[50%] left-[50%] max-md:!tracking-[0.5vw]  font-bebasNeue text-[12vw] font-bold ${styles.benefitsTextShadow}`}>
              Meal plan
            </span>
          </div>
          <div className="hidden max-md:block relative min-[710px]:mt-[55vw] ml-[15vw] mt-[50vw]">
            <Image
              src="/images/benefits-8.png"
              alt="restaurants Image"
              width={180}
              height={300}
              loading="lazy"
              className={`max-md:w-[70vw] object-contain w-full md:w-1/8 ${styles.restaurantsImg}`}
            />
            <span className={`absolute uppercase text-nowrap -top-[8vw] -translate-x-[50%] left-[50%] max-md:!tracking-[0.5vw]  font-bebasNeue text-[12vw] font-bold ${styles.benefitsTextShadow}`}>
              wellness
            </span>
          </div>
          <div className="hidden max-md:block relative mr-[20vw] mt-[50vw]">
            <Image
              src="/images/benefits-9.png"
              alt="restaurants Image"
              width={180}
              height={300}
              loading="lazy"
              className={`max-md:w-[70vw] object-contain w-full md:w-1/8 ${styles.restaurantsImg}`}
            />
            <span className={`absolute uppercase text-nowrap -top-[8vw] -translate-x-[50%] left-[50%] max-md:!tracking-[0.5vw]  font-bebasNeue text-[12vw] font-bold ${styles.benefitsTextShadow}`}>
              Entertainment
            </span>
          </div>
        </div>
        <div className="hidden pt-[5vw] md:flex flex flex-wrap gap-16 md:gap-[4vw] justify-center ">
          <Image
            src="/images/restaurants.png"
            alt="restaurants Image"
            width={180}
            height={300}
            loading="lazy"
            className={`object-contain !w-[17vw] w-full ${styles.restaurantsImg}`}
          // data-aos="fade-up"
          // data-aos-delay="1200"
          />
          <Image
            src="/images/bookshop.png"
            alt="bookshop Image"
            width={180}
            height={300}
            loading="lazy"
            className={`object-contain !w-[22vw] w-full pt-[25vw] md:w-1/6 ${styles.bookshopImg}`}
          // data-aos="fade-up"
          // data-aos-delay="1000"
          />
          <Image
            src="/images/languages.png"
            alt="languages Image"
            width={180}
            height={300}
            loading="lazy"
            className={`w-full align-bottom !w-[17vw] object-contain pt-[45vw] md:w-1/8 ${styles.languagesImg}`}
          // data-aos="fade-up"
          // data-aos-delay="1600"
          />
        </div>
        <div className="hidden md:flex flex-wrap gap-16 md:gap-[4vw] justify-center items-center">
          <Image
            src="/images/beauty.png"
            alt="beauty Image"
            width={180}
            height={300}
            loading="lazy"
            className={`object-contain !w-[17vw] w-full ${styles.beautyImg}`}
          // data-aos="fade-up"
          // data-aos-delay="1400"
          />
          <Image
            src="/images/beachClub.png"
            alt="beachClub Image"
            width={180}
            height={300}
            loading="lazy"
            className={`object-contain !w-[17vw] pb-[25vw] w-full ${styles.beachImg}`}
          // data-aos="fade-up"
          // data-aos-delay="1200"
          />
          <Image
            src="/images/fitness.png"
            alt="fitness Image"
            width={180}
            height={300}
            loading="lazy"
            className={`object-contain !w-[22vw] w-full ${styles.fitnessImg}`}
          // data-aos="fade-up"
          // data-aos-delay="1000"
          />
        </div>
        <div className={`hidden md:flex flex-wrap gap-16 md:gap-[4vw] justify-center ${styles.lastRow}`}>
          <Image
            src="/images/wellness.png"
            alt="wellness Image"
            width={180}
            height={300}
            loading="lazy"
            className={`object-contain !w-[22vw] w-full ${styles.wellnessImg}`}
          // data-aos="fade-up"
          // data-aos-delay="1000"
          />
          <Image
            src="/images/melPlan.png"
            alt="melPlan Image"
            width={180}
            height={300}
            loading="lazy"
            className={`object-contain !w-[17vw] pb-[25vw] w-full ${styles.mealImg}`}
          // data-aos="fade-up"
          // data-aos-delay="800"
          />
          <Image
            src="/images/entertainment.png"
            alt="entertainment Image"
            width={180}
            height={300}
            loading="lazy"
            className={`object-contain !w-[22vw] w-full ${styles.entertainmentImg}`}
          // data-aos="fade-up"
          // data-aos-delay="1200"
          />
        </div>
      </div>


    </div>
  )
}