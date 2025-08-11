'use client';
import { motion } from 'framer-motion';
 import Styles from "./carousel.module.css"; 
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
// import Slide from "../../../public/slider/hero-bg.jpg"
// import Slide1 from "../../../public/slider/homfooter_bg.jpg"
import { IoIosArrowBack, IoIosArrowForward  } from "react-icons/io";
import slider2_img1 from "/public/slider/Group.png";
import slider2_img2 from "/public/slider/Group2.png";
import slider2_img3 from "/public/slider/Group3.png";
import slider2_img4 from "/public/slider/Group4.png";
import slider3_img5 from "/public/slider/Group5.png";
import slider4_img6 from "/public/slider/group6.png";
import banner from "/public/slider/Animal-Illustartor.png"
import { useAnimationContext } from '@/context/AnimationContext';

 const Carousel = () =>{

const {fadeLeft} = useAnimationContext();
 
    const lineVariants = {
            hidden: {
                scaleY: 0,
                opacity: 0,
                transformOrigin: "top",
            },
            visible: {
                scaleY: 1,
                opacity: 1,
                transition: {
                duration: 0.8, 
                ease: "easeInOut",
                },
            },
        };

    return(
        <> 
            <section className={Styles.bannerContaner}>
                    <div id="carouselExampleFade" className={`carousel slide ${Styles.sliders}`}> 
                            <div className="carousel-inner w-100 h-100">
                                <div className="carousel-item active" style={{ width: '100%', height: '100%' }}> 
                                    <div className="h-100 position-relative">  
                                            <div className="container position-relative">
                                                 <p className={` ${Styles.banner_counter}`}><strong> <i>01/04</i> </strong></p>
                                            </div>
                                            <div className={`z-1 ${Styles.bannerHeaderContant}`}> 
                                                <h2 className="text-primaryBeige">
                                                    We’re Building A Future Where Every Farm—Small 
                                                    Or Large, Can Protect What Matters And Grow What’s 
                                                    Needed Through Clean, Easy, Powerful Science.
                                                </h2>
                                            </div> 
                                            
                                            <div className={`container z-1 ${Styles.slider_img_container}`}> 
                                                    <div className={Styles.bannerFooterContant}>

                                                        {/* Top animated line */}
                                                        <div className="d-flex justify-content-center">
                                                            <motion.span 
                                                                className="linsAnim"
                                                                variants={lineVariants}
                                                                initial="hidden"
                                                                whileInView="visible"
                                                                viewport={{ once: false, amount: 0.2 }} 
                                                            ></motion.span>
                                                        </div>

                                                        {/* Fade-in heading */}
                                                        <motion.h3
                                                            className="healthier"
                                                             variants={fadeLeft}
                                                            initial="hidden"
                                                            whileInView="visible"
                                                            viewport={{ once: false, amount: 0.2 }} 
                                                        >
                                                        <span className={` ${Styles.cleanTex}`}>Cleaner harvests,</span> stronger yields, sustainable Planet,
                                                            healthier ecosystems, and resilient communities.
                                                        </motion.h3>

                                     
                                     
                                     
                                                        {/* Bottom animated line */}
                                                        <div className="d-flex justify-content-center">
                                                            <motion.span className="linsAnim" 
                                                                variants={lineVariants}
                                                                initial="hidden"
                                                                whileInView="visible"
                                                                viewport={{ once: false, amount: 0.2 }} 
                                                            ></motion.span>
                                                        </div>

                                                    </div>
                                            </div> 
                                           
                                            <Image 
                                                src={banner}
                                                 alt="banner img"
                                                className={Styles.bannerImg}
                                             />
                                    </div>
                                </div>
                               

                               {
                                /// slider second
                               }

                               <div className="carousel-item " style={{ width: '100%', height: '100%' }}> 
                                    <div className="h-100 position-relative"> 
                                             <div className="container position-relative">
                                                 <p className={` ${Styles.banner_counter}`}><strong> <i>02/04</i> </strong></p>
                                            </div>
                                            <div className={Styles.bannerHeaderContant}>
                                                <h2 className="text-primaryBeige">
                                                   Injected Fish. Antibiotic-Fed Animals. High Amr’s.
                                                    Sprayed Crops. SickSoils. Dying Oceans. Toxic
                                                    Waters. Stressed-Out Farmers. Polluted Plates.
                                                </h2>
                                            </div> 
                                            
                                            <div className={`container ${Styles.slider_img_container}`}> 
                                                    <div className={Styles.bannerFooterContant}>
                                                        <h3><span className={Styles.cleanTex}>Compromised</span> Human Health. Farmers. Planet !
                                                        </h3>
                                                    </div>  
                                                    <div className="row">
                                                        <div className="col-3">
                                                            <Image src={slider2_img1}
                                                             alt="Slider Image"
                                                             style={{maxWidth:'100%',height:'100%', borderRadius:'20px'}}/>
                                                        </div>
                                                        <div className="col-3">
                                                            <Image src={slider2_img2}
                                                             alt="Slider Image"
                                                            style={{maxWidth:'100%',height:'100%', borderRadius:'20px'}}/>
                                                        </div>
                                                        <div className="col-3">
                                                            <Image src={slider2_img3}
                                                             alt="Slider Image"
                                                             style={{maxWidth:'100%',height:'100%', borderRadius:'20px'}}/>
                                                        </div>
                                                        <div className="col-3">
                                                            <Image src={slider2_img4} 
                                                             alt="Slider Image"
                                                             style={{maxWidth:'100%',height:'100%', borderRadius:'20px'}}/>
                                                        </div>
                                                    </div> 
                                            </div> 
                                    </div>
                                </div>

                                 { 
                                 /// slider three
                                 }

                                  <div className="carousel-item " style={{ width: '100%', height: '100%' }}> 
                                    <div className="h-100 position-relative"> 
                                             <div className="container position-relative">
                                                 <p className={` ${Styles.banner_counter}`}><strong> <i>03/04</i> </strong></p>
                                            </div>
                                            <div className={Styles.bannerHeaderContant}>
                                                <h2 className="text-primaryBeige">
                                                   This Is The Cost Of How We Grow Food Today And We’re Expected To Feed 10 Billion Like This?
                                                </h2>
                                            </div> 
                                            
                                            <div className={`container ${Styles.slider_img_container}`}> 
                                                    <div className={Styles.bannerFooterContant}>
                                                        <h3><span className={Styles.cleanTex}>Compromised</span> What if we could grow food without harming everything else.
                                                        </h3>
                                                    </div>  
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <Image src={slider3_img5}
                                                             alt="Slider Image"
                                                             style={{maxWidth:'100%',height:'100%', borderRadius:'20px'}}/>
                                                        </div> 
                                                    </div>

                                            </div> 
                                    </div>
                                </div>

                                   { 
                                    /// slider three
                                    }

                                <div className="carousel-item " style={{ width: '100%', height: '100%' }}> 
                                    <div className="h-100 position-relative"> 
                                             <div className="container position-relative">
                                                 <p className={` ${Styles.banner_counter}`}><strong> <i>04/04</i> </strong></p>
                                            </div>
                                            <div className={Styles.bannerHeaderContant} style={{ maxWidth: 1100 }}>
                                                <h2 className="text-primaryBeige">
                                                   At Teora, We Envision A World Where — Disease Doesn’t Destroy Harvests Or Drain Profits. Growth Doesn’t Rely 
                                                   On Chemicals, Antibiotics Or Shortcuts.
                                                </h2>
                                            </div> 
                                            
                                            <div className={`container ${Styles.slider_img_container}`}> 
                                                    <div className={Styles.bannerFooterContant}>
                                                        <h3><span className={Styles.cleanTex}>And Farming no longer </span> comes at the cost of health, planet, or profitability.
                                                        </h3>
                                                    </div>  
                                                    <div className="row">
                                                        <div className="col-12 d-flex">
                                                            <Image src={slider4_img6}
                                                              className="m-auto"
                                                              alt="Slider Image"
                                                              height={410}
                                                              style={{maxWidth:'80%'}}/>
                                                        </div>
                                                       
                                                    </div>

                                            </div> 
                                    </div>
                                </div>

                             
                            </div>

                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev" style={{opacity:1}}>
                                <span className={Styles.prevButton}>
                                    <div className="w-100 h-100 d-flex justify-content-center align-items-center">
                                        <IoIosArrowBack/>
                                    </div>
                                </span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                             
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next" style={{opacity:1}}>
                                 <span className={Styles.prevButton}>
                                    <div className="w-100 h-100 d-flex justify-content-center align-items-center">
                                        <IoIosArrowForward />
                                    </div>
                                </span>
                                <span className="visually-hidden">Next</span>
                            </button>

                    </div>
            </section>
        
        </>
    )
 }

export default Carousel;

 
