"use client"

import styles from "./solaq.module.css";
import { MdArrowBackIosNew, MdArrowForwardIos  } from "react-icons/md";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef } from "react";

const ImpactingCardSwiper = () =>{

    const swiperRef = useRef(null);

     const handleNext = () => {
        if (swiperRef.current) {
        swiperRef.current.slideNext();
        }
    };
    const handlePrev = () => {
        if (swiperRef.current) {
        swiperRef.current.slidePrev();
        }
    }; 

    return(
        <>
            <div className="impacting_container section-space-2">
                <div className="m-auto p_smarter corporateBg purpleColor border_radius_round2" style={{width:'94%'}}>
                      <div className="row">
                            <div className="col-md-5">
                                    <div className="containr_container paddingLe2">
                                            <div className="d-flex gap-2 fs-5 "> 
                                                <button className="btnStyles purpleColor"
                                                     type="button"
                                                    onClick={handlePrev}
                                                     >
                                                    <MdArrowBackIosNew/>
                                                </button> 
                                                <button className="btnStyles purpleColor"
                                                    type="button"
                                                    onClick={handleNext} 
                                                >
                                                    <MdArrowForwardIos/>
                                                </button>
                                            </div>

                                            <h2 className="purpleColor m-top-b">INDUSTRIES WE <br/>ARE IMPACTING</h2>
                                            <p className="m-top-b">
                                                Backed by proprietary AI-driven bioinformatics, precision
                                                fermentation, and advanced oral feed based or foliar spray
                                                based delivery, our solutions are proven in aquaculture and
                                                primed to scale into livestock, poultry, companion animals and
                                                agriculture—unlocking a <strong>$193 billion</strong> market opportunity.
                                            </p>

                                            <a className="buttons-primary " href="/">Why Us ?</a>
                                    </div>
                            </div>
                            <div className="col-md-7 position-relative">
                                    <Swiper
                                            spaceBetween={50}
                                            slidesPerView={2} 
                                            loop={true} 
                                            freeMode={true}
                                            onSwiper={(swiper) => {
                                                swiperRef.current = swiper;
                                             }}
                                            >
                                            <SwiperSlide className="h-100">
                                                <div className={`accentLimebg border_radius_round2 ${styles.swiperCard}`}>
                                                            
                                                </div>
                                            </SwiperSlide>
                                             <SwiperSlide className="h-100">
                                                <div className={`accentRedBg border_radius_round2 ${styles.swiperCard}`}>
                                                            
                                                </div>
                                            </SwiperSlide>
                                             <SwiperSlide className="h-100">
                                                <div className={`accentLimebg border_radius_round2 ${styles.swiperCard}`}>
                                                            
                                                </div>
                                            </SwiperSlide> 
                                    </Swiper>

                                     <div className={`purpleBg ${styles.indexwrapper}`}></div>        
                            </div>
                      </div> 
                </div>
            </div>
        </>
    )
}
    export default ImpactingCardSwiper;