
'use client';
import { useState } from 'react';
import dynamic from 'next/dynamic';

import { useRef } from "react";
import styles from './home.module.css';
import { MdArrowBackIosNew, MdArrowForwardIos  } from "react-icons/md";
const Slider = dynamic(() => import('react-slick'), { ssr: false });

const IndustrySlider = ({data, text, className, solaqClass}) => {
 


 const sliderRef = useRef(null);
 const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    beforeChange: (current, next) => setActiveIndex(next),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
        
            <div className="container">
                <div className={`row d-flex position-relative ${styles.rowcontainer} ${solaqClass}`}>

                    <div className={`${styles.left_arrow} `}>
                        <div className={`d-flex gap-2 justify-content-between align-items-center w-100 ${className}`}>
                                <div className={`purpleColor ${styles.infoh1}`} >
                                     <p className={`mb-0`}>{text}</p>
                                </div>
                                 <div className="d-flex gap-2 fs-5 "> 
                                    <button className="btnStyles purpleColor"
                                        onClick={() => sliderRef.current.slickPrev()}
                                    >
                                        <MdArrowBackIosNew/>
                                    </button> 
                                    <button className="btnStyles purpleColor"
                                          onClick={() => sliderRef.current.slickNext()}
                                    >
                                        <MdArrowForwardIos/>
                                    </button>
                                  </div> 
                        </div>
                    </div>  

                    <div className={`${styles.right_slider} right_slider2`}>
                           <div className={styles.sliderWrapper}>
                            
                                 <Slider {...settings} ref={sliderRef}>
                                    {
                                       data.map((items, index) =>(
                                           <div className={`d-flex justify-content-center slicky_container p-3
                                           
                                           `}  key={index}>
                                                <div className={` slickys purpleColor ${solaqClass}`} > 
                                                    <div className='d-flex justify-content-center'>
                                                            <img
                                                                src={items.image}
                                                                width={items.widths}
                                                                height={items.heights}
                                                                alt='icons' 
                                                                className={`mb-3 ${activeIndex === index ? styles.activeSlide : ""}`} 
                                                            />
                                                    </div>
                                                      <h4 className={`text-center mt-2 h4industry`}>{items.title}</h4> 
                                                      <p className='text-center industry_p'>
                                                          {items.text} <span><strong>{items.bold}</strong></span>
                                                      </p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                        
                                 </Slider>
                           </div>   
                           <div className={`${styles.rowWhite} rowWhites`}></div>
                    </div> 

               </div>
            </div>
        
  );
};

export default IndustrySlider;
