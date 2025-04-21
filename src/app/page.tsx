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
    <div className="relative grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8  gap-16 sm:p-20  sm:py-0 font-[family-name:var(--font-geist-sans)]  bg-red-gradient">

<svg height={673} viewBox="0 0 1411 673" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute -top-20 left-0 w-full h-full object-cover z-0 pointer-events-none animate-stroke">
<path opacity="0.7" d="M1401.71 1C1411.39 82.8829 1401.71 157.002 1345.47 189.331C1231.52 254.837 1144.44 382.183 1115.15 437.668C965.753 697.101 715.878 290.834 735.736 449.447C755.595 608.06 720.564 773.048 594.643 579.089C586.557 566.634 493.771 413.104 314.457 428.457C239.629 434.863 125.587 462.373 5 579.089" stroke="#B10229" strokeWidth="12"/>
</svg>


      {/* Main content wrapper */}
      <main className="flex flex-col gap-[0px]  row-start-2 items-center sm:items-start">
        {/* Header section */}
        <h3 className="font-montserrat text-center w-full uppercase text-white fs-34px">
          Welcome to the
        </h3>
        <h1 className="font-anton w-full  text-center text-white fs-80px mb-24">
          Hablando Community
        </h1>

        <div className="relative w-full  flex items-center justify-center  text-white">



        {/* Cards container - column on mobile, row on large screens */}
        <div className="flex gap-8 w-full items-center justify-center flex-col lg:flex-row  z-10">
          {/* Hablando Card */}
          <div className="border-gradient homeCard card lg:me-24  mb-24 lg:mb-0 ">
            {/* Card background image */}
            <Image
            id="hablandoImg"
              src="/images/hablando-2x.png"
              alt="Hablando Card"
              width={180}
              height={38}
              priority
              style={{ color: "transparent", margin: "unset", width: "100%", transform:"translateY(-49px)" }}
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
          <div className="border-gradient homeCard card lg:me-24  mb-24 lg:mb-0">
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
          <div className="border-gradient homeCard card  ">
            {/* Card background image */}
            <Image
              src="/images/bailando.png"
              alt="Bailando card image"
              width={180}
              height={38}
              priority
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



  <dialog ref={dialogRef} id="my_modal_2" className="modal border-none">
  <div className="modal-box bg-white text-black rounded-none w-9/12 max-w-5xl">
    <p className="pt-4  text-center font-montserrat fs-34px uppercase font-normal">Welcome to the</p>
    <h3 className=" text-lg  text-center font-anton fs-80px uppercase">CatCard</h3>
    <p className="py-2 mb-8  text-center font-montserrat  fs-34px font-medium">Please select an option below</p>

<div className="flex px-8 gap-8 items-center justify-center pb-8">

<div className="card  card-border border-base-100 py-6 rounded-none">
  <div className="card-body px-14">
  <Link href="/catcard"> 
    <Image src={teacherIcon} alt="teacherIcon"  className="mx-auto py-2"/>
    <p className="text-center text-3xl py-2">A </p>
    <h2 className=" font-anton uppercase text-center text-5xl text-red-hablando">Teacher</h2>
    </Link>
  </div>
</div>
<div className="card  card-border border-base-100 py-4  rounded-none">
  <div className="card-body px-14">
    <Image src={companyIcon} alt="companyIcon"  className="mx-auto py-2"/>
    <p className="text-center text-3xl py-2">A </p>
    <h2 className=" font-anton uppercase text-center text-5xl text-red-hablando">Company</h2>
  </div>
</div>
<div className="card  card-border border-base-100 py-4  rounded-none">
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
</dialog>

    </div>
  );
}
