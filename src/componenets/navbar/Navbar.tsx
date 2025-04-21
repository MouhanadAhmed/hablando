"use client"
import Image from "next/image";
import phoneIcon from '../../../public/images/phoneIcon.png'
import styles from './styles.module.css'

export default function Navbar () {



    return (     <div className="flex justify-between px-12 items-center" >
    <Image
              className="logo py-4"
              src="/images/Group 49.png"
              alt="CatCard logo"
              width={200}
              height={820}
            />
      <p className={styles.callButton}>
      <Image
              className="me-2"
              src={phoneIcon}
              alt="CatCard logo"
              width={24}
              height={24}
            />
      +971 527667527 
      </p>
      
    </div>)
}