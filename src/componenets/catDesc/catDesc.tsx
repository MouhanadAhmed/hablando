import React, { useEffect, useRef } from "react";
import styles from './styles.module.css'

const CatDesc = () => {
  

  return (
    <div className={`max-md:!pt-[55vw] max-md:pl-5 ${styles.descSection}`}>
    <p className={`${styles.descText} font-montserrat max-md:!max-w-[80vw] max-md:!p-0 max-md:!text-[4.5vw]  md:max-w-[100vw] md:!max-w-[78vw] md:w-full`}>CAT CARD is Dubai’s ultimate <span className="text-[#B10229] font-montserrat font-semibold">membership program designed exclusively for TEACHERS.</span> As an educator, you dedicate your time and energy to shaping the future—now it’s time to enjoy some well-deserved benefits! </p>
  </div>)
};

export default CatDesc;

// import React, { useEffect, useRef } from "react";
// import styles from './styles.module.css';
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import gsap from "gsap";

// gsap.registerPlugin(ScrollTrigger);

// const CatDesc = () => {
//   const svgContainerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const container = svgContainerRef.current;
//     if (!container) return;

//     const path = container.querySelector('#line') as SVGPathElement | null;
//     if (!path) return;

//     const pathLength = path.getTotalLength();
//     path.style.strokeDasharray = `${pathLength}`;
//     path.style.strokeDashoffset = `${pathLength}`;

//     gsap.to(path, {
//       strokeDashoffset: 0,
//       ease: 'none',
//       scrollTrigger: {
//         trigger: container,
//         start: "top center",
//         end: "bottom top",
//         scrub: true,
//         markers: true,
//       },
//     });

//     ScrollTrigger.refresh();
//   }, []);

//   return (
//     <div className={`${styles.descSection} relative min-h-[300vh] bg-black`}>
//       <div className="relative w-full h-[100vh] flex items-center justify-center">
//         <div ref={svgContainerRef} className="absolute top-0 right-0 w-[80vw]">
//           <svg
//             viewBox="0 0 1500 16718"
//             width="100%"
//             height="2000" // <-- Force a visible height
//             preserveAspectRatio="xMidYMid meet" // <-- Fix scaling
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <g clipPath="url(#clip0)">
//               <path
//                 id="line"
//                 d="M11.9883 163C19.0556 163 24.8052 168.64 24.9834 175.664L24.9883 176L24.9912 640.91L24.9961 641.998C25.1905 664.818 31.4834 684.885 40.9063 698.949C50.5356 713.322 62.4293 720.223 73.8389 720.223H1035.08C1057.83 720.223 1076.86 733.987 1089.62 753.025C1102.43 772.149 1109.93 797.824 1109.93 825.537V1426.69C1109.93 1454.41 1102.43 1480.08 1089.62 1499.21C1076.86 1518.24 1057.83 1532.01 1035.08 1532.01H73.8359C62.4263 1532.01 50.5326 1538.91 40.9033 1553.28C31.331 1567.57 24.9883 1588.05 24.9883 1611.32V3083.9L24.9932 3084.99C25.1876 3107.81 31.4806 3127.88 40.9033 3141.94C50.5326 3156.32 62.4262 3163.22 73.8359 3163.22H652.861V2337.6C652.861 2309.89 660.364 2284.21 673.176 2265.09C685.931 2246.05 704.961 2232.29 727.709 2232.29H1185.6C1208.35 2232.29 1227.38 2246.05 1240.14 2265.09C1252.95 2284.21 1260.45 2309.89 1260.45 2337.6V3083.9C1260.45 3111.62 1252.95 3137.29 1240.14 3156.42C1227.38 3175.45 1208.35 3189.22 1185.6 3189.22H678.861V3200.5H652.861V3189.22H73.8359C51.0884 3189.22 32.0577 3175.45 19.3027 3156.42C6.69087 3137.59 -0.776651 3112.42 -1.00684 3085.2L-1.01172 3083.9V1611.32C-1.01172 1583.61 6.49077 1557.93 19.3027 1538.81C32.0577 1519.77 51.0885 1506.01 73.8359 1506.01H1035.08C1046.49 1506.01 1058.39 1499.11 1068.02 1484.73C1077.59 1470.45 1083.93 1449.96 1083.93 1426.69V825.537C1083.93 802.267 1077.59 781.785 1068.02 767.497C1058.39 753.124 1046.49 746.223 1035.08 746.223H73.8389C51.0915 746.223 32.0606 732.459 19.3057 713.421C6.69386 694.596 -0.773553 669.423 -1.00391 642.207L-1.00879 640.91L-1.01172 176C-1.01172 168.82 4.80871 163 11.9883 163ZM727.709 2258.29C716.299 2258.29 704.406 2265.19 694.776 2279.56C685.204 2293.85 678.861 2314.33 678.861 2337.6V3163.22H1185.6C1197.01 3163.22 1208.91 3156.32 1218.54 3141.94C1228.11 3127.66 1234.45 3107.17 1234.45 3083.9V2337.6C1234.45 2314.33 1228.11 2293.85 1218.54 2279.56C1208.91 2265.19 1197.01 2258.29 1185.6 2258.29H727.709Z"
//                 strokeWidth="5" // shrink stroke width too if needed
//                 stroke="#ffffff"
//                 fill="none"
//               />
//             </g>
//             <defs>
//               <clipPath id="clip0">
//                 <rect width="1500" height="16718" />
//               </clipPath>
//             </defs>
//           </svg>
//         </div>
//       </div>

//       <p className={`${styles.descText} font-montserrat text-white`}>
//         CAT CARD is Dubai’s ultimate{" "}
//         <span className="text-red-500 font-montserrat">
//           membership program designed exclusively for TEACHERS.
//         </span>{" "}
//         As an educator, you dedicate your time and energy to shaping the future—now it’s time to enjoy some well-deserved benefits!
//       </p>
//     </div>
//   );
// };

// export default CatDesc;


