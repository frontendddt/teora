 
"use client"
import brochure_card from "../../assets/homeAssets/brochure_card.png";
import Image from "next/image"; 
 
import { motion } from "framer-motion";
import { useAnimationContext } from '@/context/AnimationContext'; 
 
const OurBrochure =({classname, color, heading, discriptions}) =>{

const {fadeRight, fadeLeft} = useAnimationContext(); 
  
    return( 
        <>
            <section className="section-space">
                    <div className="container d-flex justify-content-center">
                        <div 
                            className={`${classname} p-2`}
                            style={{position:'relative'
                                , width:'80px', height:'80px', 
                                borderRadius:'12px', bottom:'-20px'}}
                        >
                            <div className="position-relative h-100 " style={{borderRadius:'12px'}} >
                                <img
                                    src="/icons/scan.png"
                                    width={65}
                                    alt="useful reads—from"
                                />
                            </div>
                        </div>
                    </div>
                    <div className={`container border_radius_round p_smarter ${color} ${classname}`}>
                    
                            <div className="row">
                                 <motion.div className="col-md-6"
                                        variants={fadeLeft}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: false, amount: 0.2 }} 
                                 >
                                    <Image
                                        src={brochure_card}
                                        style={{width:'100%', height:'100%'}}
                                        alt="useful reads from"
                                    />
                                 </motion.div>

                                 <motion.div className={`col-md-6 interested d-flex align-items-center ${color}`}
                                    variants={fadeRight}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: false, amount: 0.2 }}
                                  >
                                       <div> 
                                             <span className="rounded-pill buge-style accentBlueBg p-2">OUR BROCHURE</span>
                                            <h3 className="groupBolds mt-3 smarter" style={{maxWidth:'400px'}} >
                                                {heading}
                                            </h3> 
                                            <p>
                                                {discriptions}
                                            </p> 
                                            <button className="buttons-primary mt-3" type="button">Download Now</button>
                                       </div> 
                                 </motion.div>
                                 
                            </div>
                    </div>
            </section> 

        </>
    )
}
export default OurBrochure;