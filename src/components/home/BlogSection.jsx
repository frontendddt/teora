"use client"

import { motion } from "framer-motion";
import { useAnimationContext } from '@/context/AnimationContext';
const BlogSection = () =>{
    const {animationVariants, ref1, inView1} = useAnimationContext(); 
      
    return(
        <>
             <motion.div className="container" style={{paddingBottom:'4rem'}}
                        ref={ref1}
                        initial="hidden"
                        animate={inView1 ? 'visible' : 'hidden'}
                        variants={animationVariants}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                            
                        <div className="d-flex justify-content-end section-space">
                            <button className="buttons-Beige mt-3">Read All</button>
                        </div> 

                        <div className="row"> 
                            <div className="col-md-8 h-100">
                                <div className="row"> 
                                    <div className="col-6">
                                        <div className={` card p-3 blogsfooter`}>
                                            <div className="blogs">

                                            </div>
                                            {/* <button></button> */}
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className={` card p-3 blogsfooter`}>
                                            <div className="blogs">

                                            </div>
                                            {/* <button></button> */}
                                        </div>
                                    </div>
                                
                                </div>

                                <div className="pt-4" style={{width:'95%'}}>
                                  <h3 className="purpleColor" style={{fontWeight:'600'}}>Teora Blog - Sharp, Useful Reads—From Biotech To Business Of Food</h3>
                               </div> 
                            </div> 

                             <div className="col-4" >
                                <div className={` card p-3 blogsfooter`} style={{minHeight:'500px'}} >
                                    <div className="blogs">

                                    </div>
                                    {/* <button></button> */}
                                </div>
                            </div>
                        </div>  
                    </motion.div> 
        </>
    )
}

export default BlogSection;