// import React from "react";
// import styles from './styles.module.css';
// import Image from "next/image";

// const Teacher = () => {
//   return (
//     <div className="flex w-[200vw]">
//       <div className="w-[100vw]">
//         <Image
//           src="/images/teacherImgXl.png"
//           alt="Teacher Image"
//           width={5090}
//           height={109}
//           loading="lazy"
//           className="object-cover"
//         />
//       </div>
//       <div className="w-[100vw]">
//         <Image
//           src="/images/catCardTeacherImg.png"
//           alt="Cat Card Teacher Image"
//           width={5090}
//           height={109}
//           loading="lazy"
//           className="object-cover"
//         />
//       </div>
//     </div>
//   );
// };

// export default Teacher;
import React, { useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Teacher = () => {
  useEffect(() => {
    const teacherContainer = document.querySelector(".teacher-container");

    gsap.to(teacherContainer, {
      xPercent: -100, // Scroll horizontally from 0 to -100% (one full page)
      ease: "none",
      scrollTrigger: {
        trigger: teacherContainer,
        start: "bottom center", // Start scrolling from the middle of the image
        pin: true,
        scrub: 1,
        end: "+=100%", // End scroll after 200% of the container width
      },
    });
  }, []);

  return (
    <div className="teacher-container w-[100vw] pt-96 h-[170vh]">
      <div className="w-[100vw]">
        <Image
          src="/images/teacherImg.png"
          alt="Teacher Image"
          width={5000}
          height={250}
          loading="lazy"
          className="object-contain"
        />
      </div>
      {/* <div className="w-[100vw]">
        <Image
          src="/images/catCardTeacherImg.png"
          alt="Cat Card Teacher Image"
          width={1520}
          height={250}
          loading="lazy"
          className="object-contain"
        />
      </div> */}
    </div>
  );
};

export default Teacher;
