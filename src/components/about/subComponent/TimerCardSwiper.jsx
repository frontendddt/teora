
"use client";
import Styles from "../stickyAbout.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image";
import { Autoplay } from 'swiper/modules';
import { MdArrowOutward } from "react-icons/md";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";

const TimerCardSwiper = ({cardcontant, heading, TimerCardSwiperWhyUS,  varient = "default"}) =>{ 
        const swiperRef = useRef(null);   
        const [activeIndex, setActiveIndex] = useState(0);
        const [progress, setProgress] = useState(0);  

        useEffect(() => {
            const interval = setInterval(() => {
                setProgress((prev) => {
                    if (prev >= 100) {
                    swiperRef.current?.slideNext();
                    return 0;
                    }
                    return prev + 1;
                });
            }, 35);

            return () => clearInterval(interval);
        }, []);

        const onSlideChange = (swiper) => {
            setActiveIndex(swiper.realIndex);
            setProgress(0); 
        };


    // verient pages design
    const renderCardContent = (slide) =>{
        if(varient === "whyusTimerDesign"){
            return( 
                    <div className="card_table_container d-flex flex-column justify-content-between">

                        <div className="purpleColor">
                            <div className="p-all h3lineHeights">
                                 <h3 className="text-center fw-400">{slide.heading}</h3> 
                            </div>
                       
                            <table className={`purpleColor ${Styles.table_borders}`}>
                                <thead>
                                    <th>OTHERS</th>
                                    <th>TEORA</th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td> {slide.tableTrtd1}</td>
                                        <td> {slide.tableTrtd1}</td>
                                    </tr> 

                                </tbody>
                            </table>
                       </div>
                        <div className="adoption_sections position-relative text-primaryBeige">
                                <img
                                    src="/image/adoption_fish.png"
                                    className="w-100"
                                    alt={`${slide.alt}`}
                                    />
                                <div className={` ${Styles.contents} h3lineHeights`}>
                                    <h2>YOUR WIN</h2>
                                    <h3 className="mb-0">  
                                        {slide.imgTitle}
                                    </h3>
                                </div>
                        </div>  
                    </div> 

            )
        }

        return(
             <div className="cardslider purpleColor max-heightsSwip d-flex flex-column justify-content-between">
                    <div className={Styles.card_content}>
                        <h4 className="f-600" style={{ display: 'inline-block', maxWidth: '300px' }}>
                            {slide.heading}
                        </h4>
                        <p>{slide.title}</p>
                    </div>

                    <div className="align-items-end"> 
                        <Image
                            src={slide.img}
                            alt={slide.heading}  
                            className="cardImage_heights"
                        />
                    </div>  
                    
            </div>
        )
    }

    return(
        <>
            <div className={Styles.proprietarySection}>
                        <div className="mb-4">
                            <h2 className={`text-primaryBeige ${Styles.margin_bottom}`} >
                                {heading}
                            </h2>
                        </div>

                        <div className="row">
                                
                            <div className="col-md-6 d-flex flex-column justify-content-between">
                                <div>
                                    <div className={Styles.progress}>
                                        <div
                                            className={Styles['progress-bar']}
                                            style={{ width: `${progress}%`, transition: 'width 0.35s linear' }}
                                        ></div>
                                    </div>
                                    <div className={Styles['progress-label']}>
                                        {String(activeIndex + 1).padStart(2, '0')}/{String(cardcontant.length).padStart(2, '0')}
                                    </div>

                                    <ul className={`activelistCard ${Styles.navList}`}>
                                        {cardcontant.map((item, index) => (
                                        <li
                                                key={index}
                                                onClick={() => swiperRef.current.slideToLoop(index)}
                                                className={` ${Styles.navItem} ${index === activeIndex ? 'active' : ''}`}>
                                            <div className="d-flex gap-4 align-items-center mb-3 text-primaryBeige">
                                                <div className="h-100" style={{width:'50px'}}>  
                                                        {index === activeIndex && <span className={Styles.activeIconst}>
                                                        <div className={`${Styles.activeArraw}`}>
                                                                <MdArrowOutward className="purpleColor"/>
                                                        </div>
                                                        </span>}
                                                </div>
                                                <div className={`${Styles.activeText}`}>
                                                    <h4>{item.listActive}</h4> 
                                                </div>
                                            </div>
                                        </li>
                                        ))}
                                    </ul>
                                </div>   

                                 <div className="buttons d-flex gap-2" style={{marginLeft:'2rem'}}>
                                    <Link className="buttons-primary " href="/">Explore Platform</Link>
                                 </div>
                            </div> 
                                
                            <div className="col-md-6">
                                    <div className={`corporateBg ${Styles.border_radiusEl} border_radiusEl`}>
                                        <Swiper
                                            modules={[Autoplay]}
                                            onSwiper={(swiper) => (swiperRef.current = swiper)}
                                            onSlideChange={onSlideChange}
                                            slidesPerView={1}
                                            loop={true}
                                            speed={800}
                                            autoplay={{ delay: 4000, disableOnInteraction: false }}
                                            grabCursor={true}
                                            >
                                            {cardcontant.map((slide, index) => (
                                                <SwiperSlide key={index}> 
                                                    {renderCardContent(slide)}
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>
                                    </div>
                                </div>

                            </div>
                    </div>
        </>
    )
}

export default TimerCardSwiper;