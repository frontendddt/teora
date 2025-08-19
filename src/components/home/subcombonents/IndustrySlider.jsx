
"use client";
import Styles from "../home.module.css";
import Slider from "react-slick";
import Image from "next/image"; 
import Link from "next/link";
import { motion } from 'framer-motion';
 
import industriesimg1 from "../../../assets/homeAssets/industryImg-1.png";
import industriesimg2 from "../../../assets/homeAssets/industryImg-2.png";
import industriesimg3 from "../../../assets/homeAssets/industryImg-3.png";
import industriesimg4 from "../../../assets/homeAssets/industryImg-4.png";
import industriesimg5 from "../../../assets/homeAssets/industryImg-5.png";

import { MdArrowBackIosNew, MdArrowForwardIos  } from "react-icons/md";
import { useRef } from "react";
const IndustySlider = ({fadeRight, fadeLeft}) =>{

const industryImage = [
    {image: industriesimg1},{image: industriesimg2},{image: industriesimg3},{image: industriesimg4},{image: industriesimg5},
]
const sliderRef = useRef(null);
const settings = {
    dots: false,
    infinite: true, 
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
  };
 
    return(
        <>     
            <div className="container padding_manage">
                    <div className="row reverce_column">
                            <motion.div className="col-md-5 col-12"
                                variants={fadeLeft}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.2 }}  
                            >
                                     <Slider {...settings} ref={sliderRef}>
                                        {industryImage.map((elements, index) =>(
                                            <div className="position-relative" key={index}>
                                                <Image
                                                    src={elements.image}
                                                    alt="industry image 1"   
                                                    style={{width:'100%', height:'100%'}}
                                                
                                                /> 
                                            </div>
                                        ))} 
                                    </Slider>  
                            </motion.div>
                            <motion.div className="col-md-7 col-12 d-flex justify-content-center align-items-center"
                                    variants={fadeRight}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: false, amount: 0.2 }}
                            >
                                    <div className={`pleft position-relative ${Styles.industries}`}> 
                                         <div className="d-flex gap-2 fs-5 nextPrevControl"> 
                                            <button className="btnStyles"
                                                onClick={() => sliderRef.current.slickPrev()}
                                            >
                                                <MdArrowBackIosNew/>
                                            </button> 
                                            <button className="btnStyles"
                                                 onClick={() => sliderRef.current.slickNext()}
                                            >
                                                <MdArrowForwardIos/>
                                            </button>
                                         </div>
                                          <h2 className="m-top-b purpleColor h2font">INDUSTRIES WE ARE IMPACTING</h2>
                                          <p className="m-top-b purpleColor ">Backed by proprietary AI-driven bioinformatics, precision fermentation,
                                            and advanced oral feed based or foliar spray based delivery, our solutions
                                            are proven in aquaculture and primed to scale into livestock, poultry,
                                            companion animals and agriculture— <strong>unlocking a $193 billion market</strong></p>

                                         <div className="marginBottom PaddinginTop">
                                            <Link href="/" className="buttons-primary " >
                                                Why us
                                            </Link> 
                                         </div>
                                    </div>
                            </motion.div>
                    </div>
            </div>
        </>
    )
}
export default IndustySlider;