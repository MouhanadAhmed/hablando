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
import styles from './styles.module.css'

const PushUp = () => {

  return (
    <div className=' max-md:w-[100vw] max-md:mt-[40vw]'>
      <div className="max-md:w-[100vw] max-md:max-w-[100vw] md:!h-[225vw]">
        <Image
          src="/images/pushUp.png"
          alt="Push up Image"
          width={5000}
          height={250}
          loading="lazy"
          className={`object-contain max-md:!min-w-[120vw] max-md:!max-h-[190vw] md:w-[50vw]`}
        />
      </div>
    </div>
  );
};

export default PushUp;
