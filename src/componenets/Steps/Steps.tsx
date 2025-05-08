import Image from "next/image";
import callIcon from '../../../public/images/Ellipse 3355.png'
import styles from './styles.module.css'



export default function Steps(){


    return(


        <div className={`${styles.stepsSec}  h-[280vh] p-24`}>
        <div className={`font-anton text-5xl ps-48 leading-normal ${styles.fourSteps}`}> 
        <span className="font-anton text-5xl text-red-hablando pe-4 pb-12">
        4 STEPS 
        </span> 
        SEAMLESS
        <br/>
        <span className="font-anton text-5xl mt-12 pt-12">
        PROCESS
        </span>
       </div>
        

{/* step ONE */}
        <div className={`${styles.stepOne} ps-48 pt-18 flex`}>
            <div className={styles.stepOneInide}>
            <p 
            className={`text-4xl font-montserrat ps-8 ${styles.stepOneStep}`}  
            data-aos="fade-right"
            data-aos-duration="2000"
            >
                Step  
            </p>
            <p 
            className={`text-7xl font-anton ps-14 pt-2 ${styles.stepOneNum}  `}
            data-aos="fade-right"
            data-aos-duration="2000"
            >
            1   
            </p>
            
            </div>

            <div className={styles.stepOneDesc}>
            <p className={`ps-48 text-5xl font-bebas-neue mb-3 ${styles.stepOneH}`}  
            data-aos="fade-left"
            data-aos-duration="2000"
            >
                SUBMIT YOUR INFORMATION
            </p>
            <p 
            className={`ps-48 text-xl w-[80%] font-montserrat ${styles.stepOneP} `}  
            data-aos="fade-left"
            data-aos-duration="2000"
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat vestibulum dolor non pulvinar.
            </p>

            </div>
        </div>
        
        
        {/* step TWO */}
        <div className={`${styles.stepTwo} ps-48 pt-48 flex justify-end`}>
 

            <div className={styles.stepTwoDesc}>
            <p 
            className={`pe-48 pt-12 text-end text-5xl font-bebas-neue mb-3 ${styles.stepTwoH}`}
            data-aos="fade-right"
            data-aos-duration="2000"
            >
                AWAIT VALIDATION
            </p>
            <p 
            className={`pe-24 text-end text-xl w-[90%] font-montserrat ${styles.stepTwoP}`}
            data-aos="fade-right"
            data-aos-duration="2000"
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat vestibulum dolor non pulvinar.
            </p>

            </div>

            <div  className={styles.stepTwoInide}>
            <p 
            className={`text-4xl text-end font-montserrat pe-56 pt-4 ${styles.stepTwoStep}`}
            data-aos="fade-left"
            data-aos-duration="2000"
            >
                Step  
            </p>
            <p 
            className={`text-7xl text-end font-anton pe-64 pt-2 ${styles.stepTwoNum}`}
            data-aos="fade-left"
            data-aos-duration="2000"
            >
                2  
            </p>
            </div>
        </div>


        {/* step THREE */}
        <div className={`${styles.stepThree} ps-48 pt-48 flex justify-end`}>
 

            <div className={styles.stepThreeDesc}>
            <p className={`pe-48 pt-12 text-end text-5xl font-bebas-neue mb-3 ${styles.stepThreeH}`}             data-aos="fade-right"
            data-aos-duration="2000">RECEIVE YOUR CARD</p>
            <p className={`pe-24 text-end text-xl w-[90%] font-montserrat ${styles.stepThreeP}`}             data-aos="fade-right"
            data-aos-duration="2000">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat vestibulum dolor non pulvinar.</p>
            </div>

            <div  className={styles.stepThreeInide}>
            <p className={`text-4xl text-end font-montserrat pe-48 pt-4 ${styles.stepThreeStep}`}             data-aos="fade-left"
            data-aos-duration="2000">Step  </p>
            <p className={`text-7xl text-end font-anton pe-54 pt-2 ${styles.stepThreeNum}`}          data-aos="fade-left"
            data-aos-duration="2000"   >3   </p>
            </div>
        </div>

        {/* step FOUR */}
        <div className={`${styles.stepFour} ps-42 pt-26 flex `}>
            <div  className={styles.stepFourInide}>
            <p className={`text-4xl font-montserrat ps-8 ${styles.stepFourStep} `}           data-aos="fade-right"
            data-aos-duration="2000">Step  </p>
            <p className={`text-7xl font-anton ps-14 pt-2 ${styles.stepFourNum} `}            data-aos="fade-right"
            data-aos-duration="2000">4   </p>
            </div>

            <div className={styles.stepFourDesc}>
            <p className={`ps-48 pt-12 text-5xl font-bebas-neue mb-3 ${styles.stepFourH}`}            data-aos="fade-left"
            data-aos-duration="2000">ENJOY YOUR BENEFITS!</p>
            <p className={`ps-48 text-xl w-[80%] font-montserrat ${styles.stepFourP}`}            data-aos="fade-left"
            data-aos-duration="2000">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat vestibulum dolor non pulvinar.</p>
            </div>
        </div>       
        
         {/* Call to action */}
        <div className={`${styles.callBtn} ps-46 pt-18 flex justify-center`}>
         <a href="+971 527667527 ">
            <Image 
            src={callIcon}
            width={280}
            height={150}
            alt="call to action"
            className="text-7xl   pt-12"
            ></Image>
          </a>
            {/* <p className="text-7xl font-anton ps-4 pt-30">4   </p> */}

      
        </div>
        </div>

    )
}