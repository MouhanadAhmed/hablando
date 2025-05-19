import React, { useEffect } from "react";
import Image from "next/image";
import styles from './styles.module.css'

const PushUp = () => {

  return (
    <div className=' max-md:w-[100vw] max-md:mt-[40vw] relative'>
      <div className="max-md:w-[100vw] max-md:max-w-[100vw] md:!h-[225vw] md:max-h-[225vw]">
        <h1 data-aos="fade-left"
          data-aos-duration="1500" className="max-md:hidden text-[5vw] pl-[40vw] font-montserrat font-bold pt-[25vw] top-0 absolute uppercase">AND <span className="text-[#B10229]">Much</span> MORE...</h1>
        <Image
          src="/images/pushUp.png"
          alt="Push up Image"
          width={5000}
          height={250}
          loading="lazy"
          className={`object-contain md:!pt-[65vw] relative z-50 max-md:!min-w-[120vw] max-md:!max-h-[190vw] md:w-[50vw]`}
        />
        <Image className="absolute max-md:hidden -right-[35%] top-[45%]" src="/images/main-bg.png" alt="Push up Image" width={5000} height={250} loading="lazy" />
        <h1 data-aos="fade-left"
          data-aos-duration="1500" className="max-md:hidden text-[5vw] pl-[35vw] font-montserrat font-bold pb-[35vw] bottom-0 absolute uppercase">To <span className="text-[#B10229]">start using</span> your CAT Card and its benefits!</h1>
      </div>
    </div>
  );
};

export default PushUp;
