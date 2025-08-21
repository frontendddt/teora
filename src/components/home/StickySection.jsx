'use client';
import Styles from "./home.module.css";
import Image from "next/image";

import SolaqSlider from "./slickyComponents/SolaqSlider";
import { motion } from 'framer-motion';
import FeatureHighlights from "./slickyComponents/FeatureHighlights";
import BestRecorgnition from "./slickyComponents/BestRecorgnition";
import teorabg from "../../assets/homeAssets/teoraBG.png"
import bgImage from "../../assets/homeAssets/bg-img.jpg";
import { useAnimationContext } from '@/context/AnimationContext';
import WhyMatterCard from "./slickyComponents/WhyMatterCard";
//test for 

// WhyMatterCard data
const slideCardData = [
    {
        img: "/icons/farmer.jpg",
        heading: " Because Every Farmer Deserves A Fair Shot At Profitability And Growing Better Harvests.",
        title: "Teora solutions help farmers lose less and grow more—cutting feed waste, curbing disease, and speeding up harvest cycles.",
        bold: "Fewer losses. Faster turns. Better margins.",
        class: "accentLimebg",
        color: "purpleColor"
    },
    {
        img: "/icons/food.jpg",
        heading: " Because Food Shouldn’t Come At The Cost Of Planet Or Ecosystems",
        title: "By eliminating chemical runoff and antibiotic overuse, SOLAQ™ helps farms shrink their footprint—not just expand their yield.",
        bold: "Clean ponds. Healthier soils. Fewer emissions.",
        class: "purpleBg",
        color: "text-primaryBeige"
    },
    {
        img: "/icons/prevetion.jpg",
        heading: "Because Disease Prevention Shouldn’t Mean Choosing Between Safety And Survival.",
        title: "No more toxic trade-offs. SOLAQ™ protects livestock, crops, and aquatic systems without needles, cold chains, or antibiotic overload.",
        bold: "Just science that works—with zero stress",
        class: "accentBlueBg",
        color: "purpleColor"
    },
    {
        img: "/icons/foodchain.jpg",
        heading: "Because The Food Chain Is Only As Strong As Its Weakest Link.",
        title: "SOLAQ™ helps feed mills meet regulatory demands, lets distributors offer cleaner food, and enables brands to promise safety and sustainability. ",
        bold: "From production to plate—it keeps the whole chain moving forward.",
        class: "accentRedBg",
        color: "text-primaryBeige"
    },
    {
        img: "/icons/termcircal.jpg",
        heading: "Because 600 Million People Shouldn’t Get Sick From hat They Eat.",
        title: "SOLAQ™ biologics remove the residues, contaminants, and AMR risks that chemical farming leaves behind.",
        bold: "Cleaner food. Safer exports. Healthier futures.",
        class: "mutedLavenderBg",
        color: "purpleColor"

    },
    {
        img: "/icons/aurnmorny.jpg",
        heading: "Because Strong Communities Start With Resilient Farms & Happy People.",
        title: "SOLAQ™ empowers local producers with easy-to-adopt solutions—Promoting better farming, supporting livelihoods, not just yields.",
        bold: "When farms thrive, jobs grow, incomes stabilise, and rural economies rise.",
        class: "midBeigeBg",
        color: "purpleColor"
    },

]

const StickySection = () => {
    const { fadeRight, fadeLeft } = useAnimationContext();

    return (
        <div className={`${Styles.sticky_container}`}>
            <div className={`sticky-top z-1 section-space-2 purpleBg tectureBg ${Styles.sticky_section}`}>
                <div className="container padding_manage">
                    <div className="row animate-wrapper">
                        <motion.div className="col-md-6 "
                            variants={fadeLeft}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.2 }}
                        >

                            <img
                                src="/image/slickybg.png"
                                style={{ width: '80%' }}
                                alt="slick image"
                                className="imageheights"
                            />
                        </motion.div>
                        <motion.div className={`col-md-6 d-flex justify-content-center align-items-center flexdirections`}
                            variants={fadeRight}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.2 }}

                        >
                            <div className="box_p text-primaryBeige" style={{ padding: '0 6rem' }}>
                                <h2 className=""  >
                                    Today's solutions aren't just inefficient
                                    - It's Unaffordable.
                                    Unsustainable.
                                    Unscalable.
                                </h2>
                                <p className={`mt-4 ${Styles.production_info}`}>
                                    The Next Evolution of Food Production Isn’t Just about Producing More—
                                    <strong>It’s about Producing it
                                        <span className={Styles.smart}> Smarter,</span>
                                        <span className={Styles.Safer}> Safer, </span>
                                        <span className={Styles.sustainably}>Sustainably</span>
                                    </strong>
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className={`sticky-top section-space-2 mobile_space-2  z-1 
                text-primaryBeige  ${Styles.sticky_section} `}
                style={{
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundImage: `url(${teorabg.src})`,
                    backgroundColor: '#3a28564f',
                    backgroundBlendMode: 'overlay',
                    height: '100%',
                    width: '100%',
                }}
            >
                <SolaqSlider />

            </div>


            <div className={`section-space-2 bgthis indexpage z-4 ${Styles.sticky_section}`} >

                <div
                    style={{
                        backgroundImage: `url(${bgImage.src})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundAttachment: 'fixed',
                    }}>

                    <div className="container">
                        <WhyMatterCard data={slideCardData} text="WHY IT MATTERS?" />
                    </div>

                </div>

            </div>


            <div className={`sticky-top section-space-2 z-4 accentBlueBg ${Styles.sticky_section}`}>
                <div className="animate-wrapper">
                    <div className="container purpleColor">
                        <span className="rounded-pill text-primaryBeige buge-style purpleBg" >DISEASE MANAGEMENT | GROWTH ENHANCERS FOR FISH & SHRIMPS.</span>
                        <h1 className="m-top-b h1500 h11536">SOLUTIONS FOR AQUACULTURE</h1>
                    </div>

                    <div className="container-fluid wmd100" style={{ width: '90%' }}>
                        <div className="row animate-wrapper">
                            <motion.div className="col-md-6 mb-3"
                                variants={fadeLeft}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.2 }}
                            >
                                <div className="card_container h-100 round_padding corporateBg purpleColor">
                                    <div className="d-flex gap-3">
                                        <div>
                                            <Image
                                                src="/icons/about-icon1.png"
                                                alt="group icon"
                                                width={100}
                                                height={100}
                                            />
                                        </div>

                                        <div className="info">
                                            <span className="rounded-pill text-primaryBeige buge-style accentRedBg" >DISEASE MANAGEMENT- SHRIMPS & FISH</span>
                                            <h2 className="m-0">GUARD SERIES</h2>
                                            <span className="groupBolds">BUILT TO FIGHT BACK & PROTECT</span>
                                        </div>
                                    </div>

                                    <div className="text_container mt-5 mt-5Mobile">
                                        <p>Guard Series delivers both prophylactic (preventive) and
                                            therapeutic (Combat-ready) vaccine-like protection —no
                                            needles, no cold chains, no chemical chaos, no antibiotics</p>
                                        <p>
                                            <strong>ShrimpGuard<sup>TM</sup> </strong>
                                            For Shrimp: Targets WSSV & IMNV
                                        </p>
                                        <p>
                                            <strong>FishGuard<sup>TM</sup> </strong>
                                            For Fish: Tackles SDDV, Vibrio & many more.
                                        </p>
                                    </div>
                                    <div className="mt-5 mt-5Mobile"><a className="buttons-primary " href="/"> Explore Guard Series</a></div>
                                </div>
                            </motion.div>

                            <div className="col-md-6 mb-3">
                                <motion.div className="card_container round_padding corporateBg h-100 purpleColor"
                                    variants={fadeRight}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: false, amount: 0.2 }}
                                >
                                    <div className="d-flex gap-3">
                                        <div>
                                            <Image
                                                src="/icons/about-icon2.png"
                                                alt="group icon"
                                                width={100}
                                                height={100}
                                            />
                                        </div>

                                        <div className="info">
                                            <span className="rounded-pill buge-style darkLimeBG" >GROWTH OPTIMISATION IN FISH</span>
                                            <h2 className="m-0">JUMBO SERIES</h2>
                                            <span className="groupBolds">BUILT TO GROW MORE SMARTLY</span>
                                        </div>
                                    </div>

                                    <div className="text_container mt-5 mt-5Mobile">
                                        <p>
                                            Jumbo Series promotes growth and delivers faster
                                            harvests and higher yields—Clean, residue-free, ROI-smart
                                            no hormones or chemicals.
                                        </p>
                                        <p>
                                            <strong>FishJumbo<sup>TM</sup> </strong>
                                            For Shrimp: Targets WSSV & IMNV
                                        </p>
                                        <p>
                                            <strong>ShrimpGuard</strong>
                                            For Fish: Tackles SDDV, NNV, Streptococcus etc
                                        </p>
                                    </div>
                                    <div className="mt-5 mt-5Mobile"><a className="buttons-primary " href="/"> Explore Jumbo Series</a></div>

                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className={`sticky-top section-space-2 z-4 deepPurple sticky_radius h-fitcontent ${Styles.sticky_section}`}>
                <div className="container">
                    <div className="row padding_manage">
                        <FeatureHighlights />
                    </div>
                </div>
            </div>

            <div className={`sticky-top section-space-2 z-4 mutedLavenderBg sticky_radius toplast ${Styles.sticky_section}`}>
                <BestRecorgnition />
            </div>


        </div>
    )
}
export default StickySection;