"use client";

import Link from 'next/link';
import Image from 'next/image';
import Slider from 'react-slick';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import { HiArrowNarrowRight } from "react-icons/hi";
import { useState } from 'react';
// import styles from './SolaqSlider.module.css';
import styles from './slicky.module.css';
 
import React, { useRef } from "react";

import group1 from "../../../assets/icons/group1.png";
import group2 from "../../../assets/icons/group2.png";
import group3 from "../../../assets/icons/group3.png";
import grocery from "../../../assets/homeAssets/premetions.png";
 
import slickyicon1 from "../../../assets/homeAssets/slickyIcons/slicky4-icon3.png";
import slickyicon2 from "../../../assets/homeAssets/slickyIcons/slicky4-icon2.svg";
import slickyicon3 from "../../../assets/homeAssets/slickyIcons/slicky4-icon1.svg";
import slickyicon4 from "../../../assets/homeAssets/slickyIcons/slicky-4-icon4.png";

import soloqIcon1 from "../../../assets/homeAssets/slickyIcons/solaq_icon1.svg";
import soloqIcon2 from "../../../assets/homeAssets/slickyIcons/solaq_icon7.svg";
import soloqIcon3 from "../../../assets/homeAssets/slickyIcons/solaq_icon5.svg";
import soloqIcon4 from "../../../assets/homeAssets/slickyIcons/solaq_icon4.svg";
import soloqIcon5 from "../../../assets/homeAssets/slickyIcons/solaq_icon6.svg";
import soloqIcon6 from "../../../assets/homeAssets/slickyIcons/solaq_icon2.svg";
import fish from "../../../assets/homeAssets/fish.png";
import dlq from "../../../assets/homeAssets/slq.png";

// import soloqIcon6 from "../../../assets/homeAssets/slickyIcons/solaq_icon2.svg"; 
 //import sliderBg from "../../../assets/homeAssets/slider-teora-bg.png";

const SolaqSlider = () => {
 const sliderRef = useRef(null);
   const [currentSlide, setCurrentSlide] = useState(0); // Track current index
  const totalSlides = 5;
 
 const settings = { 
    centerMode: true,
    infinite: true,
    centerPadding: "140px",
    slidesToShow: 1,
    speed: 500,
    arrows: false,
    afterChange: (index) => setCurrentSlide(index), 
    
      responsive: [
      
        {
          breakpoint: 668, // example: tablet/desktop
          settings: {
            centerMode: true,
            centerPadding: "0px",
            slidesToShow: 1, // explicitly force 1 slide
          },
        },
      ],

  };


  return (  
    <div className="slider-container w-100 " >

     <div className="container d-flex justify-content-between align-items-center flexwrap "> 
        <div>
              <span className="rounded-pill buge-style" >POWERED BY BIOTECH. BACKED BY SCIENCE. SUSTAINED BY NATURE.</span>
              <h1 className="m-top-b h1500 h11536 moH1">THAT’S WHY WE BUILT SOLAQ<sup>TM</sup></h1> 
        </div>
        <div className='d-flex justify-content-end  w100Mobile'>
               <div className={`${styles.countscroll}`}>
                  <div 
                    className='d-flex justify-content-center align-items-center'
                      onClick={() => sliderRef.current.slickPrev()}
                      style={{ cursor: "pointer" }}
                  > <MdArrowBackIos size={24} /></div>

                  <div className={`d-flex justify-content-center align-items-center ${styles.values}`}><span> {String(currentSlide + 1).padStart(2, "0")}</span></div>
                  <div 
                      className='d-flex justify-content-center align-items-center'
                      onClick={() => sliderRef.current.slickNext()}
                    style={{ cursor: "pointer" }}
                  ><MdArrowForwardIos size={24} /></div>
            </div>
        </div>
     </div>

      <Slider {...settings} ref={sliderRef}> 
        <div className={`slide_containe deepPurple`}>
            <div className=''> 
                <div className="row">
                    <div className={`col-md-9 c0l-12`}>
                        <p>01/05</p>
                        <div className={`${styles.slicky_p}`}>
                             <h5 className='pb-4'>
                              Using “NOBEL PRIZE WINNING technologies” SOLAQ<sup>TM</sup> our
                              BIOTECH PLATFORM Designs Desease & Growth mangement
                              solutions for sustainable Farming. 
                            </h5>
                            <img
                                src="/icons/slicky-home-1.svg"
                                alt='solutions for sustainable Farming'
                                className='mobile_view imgWidth' 
                              />
                            <p className='fw-100'>
                                We took the best advances in human pharmaceuticals , stripped out the chemicals, needles,
                                and stress—and built a platform that empowers farmers, simplifies disease control, and brings
                                clean growth of farmed species within everyone’s reach without being harsh on our planet !
                            </p> 
                        </div>
                    </div>

                    <div className="col-md-3 col-12 desctop_view ">
                      <img
                        src="/icons/slicky-home-1.svg"
                        alt='solutions for sustainable Farming'
                        className='img-w' 
                      />
                    </div>
                    <p className={`lavender-color ${styles.slicky_p} pt-1`}>ONE PLATFORM, MULTIPLE SPECIES. PROVEN IN THE FIELD. DESIGNED BY SCIENTISTS. POWERED BY AI</p>
                </div>
            </div>
        </div>

        <div className={`slide_containe accentLimebg pt-4 `}>
            <div className='purpleColor'> 
                <div className="row rowReverce">
                    <span><p>02/05</p></span>
                    <div className={`col-md-9 col-8 d-flex flex-column justify-content-between`}>
                        
                         <div className='super‑powers'>
                            <p className='mt-3' style={{fontSize:'22px'}}>
                                  What SOLAQ™ Delivers : One platform, three super‑powers
                            </p> 
                         </div>
                     
                        <div className="row">
                            <div className="col-md-4 col-12">
                                  <div className='d-flex justify-content-center logoslider mb-3'>
                                    <Image
                                        src={group1}
                                        width={70}
                                        alt='Prevent Disease'
                                  />
                                  </div>
                                  <div className={`purpleBg text-center text-primaryBeige ${styles.fontCard}`}>Prophylactic- Stop outbreaks</div>
                                  <p className={`p_fonts-w mb-0 mt-2 `}>Prevent Disease Before It Even Starts. <span className={`${styles.zerpfonts}`}>Higher survival . Regulation‑ready</span></p>
                                
                            </div>
                            <div className="col-md-4 col-12">
                                  <div className='d-flex justify-content-center logoslider mb-3'>
                                    <Image
                                       src={group2}
                                        width={70}
                                       alt='Prevent Disease Before'
                                  />
                                  </div>
                                  <div className={`purpleBg text-center text-primaryBeige ${styles.fontCard}`}> Therapeutic- Fight Back Fast</div>
                                  <p className='p_fonts-w mb-0 mt-2'>Treats active outbreaks, stress-free. <span className={`${styles.zerpfonts} `}>Zero injections, zero handling</span></p> 
                            </div>
                            <div className="col-md-4 col-12">
                                  <div className='d-flex justify-content-center logoslider mb-3'>
                                    <Image
                                       src={group3}
                                       width={70}
                                       alt='Cuts feed-to-growth'
                                  />
                                  </div>
                                  <div className={`purpleBg text-center  text-primaryBeige ${styles.fontCard}`}> Grow Bigger-Boosts Metabolism</div>
                                  <p className={`p_fonts-w mb-0 mt-2 `}>Cuts feed-to-growth time. <span className={`${styles.zerpfonts}`}> Tougher immunity. Stronger stock</span></p> 
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 col-4 ">
                        <div className='padding_500' style={{padding:'0 0px 0 15px'}}>
                               <img
                                    src="/icons/slicky-home-1.svg"
                                    alt='solutions for sustainable Farming'
                                    height={120}
                                    className='width_img'
                                  />
                                  <h6 className='h6why mt-3'><strong>What you get?</strong></h6>
                                  <h6 className='h6bold'>
                                    A room-temperature stable
                                    powder that turns ordinary farm
                                    feed and foliar sprays into disease
                                    shields and growth boosters. 
                                  </h6>
                                  <p className='mb-0 mt-3 d-flex justify-content-end'>
                                      <Link href="/" className='purpleColor fw-medium Explore-more'>Explore more <HiArrowNarrowRight/></Link> 
                                  </p>
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>

        <div className={`slide_containe mutedLavenderBg pt-4 `}>
            <div className='purpleColor'> 
               <span><p>03/05</p></span>
                <div className="row ">
                    <div className={`col-md-12 col-8 d-flex flex-column justify-content-between`}>
                        
                         <div className='super‑powers'>
                            <h4 className='mt-3 ' style={{fontSize:'22px'}}>
                                   How Solaq™ Works : Smart. Precise. Fast. From Lab To Field In Months, Not Years. 
                            </h4> 
                         </div>
                     
                        <div className="row mt-4">
                            <div className="col-md-3 col-12"> 
                                  <div className={`purpleBg text-center text-primaryBeige ${styles.fontCard}`}>AI-driven bioinformatics</div>
                                  <p className='p_fonts-w mb-0 mt-2'>AI maps the pathogen, immune
                                    triggers & growth inefficiencies
                                    like a GPS. No <strong>guesswork.</strong></p> 
                            </div>
                            <div className="col-md-3 col-12"> 
                                  <div className={`purpleBg text-center text-primaryBeige ${styles.fontCard}`}>Synthetic biology</div>
                                  <p className='p_fonts-w mb-0 mt-2'>Custom-designs subunit peptides, RNA) designs the fix. <strong>100% Natural.</strong></p> 
                            </div>
                            <div className="col-md-3 col-12"> 
                                  <div className={`purpleBg text-center text-primaryBeige ${styles.fontCard}`}>Precision fermentation</div>
                                  <p className='p_fonts-w mb-0 mt-2'>
                                      Precision fermentation scales it —farm-ready in 6–8 months, not 3+ years.
                                      <strong>Fast turnaround.</strong>
                                  </p> 
                            </div>
                            <div className="col-md-3 col-12 "> 
                                  <div className={`purpleBg text-center text-primaryBeige ${styles.fontCard}`}> Targeted encapsulation</div>
                                  <p className='p_fonts-w mb-0 mt-2'>
                                      Each biologic is locked and delivered directly to gut or root.
                                      <strong>Stable on the shelf. Stress-free for animals</strong>
                                  </p> 
                            </div>
                        </div>
                    </div> 
                    <div className='col-md-12 col-4'>
                           <ul className='p-0 mt-3 m-0 list-unstyled d-flex justify-content-between flexwraap'>
                              <li>
                                  <Image
                                    src={soloqIcon5}
                                      width={90}
                                      height={90}
                                    alt="image"
                                  />
                              </li>
                              <li className='pt-3'>
                                  <Image
                                    src={soloqIcon2}
                                    width={90}
                                    height={90}
                                    alt="image"
                                  />
                              </li>   
                                <li>
                                  <Image
                                    src={soloqIcon3}
                                    width={90}
                                    height={90}
                                    alt="image"
                                  />
                              </li>
                                <li className='pt-3'>
                                  <Image
                                    src={soloqIcon4}
                                      width={90}
                                    height={90}
                                    alt="image"
                                  />
                              </li>  
                                <li>
                                  <Image
                                    src={soloqIcon5}
                                      width={90}
                                    height={90}
                                    alt="image"
                                  />
                              </li>
                                <li className='pt-3'>
                                  <Image
                                    src={soloqIcon6}
                                    width={90}
                                    height={90}
                                    alt="image"
                                  />
                              </li>  
                                <li>
                                  <Image
                                    src={soloqIcon1}
                                      width={90}
                                    height={90}
                                    alt="image"
                                  />
                              </li>
                                <li className='pt-3'>
                                  <Image
                                    src={grocery}
                                    width={90}
                                    height={90}
                                    alt="image"
                                  />
                              </li>
                              
                          </ul>
                            <p className='mb-0 mt-3 d-flex justify-content-end'>
                                  <Link href="/" className='purpleColor fw-medium Explore-more'>How it Works ?<HiArrowNarrowRight/></Link> 
                            </p> 
                    </div>
                </div>
            </div>
        </div>
          
        <div className={`slide_containe lavenderBg pt-4 `}>
            <div className='purpleColor'> 

                <span><p>04/05</p></span> 
                <div className="row "> 
                          <div className='mb-3 super‑powers'>
                            <h4 className='mt-3' style={{fontSize:'22px'}}>
                                SOLAQ™ Is Built For Farmers & Global Food Security At Scale
                            </h4> 
                         </div>
                           <div className="col-md-3 col-12 farmers_flex">
                                  <div className=' mb-3'>
                                    <Image
                                       src={slickyicon3}
                                       width={110}
                                       height={110}
                                       alt='Every biologic is designed'
                                  />
                                  </div> 
                                  <p className='mt-2'> 
                                    Every biologic is designed by AI
                                    to boost resilience and
                                    performance without the
                                    baggage of old methods. 
                                  </p> 
                            </div>
                            <div className="col-md-3 col-12 farmers_flex">
                                  <div className='mb-3'>
                                    <Image
                                       src={slickyicon2}
                                        width={110}
                                        height={110}
                                        alt='Forget 3-year vaccine'
                                  />
                                  </div>
                                  <p className='mt-2'> 
                                      Forget 3-year vaccine
                                      development cycles, SOLAQ™
                                      delivers scalable toxin-free
                                      biologics in 6–8 months.

                                  </p>
                            </div>

                            <div className="col-md-3 col-12 farmers_flex">
                                  <div className='mb-3'>
                                    <Image
                                       src={slickyicon1}
                                        width={110}
                                        height={110}
                                        alt='Smarter feed that delivers'
                                  />
                                  </div>
                                  <p className='mt-2'> 
                                       Smarter feed that delivers
                                        Better yields, faster harvests,
                                        protects stock, and leaves
                                        zero residues behind.  
                                  </p>
                            </div>
                            <div className="col-md-3 col-12 farmers_flex">
                                  <div className='mb-3'>
                                    <Image
                                       src={slickyicon4}
                                        width={110}
                                        height={110}
                                        alt='hatcheries to high-density'
                                  />
                                  </div>
                                  <p className='mt-2'> 
                                      From hatcheries to high-density
                                      barns, SOLAQ™ fits in. Climate
                                      stable. No infrastructure. No
                                      extra labour.
                                  </p>
                            </div>
                        
                    

                      <p className='mb-0 mt-3 d-flex justify-content-end'>
                          <Link href="/" className='purpleColor fw-medium'>Explore more <HiArrowNarrowRight/></Link> 
                      </p>

                    
                </div>
            </div>
        </div>

         <div className={`slide_containe accentBlueBg pt-4 `}>
            <div className='purpleColor'> 
          
                      <span><p>05/05</p></span> 

                        <div className="row"> 
                            <div className="col-md-8 col-12">
                                <div className='mb-3 super‑powers'>
                                  <h4 className='mt-3' style={{fontSize:'22px'}}>
                                      Scientifically Validated & Market-Ready,<br></br>
                                      Proven In Aquaculture—Scaling To Other Industries
                                  </h4> 
                                </div>

                                <div className='scientifically d-flex justify-content-between pt-4'>
                                    <div className='d-flex gap-3'>
                                       <div>
                                           <Image
                                              src={fish}
                                               style={{width:'120px', height:'100%'}}
                                               alt='Aquaculture—Scaling To'
                                                  className='img_hhe'
                                            />
                                       </div>
                                        <div className='pwaight'>
                                            <p> Up to 90%survival vs. 30% <br className='br_none'></br>untreated with FishGuard <sup>TM</sup></p>
                                            <p> Up to 90%survival vs. 2% <br className='br_none'></br>untreated with ShrimpGuardTM</p>
                                            <p> 10%faster growth and 0.2– <br className='br_none'></br> 0.5 improvement in FCRwith <br className='br_none'></br>FishJumbo <sup>TM</sup></p>
                                        </div>
                                    </div>
                                     
                                   <div className={` clearance_elements`}>
                                         <div className='clearance mb-3'>
                                             Rapid viral clearance- in 10 days
                                        </div>
                                        <div className='clearance mb-3'>
                                             70% reduction in antibiotic use
                                        </div>
                                        <div className='clearance mb-3'>
                                            Upto 45x improved survival
                                        </div>
                                        <div className='clearance mb-3'>
                                             30% Reduction in feed costs
                                        </div>
                                   
                                   </div>
                                
                                </div>

                            </div>

                            <div className="col-md-4 col-12"> 
                                  <div className='d-flex justify-content-end flex_img_width'>
                                      <Image
                                        src={dlq}
                                        style={{width:'80%', height:'80%'}}
                                        alt='apid viral clear' 
                                        className=''
                                      />  
                                  </div>       
                                  
                                  <p className='mb-0 mt-3 d-flex justify-content-end'>
                                      <Link href="/" className='purpleColor fw-medium'>Aquaculture solutions <HiArrowNarrowRight/></Link> 
                                  </p>
                            </div>


                        </div> 

               
            </div>
        </div>        
        
      </Slider>

    </div>
  );
};

export default SolaqSlider; 
