import React from "react";
import styles from './styles.module.css'
import Image from "next/image";

const WhatYouGet = () => {
  if (typeof window !== 'undefined') {
    // Safe to use window here
    const width = window.innerWidth;
    console.log("width", width)
  }

  return <div className={`what-container`}>
    <div>
      <div className="flex justify-between w-[75vw] mx-auto items-center">

        <div className="max-w-[25vw] lg:max-w-[26vw] lg:pl-[5vw]">
          <h3 className="uppercase text-[2.5vw] lg:text-[2.5vw]  mb-12 font-anton">What you will get</h3>
          <p className="mb-[1.5vw] text-[1.5vw] lg:text-[0.9vw] font-montserrat">With CAT Card, you’ll gain access to exclusive discounts at some of the best Dubai restaurants, beauty salons, gyms, cafés, entertainment spots, and more. </p>
          <p className="font-montserrat text-[1.5vw] lg:text-[0.9vw]">Whether you're grabbing a coffee with colleagues, indulging in a beauty treatment, or enjoying a weekend brunch with friends, CAT Card helps you do it all—for less!</p>
        </div>

        <div>
          <Image
            className=" block w-[35vw] lg:h-[20vw] mr-[3vw] lg:mr-[4vw] object-contain"
            src="/images/catCardImg.png"
            alt="CatCard image"
            width={500}
            height={500}
            sizes="100vw"
          />
        </div>

      </div>
    </div>
  </div>
};

export default WhatYouGet;