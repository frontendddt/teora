
 "use client"
 import { useState, useEffect, useRef } from "react";
 import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
 import styles from '../home/slickyComponents/slicky.module.css';
import { Swiper, SwiperSlide } from "swiper/react";


 

const Building = () =>{ 

      const [slideCounter, setSlideCounter] = useState(1);
        const swiperRef = useRef(null);  
  const slides = [1, 2, 3];
        //   useEffect(() => {
        //       if (swiperRef.current) {
        //           setSlideCounter(swiperRef.current.realIndex + 1);
        //       }
            
        //   }, []);

    return(
       <div>
              <div className="container d-flex justify-content-between align-items-center"> 
                    <div> 
                        <h1 className="m-top-b h1500 h11536">THAT’S WHY WE BUILT SOLAQ<sup>TM</sup></h1> 
                    </div>
                    <div className={`${styles.countscroll}`}>
                        <div 
                            className='d-flex justify-content-center align-items-center' 
                            style={{ cursor: "pointer" }}
                            onClick={() => swiperRef.current.slidePrev()}
                        > <MdArrowBackIos size={24} /></div>

                        <div className={`d-flex justify-content-center align-items-center ${styles.values}`}><span>  
                            {String(slideCounter).padStart(2, "0")}
                        </span></div>

                        <div 
                            className='d-flex justify-content-center align-items-center'   
                            style={{ cursor: "pointer" }}
                            onClick={() => swiperRef.current.slideNext()}
                        ><MdArrowForwardIos size={24} /></div>
                    </div>
                </div>
                
                <Swiper
                     onSwiper={(swiper) => (swiperRef.current = swiper)}
                     onSlideChange={(swiper) => setSlideCounter(swiper.realIndex + 1)}
                     spaceBetween={20}
                >   

                      <SwiperSlide>  
                        <div className={`accentLimebg slide_containe p-0 overflow-hidden`}>  
                            <div className="row h-100">  
                                <div className=" h-100" style={{width:'80%'}}>  
                                    <div className='whyusPadding h-100'>  
                                        <div className='p_around h-100 d-flex flex-column justify-content-between'> 
                                            <div>
                                                <span><p>01/05</p></span> 
                                                <h5 className='mt-3 ' >
                                                    FOR FARMERS: GROW MORE. LOSE LESS. STRESS NEVER
                                                </h5>  
                                            </div>

                                        <div className='d-flex w-100'>
                                            <div className='w-75'>
                                                <div className="card_contaoiner_flex">
                                                    <div className='max_width_card'>
                                                        <p className='refrange_headings text-center text-primaryBeige purpleBg'>No refrigeration = lowerlogistics cost</p>
                                                        <p className='p-2 text-center fw-500' style={{fontSize:'15.5px'}}> Up to 90% survival in proven aquaculture
                                                            trials. Reduces disease-driven mortality,
                                                            ensuring more produce reaches market.
                                                        </p>
                                                    </div>
                                                    <div className='max_width_card'>
                                                        <p className='refrange_headings text-center text-primaryBeige purpleBg'>No refrigeration = lowerlogistics cost</p>
                                                        <p className='p-2 text-center fw-500' style={{fontSize:'15.5px'}}> Up to 90% survival in proven aquaculture
                                                            trials. Reduces disease-driven mortality,
                                                            ensuring more produce reaches market.
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="card_contaoiner_flex">
                                                    <div className='max_width_card'>
                                                        <p className='refrange_headings text-center text-primaryBeige purpleBg'>No refrigeration = lowerlogistics cost</p>
                                                        <p className='p-2 text-center fw-500' style={{fontSize:'15.5px'}}> Up to 90% survival in proven aquaculture
                                                            trials. Reduces disease-driven mortality,
                                                            
                                                        </p>
                                                    </div>
                                                    <div className='max_width_card'>
                                                        <p className='refrange_headings text-center text-primaryBeige purpleBg'>No refrigeration = lowerlogistics cost</p>
                                                        <p className='p-2 text-center fw-500' style={{fontSize:'15.5px'}}> Up to 90% survival in proven aquaculture
                                                            trials. Reduces disease-driven mortality,
                                                            
                                                        </p>
                                                    </div>
                                                </div>

                                            </div>

                                              <div className="w-25"  style={{paddingLeft:'10px'}}> 
                                                    <p className='refrange_headings purpleBg text-center text-primaryBeige'>No refrigeration = lowerlogistics cost</p>
                                                    <p className='p-2 text-center fw-500' style={{fontSize:'15.5px'}}> Up to 90% survival in proven aquaculture
                                                        trials. Reduces disease-driven mortality,
                                                        
                                                    </p> 
                                            </div>

                                        </div>
                                        
                                        </div>

                                    </div>

                                </div>

                                <div className=" h-100" style={{width:'20%'}}>  
                                    <div className='d-flex justify-content-end position-relative'>
                                         <img
                                            src="/image/farm-pepols.png"
                                            style={{width:'100%', height:'100%'}}
                                             className='border_radius_round2'
                                        />
                                        <p className='onimage_text text-white'>FARM LIKE THE FUTURE DEPENDS ON IT—BECAUSE IT DOES</p>
                                    </div> 
                                </div>

                            </div>   
                        </div>   
                     </SwiperSlide>

                    <SwiperSlide>  
                        <div className={`accentBlueBg slide_containe p-0 overflow-hidden`}>  
                            <div className="row h-100">  
                                <div className=" h-100" style={{width:'80%'}}>  
                                    <div className='whyusPadding h-100'>  
                                        <div className='p_around h-100 d-flex flex-column justify-content-between'> 
                                            <div>
                                                <span><p>02/05</p></span> 
                                                <h5 className='mt-3 ' >
                                                    FOR FARMERS: GROW MORE. LOSE LESS. STRESS NEVER
                                                </h5>  
                                            </div>

                                            <div className="card_contaoiner_flex">
                                                <div className='max_width_card'>
                                                    <p className='refrange_headings text-center text-primaryBeige purpleBg'>No refrigeration = lowerlogistics cost</p>
                                                    <p className='p-2 text-center fw-500' style={{fontSize:'15.5px'}}> Up to 90% survival in proven aquaculture
                                                        trials. Reduces disease-driven mortality,
                                                        ensuring more produce reaches market.
                                                    </p>
                                                </div>
                                                <div className='max_width_card'>
                                                    <p className='refrange_headings text-center text-primaryBeige purpleBg'>No refrigeration = lowerlogistics cost</p>
                                                    <p className='p-2 text-center fw-500' style={{fontSize:'15.5px'}}> Up to 90% survival in proven aquaculture
                                                        trials. Reduces disease-driven mortality,
                                                        ensuring more produce reaches market.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="card_contaoiner_flex">
                                                <div className='max_width_card'>
                                                    <p className='refrange_headings text-center text-primaryBeige purpleBg'>No refrigeration = lowerlogistics cost</p>
                                                    <p className='p-2 text-center fw-500' style={{fontSize:'15.5px'}}> Up to 90% survival in proven aquaculture
                                                        trials. Reduces disease-driven mortality,
                                                        
                                                    </p>
                                                </div>
                                                <div className='max_width_card'>
                                                    <p className='refrange_headings text-center text-primaryBeige purpleBg'>No refrigeration = lowerlogistics cost</p>
                                                    <p className='p-2 text-center fw-500' style={{fontSize:'15.5px'}}> Up to 90% survival in proven aquaculture
                                                        trials. Reduces disease-driven mortality,
                                                        
                                                    </p>
                                                </div>
                                            </div>
                                        
                                        </div>

                                    </div>

                                </div>

                                <div className="h-100" style={{width:'20%'}}>  
                                    <div className='d-flex justify-content-end position-relative'>
                                         <img
                                            src="/image/farm-pepols.png"
                                            style={{width:'100%', height:'100%'}}
                                            className='border_radius_round2'
                                        />
                                        <p className='onimage_text text-white'>FARM LIKE THE FUTURE DEPENDS ON IT—BECAUSE IT DOES</p>
                                    </div> 
                                </div>

                            </div>   
                        </div>   
                     </SwiperSlide> 

                     <SwiperSlide>  
                        <div className={`mutedBeigeBg   slide_containe p-0 overflow-hidden`}>  
                            <div className="row h-100">  
                                <div className=" h-100" style={{width:'80%'}}>  
                                    <div className='whyusPadding h-100'>  
                                        <div className='p_around h-100 d-flex flex-column justify-content-between'> 
                                            <div>
                                                <span><p>03/05</p></span> 
                                                <h5 className='mt-3 ' >
                                                    For Investors: Scale Meets Science Meets Serious Returns.
                                                </h5>  
                                            </div>

                                            <div className="card_contaoiner_flex">
                                                <div className='w-50'>
                                                    <p className='refrange_headings text-center corporateBg purpleColor'>A Multi-Billion DollarMarket Opportunity</p>
                                                    <p className='pt-3 pb-3 fw-500' style={{fontSize:'13.5px'}}> 
                                                        Teora addresses an underserved $573 billion aquaculture
                                                        industry, expanding into a $193 billion sustainable
                                                        biologics market. Its adaptable platform extends beyond
                                                        aquaculture into livestock, poultry, and crops—
                                                        maximizing commercial scalability and investor potential
                                                    </p>
                                                    <ul className='m-0 p-0 list-unstyled d-flex justify-content-between'>
                                                        <li className='listPAddings'>
                                                            <p className='m-0' style={{fontSize:'11px', }}>
                                                                Expanding product <br/>pipeline in Aquaculture
                                                            </p>
                                                            <p>+10</p>
                                                            <p style={{fontSize:'11px'}}>
                                                               Products
                                                            </p>
                                                        </li>
                                                        <li className='listPAddings'>
                                                            <p className='m-0' style={{fontSize:'11px'}}>
                                                                Expanding product <br/>pipeline in Aquaculture
                                                            </p>
                                                            <p>+10</p>
                                                            <p style={{fontSize:'11px'}}>
                                                               Products
                                                            </p>
                                                        </li>
                                                        <li className='listPAddings'>
                                                            <p className='m-0' style={{fontSize:'11px'}}>
                                                                Expanding product <br/>pipeline in Aquaculture
                                                            </p>
                                                            <p>+10</p>
                                                            <p style={{fontSize:'11px'}}>
                                                               Products
                                                            </p>
                                                        </li>
                                                    </ul>
                                                </div>

                                                 <div className='w-50'>
                                                    <p className='refrange_headings text-center  corporateBg purpleColor'>Disruptive Technology with Cross-Industry Potential</p>
                                                    <p className='pt-3 pb-3 fw-500' style={{fontSize:'13.5px'}}>
                                                        SOLAQ™ is not just an aquaculture solution—it is a
                                                        biotech platform with applications in agriculture,
                                                        livestock, and even plant disease prevention, offering
                                                        investors long-term scalability in the food sector. 
                                                    </p>
                                                    <p style={{fontSize:'16.5px'}} className='fw-500'>
                                                        The Liveability Challenge 2023 Winner ($1M prize)
                                                            Global Shrimp Summit 2024 Innovation Award
                                                            Berkeley SkyDeck & Hatch Innovation Studio Alumni
                                                            UN SDG Challenge Finalist 
                                                    </p>
                                                </div>
                                               
                                            </div> 
                                        
                                        </div>

                                    </div>

                                </div>

                                <div className="h-100" style={{width:'20%'}}>  
                                    <div className='d-flex justify-content-end position-relative'>
                                         <img
                                            src="/image/farm-pepols.png"
                                            style={{width:'100%', height:'100%'}}
                                            className='border_radius_round2'
                                        />
                                        <p className='onimage_text text-white'>FARM LIKE THE FUTURE DEPENDS ON IT—BECAUSE IT DOES</p>
                                    </div> 
                                </div>

                            </div>   
                        </div>   
                     </SwiperSlide>

                      <SwiperSlide>  
                        <div className={`purpleBg text-primaryBeige slide_containe p-0 overflow-hidden`}>  
                            <div className="row h-100">  
                                <div className=" h-100" style={{width:'80%'}}>  
                                    <div className='whyusPadding h-100'>  
                                        <div className='p_around h-100 d-flex flex-column justify-content-between'> 
                                            <div>
                                                <span><p>03/05</p></span> 
                                                <h5 className='mt-3 ' >
                                                    For Investors: Scale Meets Science Meets Serious Returns.
                                                </h5>  
                                            </div>

                                            <div className="card_contaoiner_flex">
                                                <div className='w-50'>
                                                    <p className='refrange_headings text-center corporateBg purpleColor'>A Multi-Billion DollarMarket Opportunity</p>
                                                    <p className='pt-3 pb-3 fw-500' style={{fontSize:'13.5px'}}> 
                                                        Teora addresses an underserved $573 billion aquaculture
                                                        industry, expanding into a $193 billion sustainable
                                                        biologics market. Its adaptable platform extends beyond
                                                        aquaculture into livestock, poultry, and crops—
                                                        maximizing commercial scalability and investor potential
                                                    </p>
                                                    <ul className='m-0 p-0 list-unstyled d-flex justify-content-between'>
                                                        <li className='listPAddings'>
                                                            <p className='m-0' style={{fontSize:'11px', }}>
                                                                Expanding product <br/>pipeline in Aquaculture
                                                            </p>
                                                            <p>+10</p>
                                                            <p style={{fontSize:'11px'}}>
                                                               Products
                                                            </p>
                                                        </li>
                                                        <li className='listPAddings'>
                                                            <p className='m-0' style={{fontSize:'11px'}}>
                                                                Expanding product <br/>pipeline in Aquaculture
                                                            </p>
                                                            <p>+10</p>
                                                            <p style={{fontSize:'11px'}}>
                                                               Products
                                                            </p>
                                                        </li>
                                                        <li className='listPAddings'>
                                                            <p className='m-0' style={{fontSize:'11px'}}>
                                                                Expanding product <br/>pipeline in Aquaculture
                                                            </p>
                                                            <p>+10</p>
                                                            <p style={{fontSize:'11px'}}>
                                                               Products
                                                            </p>
                                                        </li>
                                                    </ul>
                                                </div>

                                                 <div className='w-50'>
                                                    <p className='refrange_headings text-center  corporateBg purpleColor'>Disruptive Technology with Cross-Industry Potential</p>
                                                    <p className='pt-3 pb-3 fw-500' style={{fontSize:'13.5px'}}>
                                                        SOLAQ™ is not just an aquaculture solution—it is a
                                                        biotech platform with applications in agriculture,
                                                        livestock, and even plant disease prevention, offering
                                                        investors long-term scalability in the food sector. 
                                                    </p>
                                                    <p style={{fontSize:'16.5px'}} className='fw-500'>
                                                        The Liveability Challenge 2023 Winner ($1M prize)
                                                            Global Shrimp Summit 2024 Innovation Award
                                                            Berkeley SkyDeck & Hatch Innovation Studio Alumni
                                                            UN SDG Challenge Finalist 
                                                    </p>
                                                </div>
                                               
                                            </div> 
                                        
                                        </div>

                                    </div>

                                </div>

                                <div className="h-100" style={{width:'20%'}}>  
                                    <div className='d-flex justify-content-end position-relative'>
                                         <img
                                            src="/image/farm-pepols.png"
                                            style={{width:'100%', height:'100%'}}
                                            className='border_radius_round2'
                                        />
                                        <p className='onimage_text text-white'>FARM LIKE THE FUTURE DEPENDS ON IT—BECAUSE IT DOES</p>
                                    </div> 
                                </div>

                            </div>   
                        </div>   
                     </SwiperSlide>

                    <SwiperSlide>  
                        <div className={`mutedBeigeBg  slide_containe p-0 overflow-hidden`}>  
                            <div className="row h-100">  
                                <div className=" h-100" style={{width:'80%'}}>  
                                    <div className='whyusPadding h-100'>  
                                        <div className='p_around h-100 d-flex flex-column justify-content-between'> 
                                            <div>
                                                <span><p>03/05</p></span> 
                                                <h5 className='mt-3 ' >
                                                    For Investors: Scale Meets Science Meets Serious Returns.
                                                </h5>  
                                            </div>

                                            <div className="card_contaoiner_flex">
                                                <div className='w-50'>
                                                    <p className='refrange_headings text-center corporateBg purpleColor'>A Multi-Billion DollarMarket Opportunity</p>
                                                    <p className='pt-3 pb-3 fw-500' style={{fontSize:'13.5px'}}> 
                                                        Teora addresses an underserved $573 billion aquaculture
                                                        industry, expanding into a $193 billion sustainable
                                                        biologics market. Its adaptable platform extends beyond
                                                        aquaculture into livestock, poultry, and crops—
                                                        maximizing commercial scalability and investor potential
                                                    </p>
                                                    <ul className='m-0 p-0 list-unstyled d-flex justify-content-between'>
                                                        <li className='listPAddings'>
                                                            <p className='m-0' style={{fontSize:'11px', }}>
                                                                Expanding product <br/>pipeline in Aquaculture
                                                            </p>
                                                            <p>+10</p>
                                                            <p style={{fontSize:'11px'}}>
                                                               Products
                                                            </p>
                                                        </li>
                                                        <li className='listPAddings'>
                                                            <p className='m-0' style={{fontSize:'11px'}}>
                                                                Expanding product <br/>pipeline in Aquaculture
                                                            </p>
                                                            <p>+10</p>
                                                            <p style={{fontSize:'11px'}}>
                                                               Products
                                                            </p>
                                                        </li>
                                                        <li className='listPAddings'>
                                                            <p className='m-0' style={{fontSize:'11px'}}>
                                                                Expanding product <br/>pipeline in Aquaculture
                                                            </p>
                                                            <p>+10</p>
                                                            <p style={{fontSize:'11px'}}>
                                                               Products
                                                            </p>
                                                        </li>
                                                    </ul>
                                                </div>

                                                 <div className='w-50'>
                                                    <p className='refrange_headings text-center  corporateBg purpleColor'>Disruptive Technology with Cross-Industry Potential</p>
                                                    <p className='pt-3 pb-3 fw-500' style={{fontSize:'13.5px'}}>
                                                        SOLAQ™ is not just an aquaculture solution—it is a
                                                        biotech platform with applications in agriculture,
                                                        livestock, and even plant disease prevention, offering
                                                        investors long-term scalability in the food sector. 
                                                    </p>
                                                    <p style={{fontSize:'16.5px'}} className='fw-500'>
                                                        The Liveability Challenge 2023 Winner ($1M prize)
                                                            Global Shrimp Summit 2024 Innovation Award
                                                            Berkeley SkyDeck & Hatch Innovation Studio Alumni
                                                            UN SDG Challenge Finalist 
                                                    </p>
                                                </div>
                                               
                                            </div> 
                                        
                                        </div>

                                    </div>

                                </div>

                                <div className="h-100" style={{width:'20%'}}>  
                                    <div className='d-flex justify-content-end position-relative'>
                                         <img
                                            src="/image/farm-pepols.png"
                                            style={{width:'100%', height:'100%'}}
                                            className='border_radius_round2'
                                        />
                                        <p className='onimage_text text-white'>FARM LIKE THE FUTURE DEPENDS ON IT—BECAUSE IT DOES</p>
                                    </div> 
                                </div>

                            </div>   
                        </div>   
                     </SwiperSlide>

                       <SwiperSlide>  
                        <div className={`mutedBeigeBg  slide_containe p-0 overflow-hidden`}>  
                            <div className="row h-100">  
                                <div className=" h-100" style={{width:'80%'}}>  
                                    <div className='whyusPadding h-100'>  
                                        <div className='p_around h-100 d-flex flex-column justify-content-between'> 
                                            <div>
                                                <span><p>03/05</p></span> 
                                                <h5 className='mt-3 ' >
                                                    For Investors: Scale Meets Science Meets Serious Returns.
                                                </h5>  
                                            </div>

                                            <div className="card_contaoiner_flex">
                                                <div className='w-50'>
                                                    <p className='refrange_headings text-center corporateBg purpleColor'>A Multi-Billion DollarMarket Opportunity</p>
                                                    <p className='pt-3 pb-3 fw-500' style={{fontSize:'13.5px'}}> 
                                                        Teora addresses an underserved $573 billion aquaculture
                                                        industry, expanding into a $193 billion sustainable
                                                        biologics market. Its adaptable platform extends beyond
                                                        aquaculture into livestock, poultry, and crops—
                                                        maximizing commercial scalability and investor potential
                                                    </p>
                                                    <ul className='m-0 p-0 list-unstyled d-flex justify-content-between'>
                                                        <li className='listPAddings'>
                                                            <p className='m-0' style={{fontSize:'11px', }}>
                                                                Expanding product <br/>pipeline in Aquaculture
                                                            </p>
                                                            <p>+10</p>
                                                            <p style={{fontSize:'11px'}}>
                                                               Products
                                                            </p>
                                                        </li>
                                                        <li className='listPAddings'>
                                                            <p className='m-0' style={{fontSize:'11px'}}>
                                                                Expanding product <br/>pipeline in Aquaculture
                                                            </p>
                                                            <p>+10</p>
                                                            <p style={{fontSize:'11px'}}>
                                                               Products
                                                            </p>
                                                        </li>
                                                        <li className='listPAddings'>
                                                            <p className='m-0' style={{fontSize:'11px'}}>
                                                                Expanding product <br/>pipeline in Aquaculture
                                                            </p>
                                                            <p>+10</p>
                                                            <p style={{fontSize:'11px'}}>
                                                               Products
                                                            </p>
                                                        </li>
                                                    </ul>
                                                </div>

                                                 <div className='w-50'>
                                                    <p className='refrange_headings text-center  corporateBg purpleColor'>Disruptive Technology with Cross-Industry Potential</p>
                                                    <p className='pt-3 pb-3 fw-500' style={{fontSize:'13.5px'}}>
                                                        SOLAQ™ is not just an aquaculture solution—it is a
                                                        biotech platform with applications in agriculture,
                                                        livestock, and even plant disease prevention, offering
                                                        investors long-term scalability in the food sector. 
                                                    </p>
                                                    <p style={{fontSize:'16.5px'}} className='fw-500'>
                                                        The Liveability Challenge 2023 Winner ($1M prize)
                                                            Global Shrimp Summit 2024 Innovation Award
                                                            Berkeley SkyDeck & Hatch Innovation Studio Alumni
                                                            UN SDG Challenge Finalist 
                                                    </p>
                                                </div>
                                               
                                            </div> 
                                        
                                        </div>

                                    </div>

                                </div>

                                <div className="h-100" style={{width:'20%'}}>  
                                    <div className='d-flex justify-content-end position-relative'>
                                         <img
                                            src="/image/farm-pepols.png"
                                            style={{width:'100%', height:'100%'}}
                                            className='border_radius_round2'
                                        />
                                        <p className='onimage_text text-white'>FARM LIKE THE FUTURE DEPENDS ON IT—BECAUSE IT DOES</p>
                                    </div> 
                                </div>

                            </div>   
                        </div>   
                     </SwiperSlide>
                     
                </Swiper>
       </div>
    )
}
    export default Building;