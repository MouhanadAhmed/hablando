import Image from "next/image";
import callIcon from '../../../public/images/Ellipse 3355.png'





export default function CallBtn() {


    return (
        <>
                    <div className={`pt-[15vw] md:pt-[16vw] md:pr-[10.5vw] lg:pr-[11vw] flex justify-center`}>
                <a href="tel:+971527667527">
                    <Image
                        src={callIcon}
                        width={280}
                        height={150}
                        alt="call to action"
                        className="max-md:size-[40vw] object-contain  md:size-[18vw]"
                    ></Image>
                </a>
                {/* <p className="font-anton ps-4 pt-30">4   </p> */}


            </div>
        </>
    )
}