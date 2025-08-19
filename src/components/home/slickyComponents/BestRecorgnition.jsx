 
import Slider from 'react-slick';

import { useEffect } from 'react';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import styles from "./slicky.module.css";
import Link from 'next/link';
import Image from 'next/image'; 
import img1 from "../../../assets/homeAssets/cardImg.jpg";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useRef, useState } from 'react';
import single_logos from "../../../assets/homeAssets/single-logos.jpg"
 import CompanyComponents from './CompanyComponents';
 

import work_media2 from "../../../assets/homeAssets/work-media2.png";
import work_media1 from "../../../assets/homeAssets/work_media1.png";

import { motion } from "framer-motion";
import { useAnimationContext } from '@/context/AnimationContext'; 


const BestRecorgnition =() =>{
    // const url = "https://www.eco-business.com/"; 
    const {fadeLeft} = useAnimationContext(); 
      
            
          const [step, setStep] = useState(1);
        
          const cardRefs = [
            useRef(null),
            useRef(null),
            useRef(null),
            useRef(null),
          ];
        
          const initCards = () => {
            cardRefs.forEach((ref, index) => {
              if (!ref.current) return;
              ref.current.style.left = '85%';
              ref.current.style.visibility = 'hidden';
              ref.current.style.zIndex = index + 2;
            });
            if (cardRefs[0].current) {
              cardRefs[0].current.style.visibility = 'visible';
            }
          };
        
          const updateCards = () => {
            cardRefs.forEach((ref, index) => {
              const card = ref.current;
              if (!card) return;
        
              if (index < step) {
                card.style.left = '0%';
                card.style.visibility = 'visible';
                card.style.zIndex = 100 + index;
              } else if (index === step) {
                card.style.left = '85%';
                card.style.visibility = 'visible';
                card.style.zIndex = 100 + index;
              } else {
                card.style.left = '85%';
                card.style.visibility = 'hidden';
                card.style.zIndex = index + 2;
              }
            });
          };
        
          useEffect(() => {
            initCards();
          }, []);
        
          useEffect(() => {
            updateCards();
          }, [step]);
        
          const next = () => {
            if (step < cardRefs.length - 1) setStep((prev) => prev + 1);
          };
        
          const prev = () => {
            if (step > 0) setStep((prev) => prev - 1);
          }; 

          const containerStyle = {
            position: 'relative',
            width: '100%',
            height: '620px',
            border: '1px solid #ccc',
            background: 'white',
            overflow: 'hidden',
            borderTopLeftRadius: '50px',
            borderBottomLeftRadius: '50px',
          };

          const cardStyle = {
            position: 'absolute',
            height: '100%',
            width: '100%', 
            transition: 'left .6s ease-in-out',
            borderTopLeftRadius: '50px',
            borderBottomLeftRadius: '50px',
          };


    return(
        <> 
             <div className="purpleColor"> 
                   <div className="container">
                        <div className="row">
                                <motion.div className='col-9'
                                    variants={fadeLeft}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: false, amount: 0.2 }} 
                                > 
                                    <h1 className="m-top-b h1500">SUPPORTED & AWARDED BY THE BEST- RECOGNITION</h1> 
                                </motion.div>
                                {  

                                <div className={`col-3 d-flex align-items-center justify-content-end`}>   
                                        <div className={`${styles.countscroll} ${styles.countscroll2}`} > 
                                                <div className={`d-flex justify-content-center align-items-center`} 
                                                  style={{
                                                        cursor: step === 1 ? "not-allowed" : "pointer",
                                                        pointerEvents: step === 1 ? "none" : "auto",
                                                        opacity: step === 1 ? 0.4 : 1,
                                                    }}
                                                 
                                                    onClick={prev}
                                                >
                                                    <MdArrowBackIos size={24} />  
                                                </div> 
                                                <div className={`d-flex justify-content-center align-items-center ${styles.values} ${styles.values2}`}><span> <span>{step}</span> </span></div> 
                                                <div className='d-flex justify-content-center align-items-center' style={{ cursor: "pointer" }}
                                                  onClick={next}
                                                >
                                                    <MdArrowForwardIos size={24} />
                                                </div>
                                        </div> 
                                </div>
                                
                            }

                           </div>
                    </div> 

                   <div >
                        <div style={containerStyle}>
                            {/* Card 1 */}
                            <div
                            ref={cardRefs[0]}
                            style={{ ...cardStyle, backgroundColor: '#f5f0e8' }}
                            >
                            <div className="supported_slider_card corporateBg border_radius_round2 sliderCardHeight mb-3 industry-slide" style={{ padding: '0 0 1.5rem 0' }}>
                                <div className="row">
                                    <div className="col-5 d-flex align-items-center">
                                        <div className="p_smarter">
                                        <h4 className="mb-4">The Liveability Challenge 2023</h4>
                                        <p>
                                            WINNER- Teora secured $1 million in funding, standing out
                                            among over 600 entries for its potential to address global
                                            food security issues and to solve a key fish viral disease
                                            Scale Drop Disease Virus, which currently has no solutions
                                        </p>
                                        <p className="mt-4 mb-4">
                                            <Link href="https://www.eco-business.com/" className="accentRedColor">
                                            https://www.eco-business.com/
                                            </Link>
                                        </p>
                                        <p>
                                            <Link href="https://www.eco-business.com/" className="purpleColor fw-medium">
                                            Explore more <FaLongArrowAltRight />
                                            </Link>
                                        </p>
                                        </div>
                                    </div>
                                        <div className="col-7">
                                            <div className="border_radius_round2 bg-white" style={{ padding: '0 20px 20px 20px' }}> 
                                            <h5 className='boldh5slid'>
                                                <b>Susteon and Teora win S$1<br/> million prize each at the <br/> Liveability Challenge 2023</b>
                                            </h5>
                                               <Image height={370} src={img1} style={{ width: '80%', height:'' }} alt="Susteon and Teora win" />
                                            </div>
                                        </div>
                                </div>
                                
                                <div className={`container ${styles.sliderBanner}`}>
                                      <Image src={single_logos} style={{ width: '100%', height: '80px' }} alt="company logos" />
                                </div>
                            </div>
                            </div>

                            {/* Card 2 */}
                            <div
                               ref={cardRefs[1]}
                               style={{ ...cardStyle, backgroundColor: 'mutedBeigeBg' }}
                            >
                                <div className="supported_slider_card  border_radius_round2 sliderCardHeight d-flex justify-content-center align-items-center" style={{ padding: '0 0 1.5rem 0', background:'#F5F4F1' }}>
                                    <div className="container purpleColor border_radius_round2 position-relative">
                                        <div className="row position-relative">
                                            <div className="col-md-3">
                                            <div style={{ position: 'absolute', left: '30px', zIndex: '1', top: '60px', color: '#b7b0bc' }}>
                                                <h1>WORK WORTH <br /> BEING IN MEDIA</h1>
                                                <div className="mt-5">
                                                    <a className="buttons-primary" href="/">
                                                        Explore More
                                                    </a>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="col-5 d-flex align-items-center">
                                            <Image src={work_media1} style={{ width: '100%', height: '85%' }} 
                                              alt=' Explore More'
                                            />
                                            </div>
                                            <div className="col-4 d-flex align-items-center">
                                            <Image src={work_media2} style={{ width: '100%', height: '85%' }} 
                                              alt='BEING IN MEDIA'
                                            />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div
                            ref={cardRefs[2]}
                            style={{ ...cardStyle, backgroundColor: 'beigeCreamBg' }}
                            >
                                <CompanyComponents/>

                            </div>
                        </div> 
                </div>
 

                   
               </div> 
        
        </>
    )
}

export default BestRecorgnition;

