import Image from "next/image";
import callIcon from '../../../public/images/Ellipse 3355.png'
import styles from './styles.module.css'



export default function Steps() {


    return (


        <div className={` md:ml-[14vw]`}>
              <div className={`hidden md:block font-anton text-[5vw] leading-[7vw] `}>
                <span className="font-anton text-red-hablando ">
                    4 STEPS
                </span>                 SEAMLESS
                <br />
                <span className="font-anton ">
                    PROCESS
                </span>
            </div>
            <div className="hidden max-md:block ">
                <h1 className="text-[23vw] font-bebasNeue leading-tight text-center">

                    <span className="block text-[#B10229] text-center">4 STEPS </span>
                    SEAMLESS PROCESS
                </h1>
            </div>

            <div className="md:flex max-md:ml-[5vw] md:flex-col md:gap-[2vw] md:pt-[10vw]">
                <div className={` max-md:pt-[30vw] flex max-md:flex-col md:ml-[2vw]`}>

                    <div className="md:text-center ">
                        <p
                            className={`max-md:text-[7vw] md:text-[2vw] md:pl-0 max-md:p-0 max-md:text-center font-montserrat`}
                            data-aos="fade-right"
                            data-aos-duration="2000"
                        >
                            Step
                        </p>
                        <p
                            className={`max-md:text-[12vw] md:pt-[1vw] text-[7vw] md:text-[5vw] md:pl-0 max-md:p-0 max-md:text-center max-md:pt-[1vw] font-anton`}
                            data-aos="fade-right"
                            data-aos-duration="2000"
                        >
                            1
                        </p>

                    </div>

                    <div className={`max-md:ml-[5vw] max-md:pt-[20vw] max-w-[80vw] max-md:text-center `}>
                        <p className={`md:ps-[12vw] leading-tight max-md:text-[16vw] md:text-[3vw] font-bebas-neue`}
                            data-aos="fade-left"
                            data-aos-duration="2000"
                        >
                            SUBMIT YOUR INFORMATION
                        </p>
                        <p
                            className={`md:p-[12vw] md:max-w-[75vw] md:w-full md:pt-[1vw] text-[#959595] max-md:text-[5vw] md:text-[1.5vw] md:w-[80%] font-montserrat  `}
                            data-aos="fade-left"
                            data-aos-duration="2000"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat vestibulum dolor non pulvinar.
                        </p>

                    </div>
                </div>

                <div className="max-md:min-[750px]:mt-[2vw] md:flex md:flex-col md:gap-[10vw] md:pt-[10vw] md:pt-[15vw]">
                    <div className={`max-md:pt-[25vw] flex max-md:flex-col md:flex-row-reverse`}>
                        <div className="md:text-center md:pr-[28vw] max-md:pr-[3vw]">
                            <p
                                className={`max-md:text-[7vw] md:text-[2vw] md:pl-0 max-md:p-0 max-md:text-center font-montserrat`}
                                data-aos="fade-right"
                                data-aos-duration="2000"
                            >
                                Step
                            </p>
                            <p
                                className={`max-md:text-[12vw] md:pt-[1vw] md:text-[5vw] md:pl-0 max-md:p-0 max-md:text-center max-md:pt-[0vw] font-anton `}
                                data-aos="fade-right"
                                data-aos-duration="2000"
                            >
                                2
                            </p>

                        </div>

                        <div className={`md:me-[12vw] leading max-md:ml-[5vw] max-md:pt-[15vw] max-w-[80vw] max-md:text-center md:text-right`}>
                            <p className={`-tight max-md:text-[16vw] md:text-[3vw] font-bebas-neue `}
                                data-aos="fade-left"
                                data-aos-duration="2000"
                            >
                                AWAIT VALIDATION
                            </p>
                            <p
                                className={` md:max-w-[80vw] md:w-full md:pt-[1vw] text-[#959595] max-md:text-[5vw] md:text-[1.5vw] md:w-[80%] font-montserrat  `}
                                data-aos="fade-left"
                                data-aos-duration="2000"
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat vestibulum dolor non pulvinar.
                            </p>

                        </div>
                    </div>
                </div>
                <div className="max-md:min-[750px]:mt-[2vw] md:flex md:flex-col md:gap-[10vw] md:pt-[10vw] md:pt-[25.5vw]">
                    <div className={`max-md:pt-[25vw] flex max-md:flex-col md:flex-row-reverse`}>
                        <div className="md:text-center md:pr-[24vw] max-md:pr-[3vw]">
                            <p
                                className={`max-md:text-[7vw] md:text-[2vw] md:pl-0 max-md:p-0 max-md:text-center font-montserrat`}
                                data-aos="fade-right"
                                data-aos-duration="2000"
                            >
                                Step
                            </p>
                            <p
                                className={`max-md:text-[12vw] md:pt-[1vw] md:text-[5vw] md:pl-0 max-md:p-0 max-md:text-center max-md:pt-[0vw] font-anton `}
                                data-aos="fade-right"
                                data-aos-duration="2000"
                            >
                                3
                            </p>

                        </div>

                        <div className={`max-md:ml-[5vw] max-md:pt-[15vw] max-w-[80vw] max-md:text-center md:text-right `}>
                            <p className={`md:pe-[12vw] leading-tight max-md:text-[16vw] md:text-[3vw] font-bebas-neue }`}
                                data-aos="fade-left"
                                data-aos-duration="2000"
                            >
                                AWAIT VALIDATION
                            </p>
                            <p
                                className={`md:pe-[12vw] md:max-w-[75vw] md:w-full md:pt-[1vw] text-[#959595] max-md:text-[5vw] md:text-[1.5vw] md:w-[80%] font-montserrat  `}
                                data-aos="fade-left"
                                data-aos-duration="2000"
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat vestibulum dolor non pulvinar.
                            </p>

                        </div>
                    </div>
                </div>
                <div className={` max-md:pt-[40vw] flex max-md:flex-col md:pt-[16.5vw]`}>
                    <div className="md:text-center ">
                        <p
                            className={`max-md:text-[7vw] md:text-[2vw] md:pl-0 max-md:p-0 max-md:text-center font-montserrat`}
                            data-aos="fade-right"
                            data-aos-duration="2000"
                        >
                            Step
                        </p>
                        <p
                            className={`max-md:text-[12vw] md:pt-[1vw] text-[7vw] md:text-[5vw] md:pl-0 max-md:p-0 max-md:text-center max-md:pt-[0vw]  font-anton`}
                            data-aos="fade-right"
                            data-aos-duration="2000"
                        >
                            4
                        </p>

                    </div>

                    <div className={`max-md:ml-[5vw] max-md:pt-[20vw] max-w-[80vw] max-md:text-center `}>
                        <p className={`md:ps-[12vw] leading-tight max-md:text-[16vw] md:text-[3vw] font-bebas-neue }`}
                            data-aos="fade-left"
                            data-aos-duration="2000"
                        >
                            SUBMIT YOUR INFORMATION
                        </p>
                        <p
                            className={`md:p-[12vw] md:max-w-[75vw] md:w-full md:pt-[1vw] text-[#959595] max-md:text-[5vw] md:text-[1.5vw] md:w-[80%] font-montserrat  `}
                            data-aos="fade-left"
                            data-aos-duration="2000"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat vestibulum dolor non pulvinar.
                        </p>

                    </div>
                </div>
            </div>

            {/* Call to action */}
            <div className={`pt-[18vw] md:pt-[17.5vw] md:pr-[10.5vw] lg:pr-[11vw] flex justify-center`}>
                <a href="+971 527667527 ">
                    <Image
                        src={callIcon}
                        width={280}
                        height={150}
                        alt="call to action"
                        className="max-md:size-[40vw] object-contain  md:size-[15vw]"
                    ></Image>
                </a>
                {/* <p className="font-anton ps-4 pt-30">4   </p> */}


            </div>
        </div>

    )
}