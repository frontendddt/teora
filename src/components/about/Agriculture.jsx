
import IndustrySlider from "../home/IndustrySlider"
import Link from "next/link"
//  import { AnimationProvider } from "@/context/AnimationContext";

const data = [
         {
                image: "/slider/one.png", 
                title: '90% SURVIVAL',
                text: 'In shrimp farms with ShrimpGuard™',
        },
        {
                image: "/slider/two.png", 
                title: '20–30% GROWTH',
                text: 'Boost with FishJumbo™',
        },
        {
                image: "/slider/three.png", 
                title: '70% REDUCTION',
                text: 'In antibiotic use for disease cure.',
        },
        {
                image: "/slider/four.png", 
                title: '10X',
                text: 'faster time-to-market than traditional solution',
        },
          {
                image: "/slider/five.png", 
                title: '30%',
                text: 'Improvement in feed efficiency',
        },
          {
                image: "/slider/six.png", 
                title: ' GLOBAL',
                text: 'Recognition: Liveability Challenge, Global Shrimp Summit, UN SDG finalist',
        },
]

const Agriculture = () =>{

//  const {fadeLeft, fadeRight} = AnimationProvider();

    return(
        <>
            <div className="container-fluide corporateBg section-space-2" style={{position:'relative', zIndex:'9999'}}> 
                <div className="container">
                        <div className="row">
                                <div className="col-md-6">
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
                                </div>
                                <div className="col-md-6">
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
                                                        <p className="m-0">BUILT TO FIGHT BACK & PROTECT</p>
                                                </div>
                                        </div>  
                                </div>
                        </div> 

                </div>

                <section className="aboutIndustrice section-space-2"> 
                          <IndustrySlider data={data} text="THE IMPACT SO FAR IN AQUACULTURE" className="aboutheading"/>
                </section>

            </div>

        </>
    )
}

export default Agriculture