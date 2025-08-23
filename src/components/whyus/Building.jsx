
 "use client"
 import { useState , useRef } from "react";
 import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
 import styles from '../home/slickyComponents/slicky.module.css';
import { Swiper, SwiperSlide } from "swiper/react";


const whyUsSwiperData = [
    {
        mainHeading: "FOR FARMERS: GROW MORE. LOSE LESS. STRESS NEVER",
        subHeading1: "HigherYields, Lower Losses,more income",
        discriptions1: "Up to 90% survival in proven aquaculture trials. Reduces disease-driven mortality, ensuring more produce reaches market.",
        subHeading2: "Harvest Faster, Earn Sooner",
        discriptions2: "20% shorter cycles mean 5-6 harvests/year instead of 4. Same pond, more revenue. Less time exposed to disease risk.",
        subHeading3: " Feed Smarter, Cost-Eective Growth",
        discriptions3: " 20% faster growth. better FCR by 0.2 to 0.5 points. When feed costs 60% of your budget, these numbers change everything.",
        subHeading4: "Easy adoption, Shelf stable",
        discriptions4: " No injections. No cold storage. No special training. works all season. Just mix with feed or water and prevent disease.",
        subHeading5: "Easy adoption, Shelf stable",
        discriptions5: "No injections. No cold storage. No special training.works all season.Just mix with feed or water and prevent disease.",

        stresNever: "jhh",
        image: "/image/farm-pepols.png",
        imageTitle: "FARM LIKE THE FUTURE DEPENDS ON IT—BECAUSE IT DOES.",  
        bgClass:"accentLimebg", 
        colorClass:'purpleColor'
    },
    {
        mainHeading: " FOR FEED MILLS: PREMIUM PRODUCTS. SIMPLE PROCESS. HIGH MARGINS",
        subHeading1: " Heat-Stable biologics = Pelleting-Ready",
        discriptions1: "Our encapsulation survives pelleting temps. No potency loss. No formula adjustments. It adapts to your existing lines work perfectly.",
        subHeading2: "Offer antibiotic-free, premium feed",
        discriptions2: "Farmers demand it. Regulations require it.Transform commodity feed into premium, clean products~ 20-30% higher margins.",
        subHeading3: "Proven Performance = Customer Loyalty",
        discriptions3: " When farmers see 90% survival and 20% faster growth, they don’t switch suppliers.Your retention rates soar. Loyalty it is.",
        subHeading4: "Align with future-ready regulations",
        discriptions4: " Antibiotic/ chemical bans, What’s that ?  Lead the market shift instead of chasing it. First-mover advantage secured.", 
        
        image: "/image/premium_products.png",
        imageTitle: "FARMERS DEMAND IT. REGULATIONS REQUIRE IT. YOU DELIVER IT.",
        bgClass:"accentBlueBg", 
        colorClass:'purpleColor'
    },
    {
        mainHeading: " FOR DISTRIBUTORS: STOCK THE FUTURE. SKIP THE FREEZER.",
        subHeading1: "No refrigeration = lower logistics cost",
        discriptions1: " Room-temp stable for 24 months. No refrigerated trucks. No storage headaches. No spoilage losses. Just stock, ship, and sell.",
        subHeading2: "Farmer-Friendly = Fast-Moving",
        discriptions2: "No special equipment. Farmers adopt quickly, reorder consistently. Your inventory turnover accelerates by 40-60%.",
        subHeading3: "Clean-label, safe, export-ready food",
        discriptions3: "EU bans? US regulations? Asia standards? One product meets all. Expand territories without regulatory nightmares.",
        subHeading4: " Premium Products,  bigger returns",
        discriptions4: "Antibiotic-free means “expensive.” Not here. Accessible pricing lets you tap both premium buyers AND volume markets.",
        image: "/image/stockthe_future.png",
        imageTitle: "BE THE FIRST TO STOCK THE FUTURE.",
        bgClass:"mutedBeigeBg", 
        colorClass:'purpleColor'
    },
    {
        mainHeading: "For Investors: Scale Meets Science Meets Serious Returns.",
        image: "/image/stockthe_future.png",
        imageTitle: "INVEST IN FEEDING 10 BILLION—PROFITABLY.",
        bgClass:"purpleBg",
        colorClass:'text-primaryBeige',
        listinvesto:'listinvesto'
    },
     {
        mainHeading: "FOR MARKET & ENVIRONMENT: SUSTAINABLE FOOD SYSTEMS FOR WORLD",
        subHeading1: "Lowers Carbon Footprint",
        discriptions1: "Reduces waste, feed consumption, and input heavy farming practices.",
        subHeading2: "Minimises Water & Land Use",
        discriptions2: " Supports resource-efficient protein and food production.",
        subHeading3: "Reduces Food Waste",
        discriptions3: "Prevents disease-driven losses that lead to unnecessary culling & spoilage.",
        subHeading4: "Strengthens Global Food Security",
        discriptions4: "Future-proofs farming against climate, disease, scale and supply disruptions.",
        image: "/image/resource_group.png",
        imageTitle: "MEETS RISING DEMAND FOR SUSTAINABLE, ETHICAL FOOD",
        bgClass:"mutedBeigeBg", 
        colorClass:'purpleColor'
    },
    {
        mainHeading: "FOR END CONSUMERS : DELIVERING SAFE, CLEAN & SUSTAINABLE NUTRITION",
        subHeading1: "Antibiotic-Free, Chemical-Free Food",
        discriptions1: "Reduces exposure to harmful residues. builds trust and Meets growing demand for sustainable and ethical sourcing.",
        subHeading2: "Higher-Quality Protein",
        discriptions2: "Supports better nutrition and food security.Reduces antimicrobial resistance risks linked to food systems.",
        subHeading3: " More Aordable, Accessible Food",
        discriptions3: "Lower disease losses = lower production costs, benefiting consumers.",
        subHeading4: "Align with future-ready regulations",
        discriptions4: "Antibiotic/ chemical bans, What’s that ? Lead the market shift instead of chasing it. First-mover advantage secured.",
 
        image: "/image/natiration.png",
        imageTitle: "FARMERS DEMAND IT. REGULATIONS REQUIRE IT. YOU DELIVER IT.",
        bgClass:"mutedBeigeBg", 
        colorClass:'purpleColor'
    },
]
 


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

                    {
                        whyUsSwiperData.map((el, index) =>(

                             <SwiperSlide>
                                    <div className={`${el.bgClass} slide_containe p-0 overflow-hidden`}>
                                        <div className="row h-100">
                                            <div className=" h-100" style={{width:'80%'}}>
                                                <div className='whyusPadding h-100'>
                                                    <div className='p_around h-100 d-flex flex-column justify-content-between'>
                                                        <div>
                                                            <span>
                                                                <p className={`${el.colorClass}`}>{index+1}/05</p>
                                                            </span>
                                                            <h5 className={` mt-3 mb-2 ${el.colorClass}`}>
                                                                 {el.mainHeading}
                                                            </h5>
                                                        </div>
                        
                                                        <div className={`${el.stresNever ? 'd-flex w-100' : ''} `}>
                                                            <div className={`${el.stresNever ? 'w-75' : ''} `}>
                                                                {
                                                                    el.listinvesto ? 
                                                                         <div className="card_contaoiner_flex">
                                                                                <div className='w-50 text-primaryBeige'>
                                                                                    <p className='refrange_headings text-center corporateBg purpleColor mb-0'>
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
                                                                                    <p className='pt-3 pb-3 fw-500 mb-2 text-primaryBeige' style={{fontSize:'13.5px'}}>
                                                                                        SOLAQ™️ is not just an aquaculture solution—it is a
                                                                                        biotech platform with applications in agriculture,
                                                                                        livestock, and even plant disease prevention, offering
                                                                                        investors long-term scalability in the food sector.
                                                                                    </p>
                                                                                    <p style={{fontSize:'16.5px'}} className='fw-500 mb-2 text-primaryBeige'>
                                                                                        The Liveability Challenge 2023 Winner ($1M prize)
                                                                                        Global Shrimp Summit 2024 Innovation Award
                                                                                        Berkeley SkyDeck & Hatch Innovation Studio Alumni
                                                                                        UN SDG Challenge Finalist
                                                                                    </p>
                                                                                </div>
                                            
                                                                            </div> : 
                                                                            <div>
                                                                                <div className="card_contaoiner_flex">
                                                                                        <div className='max_width_card'>
                                                                                            <p className='refrange_headings text-center text-primaryBeige purpleBg mb-0'>
                                                                                                {el.subHeading1}
                                                                                            </p>
                                                                                            <p className=' text-center fw-500 mb-2 purpleColor' style={{fontSize:'15.5px'}}>
                                                                                                {el.discriptions1}
                                                                                            </p>
                                                                                        </div>
                                                                                        <div className='max_width_card'>
                                                                                            <p className='refrange_headings text-center text-primaryBeige purpleBg mb-0'>
                                                                                                {el.subHeading2}
                                                                                            </p>
                                                                                            <p className=' text-center fw-500 mb-2 purpleColor' style={{fontSize:'15.5px'}}>
                                                                                                {el.discriptions2}
                                                                                            </p>
                                                                                        </div>
                                                                                </div>
                                            
                                                                                    <div className="card_contaoiner_flex">
                                                                                            <div className='max_width_card'>
                                                                                                <p className='refrange_headings text-center text-primaryBeige purpleBg mb-1 '>
                                                                                                    {el.subHeading3}
                                                                                                </p>
                                                                                                <p className='text-center fw-500 mb-2 purpleColor' style={{fontSize:'15.5px'}}>
                                                                                                    {el.discriptions3}
                                                                                                </p>
                                                                                            </div>
                                                                                            <div className='max_width_card'>
                                                                                                <p className='refrange_headings text-center text-primaryBeige purpleBg mb-1'>
                                                                                                    {el.subHeading4}
                                                                                                </p>
                                                                                                <p className='text-center fw-500 mb-2 purpleColor' style={{fontSize:'15.5px'}}>
                                                                                                    {el.discriptions4}
                                                                                                </p>
                                                                                            </div>
                                                                                    </div>  
                                                                              </div>  
                                                                }
                                                               
                                                            </div> 

                                                        {
                                                            el.stresNever ? 
                                                            <div className="w-25" style={{paddingLeft:'10px'}}>
                                                                    <p className='refrange_headings purpleBg text-center text-primaryBeige mb-0'>
                                                                        Premium  Price, Zero Residue, Compliant</p>
                                                                    <p className='p-2 text-center fw-500' style={{fontSize:'15.5px'}}> No
                                                                        antibiotics = export ready stock. Access premium markets demanding clean
                                                                        food. Get 15-30% higher prices for the same farmed produce.
                                                                    </p>
                                                            </div> : ''
                                                        }
                                                        </div>
                        
                                                    </div>
                        
                                                </div>
                        
                                            </div>
                        
                                            <div className=" h-100" style={{width:'20%'}}>
                                                <div className='d-flex justify-content-end position-relative h-100'>
                                                    <img src={el.image} style={{width:'100%', height:'100%'}}
                                                        className='border_radius_round2' />
                                                    <p className='onimage_text text-white'>{el.imageTitle}</p>
                                                </div>
                                            </div>
                        
                                        </div>
                                    </div>
                                </SwiperSlide>

                        ))    
                    }  
                     
                </Swiper>
       </div>
    )
}
    export default Building;