import React from "react";
import styles from './styles.module.css'
import Image from "next/image";

const HeroSection = () => {
  return <>
    <div className={`${styles.heroSection} ${styles.gallery}`}>
      <h1
        className={styles.title}
        data-aos="fade-right"
        data-aos-duration="2000"
        data-aos-once="true"
      >
        WHAT IS CAT CARD ?
      </h1>

      {/* <div className="flex justify-end  items-center">

        <h1 className={`text-white w-full text-right font-bold uppercase ${styles.headerText} ${styles.gallery}  ${styles.title}`}>what is Cat</h1>
              <Image
                className={` py-4 ${styles.image}  ${styles.img1}`}
                src="/images/cat1.png"
                alt="CatCard logo"
                width={300}
                height={120}
              /> 

              <Image
                className={` py-4 ${styles.image}  ${styles.img2}`}
                src="/images/cat1.png"
                alt="CatCard logo"
                width={200}
                height={820}
              />
                            <Image
                className={` py-4 ${styles.image}  ${styles.img3}`}
                
                src="/images/cat1.png"
                alt="CatCard logo"
                width={200}
                height={820}
              />
              <Image
                className={` py-4 ${styles.image}  ${styles.img4}`}

                src="/images/cat1.png"
                alt="CatCard logo"
                width={200}
                height={820}
              />
              <Image
                className={` py-4 ${styles.image}  ${styles.img6}`}

                src="/images/cat1.png"
                alt="CatCard logo"
                width={200}
                height={820}
              />

      </div> */}

      {/* <div className=''> */}
      <Image  src="/images/cat1.png" className={`lg:!w-[12vw] lg:!h-[12vw] ${styles.image} ${styles.img1}`} alt="Office Desk" width={200}
        height={820} data-aos="fade-up"
        data-aos-delay="600" />
      <Image src="/images/event.png" className={`lg:!w-[20vw] lg:!h-[20vw] ${styles.image} ${styles.img2}`} alt="Event" width={300}
        height={820} data-aos="fade-up"
        data-aos-delay="1000" />
      <Image src="/images/conference.png" className={`lg:!w-[20vw] lg:!h-[15vw] ${styles.image} ${styles.img3}`} alt="Conference" width={300}
        height={820} data-aos="fade-up"
        data-aos-delay="600"
      />
      <Image src="/images/disscussion.png" className={`lg:!w-[12vw] lg:!h-[16vw] ${styles.image} ${styles.img4}`} alt="Discussion" width={200}
        height={820} data-aos="fade-up"
        data-aos-delay="800" />
      <Image src="/images/officeDark.png" className={`lg:!w-[16vw] lg:!h-[14vw] ${styles.image} ${styles.img5}`} alt="Office Dark" width={270}
        height={820} data-aos="fade-up"
        data-aos-delay="800" />
      {/* </div> */}
    </div>
  </>



};

export default HeroSection;