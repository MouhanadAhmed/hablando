import CallBtn from "@/componenets/callBtn/CallBtn"
import Footer from "@/componenets/footer/footer"
import Navbar from "@/componenets/navbar/Navbar"
import Image from "next/image"
import arrowLeft from "../../../public/images/arrow-left.png"
import Card from "@/componenets/card/Card"
import Link from "next/link"






export default function Venues() {


    return(
        <>
        <Navbar/>
        <div className="flex items-center py-8 ">
        <Link href="/catcard">
                    <Image
                        src={arrowLeft}
                        width={70}
                        height={78}
                        alt="call to action"
                        className="max-md:size-[8vw] object-contain  md:size-[5vw]"
                    ></Image>
            
          </Link>
        <h1 className="text-5xl 3xl:text-6xl uppercase  font-bebas-neue">wellness</h1>
        </div>
            <div className="flex justify-center flex-col md:justify-start items-center lg:items-start 3xl:px-24 ">
            <div className="card lg:card-side  max-md:shadow-sm border lg:border-0 p-4 w-[80vw] mb-4 lg:ps-8">
  {/* <figure className="max-3xl:min-w-2/5 p-4 me-4"> */}
  <div className="flex items-start lg:items-center justify-center pl-[4vw]">

    <Image
      src="/images/wellness1.png"
      width={440}
      height={440}
      // className="max-md:size-[50vw] object-contain  md:size-[5vw]"
      className="w-[20vw] rounded"
      alt="Album" > 
      </Image>
    <p className="card-title uppercase text-2xl md:text-3xl ps-4 lg:hidden lg:text-6xl 3xl:mb-4 mb-2 lg:pt-8 3xl:pt-0">Wellness Centre Dubai</p>

  </div>
  {/* </figure> */}
  <div className="card-body bg-none lg:max-w-3/4">
    <h2 className="card-title uppercase text-4xl md:text-5xl 3xl:mb-4 mb-2 pt-8 3xl:pt-0 hidden lg:block">Wellness Centre Dubai</h2>
    <div className="flex justify-start items-center gap-2 mb-2  3xl:mb-4">
    <div className=" border rounded px-2 py-1 text-white border-white">Wellness</div>
    <div className=" border rounded px-2 py-1 text-white border-white">Spa</div>
    <div className=" border rounded px-2 py-1 text-white border-white ">10% Discount</div>
    </div>
    <span className="text-xl text-gray-400 mb-2 3xl:mb-2">Location: <span className="text-white block md:inline"> 801 Latifa Tower, Sheikh Zayed Road Dubai</span></span>
    <span className="text-xl text-gray-400 mb-2 3xl:mb-2">Discount Type: <span className="text-white block md:inline">25% + No enrollment fee</span></span>
    <span className="text-xl text-gray-400 mb-2 3xl:mb-4">Available: <span className="text-white block md:inline">25% + No enrollment fee</span></span>
    <span className="text-xl  mb-2 3xl:mb-4 3xl:w-[30vw]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec diam viverra, congue orci id, pretium libero. Nunc ultricies porttitor mi, eu semper nibh. Aliquam erat volutpat. </span>
    <div className="flex flex-col">
    <div className=' flex  justify-center items-center max-md:gap-[5vw] mb-1 3xl:mb-4'>
          <Image
            src="/images/instaIcon.png"
            alt="Push up Image"
            width={25}
            height={25}
            loading="lazy"
          //  className={`object-contain ${styles.pushUpImg}`}
          //  style={{transform:"scale(0.5) translate(-774px, -2057px)"}}
          />
          <p className='md:ps-4 text-xl  font-montserrat'>WellnessCentre</p>
        </div>  
          <div className=' flex  justify-center items-center max-md:gap-[5vw] 3xl:mb-2'>
          <Image
            src="/images/globe.png"
            alt="Push up Image"
            width={25}
            height={25}
            loading="lazy"
          //  className={`object-contain ${styles.pushUpImg}`}
          //  style={{transform:"scale(0.5) translate(-774px, -2057px)"}}
          />
          <p className='md:ps-4 text-xl  font-montserrat max-w-[50vw] break-words'>www.wellnesscentre.com</p>
        </div>
    </div>
  </div>
  
</div>
<div className="card lg:card-side  max-md:shadow-sm border lg:border-0 p-4 w-[80vw] mb-4 lg:ps-8">
  {/* <figure className="max-3xl:min-w-2/5 p-4 me-4"> */}
  <div className="flex items-start lg:items-center justify-center pl-[4vw]">

    <Image
      src="/images/wellness2.png"
      width={440}
      height={440}
      // className="max-md:size-[50vw] object-contain  md:size-[5vw]"
      className="w-[20vw] rounded"
      alt="Album" > 
      </Image>
    <p className="card-title uppercase text-2xl md:text-3xl ps-4 lg:hidden lg:text-6xl 3xl:mb-4 mb-2 lg:pt-8 3xl:pt-0">Wellness Centre Dubai</p>

  </div>
  {/* </figure> */}
  <div className="card-body bg-none lg:max-w-3/4">
    <h2 className="card-title uppercase text-4xl md:text-5xl 3xl:mb-4 mb-2 pt-8 3xl:pt-0 hidden lg:block">Wellness Centre Dubai</h2>
    <div className="flex justify-start items-center gap-2 mb-2  3xl:mb-4">
    <div className=" border rounded px-2 py-1 text-white border-white">Wellness</div>
    <div className=" border rounded px-2 py-1 text-white border-white">Spa</div>
    <div className=" border rounded px-2 py-1 text-white border-white ">10% Discount</div>
    </div>
    <span className="text-xl text-gray-400 mb-2 3xl:mb-2">Location: <span className="text-white block md:inline"> 801 Latifa Tower, Sheikh Zayed Road Dubai</span></span>
    <span className="text-xl text-gray-400 mb-2 3xl:mb-2">Discount Type: <span className="text-white block md:inline">25% + No enrollment fee</span></span>
    <span className="text-xl text-gray-400 mb-2 3xl:mb-4">Available: <span className="text-white block md:inline">25% + No enrollment fee</span></span>
    <span className="text-xl  mb-2 3xl:mb-4 3xl:w-[30vw]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec diam viverra, congue orci id, pretium libero. Nunc ultricies porttitor mi, eu semper nibh. Aliquam erat volutpat. </span>
    <div className="flex flex-col">
    <div className=' flex  justify-center items-center max-md:gap-[5vw] mb-1 3xl:mb-4'>
          <Image
            src="/images/instaIcon.png"
            alt="Push up Image"
            width={25}
            height={25}
            loading="lazy"
          //  className={`object-contain ${styles.pushUpImg}`}
          //  style={{transform:"scale(0.5) translate(-774px, -2057px)"}}
          />
          <p className='md:ps-4 text-xl  font-montserrat'>WellnessCentre</p>
        </div>  
          <div className=' flex  justify-center items-center max-md:gap-[5vw] 3xl:mb-2'>
          <Image
            src="/images/globe.png"
            alt="Push up Image"
            width={25}
            height={25}
            loading="lazy"
          //  className={`object-contain ${styles.pushUpImg}`}
          //  style={{transform:"scale(0.5) translate(-774px, -2057px)"}}
          />
          <p className='md:ps-4 text-xl  font-montserrat max-w-[50vw] break-words'>www.wellnesscentre.com</p>
        </div>
    </div>
  </div>
</div>
<div className="card lg:card-side  max-md:shadow-sm border lg:border-0 p-4 w-[80vw] mb-4 lg:ps-8">
  {/* <figure className="max-3xl:min-w-2/5 p-4 me-4"> */}
  <div className="flex items-start lg:items-center justify-center pl-[4vw]">

    <Image
      src="/images/wellness4.png"
      width={440}
      height={440}
      // className="max-md:size-[50vw] object-contain  md:size-[5vw]"
      className="w-[20vw] rounded"
      alt="Album" > 
      </Image>
    <p className="card-title uppercase text-2xl md:text-3xl ps-4 lg:hidden lg:text-6xl 3xl:mb-4 mb-2 lg:pt-8 3xl:pt-0">Wellness Centre Dubai</p>

  </div>
  {/* </figure> */}
  <div className="card-body bg-none lg:max-w-3/4">
    <h2 className="card-title uppercase text-4xl md:text-5xl 3xl:mb-4 mb-2 pt-8 3xl:pt-0 hidden lg:block">Wellness Centre Dubai</h2>
    <div className="flex justify-start items-center gap-2 mb-2  3xl:mb-4">
    <div className=" border rounded px-2 py-1 text-white border-white">Wellness</div>
    <div className=" border rounded px-2 py-1 text-white border-white">Spa</div>
    <div className=" border rounded px-2 py-1 text-white border-white ">10% Discount</div>
    </div>
    <span className="text-xl text-gray-400 mb-2 3xl:mb-2">Location: <span className="text-white block md:inline"> 801 Latifa Tower, Sheikh Zayed Road Dubai</span></span>
    <span className="text-xl text-gray-400 mb-2 3xl:mb-2">Discount Type: <span className="text-white block md:inline">25% + No enrollment fee</span></span>
    <span className="text-xl text-gray-400 mb-2 3xl:mb-4">Available: <span className="text-white block md:inline">25% + No enrollment fee</span></span>
    <span className="text-xl  mb-2 3xl:mb-4 3xl:w-[30vw]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec diam viverra, congue orci id, pretium libero. Nunc ultricies porttitor mi, eu semper nibh. Aliquam erat volutpat. </span>
    <div className="flex flex-col">
    <div className=' flex  justify-center items-center max-md:gap-[5vw] mb-1 3xl:mb-4'>
          <Image
            src="/images/instaIcon.png"
            alt="Push up Image"
            width={25}
            height={25}
            loading="lazy"
          //  className={`object-contain ${styles.pushUpImg}`}
          //  style={{transform:"scale(0.5) translate(-774px, -2057px)"}}
          />
          <p className='md:ps-4 text-xl  font-montserrat'>WellnessCentre</p>
        </div>  
          <div className=' flex  justify-center items-center max-md:gap-[5vw] 3xl:mb-2'>
          <Image
            src="/images/globe.png"
            alt="Push up Image"
            width={25}
            height={25}
            loading="lazy"
          //  className={`object-contain ${styles.pushUpImg}`}
          //  style={{transform:"scale(0.5) translate(-774px, -2057px)"}}
          />
          <p className='md:ps-4 text-xl  font-montserrat max-w-[50vw] break-words'>www.wellnesscentre.com</p>
        </div>
    </div>
  </div>
</div>
<div className="card lg:card-side  max-md:shadow-sm border lg:border-0 p-4 w-[80vw] mb-4 lg:ps-8">
  {/* <figure className="max-3xl:min-w-2/5 p-4 me-4"> */}
  <div className="flex items-start lg:items-center justify-center pl-[4vw]">

    <Image
      src="/images/wellness5.png"
      width={440}
      height={440}
      // className="max-md:size-[50vw] object-contain  md:size-[5vw]"
      className="w-[20vw] rounded"
      alt="Album" > 
      </Image>
    <p className="card-title uppercase text-2xl md:text-3xl ps-4 lg:hidden lg:text-6xl 3xl:mb-4 mb-2 lg:pt-8 3xl:pt-0">Wellness Centre Dubai</p>

  </div>
  {/* </figure> */}
  <div className="card-body bg-none lg:max-w-3/4">
    <h2 className="card-title uppercase text-4xl md:text-5xl 3xl:mb-4 mb-2 pt-8 3xl:pt-0 hidden lg:block">Wellness Centre Dubai</h2>
    <div className="flex justify-start items-center gap-2 mb-2  3xl:mb-4">
    <div className=" border rounded px-2 py-1 text-white border-white">Wellness</div>
    <div className=" border rounded px-2 py-1 text-white border-white">Spa</div>
    <div className=" border rounded px-2 py-1 text-white border-white ">10% Discount</div>
    </div>
    <span className="text-xl text-gray-400 mb-2 3xl:mb-2">Location: <span className="text-white block md:inline"> 801 Latifa Tower, Sheikh Zayed Road Dubai</span></span>
    <span className="text-xl text-gray-400 mb-2 3xl:mb-2">Discount Type: <span className="text-white block md:inline">25% + No enrollment fee</span></span>
    <span className="text-xl text-gray-400 mb-2 3xl:mb-4">Available: <span className="text-white block md:inline">25% + No enrollment fee</span></span>
    <span className="text-xl  mb-2 3xl:mb-4 3xl:w-[30vw]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec diam viverra, congue orci id, pretium libero. Nunc ultricies porttitor mi, eu semper nibh. Aliquam erat volutpat. </span>
    <div className="flex flex-col">
    <div className=' flex  justify-center items-center max-md:gap-[5vw] mb-1 3xl:mb-4'>
          <Image
            src="/images/instaIcon.png"
            alt="Push up Image"
            width={25}
            height={25}
            loading="lazy"
          //  className={`object-contain ${styles.pushUpImg}`}
          //  style={{transform:"scale(0.5) translate(-774px, -2057px)"}}
          />
          <p className='md:ps-4 text-xl  font-montserrat'>WellnessCentre</p>
        </div>  
          <div className=' flex  justify-center items-center max-md:gap-[5vw] 3xl:mb-2'>
          <Image
            src="/images/globe.png"
            alt="Push up Image"
            width={25}
            height={25}
            loading="lazy"
          //  className={`object-contain ${styles.pushUpImg}`}
          //  style={{transform:"scale(0.5) translate(-774px, -2057px)"}}
          />
          <p className='md:ps-4 text-xl  font-montserrat max-w-[50vw] break-words'>www.wellnesscentre.com</p>
        </div>
    </div>
  </div>
</div>
<div className="card lg:card-side  max-md:shadow-sm border lg:border-0 p-4 w-[80vw] mb-4 lg:ps-8">
  {/* <figure className="max-3xl:min-w-2/5 p-4 me-4"> */}
  <div className="flex items-start lg:items-center justify-center pl-[4vw]">

    <Image
      src="/images/wellness6.png"
      width={440}
      height={440}
      // className="max-md:size-[50vw] object-contain  md:size-[5vw]"
      className="w-[20vw] rounded"
      alt="Album" > 
      </Image>
    <p className="card-title uppercase text-2xl md:text-3xl ps-4 lg:hidden lg:text-6xl 3xl:mb-4 mb-2 lg:pt-8 3xl:pt-0">Wellness Centre Dubai</p>

  </div>
  {/* </figure> */}
  <div className="card-body bg-none lg:max-w-3/4">
    <h2 className="card-title uppercase text-4xl md:text-5xl 3xl:mb-4 mb-2 pt-8 3xl:pt-0 hidden lg:block">Wellness Centre Dubai</h2>
    <div className="flex justify-start items-center gap-2 mb-2  3xl:mb-4">
    <div className=" border rounded px-2 py-1 text-white border-white">Wellness</div>
    <div className=" border rounded px-2 py-1 text-white border-white">Spa</div>
    <div className=" border rounded px-2 py-1 text-white border-white ">10% Discount</div>
    </div>
    <span className="text-xl text-gray-400 mb-2 3xl:mb-2">Location: <span className="text-white block md:inline"> 801 Latifa Tower, Sheikh Zayed Road Dubai</span></span>
    <span className="text-xl text-gray-400 mb-2 3xl:mb-2">Discount Type: <span className="text-white block md:inline">25% + No enrollment fee</span></span>
    <span className="text-xl text-gray-400 mb-2 3xl:mb-4">Available: <span className="text-white block md:inline">25% + No enrollment fee</span></span>
    <span className="text-xl  mb-2 3xl:mb-4 3xl:w-[30vw]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec diam viverra, congue orci id, pretium libero. Nunc ultricies porttitor mi, eu semper nibh. Aliquam erat volutpat. </span>
    <div className="flex flex-col">
    <div className=' flex  justify-center items-center max-md:gap-[5vw] mb-1 3xl:mb-4'>
          <Image
            src="/images/instaIcon.png"
            alt="Push up Image"
            width={25}
            height={25}
            loading="lazy"
          //  className={`object-contain ${styles.pushUpImg}`}
          //  style={{transform:"scale(0.5) translate(-774px, -2057px)"}}
          />
          <p className='md:ps-4 text-xl  font-montserrat'>WellnessCentre</p>
        </div>  
          <div className=' flex  justify-center items-center max-md:gap-[5vw] 3xl:mb-2'>
          <Image
            src="/images/globe.png"
            alt="Push up Image"
            width={25}
            height={25}
            loading="lazy"
          //  className={`object-contain ${styles.pushUpImg}`}
          //  style={{transform:"scale(0.5) translate(-774px, -2057px)"}}
          />
          <p className='md:ps-4 text-xl  font-montserrat max-w-[50vw] break-words'>www.wellnesscentre.com</p>
        </div>
    </div>
  </div>
</div>
<div className="card lg:card-side  max-md:shadow-sm border lg:border-0 p-4 w-[80vw] mb-4 lg:ps-8">
  {/* <figure className="max-3xl:min-w-2/5 p-4 me-4"> */}
  <div className="flex items-start lg:items-center justify-center pl-[4vw]">

    <Image
      src="/images/wellness7.png"
      width={440}
      height={440}
      // className="max-md:size-[50vw] object-contain  md:size-[5vw]"
      className="w-[20vw] rounded"
      alt="Album" > 
      </Image>
    <p className="card-title uppercase text-2xl md:text-3xl ps-4 lg:hidden lg:text-6xl 3xl:mb-4 mb-2 lg:pt-8 3xl:pt-0">Wellness Centre Dubai</p>

  </div>
  {/* </figure> */}
  <div className="card-body bg-none lg:max-w-3/4">
    <h2 className="card-title uppercase text-4xl md:text-5xl 3xl:mb-4 mb-2 pt-8 3xl:pt-0 hidden lg:block">Wellness Centre Dubai</h2>
    <div className="flex justify-start items-center gap-2 mb-2  3xl:mb-4">
    <div className=" border rounded px-2 py-1 text-white border-white">Wellness</div>
    <div className=" border rounded px-2 py-1 text-white border-white">Spa</div>
    <div className=" border rounded px-2 py-1 text-white border-white ">10% Discount</div>
    </div>
    <span className="text-xl text-gray-400 mb-2 3xl:mb-2">Location: <span className="text-white block md:inline"> 801 Latifa Tower, Sheikh Zayed Road Dubai</span></span>
    <span className="text-xl text-gray-400 mb-2 3xl:mb-2">Discount Type: <span className="text-white block md:inline">25% + No enrollment fee</span></span>
    <span className="text-xl text-gray-400 mb-2 3xl:mb-4">Available: <span className="text-white block md:inline">25% + No enrollment fee</span></span>
    <span className="text-xl  mb-2 3xl:mb-4 3xl:w-[30vw]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec diam viverra, congue orci id, pretium libero. Nunc ultricies porttitor mi, eu semper nibh. Aliquam erat volutpat. </span>
    <div className="flex flex-col">
    <div className=' flex  justify-center items-center max-md:gap-[5vw] mb-1 3xl:mb-4'>
          <Image
            src="/images/instaIcon.png"
            alt="Push up Image"
            width={25}
            height={25}
            loading="lazy"
          //  className={`object-contain ${styles.pushUpImg}`}
          //  style={{transform:"scale(0.5) translate(-774px, -2057px)"}}
          />
          <p className='md:ps-4 text-xl  font-montserrat'>WellnessCentre</p>
        </div>  
          <div className=' flex  justify-center items-center max-md:gap-[5vw] 3xl:mb-2'>
          <Image
            src="/images/globe.png"
            alt="Push up Image"
            width={25}
            height={25}
            loading="lazy"
          //  className={`object-contain ${styles.pushUpImg}`}
          //  style={{transform:"scale(0.5) translate(-774px, -2057px)"}}
          />
          <p className='md:ps-4 text-xl  font-montserrat max-w-[50vw] break-words'>www.wellnesscentre.com</p>
        </div>
    </div>
  </div>
</div>
        {/* <Card/> */}
            </div>
        <CallBtn/>
        <Footer/>
        </>
    )
}