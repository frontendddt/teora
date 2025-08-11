
 "use client"

import { MotionWrapper } from "@/context/MotionWrapper";
import { useAnimationContext } from "@/context/AnimationContext";
const LeadershipSection = ({
    heading_card1, descreption_card1, buttonText_card1, classname_card1, heading_card2, descreption_card2, buttonText_card2, classname_card2
}) =>{
const {fadeLeft, fadeRight} = useAnimationContext();
    return(
            <MotionWrapper className="container">
                    <div className="row">
                    <MotionWrapper className="col-md-5 text-primaryBeige"
                        variant={fadeLeft}
                    >
                            <div className={`p-all midPurpleBg border_radius_round d-flex flex-column justify-content-between h-100 interested intrestSections ${classname_card1}`} style={{padding:'6rem 3rem'}}>
                                <h3>{heading_card1} </h3>
                                <p className="">
                                        {descreption_card1}
                                </p>
                                <button className="connectBtn mt-3" style={{width:'fit-contant'}}>{buttonText_card1}</button>
                            </div>
                    </MotionWrapper>

                    <MotionWrapper className="col-md-7 text-primaryBeige position-relative"
                        variant={fadeRight}    
                    >
                            <div className={`card_padding midPurpleBg border_radius_round2 h-100  d-flex flex-column justify-content-between interested intrestSections ${classname_card2}`}>
                                <h3>{heading_card2}</h3>
                                <div className="w-75">
                                    <p className="">
                                        {descreption_card2}
                                    </p>
                                
                                </div> 
                                <button className="mt-3 connectBtn" >{buttonText_card2}</button>
                            </div>
                        <img
                            src="/image/handmeet.png"
                            width={120} 
                            alt="hand meet"
                            className="handmeet"
                        />
                    </MotionWrapper>
                    </div>
            </MotionWrapper> 
    )
}

export default LeadershipSection;