'use client';
import { useEffect, useState } from "react";
import Styles from "./home.module.css";
import { motion } from 'framer-motion';
import { useAnimationContext } from '@/context/AnimationContext';



const AnimatedCounter = ({target}) =>{ 

    const [count, setCount] = useState(0);
    const isNumeric = typeof target === "number";

    useEffect(() =>{
         if (!isNumeric) return;

        let current = 0;
        const step = Math.ceil(target / 50); 
        const timer = setInterval(() =>{
            current += step;
            if(current >= target){
                current = target
                clearInterval(timer);
            }
            setCount(current);
        },100);
        return () => clearInterval(timer);
      
    }, [target]);
     return <h1> {isNumeric ? `${count}%` : target}</h1>;
}

const CountersSection = ({counterData = [], className=""}) =>{
       const {animationVariants, ref1, inView1} = useAnimationContext();
       
    return(
        <div className={`counter-container ${className}`} 
        >
            <div className={`container-2 ${Styles.counterPadding}`}>
                    <div className="row">
                            {
                                counterData.map((ele, index) =>{
                                    return<div className="col-md-3 col-sm-6 col-12" key={index}>
                                                <div className={`text-primaryBeige box_p border-r`}>
                                                        <AnimatedCounter target={ele.counter}/>
                                                        <p className="pfont"> 
                                                            {ele.discriptions}
                                                            <strong className={Styles.muteds}> {ele.strong}</strong>
                                                        </p> 
                                                </div>
                                            </div>
                                })
                            }
                          
                    </div>
            </div>
        </div>
    )
}

export default CountersSection;