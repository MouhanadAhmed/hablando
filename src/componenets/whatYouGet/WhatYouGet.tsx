import React from "react";
import styles from './styles.module.css'
import Image from "next/image";

const WhatYouGet = () => {
  return <div className={styles.aboveLine}>
  <div className={styles.descSection}>
  <div className="flex justify-center">

    <div className="max-w-md ps-24 pb-24">
    <h3 className="uppercase text-5xl  mb-12 font-anton">What you will get</h3>
    <p className="mb-6 font-montserrat">With CAT Card, you’ll gain access to exclusive discounts at some of the best Dubai restaurants, beauty salons, gyms, cafés, entertainment spots, and more. </p>
    <p className="font-montserrat">Whether you're grabbing a coffee with colleagues, indulging in a beauty treatment, or enjoying a weekend brunch with friends, CAT Card helps you do it all—for less!</p>
    </div>
    
    <div className="ps-24 flex pt-30 justify-end">
    <Image
                className="ms-24 py-4"
                src="/images/catCardImg.png"
                alt="CatCard image"
                width={500}
                height={500}
              />
    </div>

  </div>
  </div>
  </div>
};

export default WhatYouGet;