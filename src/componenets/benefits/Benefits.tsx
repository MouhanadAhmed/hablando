import React, { useEffect, useRef } from "react";
import Image from "next/image";
import styles from './styles.module.css'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { redirect } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

export default function Benefits() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const st = gsap.to(el, {
      x: 300,
      opacity: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: el,
        start: () => `top+=${el.offsetHeight * 0.96} bottom`,
        end: () => `bottom center`,
        scrub: true,
      }
    });
    return () => {
      st.scrollTrigger && st.scrollTrigger.kill();
      st.kill();
    };
  }, []);

  return (
    <div ref={sectionRef} className={`!h-full w-[100vw] relative max-md:min-[710px]:pt-[5vw] ${styles.benefitSection}`}>
      <h3 className={`min-h-[550px] max-md:!leading-[25vw] md:!text-[5vw] w-[70vw] -translate-x-[50%] font-anton text-[20vw] text-center max-md:leading-[24vw] absolute max:md:min-[680px]:!-top-[28vw] md:-top-[1vw] -top-[31.5vw] max-md:min-[710px]:-top-[27vw]  left-[50%] ${styles.benefitText}`}>BENEFITS ALL OVER <span className="text-red-hablando">DUBAI</span></h3>

      <div className={` mx-auto pt-[70vw] md:pt-0 relative z-[20]`}>
        <div className="flex flex-wrap justify-center">
          <div className="hidden max-md:block relative  mr-[20vw] mt-[9vw] cursor-pointer">
          <Link href="/venues/restaurants"> 
            <Image
              src="/images/benefits-1.png"
              alt="restaurants Image"
              width={180}
              height={300}
              loading="lazy"
              className={`max-md:w-[70vw] object-contain w-full md:w-1/8 ${styles.restaurantsImg}`}
              onClick={()=>redirect('/venues/restaurants')}
            />
            <span className={`absolute uppercase text-nowrap -top-[8vw] -translate-x-[45%] left-[50%] max-md:!tracking-[0.5vw]  font-bebasNeue text-[11vw] font-bold ${styles.benefitsTextShadow}`}>
              RESTAURANTS
            </span>
            </Link>
          </div>
          <div className="hidden max-md:block relative ml-[15vw] mt-[32vw]">
            <Image
              src="/images/benefits-2.png"
              alt="restaurants Image"
              width={180}
              height={300}
              loading="lazy"
              className={`max-md:w-[70vw] object-contain w-full md:w-1/8 ${styles.restaurantsImg}`}
              onClick={()=>redirect('/venues/bookshops')}
            />
            <span className={`absolute uppercase text-nowrap -top-[8vw] -translate-x-[55%] left-[50%] max-md:!tracking-[0.5vw]  font-bebasNeue text-[12vw] font-bold ${styles.benefitsTextShadow}`}>
              BOOK SHOPS
            </span>
          </div>
          <div className="hidden max-md:block relative mr-[20vw] mt-[34vw]">
            <Image
              src="/images/benefits-3.png"
              alt="languages Image"
              width={180}
              height={300}
              loading="lazy"
              className={`max-md:w-[70vw] object-contain w-full md:w-1/8 ${styles.restaurantsImg}`}
              onClick={()=>redirect('/venues/languages')}
            />
            <span className={`absolute uppercase text-nowrap -top-[8vw] -translate-x-[50%] left-[50%] max-md:!tracking-[0.5vw]  font-bebasNeue text-[12vw] font-bold ${styles.benefitsTextShadow}`}>
              Languages
            </span>
          </div>
          <div className="hidden max-md:block relative ml-[15vw] mt-[32vw]">
            <Image
              src="/images/benefits-4.png"
              alt="beauty Image"
              width={180}
              height={300}
              loading="lazy"
              className={`max-md:w-[70vw] object-contain w-full md:w-1/8 ${styles.restaurantsImg}`}
              onClick={()=>redirect('/venues/beauty')}
            />
            <span className={`absolute uppercase text-nowrap -top-[8vw] -translate-x-[50%] left-[50%] max-md:!tracking-[0.5vw]  font-bebasNeue text-[12vw] font-bold ${styles.benefitsTextShadow}`}>
              beauty
            </span>
          </div>
          <div className="hidden max-md:block relative  mr-[20vw] mt-[32vw]">
            <Image
              src="/images/benefits-5.png"
              alt="beachclubs Image"
              width={180}
              height={300}
              loading="lazy"
              className={`max-md:w-[70vw] object-contain w-full md:w-1/8 ${styles.restaurantsImg}`}
              onClick={()=>redirect('/venues/beachclubs')}
            />
            <span className={`absolute uppercase text-nowrap -top-[8vw] -translate-x-[45%] left-[50%] max-md:!tracking-[0.5vw]  font-bebasNeue text-[12vw] font-bold ${styles.benefitsTextShadow}`}>
              beach clubs
            </span>
          </div>
          <div className="hidden max-md:block relative ml-[15vw] mt-[30vw]">
            <Image
              src="/images/benefits-6.png"
              alt="fitness Image"
              width={180}
              height={300}
              loading="lazy"
              className={`max-md:w-[70vw] object-contain w-full md:w-1/8 ${styles.restaurantsImg}`}
              onClick={()=>redirect('/venues/fitness')}
            />
            <span className={`absolute uppercase text-nowrap -top-[8vw] -translate-x-[50%] left-[50%] max-md:!tracking-[0.5vw]  font-bebasNeue text-[12vw] font-bold ${styles.benefitsTextShadow}`}>
              fitness
            </span>
          </div>
          <div className="hidden max-md:block relative mr-[20vw] mt-[40vw]">
            <Image
              src="/images/benefits-7.png"
              alt="mealplan Image"
              width={180}
              height={300}
              loading="lazy"
              className={`max-md:w-[70vw] object-contain w-full md:w-1/8 ${styles.restaurantsImg}`}
              onClick={()=>redirect('/venues/mealplan')}
            />
            <span className={`absolute uppercase text-nowrap -top-[8vw] -translate-x-[50%] left-[50%] max-md:!tracking-[0.5vw]  font-bebasNeue text-[12vw] font-bold ${styles.benefitsTextShadow}`}>
              Meal plan
            </span>
          </div>
          <div className="hidden max-md:block relative ml-[15vw] mt-[50vw]">
            <Image
              src="/images/benefits-8.png"
              alt="wellness Image"
              width={180}
              height={300}
              loading="lazy"
              className={`max-md:w-[70vw] object-contain w-full md:w-1/8 ${styles.restaurantsImg}`}
              onClick={()=>redirect('/venues/wellness')}
            />
            <span className={`absolute uppercase text-nowrap -top-[8vw] -translate-x-[50%] left-[50%] max-md:!tracking-[0.5vw]  font-bebasNeue text-[12vw] font-bold ${styles.benefitsTextShadow}`}>
              wellness
            </span>
          </div>
          <div className="hidden max-md:block relative mr-[20vw] mt-[50vw]">
            <Image
              src="/images/benefits-9.png"
              alt="entertainment Image"
              width={180}
              height={300}
              loading="lazy"
              className={`max-md:w-[70vw] object-contain w-full md:w-1/8 ${styles.restaurantsImg}`}
              onClick={()=>redirect('/venues/entertainment')}
            />
            <span className={`absolute uppercase text-nowrap -top-[8vw] -translate-x-[45%] left-[50%] max-md:!tracking-[0.5vw]  font-bebasNeue text-[10vw] font-bold ${styles.benefitsTextShadow}`}>
              Entertainment
            </span>
          </div>
        </div>
        <div className="hidden pt-[0vw] md:flex flex flex-wrap gap-16 md:gap-[4vw] justify-center">
        {/* <Link href="/venues">  */}
          <Image
            src="/images/restaurants.png"
            alt="restaurants Image"
            width={180}
            height={300}
            loading="lazy"
            className={`object-contain !w-[17vw] w-full ${styles.restaurantsImg} cursor-pointer`}
            data-aos="fade-up"
            data-aos-delay="700"
            onClick={()=>redirect('/venues/restaurants')}
          />
          {/* </Link> */}
          <Image
            src="/images/bookshop.png"
            alt="bookshop Image"
            width={180}
            height={300}
            loading="lazy"
            className={`object-contain !w-[22vw] w-full pt-[25vw] md:w-1/6 ${styles.bookshopImg} cursor-pointer`}
            data-aos="fade-up"
          data-aos-delay="1000"
          onClick={()=>redirect('/venues/bookshop')}
          />
          <Image
            src="/images/languages.png"
            alt="languages Image"
            width={180}
            height={300}
            loading="lazy"
            className={`w-full align-bottom !w-[17vw] object-contain pt-[45vw] md:w-1/8 ${styles.languagesImg} cursor-pointer`}
            data-aos="fade-up"
          data-aos-delay="1600"
          onClick={()=>redirect('/venues/languages')}
          />
        </div>
        <div className="hidden md:flex flex-wrap gap-16 md:gap-[4vw] justify-center items-center">
          <Image
            src="/images/beauty.png"
            alt="beauty Image"
            width={180}
            height={300}
            loading="lazy"
            className={`object-contain !w-[17vw] w-full ${styles.beautyImg} cursor-pointer`}
            data-aos="fade-up"
          data-aos-delay="1400"
          onClick={()=>redirect('/venues/beauty')}
          />
          <Image
            src="/images/beachClub.png"
            alt="beachClub Image"
            width={180}
            height={300}
            loading="lazy"
            className={`object-contain !w-[17vw] pb-[25vw] w-full ${styles.beachImg} cursor-pointer`}
            data-aos="fade-up"
          data-aos-delay="1200"
          onClick={()=>redirect('/venues/beachclub')}
          />
          <Image
            src="/images/fitness.png"
            alt="fitness Image"
            width={180}
            height={300}
            loading="lazy"
            className={`object-contain !w-[22vw] w-full ${styles.fitnessImg} cursor-pointer`}
            data-aos="fade-up"
          data-aos-delay="1000"
          onClick={()=>redirect('/venues/fitness')}
          />
        </div>
        <div className={`hidden md:flex flex-wrap gap-16 md:gap-[4vw] justify-center ${styles.lastRow} cursor-pointer`}>
          <Image
            src="/images/wellness.png"
            alt="wellness Image"
            width={180}
            height={300}
            loading="lazy"
            className={`object-contain !w-[22vw] w-full ${styles.wellnessImg} cursor-pointer`}
            data-aos="fade-up"
          data-aos-delay="1000"
          onClick={()=>redirect('/venues/wellness')}
          />
          <Image
            src="/images/melPlan.png"
            alt="melPlan Image"
            width={180}
            height={300}
            loading="lazy"
            className={`object-contain !w-[17vw] pb-[25vw] w-full ${styles.mealImg} cursor-pointer`}
            data-aos="fade-up"
          data-aos-delay="800"
          onClick={()=>redirect('/venues/mealplan')}
          />
          <Image
            src="/images/entertainment.png"
            alt="entertainment Image"
            width={180}
            height={300}
            loading="lazy"
            className={`object-contain !w-[22vw] w-full ${styles.entertainmentImg} cursor-pointer`}
            data-aos="fade-up"
          data-aos-delay="1200"
          onClick={()=>redirect('/venues/entertainment')}
          />
        </div>
      </div>


    </div>
  )
}