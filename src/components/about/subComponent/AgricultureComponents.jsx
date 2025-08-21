"use client"
import { useAnimationContext } from "@/context/AnimationContext";
import { MotionWrapper } from "@/context/MotionWrapper";
 import Link from "next/link"


const AgricultureComponents = () =>{
       const { fadeLeft, fadeRight } = useAnimationContext();

    return(
        <>
            <div className="container">
                    <div className="row">
                            <MotionWrapper className="col-md-6"
                                    variant={fadeLeft}
                            >
                                    <div className="paddingRight">  
                                            <h2 className="purpleColor m-top-b" >
                                                    From Aquaculture to Agriculture—We’re Just Warming Up.
                                            </h2>

                                            <p className="purpleColor m-top-b" style={{padding:'0 1.5rem 0 0'}}>
                                                    Our oral and sprayable biologics are already improving
                                                    survival, accelerating growth, and reducing waste across
                                                    aquaculture.Next stop: livestock, poultry, crop disease
                                                    management, and companion health.
                                            </p>

                                            <div className="buttons d-flex gap-2">
                                                    <Link href="/" className="buttons-primary " >
                                                            Aquaculture Solutions
                                                    </Link>  
                                            </div>
                                    </div>
                            </MotionWrapper>
                            <MotionWrapper className="col-md-6"
                                    variant={fadeRight}
                            >
                                    <div className="card1 p_smarter purpleBg text-primaryBeige border_radius_round2 d-flex justify-content-around mb-4">
                                            <span>
                                                    <img
                                                        src="/icons/about-icon1.png"
                                                        width="100"
                                                        alt="BUILT TO FIGHT BACK & PROTECT"
                                                    />
                                            </span>
                                            <div className="m-0">
                                                    <span className="rounded-pill buge-style accentRedBg text-primaryBeige pt-2 pb-2">DISEASE MANAGEMENT- SHRIMPS & FISH</span>
                                                    <h2 className="m-0">GUARD SERIES</h2>
                                                    <p className="m-0">BUILT TO FIGHT BACK & PROTECT</p>
                                            </div>
                                    </div>  

                                        <div className="card1 p_smarter purpleBg text-primaryBeige border_radius_round2 d-flex justify-content-around mb-4">
                                            <span>
                                                    <img
                                                        src="/icons/about-icon2.png"
                                                        width="100"
                                                        alt="BUILT TO FIGHT BACK & PROTECT"
                                                    />
                                            </span>
                                            <div className="m-0">
                                                    <span className="rounded-pill buge-style accentLimebg purpleColor pt-2 pb-2">GROWTH OPTIMISATION IN FISH</span>
                                                    <h2 className="m-0">JUMBO SERIES</h2>
                                                    <p className="m-0">BUILT TO GROW MORE SMARTLY</p>
                                            </div>
                                    </div>  
                            </MotionWrapper>
                    </div>  
            </div>
        </>
    )
}

export default AgricultureComponents;