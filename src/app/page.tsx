'use client'
import Image from "next/image";
import Link from "next/link";
import '@fortawesome/fontawesome-free/css/all.min.css';
import bg from '../../public/background-curve.svg'
import teacherIcon from '../../public/images/teacherIcon.png'
import companyIcon from '../../public/images/companyIcon.png'
import instituteIcon from '../../public/images/instituteIcon.png'
import { useRef } from "react";

export default function Home() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openDialog = () => {
    dialogRef.current?.showModal();
  };



  return (
    // Main container with grid layout and gradient background
    <div className="relative grid grid-rows-[20px_1fr_20px] items-center justify-items-center 2xl:min-h-screen p-8  gap-16 sm:p-20  sm:py-0 font-[family-name:var(--font-geist-sans)]  bg-red-gradient">

<svg height={673} viewBox="0 0 1411 673" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute svgLg top-10 left-0 w-full h-full object-cover z-0 pointer-events-none animate-stroke">
<path opacity="0.7" d="M1401.71 1C1411.39 82.8829 1401.71 157.002 1345.47 189.331C1231.52 254.837 1144.44 382.183 1115.15 437.668C965.753 697.101 715.878 290.834 735.736 449.447C755.595 608.06 720.564 773.048 594.643 579.089C586.557 566.634 493.771 413.104 314.457 428.457C239.629 434.863 125.587 462.373 5 579.089" stroke="#B10229" strokeWidth="12"/>
</svg>

<svg width="375" height="1247" viewBox="0 0 375 1247" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute svgSm -top-10 left-0 w-full h-full object-cover z-0 pointer-events-none animate-stroke">
<path d="M2 3C113.667 25.8333 345.1 151.4 369.5 233C400 335 71 356 35.0002 500.5C3.59464 604.009 -0.5 681.5 85.5 764C171.5 846.5 369.5 878.5 369.5 994.5C369.5 1110.5 75.5 1196 -12.5 1244" stroke="#B10229" stroke-width="6" stroke-linecap="round"/>
</svg>


      {/* Main content wrapper */}
      <main className="flex flex-col gap-[0px]  row-start-2 items-center sm:items-start">
        {/* Header section */}
        <h3 className="font-montserrat text-center w-full uppercase text-white fs-34px">
          Welcome to the
        </h3>
        {/* <h1 className="font-anton w-full absolute md:relative top-50  text-center text-white fs-80px mb-24"> */}
        <h1 className="font-anton w-full   text-center text-white fs-80px mb-0">
          Hablando Community
        </h1>
{/* 
        <div className="relative w-full  flex items-center justify-center pt-90 md-pt-0  text-white"> */}
        <div className="relative w-full  flex items-center justify-center pt-10 md-pt-0  text-white">



        {/* Cards container - column on mobile, row on large screens */}
        <div className="flex gap-8 w-full items-center justify-center flex-col lg:flex-row  z-10">
          {/* Hablando Card */}
          <div className="border-gradient homeCard  lg:me-24  mb-24 lg:mb-0 ">
            {/* Card background image */}
            <Image
            id="hablandoImg"
              src="/images/hablando.png"
              alt="Hablando Card"
              width={380}
              height={380}
              priority
              // style={{ color: "transparent", margin: "unset", width: "100%", transform:"translateY(-49px)" }}
            />

            {/* Card content wrapper */}
            <div className="card-content flex flex-col items-center">
              {/* Card logo */}
              <Image
                className="logo"
                src="/images/Group 24-2x.png"
                alt="Hablando logo"
                width={150}
                height={520}
              />
              <button className="explore-btn rounded-full">
                LET'S EXPLORE
              </button>
            </div>
          </div>

          {/* Cat Card */}
          <div className="border-gradient homeCard  lg:me-24  mb-24 lg:mb-0">
            {/* Card background image */}
            <Image
              src="/images/catcard.png"
              alt="cat card image"
              width={180}
              height={38}
              priority
            />

            {/* Card content wrapper */}
            <div className="card-content flex flex-col items-center">
              {/* Card logo */}
              <Image
                className="logo py-4"
                src="/images/Group 49.png"
                alt="CatCard logo"
                width={160}
                height={820}
              />
              {/* Navigation link to CatCard page */}
              {/* <Link href="/catcard"> */}
                <button className="explore-btn rounded-full" onClick={openDialog}>
                  LET'S EXPLORE
                </button>
              {/* </Link> */}
            </div>
          </div>

          {/* Bailando Card */}
          <div className="border-gradient homeCard   ">
            {/* Card background image */}
            <Image
              src="/images/bailando.png"
              alt="Bailando card image"
              width={350}
              height={380}
              priority
              // style={{ color: "transparent", margin: "unset", width: "100%", transform:"translateY(-49px)" }}
        id="bailandoImg"
            />

            {/* Card content wrapper */}
            <div className="card-content flex flex-col items-center">
              {/* Card logo */}
              <Image
                className="logo py-4"
                src="/images/Group-2x.png"
                alt="Bailando logo"
                width={160}
                height={820}
              />
              <button className="explore-btn rounded-full">
                LET'S EXPLORE
              </button>
            </div>
          </div>
        </div>

        {/* Animated SVG in background */}
  </div>

      </main>



  {/* <dialog ref={dialogRef} id="my_modal_2" className="modal border-none">
  <div className="modal-box bg-white text-black rounded-none w-9/12 max-w-5xl">
    <p className="pt-4  text-center font-montserrat fs-34px uppercase font-normal">Welcome to the</p>
    <h3 className=" text-lg  text-center font-anton fs-80px uppercase">CatCard</h3>
    <p className="py-2 mb-8  text-center font-montserrat  fs-34px font-medium">Please select an option below</p>

<div className="flex px-8 gap-8 items-center justify-center pb-8">

<div className="card  card-border border-black py-6 rounded-none">
  <div className="card-body px-14">
  <Link href="/catcard"> 
    <Image src={teacherIcon} alt="teacherIcon"  className="mx-auto py-2"/>
    <p className="text-center text-3xl py-2">A </p>
    <h2 className=" font-anton uppercase text-center text-5xl text-red-hablando">Teacher</h2>
    </Link>
  </div>
</div>
<div className="card  card-border border-black py-4  rounded-none">
  <div className="card-body px-14">
    <Image src={companyIcon} alt="companyIcon"  className="mx-auto py-2"/>
    <p className="text-center text-3xl py-2">A </p>
    <h2 className=" font-anton uppercase text-center text-5xl text-red-hablando">Company</h2>
  </div>
</div>
<div className="card  card-border border-black py-4  rounded-none">
  <div className="card-body px-10">
    <Image src={instituteIcon} alt="instituteIcon"  className="mx-auto py-2"/>
    <p className="text-center text-3xl py-2">AN </p>
    <h2 className=" font-anton uppercase text-center text-5xl text-red-hablando">institution</h2>
  </div>
</div>


</div>

  </div>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog> */}
<dialog ref={dialogRef} id="my_modal_2" className="modal border-none">
  <div className="modal-box bg-white text-black rounded-none w-10/12 max-w-5xl">
    <p className="pt-4 text-center font-montserrat text-2xl md:text-3xl lg:text-[34px] uppercase font-normal">
      Welcome to the
    </p>
    <h3 className="text-5xl md:text-6xl lg:text-[80px] text-center font-anton uppercase">
      CatCard
    </h3>
    <p className="py-2 mb-6 text-center font-montserrat text-xl md:text-3xl lg:text-[34px] font-medium">
      Please select an option below
    </p>

    <div className="flex flex-col md:flex-row px-4 md:px-8 gap-6 md:gap-8 items-center justify-center pb-8">
      <div className="card border border-black py-6 rounded-none w-full md:w-1/3">
        <div className="card-body px-8 md:px-14">
          <Link href="/catcard">
            <Image src={teacherIcon} alt="teacherIcon" className="mx-auto py-2" />
            <p className="text-center text-xl md:text-2xl py-4">A </p>
            <h2 className="font-anton uppercase text-center text-3xl md:text-5xl text-red-hablando">
              Teacher
            </h2>
          </Link>
        </div>
      </div>

      <div className="card border border-black py-6 rounded-none w-full md:w-1/3">
        <div className="card-body px-8 md:px-14">
          <Image src={companyIcon} alt="companyIcon" className="mx-auto py-2" />
          <p className="text-center text-xl md:text-2xl py-2">A </p>
          <h2 className="font-anton uppercase text-center text-3xl md:text-5xl text-red-hablando">
            Company
          </h2>
        </div>
      </div>

      <div className="card border border-black py-6 rounded-none w-full md:w-1/3">
        <div className="card-body px-6 md:px-10">
          <Image src={instituteIcon} alt="instituteIcon" className="mx-auto py-2" />
          <p className="text-center text-xl md:text-2xl py-2">AN </p>
          <h2 className="font-anton uppercase text-center text-3xl md:text-5xl text-red-hablando">
            Institution
          </h2>
        </div>
      </div>
    </div>
  </div>

  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>

    </div>
  );
}
