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
      <div className="flex justify-between lg:w-[75vw] mx-auto">

        <div className="lg:max-w-[26vw] lg:pl-[0vw]">
          <h3 className="uppercase text-5xl 2xl:text-[2.5vw]  mb-12 font-anton">What you will get</h3>
          <p className="mb-[1.5vw] lg:text-[0.9vw] font-montserrat">With CAT Card, you’ll gain access to exclusive discounts at some of the best Dubai restaurants, beauty salons, gyms, cafés, entertainment spots, and more. </p>
          <p className="font-montserrat lg:text-[0.9vw]">Whether you're grabbing a coffee with colleagues, indulging in a beauty treatment, or enjoying a weekend brunch with friends, CAT Card helps you do it all—for less!</p>
        </div>

        <div>
          <Image
            className=" block lg:w-[35vw] lg:h-[20vw] mr-[4vw] object-contain"
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