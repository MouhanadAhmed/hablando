import React from "react";
import styles from './styles.module.css'
import Image from "next/image";

const WhatYouGet = () => {
  if (typeof window !== 'undefined') {
    // Safe to use window here
    const width = window.innerWidth;
    console.log("width",width)
  }
  
  return <div className={styles.aboveLine}>
  <div className={styles.whatYouGetSection}>
  <div className="flex justify-center 3xl:justify-between 3xl:w-[72vw]">

    <div className={`${styles.leftSection} max-w-md 3xl:w-full ps-24 3xl:ps-42 pb-24  3xl:hidden`}>
    <h3 className="uppercase text-5xl 3xl:text-7xl  mb-12 font-anton">What you will get</h3>
    <p className="mb-6 font-montserrat">With CAT Card, you’ll gain access to exclusive discounts at some of the best Dubai restaurants, beauty salons, gyms, cafés, entertainment spots, and more. </p>
    <p className="font-montserrat">Whether you're grabbing a coffee with colleagues, indulging in a beauty treatment, or enjoying a weekend brunch with friends, CAT Card helps you do it all—for less!</p>
    </div>   
    
     <div className="w-[40vw] pb-24 hidden 3xl:block" style={{marginLeft:"9rem"}}>
    <h3 className="uppercase text-5xl 3xl:text-7xl mt-12  mb-12 font-anton">What you will get</h3>
    <p className="mb-6 text-3xl font-montserrat">With CAT Card, you’ll gain access to exclusive discounts at some of the best Dubai restaurants, beauty salons, gyms, cafés, entertainment spots, and more. </p>
    <p className="font-montserrat text-3xl">Whether you're grabbing a coffee with colleagues, indulging in a beauty treatment, or enjoying a weekend brunch with friends, CAT Card helps you do it all—for less!</p>
    </div>
    
    <div className={`${styles.imageContainer} justify-end 3xl:w-full`}>
    <Image
                className="ms-24 py-4 block 3xl:hidden"
                src="/images/catCardImg.png"
                alt="CatCard image"
                width={500}
                height={500}
                sizes="100vw"
              />

    <Image
                className="ms-24 py-4 hidden 3xl:block"
                src="/images/catCardImg.png"
                alt="CatCard image"
                width={700}
                height={700}
                sizes="100vw"
              />
    </div>

  </div>
  </div>
  </div>
};

export default WhatYouGet;