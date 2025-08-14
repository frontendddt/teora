
"use client"
import { useAnimationContext } from "@/context/AnimationContext";
import { MotionWrapper } from "@/context/MotionWrapper";
 
const ScienceEmpower = () =>{
       const { fadeLeft, fadeRight } = useAnimationContext();
    
    return(
        <>
            <div className="container">
                    <h3 className="solutionsH3 purpleColor">
                      
                             So that’s what we’re creating. A <br/>
                            future where science empowers— <br/>
                            not overwhelms. Where farms thrive<br/>
                        
                        <span className="h1500 mutedPurpleColor">— without trade-os. Andwhere food <br/>
                           doesn’t just feed the world— 
                        </span> <span className="accentRedColor h1500">it uplifts it.</span>
                    </h3>
                    <div className="section-space-2 pb-0T">  
                        <div className={`row`}>  
                                <MotionWrapper className="col-md-5 d-flex align-items-center justify-content-end"
                                    variant={fadeLeft}
                                >
                                    <img
                                        src="/image/slickybg.png"
                                        alt="And because the old ways o"
                                        style={{width:'70%'}}
                                    />
                                </MotionWrapper>
                                <MotionWrapper className="col-md-7"
                                    variant={fadeRight}>
                                    <div className='d-flex align-items-center  purpleColor p-24'>  
                                        <img 
                                            src="/icons/border.png" 
                                            width="100" 
                                            alt="border" /> 
                                        <div className='' style={{paddingLeft:'1rem'}}>
                                                <h6 className='p-24 '>
                                                        Today’s farming relies on toxic inputs, overfishing,
                                                        disease-prone livestock, and chemical overkill. Across
                                                        the food system, disease outbreaks, unsustainable
                                                        inputs, and production inefficiencies threaten food
                                                        security and profitability. And with antimicrobial
                                                        resistance rising and chemical bans tightening, Current
                                                        solutions aren’t just outdated—they are dangerous. 
                                                </h6> 
                                                    
                                        </div>
                                    </div> 
                                </MotionWrapper>  
                        </div> 
                    </div>
            </div>  
        </>
    )
}
    export default ScienceEmpower;