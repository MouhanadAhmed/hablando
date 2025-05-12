import Image from "next/image";
import callIcon from '../../../public/images/Ellipse 3355.png'
import styles from './styles.module.css'



export default function Steps() {


    return (


        <div className={`${styles.stepsSec} md:ml-[16vw]`}>
            <div className={`hidden md:block font-anton text-[5vw] leading-[7vw]  ${styles.fourSteps}`}>
                <span className="font-anton text-red-hablando ">
                    4 STEPS
                </span>                 SEAMLESS
                <br />
                <span className="font-anton ">
                    PROCESS
                </span>
            </div>
            <div className="hidden max-md:block mt-[35vw]">
                <h1 className="text-[23vw] font-bebasNeue leading-[25vw] text-center">

                    <span className="block text-[#B10229] text-center">4 STEPS </span>
                    SEAMLESS PROCESS
                </h1>
            </div>

            <div className="md:flex max-md:ml-[5vw] md:flex-col md:gap-[2vw] md:pt-[vw]">
                {/* step ONE */}
                <div className={` max-md:pt-[30vw] flex max-md:flex-col`}>
                    <div className="md:text-center ">
                        <p
                            className={`max-md:text-[7vw] md:text-[2vw] md:pl-0 max-md:p-0 max-md:text-center text-4xl font-montserrat ps-8 ${styles.stepOneStep}`}
                            data-aos="fade-right"
                            data-aos-duration="2000"
                        >
                            Step
                        </p>
                        <p
                            className={`max-md:text-[12vw] md:pt-[1vw] text-[7vw] md:text-[5vw] md:pl-0 max-md:p-0 max-md:text-center max-md:pt-[3vw]  font-anton ${styles.stepOneNum}  `}
                            data-aos="fade-right"
                            data-aos-duration="2000"
                        >
                            1
                        </p>

                    </div>

                    <div className={`max-md:ml-[5vw] max-md:pt-[20vw] max-w-[80vw] max-md:text-center ${styles.stepOneDesc}`}>
                        <p className={`md:ps-[12vw] leading-tight max-md:text-[16vw] md:text-[3vw] font-bebas-neue mb-3 ${styles.stepOneH}`}
                            data-aos="fade-left"
                            data-aos-duration="2000"
                        >
                            SUBMIT YOUR INFORMATION
                        </p>
                        <p
                            className={`md:p-[12vw] md:max-w-[75vw] md:w-full md:pt-[1vw] text-[#959595] max-md:text-[5vw] md:text-[1.5vw] md:w-[80%] font-montserrat ${styles.stepOneP} `}
                            data-aos="fade-left"
                            data-aos-duration="2000"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat vestibulum dolor non pulvinar.
                        </p>

                    </div>
                </div>

                <div className="max-md:min-[750px]:mt-[2vw] md:flex md:flex-col md:gap-[10vw] md:pt-[10vw] md:pt-[14vw]">
                    {/* step ONE */}
                    <div className={`max-md:pt-[23vw] flex max-md:flex-col md:flex-row-reverse`}>
                        <div className="md:text-center md:pr-[35vw] max-md:pr-[3vw]">
                            <p
                                className={`max-md:text-[7vw] md:text-[2vw] md:pl-0 max-md:p-0 max-md:text-center text-4xl font-montserrat ps-8 ${styles.stepOneStep}`}
                                data-aos="fade-right"
                                data-aos-duration="2000"
                            >
                                Step
                            </p>
                            <p
                                className={`max-md:text-[12vw] md:pt-[1vw] md:text-[5vw] md:pl-0 max-md:p-0 max-md:text-center max-md:pt-[3vw] text-7xl font-anton ps-14 pt-2 ${styles.stepOneNum}  `}
                                data-aos="fade-right"
                                data-aos-duration="2000"
                            >
                                2
                            </p>

                        </div>

                        <div className={`max-md:ml-[5vw] max-md:pt-[15vw] max-w-[80vw] max-md:text-center md:text-right ${styles.stepOneDesc}`}>
                            <p className={`md:pe-[12vw] leading-tight max-md:text-[16vw] md:text-[3vw] font-bebas-neue mb-3 ${styles.stepOneH}`}
                                data-aos="fade-left"
                                data-aos-duration="2000"
                            >
                                AWAIT VALIDATION
                            </p>
                            <p
                                className={`md:pe-[12vw] md:max-w-[75vw] md:w-full md:pt-[1vw] text-[#959595] max-md:text-[5vw] md:text-[1.5vw] md:w-[80%] font-montserrat ${styles.stepOneP} `}
                                data-aos="fade-left"
                                data-aos-duration="2000"
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat vestibulum dolor non pulvinar.
                            </p>

                        </div>
                    </div>
                </div>
                <div className={` max-md:pt-[37vw] max-md:ml-[2.5] md:ps-[42vw] md:ps-48 md:pt-18 flex max-md:flex-col`}>
                    <div>
                        <p
                            className={`max-md:text-[7vw] max-md:p-0 max-md:text-center text-4xl font-montserrat ps-8 ${styles.stepOneStep}`}
                            data-aos="fade-right"
                            data-aos-duration="2000"
                        >
                            Step
                        </p>
                        <p
                            className={`max-md:text-[12vw] max-md:p-0 max-md:text-center max-md:pt-[3vw] text-7xl font-anton ps-14 pt-2 ${styles.stepOneNum}  `}
                            data-aos="fade-right"
                            data-aos-duration="2000"
                        >
                            3
                        </p>

                    </div>

                    <div className={`max-md:ml-[0vw] max-md:pt-[25vw] max-w-[80vw] max-md:text-center ${styles.stepOneDesc}`}>
                        <p className={`md:ps-48 max-md:text-[16vw] text-5xl font-bebas-neue mb-3 ${styles.stepOneH}`}
                            data-aos="fade-left"
                            data-aos-duration="2000"
                        >
                            RECEIVE YOUR CARD
                        </p>
                        <p
                            className={`md:ps-48 max-md:text-[5vw] text-xl md:w-[80%] font-montserrat ${styles.stepOneP} `}
                            data-aos="fade-left"
                            data-aos-duration="2000"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat vestibulum dolor non pulvinar.
                        </p>

                    </div>
                </div>
                <div className={`max-md:min-[750px]:mt-[2vw] max-md:pt-[43vw] max-md:ml-[2.5] md:ps-[42vw] md:ps-48 md:pt-18 flex max-md:flex-col`}>
                    <div>
                        <p
                            className={`max-md:text-[7vw] max-md:p-0 max-md:text-center text-4xl font-montserrat ps-8 ${styles.stepOneStep}`}
                            data-aos="fade-right"
                            data-aos-duration="2000"
                        >
                            Step
                        </p>
                        <p
                            className={`max-md:text-[12vw] max-md:p-0 max-md:text-center max-md:pt-[3vw] text-7xl font-anton ps-14 pt-2 ${styles.stepOneNum}  `}
                            data-aos="fade-right"
                            data-aos-duration="2000"
                        >
                            4
                        </p>

                    </div>

                    <div className={`max-md:ml-[5vw] max-md:pt-[25vw] max-w-[80vw] max-md:text-center ${styles.stepOneDesc}`}>
                        <p className={`md:ps-48 max-md:text-[16vw] text-5xl font-bebas-neue mb-3 ${styles.stepOneH}`}
                            data-aos="fade-left"
                            data-aos-duration="2000"
                        >
                            ENJOY YOUR BENEFITS!
                        </p>
                        <p
                            className={`md:ps-48 max-md:text-[5vw] text-xl md:w-[80%] font-montserrat ${styles.stepOneP} `}
                            data-aos="fade-left"
                            data-aos-duration="2000"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat vestibulum dolor non pulvinar.
                        </p>

                    </div>
                </div>
            </div>

            {/* Call to action */}
            <div className={`${styles.callBtn} pt-[20vw] md:ps-46 md:pt-18 flex justify-center`}>
                <a href="+971 527667527 ">
                    <Image
                        src={callIcon}
                        width={280}
                        height={150}
                        alt="call to action"
                        className="max-md:size-[40vw] object-contain  md:pt-12"
                    ></Image>
                </a>
                {/* <p className="text-7xl font-anton ps-4 pt-30">4   </p> */}


            </div>
        </div>

    )
}