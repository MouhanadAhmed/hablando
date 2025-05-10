"use client"
import Image from "next/image";
import styles from './styles.module.css'

export default function Navbar() {



  return (
    <div className="flex justify-between md:px-[2vw] px-5 items-center max-md:py-3" >
      <Image
        className="py-4 max-md:hidden md:h-[10vw] w-[15vw] lg:h-[7vw] h-[7vw] 2xl:w-[10vw] 2xl:h-[5vw] object-contain"
        src="/images/logo.png"
        alt="CatCard logo"
        width={200}
        height={820}
      />
      <Image
        className="md:hidden"
        src="/icons/mobile-logo.png"
        alt="CatCard logo"
        width={130}
        height={38}
      />

      <div className="flex justify-between max-md:gap-[18px] gap-[2vw] items-center" >

        <button className="font-montserrat text-2xl font-semibold cursor-pointer">
          <Image
            className="w-[28px] h-[28px] md:w-[2.5vw]  md:h-[2.5vw] lg:w-[1.5vw] lg:h-[1.5vw]"
            src='/images/searchIcon.png'
            alt="CatCard logo"
            width={24}
            height={24}
          />
        </button>
        <button className="max-md:py-1 max-md:px-3 max-md:bg-[#B1022980] max-md:rounded-[8px] max-md:text-xl max-md:uppercase text-[2vw] lg:text-[1.5vw] cursor-pointer" onClick={() => window.alert('login')}>
          <span className={styles.loginBtn}>Login</span>
        </button>

        <button className={`font-anton max-md:!hidden !text-[1.5vw] ${styles.callButton}`}>
          <Image
            className="me-[0.7vw] object-contain w-[2vw] h-[2vw]"
            src="/images/phoneIcon.png"
            alt="CatCard logo"
            width={24}
            height={24}
          />
          +971 527667527
        </button>

      </div>
    </div>


  )
}