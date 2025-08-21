'use client';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";
import styles from "./aboutStypes.module.css";
import Image from "next/image";
import mapicon1 from "../../assets/icons/mapicon1.png";
import mapicon2 from "../../assets/icons/mapicon2.png";
import mapicon3 from "../../assets/icons/mapicon3.png";
import mapicon4 from "../../assets/icons/mapicon4.png";


const bubble = [
      {
        text: "Disease outbreaks are wiping out my farms. Antibiotics/ Chemicals aren’t working- what do I do ?",
        bgclass: 'darkredBg',
        colorClass: 'text-primaryBeige', 
        bubbleClass: 'bubble2',
        icon:mapicon1,
    },
    {
        text: "Biosecurity is too expensive for small farms like mine. I can’t afford to upgrade facilities! ",
        bgclass: 'midBeigeBg',
        colorClass: 'purpleColor', 
        bubbleClass: 'bubble1',  
        icon:mapicon3,
    },
   
      {
        text: "Feed costs are skyrocketing, and my farm is struggling. Can we grow fish faster with less feed?",
        bgclass: 'darkgreenBg',
        colorClass: 'purpleColor', 
        bubbleClass: 'bubble4',
        icon:mapicon4
    },
      {
        text: "My animal/ fish take too long to reach market size, but I can’t afford extra feed costs!",
        bgclass: 'darkinfoBg',
        colorClass: 'purpleColor', 
        bubbleClass: 'bubble3',
        icon:mapicon3,
    },

     {
        text: "One-third of all food produced is wasted—I am loosing Money ! Can technology help us?",
        bgclass: 'accentLimebg',
        colorClass: 'purpleColor', 
        bubbleClass: 'bubble6',
        icon:mapicon4,
    },
  
     {
        text: "I have no way to vaccinate my livestock without expensive injections and labor costs",
        bgclass: 'mutedLavenderBg',
        colorClass: 'purpleColor', 
        bubbleClass: 'bubble5',
        icon:mapicon2
         
    },
    
    {
        text: "Fertilizers, chemicals, and antibiotic waste are polluting our water and soil—what’s the alternative?",
        bgclass: 'lightredBg',
        colorClass: 'text-primaryBeige', 
        bubbleClass: 'bubble7',
        icon:mapicon1,
    },
   
    {
        text: "My animal/ fish take too long to reach market size, but I can’t afford extra feed costs! ",
        bgclass: 'lightredBg',
        colorClass: 'text-primaryBeige', 
        bubbleClass: 'bubble8',
        icon:mapicon1,
    },
    {
        text: "Customers are demanding antibiotic and chemical-free food—how do we supply disease-free food ? ",
        bgclass: 'darkpurpolBg',
        colorClass: 'text-primaryBeige', 
        bubbleClass: 'bubble9',
        icon:mapicon2,
    },
    {
        text: "Can I vaccinate my fish without injections? Handling thousands of fish individually is impossible!",
        bgclass: 'darkgraBg',
        colorClass: 'purpleColor', 
        bubbleClass: 'bubble10',
        icon:mapicon3,
    },
]


const MapOverlay = () =>{

     const bubbleVariants = {
            hidden: { opacity: 0, scale: 0.6, y: 30 },
            visible: (index) => ({
                opacity: 1,
                scale: 1,
                y: 0,
                transition: {
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.2, 
                },
            }),
            };

    return(
        <> 
            <div className={` ${styles.mapContainer}`}>
                <div className="container position-relative  pt-3 pb-3" style={{height:'100%'}}>
                    <ul className="m-0 p-0">
                    {
                        bubble.map((bubble, index) =>{ 
                      
                     return<li className={` 
                                ${styles.mapContent} 
                                ${styles[bubble.bubbleClass]} 
                                mb-5 `}
                                key={index}   > 
                                    <motion.div 
                                            custom={index}
                                            variants={bubbleVariants}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: false, amount: 0.2 }}
                                            className={`d-flex align-items-center ${styles.bubble} ${bubble.bgclass} ${bubble.colorClass} 
                                        `} >
                                        <p> {bubble.text} </p>
                                    </motion.div> 
                                    <div className="d-flex justify-content-center pt-4">
                                        <Image
                                            src={bubble.icon}
                                            width={70}
                                            height={60}
                                            alt="icons"
                                        />
                                    </div>
                             </li>
                        })
                    } 
                         
                    </ul>
                </div>
            </div>
        </>
    )
}

export default MapOverlay;