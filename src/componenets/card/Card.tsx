// import Image from "next/image";

// import img from '../../../public/images/beauty.png'




// export default function Card() {

//     return(
//         <>
// <div className="card lg:card-side  max-md:shadow-sm border lg:border-0 p-4 w-[80vw] mb-4 lg:ps-8">
//   {/* <figure className="max-3xl:min-w-2/5 p-4 me-4"> */}
//   <div className="flex items-start lg:items-center justify-center pl-[4vw]">

//     <Image
//       src="/images/wellness7.png"
//       width={440}
//       height={440}
//       // className="max-md:size-[50vw] object-contain  md:size-[5vw]"
//       className="w-[20vw] rounded"
//       alt="Album" > 
//       </Image>
//     <p className="card-title uppercase text-2xl md:text-3xl ps-4 lg:hidden lg:text-6xl 3xl:mb-4 mb-2 lg:pt-8 3xl:pt-0">Wellness Centre Dubai</p>

//   </div>
//   {/* </figure> */}
//   <div className="card-body bg-none lg:max-w-3/4">
//     <h2 className="card-title uppercase text-4xl md:text-5xl 3xl:mb-4 mb-2 pt-8 3xl:pt-0 hidden lg:block">Wellness Centre Dubai</h2>
//     <div className="flex justify-start items-center gap-2 mb-2  3xl:mb-4">
//     <div className=" border rounded px-2 py-1 text-white border-white">Wellness</div>
//     <div className=" border rounded px-2 py-1 text-white border-white">Spa</div>
//     <div className=" border rounded px-2 py-1 text-white border-white ">10% Discount</div>
//     </div>
//     <span className="text-xl text-gray-400 mb-2 3xl:mb-2">Location: <span className="text-white block md:inline"> 801 Latifa Tower, Sheikh Zayed Road Dubai</span></span>
//     <span className="text-xl text-gray-400 mb-2 3xl:mb-2">Discount Type: <span className="text-white block md:inline">25% + No enrollment fee</span></span>
//     <span className="text-xl text-gray-400 mb-2 3xl:mb-4">Available: <span className="text-white block md:inline">25% + No enrollment fee</span></span>
//     <span className="text-xl  mb-2 3xl:mb-4 3xl:w-[30vw]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec diam viverra, congue orci id, pretium libero. Nunc ultricies porttitor mi, eu semper nibh. Aliquam erat volutpat. </span>
//     <div className="flex flex-col">
//     <div className=' flex  justify-center items-center max-md:gap-[5vw] mb-1 3xl:mb-4'>
//           <Image
//             src="/images/instaIcon.png"
//             alt="Push up Image"
//             width={25}
//             height={25}
//             loading="lazy"
//           //  className={`object-contain ${styles.pushUpImg}`}
//           //  style={{transform:"scale(0.5) translate(-774px, -2057px)"}}
//           />
//           <p className='md:ps-4 text-xl  font-montserrat'>WellnessCentre</p>
//         </div>  
//           <div className=' flex  justify-center items-center max-md:gap-[5vw] 3xl:mb-2'>
//           <Image
//             src="/images/globe.png"
//             alt="Push up Image"
//             width={25}
//             height={25}
//             loading="lazy"
//           //  className={`object-contain ${styles.pushUpImg}`}
//           //  style={{transform:"scale(0.5) translate(-774px, -2057px)"}}
//           />
//           <p className='md:ps-4 text-xl  font-montserrat max-w-[50vw] lg:max-w-full break-words'>www.wellnesscentre.com</p>
//         </div>
//     </div>
//   </div>
// </div>
//         </>
//     )

// }
'use client';
import Image from 'next/image';
import { CatCard } from '@/types/catCard';
import Link from 'next/link';

interface CatCardProps {
  data: CatCard;
}

export default function Card({ data }: CatCardProps) {
  const {
    name = 'No Name',
    logo,
    bg,
    tags = [],
    location = 'No location provided',
    discountType = 'N/A',
    availability = 'N/A',
    shortDesc = 'No description available.',
    instaLink = '',
    webLink = '',
  } = data;

  return (
    <div className="card lg:card-side max-md:shadow-sm border lg:border-0 p-4 w-[80vw] mb-4 lg:ps-8">
      <div className="flex items-center lg:items-center justify-center pl-[4vw]">
        <Image
          src={bg || 'https://res.cloudinary.com/dylxc3c5f/image/upload/v1744382944/hablando/1744382944080-816355529-Group%2049.png.png'}
          width={440}
          height={440}
          className="w-[20vw] rounded"
          alt={name}
        />
        <p className="card-title uppercase text-2xl md:text-3xl ps-4 lg:hidden lg:text-6xl 3xl:mb-4 mb-2 lg:pt-8 3xl:pt-0">
          {name}
        </p>
      </div>

      <div className="card-body bg-none lg:max-w-3/4">
      <div className="flex items-start lg:items-start justify-start ">
        <h2 className="card-title uppercase text-4xl md:text-5xl 3xl:mb-4 mb-2 pt-8 3xl:pt-0 hidden lg:block">
          {name}
        </h2>
        <Image
          src={logo || 'https://res.cloudinary.com/dylxc3c5f/image/upload/v1744382944/hablando/1744382944080-816355529-Group%2049.png.png'}
          width={50}
          height={50}
          className="w-[8vw] rounded lg:pl-8 lg:pt-8 hidden lg:block"
          alt={name}
        />
      </div>

        <div className="flex justify-start items-center flex-wrap gap-2 mb-2 3xl:mb-4">
          {tags.map((tag, tagIdx) => (
            <div
              key={tagIdx}
              className="border rounded px-2 py-1 text-white border-white"
            >
              {tag}
            </div>
          ))}
          <div className="border rounded px-2 py-1 text-white border-white">
            {discountType}
          </div>
        </div>
        <Image
          src={logo || 'https://res.cloudinary.com/dylxc3c5f/image/upload/v1744382944/hablando/1744382944080-816355529-Group%2049.png.png'}
          width={60}
          height={60}
          className="w-[20vw] rounded lg:pl-8 lg:pt-8 block lg:hidden"
          alt={name}
        />
        <span className="text-xl text-gray-400 mb-2 3xl:mb-2">
          Location: <span className="text-white block md:inline">{location}</span>
        </span>
        <span className="text-xl text-gray-400 mb-2 3xl:mb-2">
          Discount Type: <span className="text-white block md:inline">{discountType}</span>
        </span>
        <span className="text-xl text-gray-400 mb-2 3xl:mb-4">
          Available: <span className="text-white block md:inline">{availability}</span>
        </span>
        <span className="text-xl mb-2 3xl:mb-4 3xl:w-[30vw]">{shortDesc}</span>

        <div className="flex flex-col">
          {instaLink && (
              <a href={"https://" +instaLink} target='_blank'   rel="noopener noreferrer" className="flex justify-center items-center max-md:gap-[5vw] mb-1 3xl:mb-4">       
              <Image src="/images/instaIcon.png" alt="Insta" width={25} height={25} />
              <p className="md:ps-4 text-xl font-montserrat">{instaLink}</p>
              </a>
          )}
          {webLink && (
              <a href={"https://" +webLink} target='_blank'   rel="noopener noreferrer"  className="flex justify-center items-center max-md:gap-[5vw] 3xl:mb-2">
              <Image src="/images/globe.png" alt="Website" width={25} height={25} />
              <p className="md:ps-4 text-xl font-montserrat max-w-[50vw] lg:max-w-full break-words">
                {webLink}
              </p>
              </a>
          )}
        </div>
      </div>
    </div>
  );
}
