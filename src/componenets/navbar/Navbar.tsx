"use client"
import Image from "next/image";
import styles from './styles.module.css'
import Link from "next/link";
import React  ,{ useRef } from "react";
import { useForm } from 'react-hook-form';

export default function Navbar () {
  const dialogRef = useRef<HTMLDialogElement>(null);

  
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data:any) => console.log(data);
    console.log(errors);
  const openDialog = () => {
    dialogRef.current?.showModal();
  }


  return (
    <div className="flex justify-between md:px-[2vw] px-5 items-center max-md:py-3" >
      <Image
        className="py-4 max-md:hidden md:h-[10vw] w-[15vw] md:h-[7vw] h-[7vw] 2xl:w-[10vw] 2xl:h-[5vw] object-contain"
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
            className="w-[28px] h-[28px] md:w-[2vw]  md:h-[2vw] "
            src='/images/searchIcon.png'
            alt="CatCard logo"
            width={24}
            height={24}
          />
        </button>
        <button className="max-md:py-1 max-md:px-3 max-md:bg-[#B1022980] max-md:rounded-[8px] max-md:text-xl max-md:uppercase text-[2vw] md:text-[1.5vw] cursor-pointer" onClick={openDialog}>
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
      <dialog ref={dialogRef} id="my_modal_2" className="modal border-none">
  <div className="modal-box bg-white text-black rounded-none w-[85vw] md:w-7/12 xl:w-4/12 3xl:w-3/12 max-w-5xl pt-6 px-12">
  <div className="flex flex-row-reverse">

  <button
      onClick={() => dialogRef.current?.close()}
      className=" text-6xl  text-gray-700 font-extralight hover:text-black"
    >
      ×
    </button>
  </div>
    <h3 className="text-7xl  lg:mb-8 md:text-6xl lg:text-[80px] text-center font-anton uppercase pb-4">
      LOGIN
    </h3>
    <p className="py-2 lg:mb-6 text-center font-montserrat text-lg md:text-3xl lg:text-[32px] font-medium">
    Please login to proceed
    </p>

    <div className="flex flex-col md:flex-row px-4 md:px-8 lg:px-2 gap-6 md:gap-8 items-center justify-center " >


  
    <form onSubmit={handleSubmit(onSubmit)} className="w-[80vw] lg:w-[100vw]" style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        padding: '24px',
      }}>
      <input type="text" placeholder="Username" {...register("Username", {required: true})} className="w-full border p-[3vw] md:p-[2vw] 3xl:p-[1vw]  rounded-full" style={{
            // borderRadius: '2vw',
            // padding: '1vw',
            border:"0.1vw solid #B6B6B6",
      }}/>
      <input type="password" placeholder="Password" {...register} className="w-full border p-[3vw] md:p-[2vw] 3xl:p-[1vw]  rounded-full" style={{
            // borderRadius: '2vw',
            // padding: '1vw',
            border:"0.1vw solid #B6B6B6",
            marginBottom :"0.5vw"
      }}/>

      <button type="submit" className="p-[3vw] md:p-[2vw] 3xl:p-[1vw] rounded-full" style={{
          backgroundColor: '#B10229' ,
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          fontWeight: 'bold',
          transition: 'background-color 0.3s ease',
          textTransform:"uppercase"
        }}
        // onMouseOver={(e) => (e.currentTarget.style.backgroundColor = `${defaultValues ? '#ffa501' : '#4CAF49'}`)}
        // onMouseOut={(e) => (e.currentTarget.style.backgroundColor = `${defaultValues ? '#ffa500' : '#4CAF50'}`)}
      >
        {/* {defaultValues ? 'Update' : 'Submit'} */} Login
      </button>
    </form>


    </div>
  </div>

  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
    </div>


    )
}



