import React from "react";
import styles from './styles.module.css'
import Image from "next/image";

const WhatYouGet = () => {
  if (typeof window !== 'undefined') {
    // Safe to use window here
    const width = window.innerWidth;
    console.log("width", width)
  }

  return <div className={`what-container relative`}>
    <div>
      <div className="flex justify-between max-md:flex-col max-md:gap-[23vw] w-[75vw] mx-auto items-center">

        <div className="max-w-[60vw] md:max-w-[26vw] md:pl-[5vw]">
          <h3 className="uppercase text-[6.5vw] md:text-[2.5vw] mb-[3vw] md:mb-[1vw] font-anton">What you will get</h3>
          <p className="mb-[1.5vw] text-[3.1vw] md:text-[0.9vw] font-montserrat">With CAT Card, you’ll gain access to exclusive discounts at some of the best Dubai restaurants, beauty salons, gyms, cafés, entertainment spots, and more. </p>
          <p className="font-montserrat text-[3.1vw] md:text-[0.9vw]">Whether you're grabbing a coffee with colleagues, indulging in a beauty treatment, or enjoying a weekend brunch with friends, CAT Card helps you do it all—for less!</p>
        </div>

        <div>
          <Image
            className={`" block md:w-[35vw] md:h-[20vw] mr-[3vw] md:mr-[4vw] object-contain" ${styles.catCardImg}`}
            src="/images/catCardImg.png"
            alt="CatCard image"
            width={500}
            height={500}
            sizes="100vw"
          />
        </div>
          <Image className="hidden max-md:block absolute -bottom-[55vw] left-0 -z-[10]" src='/images/bg-mobile-red.png' alt="" width={1000} height={1000}/>
          <Image className="hidden md:block absolute -rotate-[10deg] -bottom-[60vw] h-[130vw] w-full left-0 -z-[10]" src='/images/bg-desktop-red.png' alt="" width={1000} height={1000}/>
      </div>
    </div>
  </div>
};

export default WhatYouGet;