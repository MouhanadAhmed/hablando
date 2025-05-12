import Image from "next/image";
import callIcon from '../../../public/images/Ellipse 3355.png'
import styles from './styles.module.css'



export default function Steps() {


    return (


        <div className={`${styles.stepsSec}  md:h-[280vh]`}>
            <div className={`hidden md:block font-anton text-[5vw] leading-normal ${styles.fourSteps}`}>
                <span className="font-anton text-red-hablando ">
                    4 STEPS
                </span>                 SEAMLESS
                <br />
                <span className="font-anton ">
                    PROCESS
                </span>
            </div>
            <div className="hidden max-md:block mt-[25vw]">
                <h1 className="text-[23vw] font-bebasNeue leading-tight text-center">

                    <span className="block text-[#B10229]  text-center">4 STEPS </span>
                    SEAMLESS PROCESS
                </h1>
            </div>

            <div className="md:flex md:flex-col md:gap-[40vw] md:pt-[10vw]">
                {/* step ONE */}
                <div className={` max-md:pt-[30vw] max-md:ml-[2.5]  flex max-md:flex-col`}>
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
                            1
                        </p>

                    </div>

                    <div className={`max-md:ml-[5vw] max-md:pt-[30vw] max-w-[80vw] max-md:text-center ${styles.stepOneDesc}`}>
                        <p className={`md:ps-48 max-md:text-[16vw] text-5xl font-bebas-neue mb-3 ${styles.stepOneH}`}
                            data-aos="fade-left"
                            data-aos-duration="2000"
                        >
                            SUBMIT YOUR INFORMATION
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

                <div className={` max-md:pt-[28vw] max-md:ml-[2.5] md:ps-[42vw] md:ps-48 md:pt-18 flex max-md:flex-col`}>
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
                            2
                        </p>

                    </div>

                    <div className={`max-md:ml-[10vw] max-md:pt-[25vw] max-w-[80vw] max-md:text-center ${styles.stepOneDesc}`}>
                        <p className={`md:ps-48 max-md:text-[16vw] text-5xl font-bebas-neue mb-3 ${styles.stepOneH}`}
                            data-aos="fade-left"
                            data-aos-duration="2000"
                        >
                            AWAIT VALIDATION
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

                    <div className={`max-md:ml-[5vw] max-md:pt-[25vw] max-w-[80vw] max-md:text-center ${styles.stepOneDesc}`}>
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
                <div className={` max-md:pt-[43vw] max-md:ml-[2.5] md:ps-[42vw] md:ps-48 md:pt-18 flex max-md:flex-col`}>
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
            <div className={`${styles.callBtn} pt-[16vw] md:ps-46 md:pt-18 flex justify-center`}>
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