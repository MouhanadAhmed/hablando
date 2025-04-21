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


const PushUp = () => {

  return (
    <div className='h-[350vh] w-[100vw] mt-[100vh]'>
    <div className="w-[100vw]">
    <Image
         src="/images/pushUp.png"
         alt="Teacher Image"
         width={5000}
         height={250}
         loading="lazy"
         className="object-contain"
       />
    </div>
    </div>
  );
};

export default PushUp;
