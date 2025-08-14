
 "use client"
 import { useState , useRef } from "react";
 import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
 import styles from '../home/slickyComponents/slicky.module.css';
import { Swiper, SwiperSlide } from "swiper/react";


 

const Building = () =>{ 

      const [slideCounter, setSlideCounter] = useState(1);
    const swiperRef = useRef(null);  
 
    return(
       <div>
              <div className=" d-flex justify-content-between align-items-center"> 
                    <div> 
                        <h2 className="m-top-b h1500 h11536 text-primaryBeige">Building A Global Food System That Works For Everyone</h2> 
                    </div>
                    <div className={`${styles.countscroll}`}>
                        <div  
                            className='d-flex justify-content-center align-items-center text-primaryBeige' 
                            style={{ cursor: "pointer" }}
                            onClick={() => swiperRef.current.slidePrev()}
                        > <MdArrowBackIos size={24} /></div>

                        <div className={`d-flex justify-content-center align-items-center text-primaryBeige ${styles.values}`}><span>  
                            {String(slideCounter).padStart(2, "0")}
                        </span></div>

                        <div 
                            className='d-flex justify-content-center align-items-center text-primaryBeige'   
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
                                                <span>
                                                    <p>01/05</p>
                                                </span>
                                                <h5 className='mt-3 mb-2'>
                                                    FOR FARMERS: GROW MORE. LOSE LESS. STRESS NEVER
                                                </h5>
                                            </div>
            
                                            <div className='d-flex w-100'>
                                                <div className='w-75'>
                                                    <div className="card_contaoiner_flex">
                                                        <div className='max_width_card'>
                                                            <p className='refrange_headings text-center text-primaryBeige purpleBg mb-0'>
                                                                Higher Yields, Lower Losses, more income</p>
                                                            <p className='p-2 text-center fw-500' style={{fontSize:'15.5px'}}>Up to
                                                                90% survival in proven aquaculture trials. Reduces disease-driven
                                                                mortality, ensuring more produce reaches market.
                                                            </p>
                                                        </div>
                                                        <div className='max_width_card'>
                                                            <p className='refrange_headings text-center text-primaryBeige purpleBg mb-0'>
                                                                Harvest Faster, Earn Sooner</p>
                                                            <p className='p-2 text-center fw-500' style={{fontSize:'15.5px'}}> 20%
                                                                shorter cycles mean 5-6 harvests/year instead of 4. Same pond, more
                                                                revenue. Less time exposed to disease risk.
                                                            </p>
                                                        </div>
                                                    </div>
            
                                                    <div className="card_contaoiner_flex">
                                                        <div className='max_width_card'>
                                                            <p className='refrange_headings text-center text-primaryBeige purpleBg mb-0'>
                                                                Feed Smarter, Cost-Eective Growth</p>
                                                            <p className='p-2 text-center fw-500' style={{fontSize:'15.5px'}}>20%
                                                                faster growth. better FCR by 0.2 to 0.5 points. When feed costs 60%
                                                                of your budget,these numbers change everything.
                                                            </p>
                                                        </div>
                                                        <div className='max_width_card'>
                                                            <p className='refrange_headings text-center text-primaryBeige purpleBg mb-0'>
                                                                Easy adoption, Shelf stable</p>
                                                            <p className='p-2 text-center fw-500' style={{fontSize:'15.5px'}}> No
                                                                injections. No cold storage. No special training. works all season.
                                                                Just mix with feed or water and prevent disease.
                                                            </p>
                                                        </div>
                                                    </div>
            
                                                </div>
            
                                                <div className="w-25" style={{paddingLeft:'10px'}}>
                                                    <p className='refrange_headings purpleBg text-center text-primaryBeige mb-0'>
                                                       Premium  Price, Zero Residue, Compliant</p>
                                                    <p className='p-2 text-center fw-500' style={{fontSize:'15.5px'}}> No
                                                        antibiotics = export ready stock. Access premium markets demanding clean
                                                        food. Get 15-30% higher prices for the same farmed produce.
                                                    </p>
                                                </div>
            
                                            </div>
            
                                        </div>
            
                                    </div>
            
                                </div>
            
                                <div className=" h-100" style={{width:'20%'}}>
                                    <div className='d-flex justify-content-end position-relative h-100'>
                                        <img src="/image/farm-pepols.png" style={{width:'100%', height:'100%'}}
                                            className='border_radius_round2' />
                                        <p className='onimage_text text-white'>FARM LIKE THE FUTURE DEPENDS ON IT—BECAUSE IT DOES
                                        </p>
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
                                                <span>
                                                    <p>02/05</p>
                                                </span>
                                                <h5 className='mt-3 mb-2'>
                                                    FOR FEED MILLS: PREMIUM PRODUCTS. SIMPLE PROCESS. HIGH MARGINS
                                                </h5>
                                            </div>
            
                                            <div className="card_contaoiner_flex">
                                                <div className='max_width_card'>
                                                    <p className='refrange_headings text-center text-primaryBeige purpleBg mb-0'>
                                                        Heat-Stable biologics = Pelleting-Ready</p>
                                                    <p className='p-2 text-center fw-500 mb-2' style={{fontSize:'15.5px'}}> Our
                                                        encapsulation survives pelleting temps. No potency loss. No formula
                                                        adjustments. It adapts to your existing lines work perfectly.
                                                    </p>
                                                </div>
                                                <div className='max_width_card'>
                                                    <p className='refrange_headings text-center text-primaryBeige purpleBg mb-0'> Offer
                                                        antibiotic-free, premium feed</p>
                                                    <p className='p-2 text-center fw-500 mb-2' style={{fontSize:'15.5px'}}> Farmers
                                                        demand it. Regulations require it. Transform commodity feed into premium,
                                                        clean products~ 20-30% higher margins.
                                                    </p>
                                                </div>
                                            </div>
            
                                            <div className="card_contaoiner_flex">
                                                <div className='max_width_card'>
                                                    <p className='refrange_headings text-center text-primaryBeige purpleBg mb-0'> Proven
                                                        Performance = Customer Loyalty</p>
                                                    <p className='p-2 text-center fw-500 mb-2' style={{fontSize:'15.5px'}}>When farmers
                                                        see 90% survival and 20% faster growth, they don’t switch suppliers. Your
                                                        retention rates soar. Loyalty it is.
                                                    </p>
                                                </div>
                                                <div className='max_width_card'>
                                                    <p className='refrange_headings text-center text-primaryBeige purpleBg mb-0'>Align
                                                        with future-ready regulations</p>
                                                    <p className='p-2 text-center fw-500 mb-2' style={{fontSize:'15.5px'}}> Antibiotic/
                                                        chemical bans, What’s that ? Lead the market shift instead of chasing it.
                                                        First-mover advantage secured. 
                                                    </p>
                                                </div>
                                            </div>
            
                                        </div>
            
                                    </div>
            
                                </div>
            
                                <div className="h-100" style={{width:'20%'}}>
                                    <div className='d-flex justify-content-end position-relative'>
                                        <img src="/image/farm-pepols.png" style={{width:'100%', height:'100%'}}
                                            className='border_radius_round2' />
                                        <p className='onimage_text text-white'> FARMERS DEMAND IT. REGULATIONS REQUIRE IT. YOU
                                            DELIVER IT. </p>
                                    </div>
                                </div>
            
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className={`mutedBeigeBg slide_containe p-0 overflow-hidden`}>
                            <div className="row h-100">
                                <div className=" h-100" style={{width:'80%'}}>
                                    <div className='whyusPadding h-100'>
                                        <div className='p_around h-100 d-flex flex-column justify-content-between'>
                                            <div>
                                                <span>
                                                    <p>03/05</p>
                                                </span>
                                                <h5 className='mt-3 mb-2'>
                                                    FOR DISTRIBUTORS: STOCK THE FUTURE. SKIP THE FREEZER.
                                                </h5>
                                            </div>
            
                                            <div className='d-flex w-100'>
                                                <div className='w-75'>
                                                    <div className="card_contaoiner_flex">
                                                        <div className='max_width_card'>
                                                            <p className='refrange_headings text-center text-primaryBeige purpleBg mb-0'>
                                                                No refrigeration = lower logistics cost</p>
                                                            <p className=' text-center fw-500 mb-2' style={{fontSize:'15.5px'}}>Up to
                                                                Room-temp stable for 24 months. No refrigerated trucks. No storage
                                                                headaches. No spoilage losses. Just stock, ship, and sell.
                                                            </p>
                                                        </div>
                                                        <div className='max_width_card'>
                                                            <p className='refrange_headings text-center text-primaryBeige purpleBg mb-0'>
                                                                Farmer-Friendly = Fast-Moving</p>
                                                            <p className=' text-center fw-500 mb-2' style={{fontSize:'15.5px'}}> No
                                                                special equipment. Farmers adopt quickly, reorder consistently. Your
                                                                inventory turnover accelerates by 40-60%.
                                                            </p>
                                                        </div>
                                                    </div>
            
                                                    <div className="card_contaoiner_flex">
                                                        <div className='max_width_card'>
                                                            <p className='refrange_headings text-center text-primaryBeige purpleBg mb-1'>
                                                                Clean-label, safe, export-ready food</p>
                                                            <p className='text-center fw-500 mb-2' style={{fontSize:'15.5px'}}> EU
                                                                bans? US regulations? Asia standards? One product meets all. Expand
                                                                territories without regulatory nightmares.
                                                            </p>
                                                        </div>
                                                        <div className='max_width_card'>
                                                            <p className='refrange_headings text-center text-primaryBeige purpleBg mb-1'>
                                                                Premium Products, bigger returns</p>
                                                            <p className='text-center fw-500 mb-2' style={{fontSize:'15.5px'}}>
                                                                Antibiotic-free means “expensive.” Not here. Accessible pricing lets
                                                                you tap both premium buyers AND volume markets.
                                                            </p>
                                                        </div>
                                                    </div>
            
                                                </div>
            
                                            
            
                                            </div>
            
                                        </div>
            
                                    </div>
            
                                </div>
            
                                <div className=" h-100" style={{width:'20%'}}>
                                    <div className='d-flex justify-content-end position-relative'>
                                        <img src="/image/farm-pepols.png" style={{width:'100%', height:'100%'}}
                                            className='border_radius_round2' />
                                        <p className='onimage_text text-white'>BE THE FIRST TO STOCK THE FUTURE.
                                        </p>
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
                                                    <span>
                                                        <p>04/06</p>
                                                    </span>
                                                    <h5 className='mt-3 mb-2'>
                                                        For Investors: Scale Meets Science Meets Serious Returns.
                                                    </h5>
                                                </div>
                
                                                <div className="card_contaoiner_flex">
                                                    <div className='w-50'>
                                                        <p className='refrange_headings text-center corporateBg purpleColor mb-0'> No
                                                            A Multi-Billion Dollar Market Opportunity</p>
                                                        <p className='pt-3 pb-3 fw-500 mb-2' style={{fontSize:'13.5px'}}>
                                                            Teora addresses an underserved $573 billion aquaculture industry, expanding into a $193 billion sustainable biologics market. Its adaptable platform extends beyond aquaculture into livestock, poultry, and crops—maximizing commercial scalability and investor potential
                                                        </p>
                                                        <ul className='m-0 p-0 list-unstyled d-flex justify-content-between'>
                                                            <li className='listPAddings'>
                                                                <p className='m-0' style={{fontSize:'11px', borderBottom:'1px solid #AACC57'}}>
                                                                    Expanding product <br/> pipeline in Aquaculture
                                                                </p>
                                                                <p className="mb-1">+10</p>
                                                                <p style={{fontSize:'11px'}}>
                                                                    Products
                                                                </p>
                                                            </li>
                                                            <li className='listPAddings'>
                                                                <p className='m-0' style={{fontSize:'11px', borderBottom:'1px solid #AACC57'}}>
                                                                    On Path to Reach  <br/> Revenue by yr 2026
                                                                </p>
                                                                <p className="mb-1">+$25M</p>
                                                                <p style={{fontSize:'11px'}}>
                                                                    From Three Products
                                                                </p>
                                                            </li>
                                                            <li className='listPAddings'>
                                                                <p className='m-0' style={{fontSize:'11px', borderBottom:'1px solid #AACC57'}}>
                                                                    Poultry Agriculture,  <br/> Livestock & Pet Health
                                                                </p>
                                                                <p className="mb-1">+4</p>
                                                                <p style={{fontSize:'11px'}}>
                                                                    Expanding in Industries
                                                                </p>
                                                            </li>
                                                        </ul>
                                                    </div>
                
                                                    <div className='w-50'>
                                                        <p className='refrange_headings text-center  corporateBg purpleColor mb-0'>Disruptive Technology with Cross-Industry Potential</p>
                                                        <p className='pt-3 pb-3 fw-500 mb-2' style={{fontSize:'13.5px'}}>
                                                            SOLAQ™️ is not just an aquaculture solution—it is a
                                                            biotech platform with applications in agriculture,
                                                            livestock, and even plant disease prevention, offering
                                                            investors long-term scalability in the food sector.
                                                        </p>
                                                        <p style={{fontSize:'16.5px'}} className='fw-500 mb-2'>
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
                                            <img src="/image/farm-pepols.png" style={{width:'100%', height:'100%'}}
                                                className='border_radius_round2' />
                                            <p className='onimage_text text-white'> INVEST IN FEEDING 10 BILLION—PROFITABLY.
                                            </p>
                                        </div>
                                    </div>
                
                                </div>
                            </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className={`mutedBeigeBg slide_containe p-0 overflow-hidden`}>
                            <div className="row h-100">
                                <div className=" h-100" style={{width:'80%'}}>
                                    <div className='whyusPadding h-100'>
                                        <div className='p_around h-100 d-flex flex-column justify-content-between'>
                                            <div>
                                                <span>
                                                    <p>05/06</p>
                                                </span>
                                                <h5 className='mt-3 mb-2'>
                                                      FOR MARKET & ENVIRONMENT: SUSTAINABLE FOOD SYSTEMS FOR WORLD
                                                </h5>
                                            </div>
            
                                            <div className='d-flex w-100'>
                                                <div className='w-75'>
                                                    <div className="card_contaoiner_flex">
                                                        <div className='max_width_card'>
                                                            <p className='refrange_headings text-center text-primaryBeige purpleBg mb-0'>
                                                                Lowers Carbon Footprint</p>
                                                            <p className='p-2 text-center fw-500 mb-2' style={{fontSize:'15.5px'}}> Reduces waste, feed consumption, and input heavy farming practices.
                                                            </p>
                                                        </div>
                                                        <div className='max_width_card'>
                                                            <p className='refrange_headings text-center text-primaryBeige purpleBg mb-0'>
                                                                Minimises Water & Land Use</p>
                                                            <p className='p-2 text-center fw-500 mb-2' style={{fontSize:'15.5px'}}>Supports resource-efficient protein and food production.
                                                            </p>
                                                        </div>
                                                    </div>
            
                                                    <div className="card_contaoiner_flex">
                                                        <div className='max_width_card'>
                                                            <p className='refrange_headings text-center text-primaryBeige purpleBg mb-0'>
                                                                Reduces Food Waste</p>
                                                            <p className='p-2 text-center fw-500 mb-2' style={{fontSize:'15.5px'}}> Prevents disease-driven losses that lead to unnecessary culling & spoilage.
                                                            </p>
                                                        </div>
                                                        <div className='max_width_card'>
                                                            <p className='refrange_headings text-center text-primaryBeige purpleBg mb-0'>
                                                                Strengthens Global Food Security</p>
                                                            <p className='p-2 text-center fw-500 mb-2' style={{fontSize:'15.5px'}}>
                                                                Future-proofs farming against climate,disease, scale and supply disruptions.
                                                            </p>
                                                        </div>
                                                    </div>
            
                                                </div>
            
                                            
            
                                            </div>
            
                                        </div>
            
                                    </div>
            
                                </div>
            
                                <div className=" h-100" style={{width:'20%'}}>
                                    <div className='d-flex justify-content-end position-relative'>
                                        <img src="/image/farm-pepols.png" style={{width:'100%', height:'100%'}}
                                            className='border_radius_round2' />
                                        <p className='onimage_text text-white'> MEETS RISING DEMAND FOR SUSTAINABLE, ETHICAL FOOD
                                        </p>
                                    </div>
                                </div>
            
                            </div>
                        </div>
                    </SwiperSlide>
                   

                    <SwiperSlide>
                        <div className={`mutedBeigeBg slide_containe p-0 overflow-hidden`}>
                            <div className="row h-100">
                                <div className=" h-100" style={{width:'80%'}}>
                                    <div className='whyusPadding h-100'>
                                        <div className='p_around h-100 d-flex flex-column justify-content-between'>
                                            <div>
                                                <span>
                                                    <p>06/06</p>
                                                </span>
                                                <h5 className='mt-3 mb-2'>
                                                    FOR END CONSUMERS : DELIVERING SAFE, CLEAN & SUSTAINABLE NUTRITION
                                                </h5>
                                            </div>
            
                                            <div className='d-flex w-100'>
                                                <div className='w-75'>
                                                    <div className="card_contaoiner_flex">
                                                        <div className='max_width_card'>
                                                            <p className='refrange_headings text-center text-primaryBeige purpleBg mb-0'>
                                                            Antibiotic-Free, Chemical-Free Food</p>
                                                            <p className='p-2 text-center fw-500 mb-2' style={{fontSize:'15.5px'}}> Reduces exposure to harmful residues.builds trust and Meets growing demand for sustainable and ethical sourcing.</p>
                                                        </div>
                                                        <div className='max_width_card'>
                                                            <p className='refrange_headings text-center text-primaryBeige purpleBg mb-0'>
                                                                Higher-Quality Protein</p>
                                                            <p className='p-2 text-center fw-500 mb-2' style={{fontSize:'15.5px'}}> Supports better nutrition and food security.Reduces antimicrobial resistance risks linked to food systems.
                                                            </p>
                                                        </div>
                                                    </div>
            
                                                    <div className="card_contaoiner_flex">
                                                        <div className='max_width_card'>
                                                            <p className='refrange_headings text-center text-primaryBeige purpleBg mb-0'>
                                                                More Aordable, Accessible Food</p>
                                                            <p className='p-2 text-center fw-500 mb-2' style={{fontSize:'15.5px'}}> Lower disease losses = lower production costs, benefiting consumers.
                                                            </p>
                                                        </div>
                                                        <div className='max_width_card'>
                                                            <p className='refrange_headings text-center text-primaryBeige purpleBg mb-0'>
                                                                Align with future-ready regulations</p>
                                                            <p className='p-2 text-center fw-500 mb-2' style={{fontSize:'15.5px'}}>
                                                                Antibiotic/ chemical bans, What’s that ? Lead the market shift instead of chasing it. First-mover advantage secured.
                                                            </p>
                                                        </div>
                                                    </div>
            
                                                </div>
            
                                            
            
                                            </div>
            
                                        </div>
            
                                    </div>
            
                                </div>
            
                                <div className=" h-100" style={{width:'20%'}}>
                                    <div className='d-flex justify-content-end position-relative'>
                                        <img src="/image/farm-pepols.png" style={{width:'100%', height:'100%'}}
                                            className='border_radius_round2' />
                                        <p className='onimage_text text-white'> FARMERS DEMAND IT. REGULATIONS REQUIRE IT. YOU DELIVER IT.
                                        </p>
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