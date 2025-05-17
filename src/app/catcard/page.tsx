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
    { start: 7500, end: 9300, speed: 1 },
    { start: 9300, end: 9800, speed: 0.6 },
    { start: 9800, end: 11000, speed: 1 },
    { start: 11000, end: 14000, speed: 0.7 },
    { start: 14000, end: 18850, speed: 1.3 },
  ];

  const [mobileDash, setMobileDash] = useState(0);
  const mobilePathRef = useRef<SVGPathElement>(null);

  let lastMobileDashGlobal = 0;
  let lastScrollYGlobal = 0;
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
      let dash = mapScrollToMobileDash(scrollY, maxScroll);
      if (scrollY < lastScrollYGlobal) {
        dash = Math.min(dash, lastMobileDashGlobal);
      } else {
        dash = Math.max(dash, lastMobileDashGlobal);
      }
      setMobileDash(dash);
      if (mobilePathRef.current && dash !== lastMobileDashGlobal) {
        mobilePathRef.current.style.strokeDasharray = `${dash},500000`;
        mobilePathRef.current.style.strokeDashoffset = '0';
        lastMobileDashGlobal = dash;
      }
      lastScrollYGlobal = scrollY;
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
          </div>
        </div>

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
