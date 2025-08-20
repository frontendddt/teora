'use client'; 
import Styles from "./aboutTeora.module.css";
import homeStyles from "./home.module.css";
import Link from "next/link";
import Image from "next/image";
import { motion } from 'framer-motion';
import { useAnimationContext } from '@/context/AnimationContext'; 
 import folder from "../../assets/homeAssets/folder.png";
const solutionData = [
    {
        title: "Antibiotic Overuse",
        discreptions: "80% of all antibiotics are used in food production. 10M deaths/year from AMR by 2050- WHO projection", 
    },
    {
        title: "Hormonal Abuse",
        discreptions: "~ 40% of global animal production involves banned or hormoneintensive growth practices (EFSA)", 
    },
    {
        title: "Injection Limitations",
        discreptions: "Injection-based control is costly for small farms, labor-intensive, and unscalable in high-density farms.", 
    },
    {
        title: "Cold Chain Burden",
        discreptions: "Traditional vaccines require coldchain, adding 20–30% to cost & is difficult to store at all farms.", 
    }
]

const CurrentSolution = () =>{
     const {fadeRight, fadeLeft} = useAnimationContext(); 
    return(
          <section className="section-space-2 ">
                <div className="container-2 m-auto ">
                
                    <div className="row animate-wrapper padding_manage pt-2 pb-2">
                        <div className="col-md-7 h-100 "> 
                                <motion.div className={`${Styles.aboutrowcontainer}`}
                                    variants={fadeLeft}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: false, amount: 0.2 }} 
                                >
                                        <span className={`rounded-pill buge-style accentRedBg text-primaryBeige pt-2 pb-2`}>
                                               THE CURRENT SOLUTIONS
                                        </span>

                                        <h2 className="purpleColor m-top-b" >
                                           The ‘Solutions’ — Vaccines
                                            Are Slow & Costly, Injections
                                            & Immersions? Impractical
                                            & Stressful. Genetics?
                                            TakesYears.
                                        </h2>

                                        <div className="row"> 
                                            {
                                                solutionData.map((elements, index) =>{
                                                    return <div className="col-md-6 col-12 p-2 h-100 " key={index}>
                                                                <div className={` ${homeStyles.cards} h-100 purpleColor`}>
                                                                    <h5>{elements.title}</h5>
                                                                    <p className="pfont ">
                                                                      {elements.discreptions}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                })
                                            } 
                                        </div> 

                                </motion.div>
                        </div>

                        <motion.div className="col-md-5 h-100 d-flex justify-content-end"
                            variants={fadeRight}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.2 }}
                        >
                            <div className="" >
                                <div className="position-relative" style={{height:'90%'}}>
                                <span className={`rounded-pill buge-style accentBlueBg purpleColor ${Styles.aqua}`}>IN AQUACULTURE</span>
                                    <Image
                                        src={folder}
                                        alt="folder"
                                         
                                        style={{width:'100%', height:'100%'}}
                                    /> 
                                </div> 
                                <div className="buttons d-flex gap-2 pt-3">
                                    <Link href="/" className="buttons-primary " >
                                            Aquaculture Solutions
                                    </Link>  
                                </div>
                            </div> 
                        </motion.div>
                    </div>
                </div>
                
            </section>
    )
}

export default CurrentSolution;