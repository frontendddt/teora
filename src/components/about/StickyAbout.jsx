"use client";
import { useAnimationContext } from "@/context/AnimationContext";
import { MotionWrapper } from "@/context/MotionWrapper";
 
import Link from "next/link";
import Styles from "./stickyAbout.module.css";

import 'swiper/css';

import 'swiper/css/autoplay';

import { FaLongArrowAltRight } from "react-icons/fa";

import StackedCards from "./subComponent/StackedCards";
import WhatWereBuildingSlider from "./subComponent/WhatWereBuildingSlider";
import TimerCardSwiper from "./subComponent/TimerCardSwiper";
// cimponents impory
import { OurTeam } from "./subComponent/OurTeam";
import { MissionCardSwiper } from "./subComponent/MissionCardSwiper";
 
// image imports

import slideMini from "/public/aboutAssets/icons/slidemini-icon.png";
import slideMini2 from "/public/aboutAssets/icons/slidemini-1.png" 
import AboutIcons from "/public/aboutAssets/icons/about-icons2.png";
import aboutIcon2 from "/public/aboutAssets/icons/about-icon4.png";
import abouticon3 from "/public/aboutAssets/icons/about-icon5.png";  
import cardimg2 from "/public/aboutAssets/cardimg/cardimg2.png";
import cardimg3 from "/public/aboutAssets/cardimg/cardslide3.png";
import cardimg4 from "/public/aboutAssets/cardimg/cardimg4.png";
import card1 from "/public/slider/redcard.png"
 

  const swiperData = [
        {
            titles: "Regenerative Crop Protection",
            miniicon: slideMini,
            subtitle: "Spray-On Protection: Spray. Grow. Sustain.",
            text: "Teora’s foliar biologics defend crops and boost resilience— naturally. Currently working on viruses like Papaya Ring Spot Virus (PRSV) and Cacao Swollen Shoot.No toxic runoff, no pesticide residue, no long-term damage.",
            bold: "Enhances yield, preserves soil health, and passes global export checks",
            img: AboutIcons,
            alt:"Enhances yield, preserves soil health",
            linkName: "Explore More",
            mainimg: "/aboutAssets/aboutSlider-2.png",
            bgColor:'accentLimebg',
            color:'purpleColor',
            rowBg:"purpleBg",
            rowColor:"text-primaryBeige"
        
        },
        {
            titles: "Livestock— Growth Without Hormones Or Hassle",
            miniicon: slideMini2,
            subtitle: "Grow healthier animals, clean and profitably.",
            text: "Our feed-based biologics build muscle and immunity—no injections needed.Currently working on natural growth enhancers for cows, pigs, and goats. Easy to mix in feed, shelf-stable, no infrastructure needed",
            bold: "More weight. Less waste. Zero residues.",
            img: aboutIcon2,
            alt:"More weight. Less waste. Zero",
            linkName: "Explore More",
            mainimg: "/image/growthman.png",
            bgColor:'accentRedBg',
            color:'text-primaryBeige',
            rowBg:"midBeigeBg",
            rowColor:"purpleColor"
        },
        {
            titles: "Companion Health — Clean Biotech For Pets",
            miniicon: slideMini,
            subtitle: "Immune Support for Pets, Naturally",
            text: "Because clean care shouldn’t stop at farms. Teora’s biologics will offer safe, targeted immunity for your furry companions. Currently working on oral biologics for species-specific protection, No synthetic drugs, antibiotics, or stress.",
            bold: "Safe enough for love. Smart enough for science",
            img: abouticon3,
            alt:"Safe enough for love",
            linkName: "Explore More",
            mainimg: "/image/dogs.png",
            bgColor:'mutedLavenderBg',
            color:'purpleColor',
            rowBg:"purpleBg",
            rowColor:"text-primaryBeige"
        },
       
    ]

  const cardcontant = [
        {
           heading: "Outbreaks End Before They Begin",
           title: "AI -mapped antigens prime immunity via everyday feed or spray.",
           alt: "Outbreaks End Before",
           img: card1,
           listActive:"Prevent",
        },
        {
           heading: "Fight Back Fast—Stress Free",
           title: "Oral or spray based biologics clear pathogens in targeted areas like gut or the root minus needles, minus downtime.",
           alt: "Outbreaks End Before",
           img: cardimg2,
           listActive:"Treat",
        },
        {
           heading: "More Harvest, Less Feed. More Profits.",
           title: "Metabolism-tuned peptides shrink FCR and harvest windows.",
           alt: "Outbreaks End Before",
           img: cardimg3,
           listActive:"Boost",
        },
        {
           heading: "No Labs, No Cold Trucks, No Drama.",
           title: "Room-temp powders that farmers just mix, feed, or spray repeat",
           alt: "Outbreaks End Before",
           img: cardimg4,
           listActive:"Simplify",
        },
  ] 

// MissionCardSwiper data 
const missionCardSwiperData = [
    {
        heaing: "2020- THE BEGINNING",
        info: "What started as research into bio-based food colorants turned into something bigger—when we realised that the biggest challenge facing food today wasn’t colour. It was survival.",
        title: "Pivoted To Disease Management In Aquaculture & Secured First Seed Funding Through Entrepreneur First.",
        image: '/slider/aboutslideDoctore.png'
    },
    {
        heaing: "2021- BREAKTHROUGH",
        info: "Teora advanced its research, developing oral biologics to combat diseases in shrimp and fish without antibiotics.First proof-of-concept trials showed 90% survival, Teora expanded.",
        title: "And Secured Additional Funding To Scale Its Research From Berkeley Skydeck & Hatch Innovation Studio",
        image: '/slider/aboutSlide2.png'
    },
    {
        heaing: "2022- SCALE RESEARCH",
        info: "With over $500K in funding, Teora intensified its focus on product validation and market entry. Expanding into India, Set up research facilities to accelerate product development.",
        title: "Partnered With Delos, Jala, And Aquaconnect For Commercial Scale-Up And Market Expansion.",
        image: '/slider/aboutSlide3.png'
    },
    {
        heaing: "2023- VALIDATION",
        info: "With successful commercial trials of ShrimpGuard™ in farms and a robust market entry plan for Southeast Asia, we scaled up manufacturing with a world-class team.",
        title: "Teora Gained International Recognition By Winning The Liveability Challenge, Biokansas, And Inventures 2023",
        image: '/slider/aboutSlide4.png'
    },
    {
        heaing: "2024- COMMERCIALISE",
        info: "ShrimpGuard™ and FishGuard™ launched commercially across Southeast Asia. Fish Jumbo™ development ramped up, investor interest and farmer adoption surged. ",
        title: "Went Live. Got Noticed. Grew Impact. Won The The Global Shrimp Summit Innovation Award.",
        image: '/slider/aboutSlide5.png'
    },
    {
        heaing: "2025- EXPANSION",
        info: "Teora scaling beyond Aquaculture—With AI-powered design and rapid precision fermentation, we’re shaping a cleaner, scalable future for livestock, poultry, crops, & Pets",
        title: "Sustainability Recognition – Named A We Empower UN SDG Challenge Finalist And Recognised In Media",
        image: '/slider/aboutSlide6.png'
    }
];


// stack card slider card slider content 
const stackCadrSlide = [
   {
    titleName: 'SAFETY',
    image:'/icons/boosting.png',
    hedings: "SAFE FROM START TO SCALE",
    subHeading: "Safe for Animals. Crops. People. Planet.",
    title:"Teora protects animals, crops, and ecosystems with stress-free, chemical-free biologics—making food safer for people, and farming gentler on the planet.",
    bgClass:"midBeigeBg"
  },
  {
    titleName: 'FOOD SECURITY',
    image:'/icons/emission.png',
    hedings: "BUILT FOR RESILIENCE",
    subHeading: "90% Survival. 30% Less Waste. More yield ",
    title:"By boosting immunity and reducing losses via biologics, SOLAQ™ helps farms stand strong against disease and supply chain disruptions- Prepared to feed 10 Billion.",
    bgClass:"accentBlueBg"
  },
   {
    titleName: 'FOOD SECURITY',
    image:'/icons/scales.png',
    hedings: "SCALE SWITH YOU",
    subHeading: "Any Farm. Any Species. Any Season",
    title:"From smallholders to industrial setups, Teora’s biotech plugs right into existing routines of farm—no injections, no cold chain, no barriers to scale",
    bgClass:"mutedLavenderBg"
  },

  {
    titleName: 'SUSTAINABILITY',
    image:'/icons/emission.png',
    hedings: "BUILT TO REGENERATE,NOT DEPLETE",
    subHeading: "Less Emissions. More Ecosystem.",
    title:"By improving feed efficiency and disease resilience, we reduce waste, boosts yields while shrinking carbon emissions , conserving resources, and restoring balance.",
    bgClass:"accentLimebg"
  },

  {
    titleName: 'SUSTAINABILITY',
    image:'/icons/planet.png',
    hedings: "TOXIN-FREE BY DESIGN",
    subHeading: "Zero Residues. Zero Runoff. No Bans",
    title:"We cut chemicals, antibiotics, and wasteful inputs—replacing them with clean biologics that works in sync with nature to keep food, soil, and water safe for generations",
    bgClass:"lightgreyBg"
  }, 
  
]


const StickyAbout = () =>{
    const {fadeDown} = useAnimationContext();
    return(
        <div className="sticky_container" >
                <div className={`sticky-top z-2 section-space-2 ${Styles.sticky_section}`} 
                      style={{
                            backgroundImage: 'url("/image/agriculture_bg1.png")',
                            width: '100%',
                            height: '100%',
                            backgroundRepeat:'no-repeat',
                            backgroundSize:'cover'
                        }}
                >
                   <WhatWereBuildingSlider swiperData={swiperData}/>
                    
                </div> 

                 <div className={`sticky-top z-2 section-space-2 midPurpleBg missionCardSwiper_space ${Styles.sticky_section}`}>

                        <TimerCardSwiper
                            cardcontant={cardcontant}  
                            heading={
                                <span>
                                    Powered By Our Proprietary SOLAQ™ Platform, <br/>We Use Breakthrough Biotechnology To
                                </span>
                            } 
                        />

                </div> 

                <div className={`sticky-top section-space-2 deepPurple ${Styles.sticky_section}`}
                        style={{
                             backgroundImage: 'url("/bgImage/securityText.png")',  
                             backgroundPosition: 'top',
                             backgroundRepeat:'no-repeat', 
                             width:'100%',  
                        }}
                        > 

                     <div>
                    
                        <div className="container"> 
                                <div className="row">
                                    <div className="col-md-7 d-flex align-items-end">
                                            <div>
                                                <span className="rounded-pill buge-style"> - OUR CORE FOCUS </span>   
                                                    <h2 className="text-primaryBeige mt-2">
                                                        MAKING FOOD SAFER <br className="breackDisplay"/>
                                                        FOR CONSUMERS, <br className="breackDisplay"/>
                                                        MORE SUSTAINABLE  <br className="breackDisplay"/>
                                                        FOR THE PLANET, AND  <br className="breackDisplay"/>
                                                        MORE PROFITABLE  <br className="breackDisplay"/>
                                                        FOR PRODUCERS
                                                    </h2>
                                            </div>
                                    </div>
                                    <div className="col-md-5 ">
                                            <div className="card-conatiner">
                                                    <div className={`mutedBeigeBg mb-3 ${Styles.aboutCardBox} purpleColor`}>
                                                        <div className="d-flex">
                                                            <div>
                                                                <h6 className={Styles.aboutCardtext}>Teora -"One of the 10 Biotech Startups Rewriting The Future Of Food.”</h6> 
                                                                <span className={Styles.asiaOne}>- AsiaOne</span> 
                                                            </div>
                                                            <div style={{width:'150px'}} className="d-flex justify-content-end align-items-end">
                                                                <Link href="#" className="round_arrow hovers">
                                                                    <span className="inlineblockrow">
                                                                        <FaLongArrowAltRight className={`${Styles.arrows}`}/>
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className={`purpleBg mb-3 ${Styles.aboutCardBox} text-primaryBeige`}>
                                                        <div className="d-flex">
                                                            <div style={{paddingRight:'1rem'}}>
                                                                <h6 className={Styles.aboutCardtext}> Global Shrimp Summit 2024 - Innovation Award</h6> 
                                                                <span className={Styles.asiaOne}> Teora received the innovation Award acknowledging its advancements in shrimp farming technologies</span> 
                                                            </div>
                                                            <div style={{width:'150px'}} className="d-flex justify-content-end align-items-end position-relative">
                                                                <img
                                                                    src="/aboutAssets/innovation.png"
                                                                    alt="Teora received the innovation" 
                                                                />
                                                                <Link href="#" className={`round_arrow hoversBgBeige ${Styles.innovationBtn}`}>
                                                                    <span className="inlineblockrow">
                                                                        <FaLongArrowAltRight className={`${Styles.arrows}`}/>
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className={`mutedBeigeBg mb-3 ${Styles.aboutCardBox} purpleColor`}>
                                                        <div className="d-flex">
                                                            <div>
                                                                <h6 className={Styles.aboutCardtext}>Inventures 2023 – Agri Category Winner</h6> 
                                                                <span className={Styles.asiaOne}> Teora Secured the top position, highlighting its groundbreaking solutions in the agritech sector</span> 
                                                            </div>
                                                            <div style={{width:'150px'}} className="d-flex justify-content-end align-items-end">
                                                                <Link href="#" className="round_arrow hovers">
                                                                    <span className="inlineblockrow">
                                                                        <FaLongArrowAltRight className={`${Styles.arrows}`}/>
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>

                                            </div>
                                            <div className="mt-4"> 
                                                <Link
                                                    className="hoverButonsAbord" href="/aword"
                                                    >Awards & Recognition</Link>
                                            </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                    
                </div> 

                 <div className={`sticky-top z-4 section-space-2 midPurpleBg ${Styles.sticky_section}`}>
                     <div className="container">
                            <StackedCards
                                stackCadrSlide ={stackCadrSlide}
                                heading = {"ON A MISSION TO BUILD THE FUTURE  OF SAFE, SUSTAINABLE FARMING"}
                            />
                     </div>
                </div>

                <div className={`sticky-top z-4 section-space-2 mutedLavenderBg missionCardSwiper_space ${Styles.sticky_section}`}>
                     <MissionCardSwiper
                        missionCardSwiperData = {missionCardSwiperData}
                        heading=" …From a bold vision to revolutionising food security." 
                     />
                </div> 
             
                <div className={`sticky-top z-6 section-space-2 deepPurple h-fitcontent ${Styles.sticky_section}`}>
                        <MotionWrapper 
                            className="position-relative "
                            variant={fadeDown}
                            >
                             <OurTeam/>
                        </MotionWrapper>
                </div> 
               


        </div>
    )
}
export default StickyAbout;