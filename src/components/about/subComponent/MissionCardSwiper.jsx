'use client'
import { useState } from 'react';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export const MissionCardSwiper = ({missionCardSwiperData, heading}) => {
    const [swiperInstance, setSwiperInstance] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const getSlideClass = (slideIndex) => {
        const total = missionCardSwiperData.length;
        const prev = (activeIndex - 1 + total) % total;
        const next = (activeIndex + 1) % total;

        if (slideIndex === activeIndex) return 'active-slide';
        if (slideIndex === prev) return 'prev-slide';
        if (slideIndex === next) return 'next-slide';
        return '';
    };

    return (
        <div>
            <style jsx>{` 
                .swiperContaiiners {
                    transition: transform 0.5s ease, filter 0.5s ease;
                }

                .active-slide {
                    transform: scale(1.1);
                    z-index: 2;
                }

                .prev-slide {
                    filter: grayscale(100%);
                    opacity: 0.7;
                    z-index: 1;
                }

                .next-slide {
                    opacity: 0.9;
                    z-index: 1;
                }
               
            `}</style>
 
            <div className="container" >
                <div className="d-flex justify-content-between align-items-center purpleColor">
                    <div style={{ maxWidth: '800px' }}>
                        <h1 className="h1500 revolutionising">
                           {heading}
                        </h1>
                    </div>

                    <div className="countscroll borderColor">
                        <div
                            className='d-flex justify-content-center align-items-center'
                            style={{ cursor: "pointer" }}
                            onClick={() => swiperInstance.slidePrev()}
                        >
                            <MdArrowBackIos size={24} />
                        </div>

                        <div className="d-flex justify-content-center align-items-center values_border borderColor">
                            <span>{String(activeIndex + 1).padStart(2, '0')}</span>
                        </div>

                        <div
                            className='d-flex justify-content-center align-items-center'
                            style={{ cursor: "pointer" }}
                            onClick={() => swiperInstance.slideNext()}
                        >
                            <MdArrowForwardIos size={24} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid" style={{ width: '94%' }}>
                 <div className="text-center purpleColor"
                    style={{maxWidth:'550px', margin:'0 auto'}}
                 >
                    <h4 className='h2si'>{missionCardSwiperData[activeIndex].heaing}</h4>
                    <p className='paragraph_elements els2'><strong>{missionCardSwiperData[activeIndex].info}</strong></p>
                </div>
                <div className='d-flex'> 
                    <Swiper
                        className="aboutSweeper"
                        spaceBetween={30}
                        slidesPerView={3}
                        centeredSlides={true}
                        loop={true}
                        onSwiper={setSwiperInstance}
                        onSlideChange={(swiper) => {
                            setActiveIndex(swiper.realIndex);
                        }}
                    >
                        {missionCardSwiperData.map((slides, index) => (
                            <SwiperSlide key={index}>
                                <div className={`swiperContaiiners ${getSlideClass(index)}`}> 
                                    {
                                        // activeIndex === index && (
                                        //     <div className="text-center purpleColor">
                                        //         <h2>{slides.heaing}</h2>
                                        //         <p>{slides.info}</p>
                                        //     </div>
                                        //   )
                                    }

                                    <div className='aboutimages d-flex align-items-center h-100'>
                                        <img src={slides.image} className='w-100' />
                                    </div>

                                    {activeIndex === index && (
                                        <h6 className='purpleColor text-center mt-3'>{slides.title}</h6>
                                    )}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>


        </div>
    );
};
