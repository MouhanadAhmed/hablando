"use client"

import HeroSection from '@/componenets/heroSection/heroSection';
import styles from './styles.module.css'
import CatDesc from '@/componenets/catDesc/catDesc';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useEffect, useRef, useState } from 'react';
import { useGSAP } from "@gsap/react";
import WhatYouGet from '@/componenets/whatYouGet/WhatYouGet';
import Teacher from '@/componenets/teacher/Teacher';
import Navbar from '@/componenets/navbar/Navbar';

import Benefits from '@/componenets/benefits/Benefits';
import Image from "next/image";
import PushUp from '@/componenets/pushUp/PushUp';
import Steps from '@/componenets/Steps/Steps';
gsap.registerPlugin(ScrollTrigger);

export default function CatCard() {
  const svgContainerRef = useRef<HTMLDivElement>(null);
  const svgContainerRefSm = useRef<HTMLDivElement>(null);
  const scrollDownRef = useRef<HTMLDivElement>(null);
  const scrollDownRefSm = useRef<HTMLDivElement>(null);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  const pathRef = useRef<SVGPathElement>(null);
  const MAX_DASH = 37500;

  const dashSegments = [
    { start: 0, end: 2000, speed: 0.3 },
    { start: 2000, end: 3500, speed: 1.5 },
    { start: 3500, end: 5000, speed: 1 },
    { start: 5000, end: 6500, speed: 3 },
    { start: 6500, end: 8500, speed: 0.5 },
    { start: 8500, end: 9000, speed: 1.5 },
    { start: 9000, end: 10000, speed: 1 },
    { start: 10000, end: 12000, speed: 1 },
    { start: 12000, end: 14000, speed: 0.5 },
    { start: 14000, end: 16000, speed: 1.2 },
    { start: 16000, end: 22000, speed: 0.8 },
    { start: 22000, end: 24000, speed: 0.3 },
    { start: 24000, end: 27000, speed: 0.5 },
    { start: 27000, end: 30000, speed: 0.5 },
    { start: 30000, end: 31000, speed: 1 },
    { start: 31000, end: 37500, speed: 2 },
  ];

  function mapScrollToDash(scrollY: number, maxScroll: number): number {
    const dashPos = Math.max(0, Math.min(MAX_DASH, (scrollY / maxScroll) * MAX_DASH));
    let dash = 0;
    for (const seg of dashSegments) {
      if (dashPos > seg.end) {
        dash += (seg.end - seg.start) * seg.speed;
      } else if (dashPos > seg.start) {
        dash += (dashPos - seg.start) * seg.speed;
        break;
      }
    }
    return Math.min(dash, MAX_DASH);
  }

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollY = window.scrollY;
      const dash = mapScrollToDash(scrollY, maxScroll);
      if (pathRef.current) {
        pathRef.current.style.strokeDasharray = `${dash},500000`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const MOBILE_MAX_DASH = 18850;
  
  const mobileDashSegments = [
    { start: 0, end: 3000, speed: 1 },
    { start: 3000, end: 4500, speed: 1.3 },
    { start: 4500, end: 7500, speed: 0.85 },
    { start: 7500, end: 11000, speed: 1 },
    { start: 11000, end: 14000, speed: 0.7 },
    { start: 14000, end: 18850, speed: 1.3 },
  ];

  const [mobileDash, setMobileDash] = useState(0);
  const mobilePathRef = useRef<SVGPathElement>(null);

  function mapScrollToMobileDash(scrollY: number, maxScroll: number): number {
    const dashPos = Math.max(0, Math.min(MOBILE_MAX_DASH, (scrollY / maxScroll) * MOBILE_MAX_DASH));
    let dash = 0;
    for (const seg of mobileDashSegments) {
      if (dashPos > seg.end) {
        dash += (seg.end - seg.start) * seg.speed;
      } else if (dashPos > seg.start) {
        dash += (dashPos - seg.start) * seg.speed;
        break;
      }
    }
    return Math.min(dash, MOBILE_MAX_DASH);
  }
  useEffect(() => {
    if (!isMobileScreen) return;
    function handleScroll() {
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollY = window.scrollY;
      const dash = mapScrollToMobileDash(scrollY, maxScroll);
      setMobileDash(dash);
    }
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobileScreen]);

  useEffect(() => {
    const updateScreen = () => {
      if (window.innerWidth > 768) {
        setIsLargeScreen(true);
        setIsMobileScreen(false)
      } else {
        setIsLargeScreen(false);
        setIsMobileScreen(true)
      }
    };
    updateScreen();
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }
    window.addEventListener('resize', updateScreen);
    return () => window.removeEventListener('resize', updateScreen);
  }, []);

  useEffect(() => {
    console.log(window.innerHeight)
    let activeRef
    let inactiveRef
    let activeScrollRef
    let inactiveScrollRef
    if (isLargeScreen) {
      activeRef = svgContainerRef;
      inactiveRef = svgContainerRefSm;
      activeScrollRef = scrollDownRef;
      inactiveScrollRef = scrollDownRefSm;

    } else {
      activeRef = svgContainerRefSm;
      inactiveRef = svgContainerRef;
      activeScrollRef = scrollDownRefSm;
      inactiveScrollRef = scrollDownRef;
    }


    // Hide the inactive SVG
    if (inactiveRef.current) {
      inactiveRef.current.style.display = 'none';
      if (inactiveScrollRef.current) {
        inactiveScrollRef.current.style.display = 'none';
      }
    }
    // Ensure active SVG is visible
    if (activeRef.current) {
      activeRef.current.style.display = 'block';
      if (activeScrollRef.current) {
        activeScrollRef.current.style.display = 'block';
      }
    }

    const container = activeRef.current;
    if (!container) return;

    // Select the SVG path inside the active container
    const path = container.querySelector('#line') as SVGPathElement | null;
    if (!path) return;

    // Prepare path for drawing animation
    const pathLength = path.getTotalLength();
    path.style.strokeDasharray = `${pathLength}`;
    path.style.strokeDashoffset = `${pathLength}`;

    // gsap.to(path, {
    //   strokeDashoffset: 0,
    //   ease: "none",
    //   scrollTrigger: {
    //     trigger: '#line',
    //     start: "top 20%",
    //     end: "+=" + (window.innerHeight * 15),
    //     scrub:  true ,
    //     markers: false // ✅ shows scroll trigger debug markers

    //   },
    // });



    // Setup the draw tween (paused)
    const drawTween = gsap.to(path, { strokeDashoffset: 0, ease: 'none', paused: true });


    // Get vertical offset of .teacher-container for speed adjustment
    const teacherSec = document.querySelector('.teacher-container');
    let sectionStart: number | undefined;
    if (teacherSec) {
      const rect = teacherSec.getBoundingClientRect();
      sectionStart = window.pageYOffset + rect.top;
    }
    // Get vertical offset of .push-container for speed adjustment
    const pushSec = document.querySelector('.push-container');
    let pushSectionStart: number | undefined;
    if (pushSec) {
      const rect = pushSec.getBoundingClientRect();
      pushSectionStart = window.pageYOffset + rect.top;
    }
    // Get vertical offset of .what you will get container for z-index adjustment
    const whatSec = document.querySelector('.what-container');
    let whatSectionStart: number | undefined;
    let whatSectionEnd: number | undefined;
    if (whatSec) {
      console.log("whatSec")
      const rect = whatSec.getBoundingClientRect();
      whatSectionStart = window.pageYOffset + rect.top;
      whatSectionEnd = window.pageYOffset + rect.bottom;
    }

    // Get vertical offset of .benefits-container for speed adjustment
    const benefitsSec = document.querySelector('.benfits-container');
    let benefitsSectionStart: number | undefined;
    if (benefitsSec) {
      const rect = benefitsSec.getBoundingClientRect();
      benefitsSectionStart = window.pageYOffset + rect.top;
    }
    // Get vertical offset of .steps-container for speed adjustment
    const stepsSec = document.querySelector('.benfits-container');
    let stepsSectionStart: number | undefined;
    if (stepsSec) {
      const rect = stepsSec.getBoundingClientRect();
      stepsSectionStart = window.pageYOffset + rect.top;
    }


    // console.log("teacherSec",teaherSec)
    // // slower draw over first horizontal scroller
    // gsap.to(path, {
    //   strokeDashoffset: 0,
    //   ease: "none",
    //   scrollTrigger: {
    //     trigger: teaherSec,
    //     start: "top bottom",
    //     end: "+=" + (window.innerHeight * 9.5),
    //     scrub: true,
    //     markers: true
    //   },
    //   // supply a reduced interpolation via duration proportion
    //   duration: 3000000
    // });    


    // const benefitSec =  document.querySelector('.benefit-container') ;
    // console.log("benefitSec",benefitSec)
    // // slower draw over first horizontal scroller
    // gsap.to(path, {
    //   strokeDashoffset: 0,
    //   ease: "none",
    //   scrollTrigger: {
    //     trigger: benefitSec,
    //     start: "top ",
    //     end: "+=" + (window.innerHeight * 8),
    //     scrub: true,
    //     markers: true
    //   },
    //   // supply a reduced interpolation via duration proportion
    //   duration: 10
    // });

    // const draw = gsap.to(path, { strokeDashoffset: 0, ease: "none", paused: true });


    // Create the ScrollTrigger
    ScrollTrigger.create({
      trigger: path,
      start: "top 60%",
      end: "+=" + (window.innerHeight * 25),
      onUpdate: (self) => {
        let factor = 0.9;
        if (window.innerWidth < 769) {
          factor = 2.5
        }
        // if(screenX<769 && typeof benefitsSectionStart !== 'undefined' && window.scrollY > benefitsSectionStart*1.5) {
        //   // factor=1.9
        // }
        // if(screenX<769 && typeof benefitsSectionStart !== 'undefined' && window.scrollY > benefitsSectionStart*1.7) {
        //   // factor=1.8
        // }
        // if (typeof sectionStart !== 'undefined' && window.scrollY > sectionStart * 1.2 && window.innerWidth > 1900) {
        //   factor = 0.3; 
        // }    
        // console.log(typeof whatSectionStart !== 'undefined' && window.scrollY >=  whatSectionStart && window.innerWidth > 769)    
        // console.log( 'screenX > 769',screenX > 769)    
        // console.log( 'window.innerWidt',window.innerWidth )    
        // console.log( 'window.scrollY >=  whatSectionStart',window.scrollY >=  whatSectionStart)    
        // console.log('typeof whatSectionStart !== undefined' ,typeof whatSectionStart !== 'undefined')    
        if (typeof whatSectionStart !== 'undefined' && window.scrollY >= whatSectionStart * 1.5 && window.innerWidth > 769) {
          factor = 0.69;
        }
        if (typeof benefitsSectionStart !== 'undefined' && window.scrollY >= benefitsSectionStart && window.innerWidth > 769) {
          factor = 0.69;
        }
        if (typeof benefitsSectionStart !== 'undefined' && window.scrollY >= benefitsSectionStart * 1.3 && window.innerWidth > 769) {
          factor = 0.63;
        }
        // if (typeof stepsSectionStart !== 'undefined' && window.scrollY >=  stepsSectionStart*2.1 && window.innerWidth > 769) {
        //   factor = 0.59;  
        // }
        // if (typeof pushSectionStart !== 'undefined' && window.scrollY >=  pushSectionStart*1 && window.innerWidth > 769) {
        //   factor = 0.5;  
        // }  
        //   if (typeof pushSectionStart !== 'undefined' && window.scrollY > pushSectionStart && screenX <1900 ) {
        //   factor = 0.618;  
        // } 
        //   if (typeof pushSectionStart !== 'undefined' && window.scrollY > pushSectionStart && screenX >1900 ) {
        //   factor = 1.5;  
        // }  
        if (typeof whatSectionStart !== 'undefined' && window.scrollY >= whatSectionStart) {
          if (activeRef.current) {
            activeRef.current.style.zIndex = '3'
          }
        }
        if (typeof whatSectionEnd !== 'undefined' && window.scrollY > whatSectionEnd) {
          if (activeRef.current) {
            activeRef.current.style.zIndex = '-1'
          }
        }
        drawTween.progress(self.progress * factor);
      }
    });

    ScrollTrigger.refresh();
  }, [isLargeScreen, isMobileScreen]);

  return (
    <div className={` relative z-0`}>


      <Navbar />
      <div className='relative'>
        <HeroSection />
        {/* <div ref={svgContainerRef} className="absolute w-[30vw] left-[15%]  z-10"> */}
        {/* <div ref={svgContainerRef} className="absolute w-[30vw] left-[15%] z-10"> */}
        <div className="relative">
          <div ref={scrollDownRefSm} className={`absolute max-md:left-[14vw] max-md:-top-[70px] max-md:text-left max-md:font-semibold left-[8%] md:left-[10%] md:!-top-[45vw] md:!left-[10vw] ${styles.svgTopScrollSm} top-280 xl:hidden translate-x-[-50%] z-10 text-center`}>
            <p className="text-white text-[5vw] md:text-[1.3vw] font-montserrat w-full">SCROLL <br /> DOWN</p>
          </div>
          <div ref={svgContainerRefSm} className={`absolute w-[30vw] ${styles.svgTopSm} !left-[0vw] md:!left-[3vw] md:!-top-[40vw] z-[-1] pointer-events-none`}>
            <div className='absolute top-0 w-[90vw] top-[5vw] left-[2.5vw] min-w-[90vw]'>
              <svg className='absolute md:hidden top-0  h-auto max-[400px]:w-full min-w-[198vw]' width="768" height="10423" viewBox="0 0 768 10485" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '85vw', height: 'auto' }}>
                <path
                  ref={mobilePathRef}
                  d="M11.5 5V107C11.5 129.091 29.4086 147 51.5 147H309.5C331.591 147 349.5 164.909 349.5 187V394C349.5 416.091 331.591 434 309.5 434H45.5C23.4086 434 5.5 451.909 5.5 474V742.5C5.5 764.591 23.4086 782.5 45.5 782.5H309.5C331.591 782.5 349.5 800.409 349.5 822.5V986C349.5 1008.09 331.591 1026 309.5 1026H45.5C23.4086 1026 5.5 1043.91 5.5 1066V1394.5C5.5 1416.59 23.4086 1434.5 45.5 1434.5H240C262.091 1434.5 280 1416.59 280 1394.5V1375.25C280 1356.06 295.558 1340.5 314.75 1340.5V1340.5C333.942 1340.5 349.5 1356.06 349.5 1375.25V1695.5C349.5 1717.59 331.591 1735.5 309.5 1735.5H45.5C23.4086 1735.5 5.5 1753.41 5.5 1775.5V1984.5C5.5 2006.59 23.4086 2024.5 45.5 2024.5H309.5C331.591 2024.5 349.5 2042.41 349.5 2064.5V2459.5C349.5 2481.59 331.591 2499.5 309.5 2499.5H45.5C23.4086 2499.5 5.5 2517.41 5.5 2539.5V2992.5C5.5 3014.59 23.4086 3032.5 45.5 3032.5H307C329.091 3032.5 347 3050.41 347 3072.5V3481C347 3503.09 329.091 3521 307 3521H45.5C23.4086 3521 5.5 3538.91 5.5 3561V4000.5C5.5 4022.59 23.4086 4040.5 45.5 4040.5H307C329.091 4040.5 347 4058.41 347 4080.5V4499C347 4521.09 329.091 4539 307 4539H45.5C23.4086 4539 5.5 4556.91 5.5 4579V4993.5C5.5 5015.59 23.4086 5033.5 45.5 5033.5H307C329.091 5033.5 347 5051.41 347 5073.5V5581C347 5603.09 329.091 5621 307 5621H45.5C23.4086 5621 5.5 5638.91 5.5 5661V6153.5C5.5 6175.59 23.4086 6193.5 45.5 6193.5H307C329.091 6193.5 347 6211.41 347 6233.5V7138.5C347 7160.59 329.091 7178.5 307 7178.5H45.5C23.4086 7178.5 5.5 7196.41 5.5 7218.5V8180C5.5 8202.09 23.4086 8220 45.5 8220H217C239.091 8220 257 8202.09 257 8180V8125.5C257 8103.41 239.091 8085.5 217 8085.5H156C133.909 8085.5 116 8103.41 116 8125.5V8225C116 8247.09 133.909 8265 156 8265H307C329.091 8265 347 8282.91 347 8305V8605C347 8627.09 329.091 8645 307 8645H156C133.909 8645 116 8662.91 116 8685V8752.5C116 8774.59 133.909 8792.5 156 8792.5H217C239.091 8792.5 257 8774.59 257 8752.5V8715C257 8692.91 239.091 8675 217 8675H45.5C23.4086 8675 5.5 8692.91 5.5 8715V9206C5.5 9228.09 23.4086 9246 45.5 9246H217C239.091 9246 257 9263.91 257 9286V9322C257 9344.09 239.091 9362 217 9362H156C133.909 9362 116 9344.09 116 9322V9241C116 9218.91 133.909 9201 156 9201H307C329.091 9201 347 9218.91 347 9241V9752C347 9774.09 329.091 9792 307 9792H156C133.909 9792 116 9809.91 116 9832V9930C116 9952.09 133.909 9970 156 9970H217C239.091 9970 257 9952.09 257 9930V9872C257 9849.91 239.091 9832 217 9832H45.5C23.4086 9832 5.5 9849.91 5.5 9872V10401.5C5.5 10423.6 23.4086 10441.5 45.5 10441.5H144.5M144.5 10441.5L150.034 10425C159.34 10397.3 194.711 10389 215.921 10409.1V10409.1C233.684 10426 232.547 10455 213.182 10470L211.517 10471.3C190.632 10487.5 160.071 10479.4 150.021 10454.9L144.5 10441.5Z"
                  stroke="white"
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeDasharray={MOBILE_MAX_DASH}
                  strokeDashoffset={MOBILE_MAX_DASH - mobileDash}
                />
              </svg>
            </div>
          </div>
          <div ref={scrollDownRef} className={`absolute  left-[8%] md:left-[10%] md:!-top-[38vw] md:!-top-[47vw] md:left-[10vw] ${styles.svgTopScroll} top-280 xl:hidden translate-x-[-50%] z-10 text-center`}>
            <p className="text-white text-2xl md:text-[2.3vw] font-montserrat ">SCROLL <br /> DOWN</p>
          </div>
          {/* <div ref={svgContainerRef} className="absolute w-[30vw] left-[15%]  z-10"> */}
          {/* <div ref={svgContainerRef} className="absolute w-[30vw] left-[15%] z-10"> */}
          <div ref={svgContainerRef} className={`absolute w-[30vw] ${styles.svgTop} !left-[0vw] md:!left-[3vw] md:!-top-[37vw] z-[-1] pointer-events-none`}>
            <svg className='max-md:!w-[90vw] max-md:hidden relative' width="1500" height="16718" viewBox="0 0 1500 16718" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '85vw', height: 'auto' }}>
              <g clipPath="url(#clip0_476_627)">
                <mask id="mask0_476_627" maskUnits="userSpaceOnUse" x="0" y="0" width="1500" height="16717">
                  <path d="M1500 0H0V16717H1500V0Z" fill="white" strokeLinecap='round' />
                </mask>
                <g mask="url(#mask0_476_627)">
                  <path
                    strokeLinecap='round'
                    ref={pathRef}
                    d="M105.5 -44V392.5C105.5 431.712 137.288 463.5 176.5 463.5H454H1340.5C1379.71 463.5 1411.5 495.288 1411.5 534.5V1105.5C1411.5 1144.71 1379.71 1176.5 1340.5 1176.5H180C140.788 1176.5 109 1208.29 109 1247.5V2586C109 2625.21 140.788 2657 180 2657H1414C1453.21 2657 1485 2625.21 1485 2586V1899C1485 1859.79 1453.21 1828 1414 1828H787.5C748.288 1828 716.5 1859.79 716.5 1899V2912.5C716.5 2951.71 684.712 2983.5 645.5 2983.5H225.5C186.288 2983.5 154.5 3015.29 154.5 3054.5V4888.56C154.5 4947.96 223.075 4981.27 269.767 4944.55C477.04 4781.58 902.722 4449.59 1027.5 4373C1194.5 4270.5 1486 4296.9 1486 4562.5C1486 4816.91 1486 5869.04 1486 6426.86C1486 6466.07 1454.21 6497.5 1415 6497.5H263C223.788 6497.5 192 6529.29 192 6568.5V7267C192 7306.21 223.788 7338 263 7338H1321.5C1360.71 7338 1392.5 7369.79 1392.5 7409V8134C1392.5 8173.21 1360.71 8205 1321.5 8205H747.5C708.288 8205 676.5 8236.79 676.5 8276V8367.5C676.5 8406.71 644.712 8438.5 605.5 8438.5H554C514.788 8438.5 483 8470.29 483 8509.5V11690.9C483 11723.3 461.057 11751.6 429.67 11759.7L158.83 11829.3C127.443 11837.4 105.5 11865.7 105.5 11898.1V13986C105.5 14025.2 137.288 14057 176.5 14057H371C410.212 14057 442 14025.2 442 13986V13802C442 13762.8 410.212 13731 371 13731H115.5C76.2878 13731 44.5 13762.8 44.5 13802V14302C44.5 14341.2 76.2878 14373 115.5 14373H1276.5C1315.71 14373 1347.5 14404.8 1347.5 14444V14663.5C1347.5 14702.7 1315.71 14734.5 1276.5 14734.5H1088C1048.79 14734.5 1017 14702.7 1017 14663.5V14376C1017 14336.8 1048.79 14305 1088 14305H1360C1399.21 14305 1431 14336.8 1431 14376V15355.5C1431 15394.7 1399.21 15426.5 1360 15426.5H1151.5C1112.29 15426.5 1080.5 15394.7 1080.5 15355.5V15186.5C1080.5 15147.3 1112.29 15115.5 1151.5 15115.5H1411.5C1450.71 15115.5 1482.5 15147.3 1482.5 15186.5V15575C1482.5 15614.2 1450.71 15646 1411.5 15646H174C134.788 15646 103 15677.8 103 15717V15875C103 15914.2 134.788 15946 174 15946H300.5C339.712 15946 371.5 15914.2 371.5 15875V15641C371.5 15601.8 339.712 15570 300.5 15570H88C48.7878 15570 17 15601.8 17 15641V16459.5C17 16498.7 48.7878 16530.5 88 16530.5H705M705 16530.5L737.744 16470.9C789.558 16376.6 927.927 16385.2 969.014 16484.7V16484.7C985.713 16525.1 980.317 16571.6 954.586 16606.9V16606.9C901.502 16679.9 791.119 16674.9 744.891 16597.4L705 16530.5Z"
                    stroke="white"
                    strokeWidth="30"
                    strokeDasharray="0,500000"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_476_627">
                  <rect width="1500" height="16717" fill="white" />
                </clipPath>
              </defs>
            </svg>

            {/* <svg className='max-md:!w-[90vw] max-md:hidden' width="1500" height="16718" viewBox="0 0 1500 16718" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '85vw', height: 'auto' }}>
              <g clipPath="url(#clip0_283_359)">
                <path  fill-rule="evenodd" clip-rule="evenodd" d="M104.046 5.74651e-10C111.226 -6.67801e-05 117.046 5.82035 117.046 13L117.05 431.001L117.056 431.905C117.537 469.847 148.204 500.514 186.146 500.994L187.05 501H1333.05C1386.07 501 1429.05 543.981 1429.05 597V1137.5C1429.05 1190.52 1386.07 1233.5 1333.05 1233.5H187.047C148.387 1233.5 117.046 1264.84 117.046 1303.5V2627.5C117.046 2666.16 148.386 2697.5 187.046 2697.5H696.551V1956.5C696.551 1903.48 739.53 1860.5 792.55 1860.5H1407.05C1460.07 1860.5 1503.05 1903.48 1503.05 1956.5V2627.5C1503.05 2680.52 1460.07 2723.5 1407.05 2723.5H722.551V2941.5C722.551 2994.52 679.57 3037.5 626.551 3037.5H232.551C193.891 3037.5 162.551 3068.84 162.551 3107.5V4936.84C162.551 4983.01 206.429 5016.43 250.809 5004.41L251.857 5004.12C251.857 5004.12 292.657 4996.17 316.775 4985.49C380 4957.5 637.5 4733.13 637.5 4733.13C747.207 4633.73 948.5 4453 1055.43 4386.6C1101 4369.5 1161 4376.5 1213.8 4380.5C1262 4386.6 1324.79 4395.66 1380.84 4448.79C1437.3 4502.32 1482.41 4590.89 1486.43 4730.49C1497.96 4822.22 1496.53 4883.52 1496.08 4895.87L1496.02 4897.49C1496.01 4897.88 1496 4898.2 1496 4898.76V6471.12L1495.99 6472.36C1495.33 6524.83 1452.58 6567 1400 6567H266.05C227.39 6567 196.05 6598.34 196.05 6637V7296.5C196.05 7335.16 227.39 7366.5 266.05 7366.5H1309.5C1362.52 7366.5 1405.5 7409.48 1405.5 7462.5V8166.5L1405.49 8167.74C1404.83 8220.19 1362.11 8262.5 1309.5 8262.5H736.25C704.36 8262.5 678.5 8288.36 678.5 8320.25V8422.5C678.5 8475.52 635.52 8518.5 582.5 8518.5H548C514.03 8518.5 486.5 8546.03 486.5 8580L492.55 11730.8L492.54 11731.9C491.98 11780.1 458 11811.5 407.91 11826.1L179.213 11902.7L178.39 11902.8C143.596 11907.3 117.5 11937 117.5 11972.2V13002L117.495 13002.3C117.466 13003.5 117.294 13004.6 116.995 13005.6V13760.5H367.5C420.519 13760.5 463.5 13803.5 463.5 13856.5V14020C463.5 14073 420.519 14116 367.5 14116H186.995C133.975 14116 90.9951 14073 90.9951 14020V13788.5C68.7752 13794.8 52.5 13815.3 52.5 13839.5V14343.5C52.5 14382.2 83.8401 14413.5 122.5 14413.5H1002.53C1003.59 14374.9 1035.18 14344 1074 14344H1344C1397.02 14344 1440 14387 1440 14440V15160.5C1473.32 15175.5 1496.5 15209.1 1496.5 15248V15615C1496.5 15668 1453.52 15711 1400.5 15711H392V15911C392 15964 349.019 16007 296 16007H181C127.981 16007 85 15964 85 15911V15781C85 15728 127.981 15685 181 15685H365.244C362.472 15655.3 337.454 15632 307 15632H96C57.3401 15632 26 15663.3 26 15702V16490.5L26.0059 16491.4C26.49 16529.6 57.6419 16560.5 96 16560.5H703.582C710.152 16487.3 771.629 16430 846.5 16430C925.753 16430 990 16494.2 990 16573.5C990 16652.8 925.753 16717 846.5 16717C771.629 16717 710.152 16659.7 703.582 16586.5H96C43.395 16586.5 0.672358 16544.2 0.0078125 16491.7L0 16490.5V15702C8.35634e-07 15649 42.9807 15606 96 15606H307C351.82 15606 388.49 15640.9 391.323 15685H1400.5C1439.16 15685 1470.5 15653.7 1470.5 15615V15248C1470.5 15224 1458.42 15202.8 1440 15190.2V15391C1440 15444 1397.02 15487 1344 15487H1159.5C1106.48 15487 1063.5 15444 1063.5 15391V15248C1063.5 15195 1106.48 15152 1159.5 15152H1400.5C1405.08 15152 1409.59 15152.3 1414 15152.9V14440C1414 14401.3 1382.66 14370 1344 14370H1074C1049.54 14370 1029.59 14389.3 1028.55 14413.5H1264C1317.02 14413.5 1360 14456.5 1360 14509.5V14708C1360 14761 1317.02 14804 1264 14804H1096C1042.98 14804 1000 14761 1000 14708V14439.5H122.5C69.4807 14439.5 26.5 14396.5 26.5 14343.5V13839.5C26.5 13800.8 54.2926 13768.6 90.9951 13761.8V12997C90.9951 12995.8 91.1715 12994.5 91.5 12993.4V11972.2C91.5001 11923.9 127.288 11883.3 175.006 11877L176.136 11876.9L404.83 11800.3C441 11792 466.13 11766.7 466.54 11731.6L466.55 11730.8L460.5 8580C460.5 8531.67 499.67 8492.5 548 8492.5H582.5C621.16 8492.5 652.5 8461.16 652.5 8422.5V8320.25C652.5 8274 690 8236.5 736.25 8236.5H1309.5C1347.86 8236.5 1379.01 8205.65 1379.49 8167.4L1379.5 8166.5V7462.5C1379.5 7423.84 1348.16 7392.5 1309.5 7392.5H266.05C213.03 7392.5 170.05 7349.52 170.05 7296.5V6637C170.05 6583.98 213.03 6541 266.05 6541H1400C1438.38 6541 1469.51 6510.24 1469.99 6472.03L1470 6471.12V4898.76C1470 4897.89 1470.01 4897.25 1470.03 4896.66L1470.1 4894.92C1470.51 4883.65 1471.96 4823.54 1460.55 4733.13L1460.47 4732.5L1460.45 4731.86C1456.71 4597.44 1413.61 4515.7 1362.95 4467.66C1311.98 4419.34 1253.5 4410.33 1213.61 4404.5H1213.13L1212.66 4404.48C1157 4400 1090.5 4395.5 1059.21 4410.33C1021.5 4423.5 644.17 4758.28 644.17 4758.28C644.17 4758.28 440 4932.5 327.312 5004.38C291.5 5016 284 5018 260.59 5023.51C199.727 5039.99 136.551 5000.16 136.551 4936.84V3107.5C136.551 3054.48 179.532 3011.5 232.551 3011.5H626.551C665.211 3011.5 696.551 2980.16 696.551 2941.5V2723.5H187.046C134.027 2723.5 91.0459 2680.52 91.0459 2627.5V1303.5C91.046 1250.89 133.358 1208.17 185.806 1207.51L187.046 1207.5H1333.05C1371.71 1207.5 1403.05 1176.16 1403.05 1137.5V597C1403.05 558.34 1371.71 527 1333.05 527H187.051C134.446 527 91.7232 484.688 91.0586 432.241L91.0508 431.001L91.0469 13L91.0508 12.665C91.2285 5.64037 96.9784 0.00026117 104.046 5.74651e-10ZM846.5 16456C781.607 16456 729 16508.6 729 16573.5C729 16638.4 781.607 16691 846.5 16691C911.393 16691 964 16638.4 964 16573.5C964 16508.6 911.393 16456 846.5 16456ZM181 15711C142.34 15711 111 15742.3 111 15781V15911C111 15949.7 142.34 15981 181 15981H296C334.66 15981 366 15949.7 366 15911V15711H181ZM1159.5 15178C1120.84 15178 1089.5 15209.3 1089.5 15248V15391C1089.5 15429.7 1120.84 15461 1159.5 15461H1344C1382.66 15461 1414 15429.7 1414 15391V15179.3C1409.63 15178.4 1405.12 15178 1400.5 15178H1159.5ZM1026 14708C1026 14746.7 1057.34 14778 1096 14778H1264C1302.66 14778 1334 14746.7 1334 14708V14509.5C1334 14470.8 1302.66 14439.5 1264 14439.5H1026V14708ZM116.995 14020C116.995 14058.7 148.336 14090 186.995 14090H367.5C406.16 14090 437.5 14058.7 437.5 14020V13856.5C437.5 13817.8 406.16 13786.5 367.5 13786.5H116.995V14020ZM792.55 1886.5C753.89 1886.5 722.551 1917.84 722.551 1956.5V2697.5H1407.05C1445.71 2697.5 1477.05 2666.16 1477.05 2627.5V1956.5C1477.05 1917.84 1445.71 1886.5 1407.05 1886.5H792.55Z"  strokeWidth="26" stroke="#ffffff" />
              </g>
              <defs>
                <clipPath id="clip0_283_359">
                  <rect width="1500" height="16717"  />
                </clipPath>
              </defs>
            </svg> */}
          </div>
        </div>


        {/* <div ref={scrollDownRefXL} className={`absolute left-[17%]  hidden xl:block xl:top-340 translate-x-[-50%] z-10 text-center ${styles.svgTopScrollXL}`}>
          <p className="text-white text-2xl font-montserrat ">SCROLL <br /> DOWN</p>
        </div>

        <div ref={svgContainerRefXL} className={`absolute  w-[40vw] -top-800 md:left-[15%] min-[1600px]:left-0 z-[3] pointer-events-none ${styles.svgTopXL}`}>

          <svg width="1500" height="16718" viewBox="0 0 1500 16718" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '86vw', height: 'auto' }}>
            <g clipPath="url(#clip0_79_6)">
              <g mask="url(#mask0_79_6)">
                <path id="line" fillRule="evenodd" clipRule="evenodd" d="M104.046 0.5C111.226 0.499933 117.046 6.32035 117.046 13.5L117.05 431.501L117.056 432.405C117.537 470.347 148.204 501.014 186.146 501.494L187.05 501.5H1333.05C1386.07 501.5 1429.05 544.481 1429.05 597.5V1138C1429.05 1191.02 1386.07 1234 1333.05 1234H187.047C148.387 1234 117.046 1265.34 117.046 1304V2628C117.046 2666.66 148.386 2698 187.046 2698H696.551V1957C696.551 1903.98 739.53 1861 792.55 1861H1407.05C1460.07 1861 1503.05 1903.98 1503.05 1957V2628C1503.05 2681.02 1460.07 2724 1407.05 2724H722.551V2942C722.551 2995.02 679.57 3038 626.551 3038H232.551C193.891 3038 162.551 3069.34 162.551 3108V4937.34C162.551 4983.51 206.429 5016.93 250.809 5004.91L251.857 5004.62L316.775 4985.99L637.5 4733.63L1054.78 4385.17L1055.43 4385.1C1133.9 4375.53 1155.5 4377 1213.8 4379C1262 4385.1 1324.79 4396.16 1380.84 4449.29C1437.3 4502.82 1482.41 4591.39 1486.43 4730.99C1497.96 4822.72 1496.53 4884.02 1496.08 4896.37L1496.02 4897.99C1496.01 4898.38 1496 4898.7 1496 4899.26V6471.62L1495.99 6472.86C1495.33 6525.33 1452.58 6567.5 1400 6567.5H266.05C227.39 6567.5 196.05 6598.84 196.05 6637.5V7297C196.05 7335.66 227.39 7367 266.05 7367H1309.5C1362.52 7367 1405.5 7409.98 1405.5 7463V8167L1405.49 8168.24C1404.83 8220.69 1362.11 8263 1309.5 8263H664.25C632.36 8263 606.5 8288.86 606.5 8320.75V8423C606.5 8476.02 563.52 8519 510.5 8519H476C442.03 8519 414.5 8546.53 414.5 8580.5L1247.55 11731.3L1247.54 11732.4C1246.98 11780.6 1210.82 11820.9 1162.91 11826.6L179.213 12041.2L178.39 12041.3C143.596 12045.8 117.5 12075.5 117.5 12110.7V13002.5L117.495 13002.8C117.466 13004 117.294 13005.1 116.995 13006.1V13761H367.5C420.519 13761 463.5 13804 463.5 13857V14020.5C463.5 14073.5 420.519 14116.5 367.5 14116.5H186.995C133.975 14116.5 90.9951 14073.5 90.9951 14020.5V13789C68.7752 13795.3 52.5 13815.8 52.5 13840V14344C52.5 14382.7 83.8401 14414 122.5 14414H1002.53C1003.59 14375.4 1035.18 14344.5 1074 14344.5H1344C1397.02 14344.5 1440 14387.5 1440 14440.5V15161C1473.32 15176 1496.5 15209.6 1496.5 15248.5V15615.5C1496.5 15668.5 1453.52 15711.5 1400.5 15711.5H392V15911.5C392 15964.5 349.019 16007.5 296 16007.5H181C127.981 16007.5 85 15964.5 85 15911.5V15781.5C85 15728.5 127.981 15685.5 181 15685.5H365.244C362.472 15655.8 337.454 15632.5 307 15632.5H96C57.3401 15632.5 26 15663.8 26 15702.5V16491L26.0059 16491.9C26.49 16530.1 57.6419 16561 96 16561H703.582C710.152 16487.8 771.629 16430.5 846.5 16430.5C925.753 16430.5 990 16494.7 990 16574C990 16653.3 925.753 16717.5 846.5 16717.5C771.629 16717.5 710.152 16660.2 703.582 16587H96C43.395 16587 0.672358 16544.7 0.0078125 16492.2L0 16491V15702.5C8.35634e-07 15649.5 42.9807 15606.5 96 15606.5H307C351.82 15606.5 388.49 15641.4 391.323 15685.5H1400.5C1439.16 15685.5 1470.5 15654.2 1470.5 15615.5V15248.5C1470.5 15224.5 1458.42 15203.3 1440 15190.7V15391.5C1440 15444.5 1397.02 15487.5 1344 15487.5H1159.5C1106.48 15487.5 1063.5 15444.5 1063.5 15391.5V15248.5C1063.5 15195.5 1106.48 15152.5 1159.5 15152.5H1400.5C1405.08 15152.5 1409.59 15152.8 1414 15153.4V14440.5C1414 14401.8 1382.66 14370.5 1344 14370.5H1074C1049.54 14370.5 1029.59 14389.8 1028.55 14414H1264C1317.02 14414 1360 14457 1360 14510V14708.5C1360 14761.5 1317.02 14804.5 1264 14804.5H1096C1042.98 14804.5 1000 14761.5 1000 14708.5V14440H122.5C69.4807 14440 26.5 14397 26.5 14344V13840C26.5 13801.3 54.2926 13769.1 90.9951 13762.3V12997.5C90.9951 12996.3 91.1715 12995 91.5 12993.9V12110.7C91.5001 12062.4 127.288 12021.8 175.006 12015.5L176.136 12015.4L1159.83 11800.8C1194.76 11796.7 1221.13 11767.2 1221.54 11732.1L1221.55 11731.3L388.5 8580.5C388.5 8532.17 427.67 8493 476 8493H510.5C549.16 8493 580.5 8461.66 580.5 8423V8320.75C580.5 8274.5 618 8237 664.25 8237H1309.5C1347.86 8237 1379.01 8206.15 1379.49 8167.9L1379.5 8167V7463C1379.5 7424.34 1348.16 7393 1309.5 7393H266.05C213.03 7393 170.05 7350.02 170.05 7297V6637.5C170.05 6584.48 213.03 6541.5 266.05 6541.5H1400C1438.38 6541.5 1469.51 6510.74 1469.99 6472.53L1470 6471.62V4899.26C1470 4898.39 1470.01 4897.75 1470.03 4897.16L1470.1 4895.42C1470.51 4884.15 1471.96 4824.04 1460.55 4733.63L1460.47 4733L1460.45 4732.36C1456.71 4597.94 1413.61 4516.2 1362.95 4468.16C1311.98 4419.84 1253.5 4410.83 1213.61 4405H1213.13L1212.66 4404.98C1157 4400.5 1072.5 4401.5 1059.21 4410.83L644.17 4758.78L324.312 5010.88L324.199 5010.91L324.086 5010.94L259.028 5029.61L257.59 5030.01C196.727 5046.49 136.551 5000.66 136.551 4937.34V3108C136.551 3054.98 179.532 3012 232.551 3012H626.551C665.211 3012 696.551 2980.66 696.551 2942V2724H187.046C134.027 2724 91.0459 2681.02 91.0459 2628V1304C91.046 1251.39 133.358 1208.67 185.806 1208.01L187.046 1208H1333.05C1371.71 1208 1403.05 1176.66 1403.05 1138V597.5C1403.05 558.84 1371.71 527.5 1333.05 527.5H187.051C134.446 527.5 91.7232 485.188 91.0586 432.741L91.0508 431.501L91.0469 13.5L91.0508 13.165C91.2285 6.14037 96.9784 0.500261 104.046 0.5ZM846.5 16456.5C781.607 16456.5 729 16509.1 729 16574C729 16638.9 781.607 16691.5 846.5 16691.5C911.393 16691.5 964 16638.9 964 16574C964 16509.1 911.393 16456.5 846.5 16456.5ZM181 15711.5C142.34 15711.5 111 15742.8 111 15781.5V15911.5C111 15950.2 142.34 15981.5 181 15981.5H296C334.66 15981.5 366 15950.2 366 15911.5V15711.5H181ZM1159.5 15178.5C1120.84 15178.5 1089.5 15209.8 1089.5 15248.5V15391.5C1089.5 15430.2 1120.84 15461.5 1159.5 15461.5H1344C1382.66 15461.5 1414 15430.2 1414 15391.5V15179.8C1409.63 15178.9 1405.12 15178.5 1400.5 15178.5H1159.5ZM1026 14708.5C1026 14747.2 1057.34 14778.5 1096 14778.5H1264C1302.66 14778.5 1334 14747.2 1334 14708.5V14510C1334 14471.3 1302.66 14440 1264 14440H1026V14708.5ZM116.995 14020.5C116.995 14059.2 148.336 14090.5 186.995 14090.5H367.5C406.16 14090.5 437.5 14059.2 437.5 14020.5V13857C437.5 13818.3 406.16 13787 367.5 13787H116.995V14020.5ZM792.55 1887C753.89 1887 722.551 1918.34 722.551 1957V2698H1407.05C1445.71 2698 1477.05 2666.66 1477.05 2628V1957C1477.05 1918.34 1445.71 1887 1407.05 1887H792.55Z" strokeWidth="26" stroke="#ffffff" />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_79_6">
                <rect width="1500" height="16717" transform="translate(0 0.5)" />
              </clipPath>
            </defs>
          </svg>

        </div> */}
        <div className=''>
          <div className='max-md:pt-[0vw] max-md:pl-[2vw]'>
            <CatDesc />
          </div>
          <div className='pt-[30vw] md:pt-[20vw] md:!pt-[15vw]'>
            <WhatYouGet />
          </div>
          <div className=' max-md:pt-[50vw]'>
            <Teacher />
          </div>
          <div className='benfits-container relative pt-[150vw] md:pt-[13vw] md:pt-[3vw]'>
            <Image className='hidden md:block w-full pt-[18vw] h-full object-contain absolute -top-[85vw] -z-[1000]' src='/images/catCardTeacherImg.png' alt="catCardTeacherImg" width={180} height={300} loading="lazy" />
            <Benefits />
          </div>
        </div>
      </div>

      <PushUp />
      <div className={`push-container max-md:pt-[13vw]`}>
        <Steps />
      </div>

      <div className='flex justify-between md:px-[3vw] md:gap-[1vw] max-md:flex-col max-md:items-center max-md:pb-[15vw] md:pb-[5vw] max-md:pt-[20vw] md:!pt-[15vw] max-md:gap-[10vw]'>
        <div className='max-md:flex-col flex  justify-center items-center max-md:gap-[5vw]'>
          <Image
            src="/images/whatsappIcon.png"
            alt="Push up Image"
            width={50}
            height={50}
            loading="lazy"
          //  className={`object-contain ${styles.pushUpImg}`}
          //  style={{transform:"scale(0.5) translate(-774px, -2057px)"}}
          />
          <p className='md:ps-4 text-3xl text-bold font-anton'>+971 527667527 </p>
        </div>
        <div className='max-md:flex-col flex  justify-center items-center max-md:gap-[5vw]'>
          <Image
            src="/images/instaIcon.png"
            alt="Push up Image"
            width={50}
            height={50}
            loading="lazy"
          //  className={`object-contain ${styles.pushUpImg}`}
          //  style={{transform:"scale(0.5) translate(-774px, -2057px)"}}
          />
          <p className='md:ps-4 text-3xl text-bold font-anton'>catcard </p>
        </div>
        <div className='max-md:flex-col flex  justify-center items-center max-md:gap-[5vw]'>
          <Image
            src="/images/instaIcon.png"
            alt="Push up Image"
            width={50}
            height={50}
            loading="lazy"
          //  className={`object-contain ${styles.pushUpImg}`}
          //  style={{transform:"scale(0.5) translate(-774px, -2057px)"}}
          />
          <p className='ps-4 text-3xl text-bold font-anton'>HABLANDODUBAI </p>
        </div>
        <Image className='absolute top-0 -right-[5vw] -z-[100] hidden md:block' src='/images/main-bg.png' alt='' width={5000} height={5000} />
      </div>
    </div>

  );
}
