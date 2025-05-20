"use client"
import CallBtn from "@/componenets/callBtn/CallBtn"
import Footer from "@/componenets/footer/footer"
import Navbar from "@/componenets/navbar/Navbar"
import Image from "next/image"
import arrowLeft from "../../../../public/images/arrow-left.png"
import Link from "next/link"
import CardsWrapper from "@/componenets/cardsWrapper/cardsWrapper"
import { useParams } from "next/navigation"



export default function Venues() {
  const params = useParams();
  let keyword = params?.keyword as string;

// const router = useRouter();
console.log(params, typeof keyword);

if (decodeToReadableString(keyword).toLowerCase().startsWith("keyword[")) {
    keyword="Search Results"
  }else{
    localStorage.removeItem("search")
  }
  
function decodeToReadableString(encoded: string) {
    return decodeURIComponent(encoded as string);
  }

  console.log("decoded",decodeToReadableString(keyword))

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
        <h1 className="text-5xl 3xl:text-6xl uppercase  font-bebas-neue">{keyword}</h1>
        </div>
            <div className="flex justify-center flex-col md:justify-start items-center lg:items-start 3xl:px-24 ">
        <CardsWrapper keyword={keyword}/>
            </div>
        <CallBtn/>
        <Footer/>
        </>
    )
}