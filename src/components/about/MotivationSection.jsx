"use client"
import Styles from "./aboutStypes.module.css";
import { useAnimationContext } from '@/context/AnimationContext';
import { MotionWrapper } from "@/context/MotionWrapper";



export default function MotivationSection() {
    const { fadeLeft, fadeRight } = useAnimationContext();

    return (
        <section>

            <div className="container section-space">
                <div className="row">

                    <MotionWrapper className="col-md-6" variant={fadeLeft} >
                        <span className="rounded-pill buge-style accentRedBg text-primaryBeige pt-2 pb-2">OUR WHY’S MOTIVATION</span>
                        <h2 className="text-primaryBeige mt-4">
                            Farmers have always had tough battles—
                            <span className="mutedLavenderColor">
                                But Today, Climate Change, Disease Outbreaks, Rising Costs, And Food
                                Safety Regulations Are Making It
                                Harder Than Ever.
                            </span>
                        </h2>

                        <div className="row mt-4">

                            <div className={`col-md-6 mt-3 ${Styles.aboutCard}`} >
                                <div className={`borderRadius20 d-flex align-items-center h-100 ${Styles.soaringElements}`}>
                                    <h4 >Soaring Feed Costs, Yields Shrink, Margins Collapse, Safety Disappears</h4>
                                </div>
                            </div>
                            <div className={`col-md-6 mt-3 ${Styles.aboutCard}`}>
                                <div className={`borderRadius20 h-100 d-flex align-items-center ${Styles.soaringElements}`}>
                                    <h4 >Disease Wipes Out Stock In Days Before It Reaches Harvest.</h4>
                                </div>
                            </div>
                            <div className={`col-md-6 mt-3  ${Styles.aboutCard}`}>
                                <div className={`borderRadius20 h-100 d-flex align-items-center ${Styles.soaringElements}`}>
                                    <h4 >Antibiotics Being Banned, Leaving Few Alternatives.</h4>
                                </div>
                            </div>
                            <div className={`col-md-6 mt-3 ${Styles.aboutCard}`}>
                                <div className={`borderRadius20 h-100 d-flex align-items-center ${Styles.soaringElements}`} >
                                    <h4>Consumers Demanding Safer, Antibiotic -Free Food.</h4>
                                </div>
                            </div>

                        </div>
                    </MotionWrapper>

                    <MotionWrapper className="col-md-6 position-relative" variant={fadeRight}>

                        <div className="row">
                            <div className="col-md-12 d-flex align-items-end">
                                <div className={Styles.imagewidths}>
                                    <img
                                        src="/icons/alings.png"
                                        alt="Food waste due to diseases, poor"
                                    />
                                </div>
                                <div style={{ width: '50%' }}>
                                    <p className={`text-primaryBeige ${Styles.economy}`}>
                                        Food waste due to diseases, poor
                                        logistics, yields and premature
                                        harvesting costs the global economy
                                        $940 billion annually (UNEP, 2021)
                                    </p>
                                </div>
                            </div>

                        </div>

                        <div className={` position-relative ${Styles.circals}`}>
                            <div className={Styles.ritrangle}> </div>
                            <div className={`accentRedBg d-flex align-items-center justify-content-center text-primaryBeige ${Styles.dolarcircal}`}>
                                <div className="img-main">
                                    <img src="/icons/Dollar.png"
                                        alt="harvesting costs the global economy"
                                        width={70}
                                    />
                                <h4 className={`${Styles.h4text} lightblueColor`} >$940 B</h4>
                                </div>
                            </div>
                            <div className={`accentLimebg position-relative m-auto ${Styles.manageCircal} purpleColor`}>
                                <div>
                                    <h4> “And outdated disease management and growth methods are failing farmers, forcing them into inefficient, costly, and unsustainable cycles.”</h4>
                                </div>
                            </div>
                        </div>

                    </MotionWrapper>


                </div>
            </div>

        </section>
    );
}
