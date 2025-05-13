import React, { useEffect } from "react";
import Image from "next/image";
import styles from './styles.module.css'

const PushUp = () => {

  return (
    <div className=' max-md:w-[100vw] max-md:mt-[40vw]'>
      <div className="max-md:w-[100vw] max-md:max-w-[100vw] md:!h-[225vw] md:max-h-[225vw]">
        <Image
          src="/images/pushUp.png"
          alt="Push up Image"
          width={5000}
          height={250}
          loading="lazy"
          className={`object-contain md:!pt-[65vw] relative z-50 max-md:!min-w-[120vw] max-md:!max-h-[190vw] md:w-[50vw]`}
        />
      </div>
    </div>
  );
};

export default PushUp;
