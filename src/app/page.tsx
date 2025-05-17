'use client'
import Image from "next/image";
import Link from "next/link";
import '@fortawesome/fontawesome-free/css/all.min.css';
import bg from '../../public/background-curve.svg'
import teacherIcon from '../../public/images/teacherIcon.png'
import companyIcon from '../../public/images/companyIcon.png'
import instituteIcon from '../../public/images/instituteIcon.png'
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openDialog = () => {
    dialogRef.current?.showModal();
  };



  const hablandoRef = useRef<HTMLDivElement>(null);
  const catcardRef = useRef<HTMLDivElement>(null);
  const bailandoRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (typeof window === "undefined" || window.innerWidth >= 1024) return; // Only mobile
    gsap.registerPlugin(ScrollTrigger);
    const cards = [
      { ref: hablandoRef, img: "#hablandoImg" },
      { ref: catcardRef, img: "#catcardImg" },
      { ref: bailandoRef, img: "#bailandoImg" },
    ];
    const anims: gsap.core.Tween[] = [];
    cards.forEach(({ ref, img }) => {
      if (!ref.current) return;
      // Animate card scale
      anims.push(
        gsap.fromTo(
          ref.current,
          { scale: 1 },
          {
            scale: 1.15,
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 60%",
              end: "bottom 40%",
              scrub: true,
              toggleActions: "play reverse play reverse",
            },
          }
        )
      );
      // Animate image translation
      const imgEl = ref.current.querySelector(img);
      if (imgEl) {
        anims.push(
          gsap.fromTo(
            imgEl,
            { filter: "grayscale(100%)", y: 0 },
            {
              filter: "grayscale(0%)",
              y: -30,
              duration: 0.5,
              ease: "power2.out",
              scrollTrigger: {
                trigger: ref.current,
                start: "top 60%",
                end: "bottom 40%",
                scrub: true,
                toggleActions: "play reverse play reverse",
              },
            }
          )
        );
      }
    });
    return () => {
      anims.forEach((a) => a.kill());
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    // Main container with grid layout and gradient background
    <div className="max-lg:!px-0 relative grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 lg:px-0  gap-16 lg:gap-8 sm:p-20  sm:py-0 font-[family-name:var(--font-geist-sans)]  bg-red-gradient">

      <svg height={673} viewBox="0 0 1411 673" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute lg:block svgLg -top-10 left-0 w-full h-full object-cover z-0 pointer-events-none animate-stroke" >
        <path opacity="0.7" d="M1401.71 1C1411.39 82.8829 1401.71 157.002 1345.47 189.331C1231.52 254.837 1144.44 382.183 1115.15 437.668C965.753 697.101 715.878 290.834 735.736 449.447C755.595 608.06 720.564 773.048 594.643 579.089C586.557 566.634 493.771 413.104 314.457 428.457C239.629 434.863 125.587 462.373 5 579.089" stroke="#B10229" strokeWidth="5" />
      </svg>
      <svg width="393" height="1247" viewBox="0 0 393 1247" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute lg:hidden svgSm top-[18] left-0 w-full h-full object-cover z-0 pointer-events-none animate-stroke">
        <path d="M2 3C113.667 25.8333 345.1 151.4 369.5 233C400 335 71 356 35.0002 500.5C3.59464 604.009 -0.5 681.5 85.5 764C171.5 846.5 369.5 878.5 369.5 994.5C369.5 1110.5 75.5 1196 -12.5 1244" stroke="#B10229" stroke-width="6" stroke-linecap="round" />
      </svg>
      {/* <svg width="578" height="1372" viewBox="0 0 578 1372" fill="none" xmlns="http://www.w3.org/2000/svg"  className="absolute svgSm top-[18] left-0 w-full h-full object-cover z-0 pointer-events-none animate-stroke">
<path d="M3 3.5C116.413 26.4621 548.193 215.237 572.975 297.297C603.952 399.873 269.806 420.991 233.243 566.306C201.346 670.399 197.188 748.327 284.533 831.293C371.878 914.258 572.975 946.438 572.975 1063.09C572.975 1179.75 116.876 1320.23 27.5 1368.5" stroke="#B10229" stroke-width="6" stroke-linecap="round"/>
</svg> */}

      {/* Main content wrapper */}
      <main className="relative flex flex-col gap-[0px]  row-start-2 items-center sm:items-start w-[90vw] mx-[auto]">
        {/* Header section */}
        <h3 className="font-montserrat wellcome text-center w-full uppercase text-white fs-34px">
          Welcome to the
        </h3>
        {/* <h1 className="font-anton w-full absolute md:relative top-50  text-center text-white fs-80px mb-24"> */}
        <h1 className="font-anton w-full  comm text-center text-white fs-80px mb-0">
          Hablando Community
        </h1>
        {/* 
        <div className="relative w-full  flex items-center justify-center pt-90 md-pt-0  text-white"> */}
        <div className="relative w-full mobilePad flex items-center justify-center pt-10 md-pt-0  text-white ">


          {/* Cards container - column on mobile, row on large screens */}
          <div className="flex gap-8 lg:gap-0 w-full items-center justify-center flex-col lg:flex-row  z-10">
            {/* Hablando Card */}
            <div
              ref={hablandoRef}
              className="border-gradient homeCard lg:me-24 mb-24 lg:mb-0"
            >
              <Image
                id="hablandoImg"
                src="/images/hablando.png"
                alt="Hablando Card"
                width={380}
                height={380}
                priority
              />
              <div className="card-content flex flex-col items-center">
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
            <div
              ref={catcardRef}
              className="border-gradient homeCard lg:me-24 mb-24 lg:mb-0"
            >
              <Image
                id="catcardImg"
                src="/images/catcard.png"
                alt="cat card image"
                width={180}
                height={38}
                priority
              />
              <div className="card-content flex flex-col items-center">
                <Image
                  className="logo py-4"
                  src="/images/Group49.png"
                  alt="CatCard logo"
                  width={160}
                  height={820}
                />
                <button className="explore-btn rounded-full" onClick={openDialog}>
                  LET'S EXPLORE
                </button>
              </div>
            </div>
            {/* Bailando Card */}
            <div
              ref={bailandoRef}
              className="border-gradient homeCard"
            >
              <Image
                id="bailandoImg"
                src="/images/bailando.png"
                alt="Bailando card image"
                width={350}
                height={380}
                priority
              />
              <div className="card-content flex flex-col items-center">
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

          <div className="flex flex-col lg:flex-row px-4 md:px-8 gap-6 md:gap-8 items-center justify-center pb-8">
            <div className="card border border-black py-6 rounded-none w-full lg:w-1/3">
                <Link href="/catcard">
              <div className="card-body px-8 md:px-14">
                  <Image src={teacherIcon} alt="teacherIcon" className="mx-auto py-2" />
                  <p className="text-center text-xl md:text-2xl py-3">A </p>
                  <h2 className="font-anton uppercase text-center text-3xl md:text-5xl text-red-hablando">
                    Teacher
                  </h2>
              </div>
                </Link>
            </div>

            <div className="card border border-black py-6 rounded-none w-full lg:w-1/3">
              <div className="card-body px-8 md:px-14">
                <Image src={companyIcon} alt="companyIcon" className="mx-auto py-2" />
                <p className="text-center text-xl md:text-2xl py-2">A </p>
                <h2 className="font-anton uppercase text-center text-3xl md:text-5xl text-red-hablando">
                  Company
                </h2>
              </div>
            </div>

            <div className="card border border-black py-6 rounded-none w-full lg:w-1/3">
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
