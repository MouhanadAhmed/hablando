import Image from "next/image";






export default function Footer() {


    return(
        <>
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

      </div>
        </>
    )
}