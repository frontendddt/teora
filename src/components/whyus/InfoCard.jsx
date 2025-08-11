"use client"

import React, { useRef, useState } from 'react';
import styles from "./whyUS.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { IoIosArrowBack, IoIosArrowForward  } from "react-icons/io";

const InfoCard = ({classNameContainer, InfoCardData}) =>{
    const swiperRef = useRef(null);

    return(
        
         <> 
             <div className={`${classNameContainer} position-relative`}>
                    <Swiper 
                           ref={swiperRef} 
                            navigation={false}  
                            modules={[Navigation]}  
                            loop={true} 
                            className="mySwiper"
                            spaceBetween={45}  
                            slidesPerView={1}  
                            breakpoints={{
                            640: {
                                slidesPerView: 2,  
                            },
                            768: {
                                slidesPerView: 3,  
                            },
                            }}
                        >
                        {InfoCardData.map((el, index) =>(
                             <SwiperSlide key={index} className=''>
                                    <div className={`padding2rem borderRadius20 text-center h-100 ${el.bgColor} ${el.color} ${styles.infoCard}`}>
                                        <div className="mb-4">
                                            <img
                                                src={el.image}
                                                width={50}
                                            />
                                        </div>
                                        <h5 className="">{el.headings}</h5>
                                        <p>  {el.title} </p>
                                    </div>
                            </SwiperSlide>
                        ))} 
                            
                        </Swiper>

                    <button className="left-0 arrows" type='button' onClick={() => swiperRef.current.swiper.slidePrev()} > 
                        <IoIosArrowBack/>   
                    </button>

                     <button className="right-0 arrows" onClick={() => swiperRef.current.swiper.slideNext()}> 
                        <IoIosArrowForward/>   
                     </button>
               </div>  

         </>
        

    )
}
export default InfoCard;

