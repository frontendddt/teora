import TimerCardSwiper from "../about/subComponent/TimerCardSwiper";
// import cardimg4 from "../../../../public/aboutAssets/cardimg/cardimg4.png";
import cardimg4 from "../../../public/aboutAssets/cardimg/cardimg4.png";
import WhyMatterCard from "../home/slickyComponents/WhyMatterCard";
import { MissionCardSwiper } from "../about/subComponent/MissionCardSwiper";
import styles from "./whyUS.module.css";


//TimerCardSwiper   why us sweeper data
const cardcontant = [   
        {
            heading: "No Needles. No Cold Chains. No Nonsense.No Stress",
            tableTrtd1: "Injections that stress animals. Cold storage nightmares. Labor-intensive",
            tableTrtd2: "Just sprinkle on feed. Roomtemperature stable. Works in any climate, no handling.", 
            img:"",
            alt: "Outbreaks End Before",
            imgTitle:"Easy adoption. Zero infrastructure upgrades. Happy animals.",
            listActive:"Stress-Free",
        },
        {
            heading: "AI-Powered. Disease Moves Fast. We Move Faster",
            tableTrtd1: " Expensive, slow-to-deploy vaccines— 3-5 years to develop new vaccines.By",
            tableTrtd2: "Fast production —AI + precision fermentation deliver custom biologics in 6-8 ", 
            img:"",
            alt: "Outbreaks End Before",
            imgTitle:"Stay ahead of emerging diseases. Protect next season. Keep production moving.",
            listActive:"Fast Response",
        },
        {
            heading: "Regulatory-Ready. No Antibiotics. No Chemicals. No Residues.Ban-Proof",
            tableTrtd1: "Banned substances. Antibiotic  overload. Residue in every harvest, Import rejections, recall and falling premiums.",
            tableTrtd2: "Zero-residue biologics meet EU, US, and Asian clean-food mandates, export-ready healthy clean stock from day one", 
            img:"",
            alt: "Outbreaks End Before",
            imgTitle:"Clean approvals. Smooth exports. Command higher prices.Food people actuallytrust.",
            listActive:"Clean Science",
        },
        
        {
            heading: "Any Farm. Any Size. Any Season. Climate Stable",
            tableTrtd1: "High-tech solutions for high-budget farms or ignores small farms adds hidden costs.",
            tableTrtd2: "Modular powders and sprays dose by weight— Accessible for both smallholders and industrial-scale farms.", 
            img:"",
            alt: "Outbreaks End Before",
            imgTitle:"One solution across locations. Predictable costs, smooth expansion, confidence to seize newmarkets. ",
            listActive:"Built to Scale",
        }, 
        {
            heading: "ROIYou Can Plan On. More Growth, Less Feed. Low Cost",
            tableTrtd1: "Hidden fees, frequent re-dosing, High FCR, wasted feed, and slow harvests bleed margins.",
            tableTrtd2: "Transparent pricing, long shelf life, consistent field returns that outrun costs cycle after cycle.", 
            img:"",
            alt: "Outbreaks End Before",
            imgTitle:"Lower cost per kilo, faster cash flow,quicker growth, & stronger ROI every cycle. ",
            listActive:"Smart ROI",
        },
        {
            heading: "Clean Inputs. Clear Water. Good For Earth. Great For Earnings",
            tableTrtd1: "Choose between profits OR planet, Chemical runoff creates dead zones and ",
            tableTrtd2: "Nature-sync biologics slash runoff , 40% lower emissions. 30% less feed waste. while boosting yield.", 
            img:"",
            alt: "Outbreaks End Before",
            imgTitle:"Hit sustainability targets, earn community goodwill, and safeguard your operating license. ",
            listActive:"Planet positive",
        }
] 

// WhyMatterCard data
  const slideCardData = [
        {
            img: "/icons/farmer.jpg",
            heading:"Smart Biotech for Fish, Shrimp & the Future of Aquaculture- Disease & Growth management",
            title: "Teora’s biotech platform packs precision science into everyday feed and delivers gutsmart biologics that prevent disease, speed up growth, and give farms a fighting chance without stressing the aqua animals—or the ecosystem. ",
            bold:"No cold chains. No antibiotics. No injections",
            class: "accentBlueBg",
            color:"purpleColor"
        },
        {
            img: "/icons/food.jpg",
            heading:" Because food shouldn’t come at the cost of Planet or ecosystems",
            title: "By eliminating chemical runoff and antibiotic overuse, SOLAQ™ helps farms shrink their footprint—not just expand their yield.",
            bold:"Clean ponds. Healthier soils. Fewer emissions.",
            class: "purpleBg",
            color:"text-primaryBeige"
        },
         {
            img: "/icons/prevetion.jpg",
            heading:"Because disease prevention shouldn’t mean choosing between safety and survival.",
            title: "No more toxic trade-offs. SOLAQ™ protects livestock, crops, and aquatic systems without needles, cold chains, or antibiotic overload",
            bold:"Just science thatworks—with zero stress",
            class: "accentBlueBg",
            color:"purpleColor"
        },
        {
            img: "/icons/foodchain.jpg",
            heading:"Because the Food Chain is only as strong as Its weakest link.",
            title: " SOLAQ™ helps farmers meet regulatory demands, lets distributors offer cleaner food, and enables brands to promise safety and sustainability. ",
            bold:"Fromproduction to plate—it keeps thewhole chainmoving forward.", 
            class: "accentRedBg",
            color:"text-primaryBeige"
        },
        {
            img: "/icons/termcircal.jpg",
            heading:"Because 600 Million people shouldn’t get sick from what they eat.",
            title: "SOLAQ™ biologics are clean and dont add to the residues, contaminants, and AMR risks that chemical farming leaves behind.",
            bold:"Cleanerfood. Safer exports. Healthierfutures.",
            class: "mutedLavenderBg",
            color:"purpleColor"
            
        },
        {
            img: "/icons/aurnmorny.jpg",
            heading:"Because strong Communities start with resilient farms & happy people.",
            title: "SOLAQ™ biologics are clean and dont add to the residues, contaminants, and AMR risks that chemical farming leaves behind.",
            bold:"Cleanerfood. Safer exports. Healthierfutures.", 
            class: "midBeigeBg",
            color:"purpleColor"
        },
        
    ]


// whyus missionCardSwiperData  data
const missionCardSwiperData = [
     {
        heaing: "Sustainability",
        info: "Our biotech-driven solutions replace harmful chemicals, antibiotics, and wasteful farming practices with sustainable biologics.Thus, helping farmers build resilient, regenerative, future-proof food systems that nurture the land, protect waterways, and sustain ecosystems for future generations.",
        title: "Protecting Our Planet While Feeding The Future",
        image: '/slider/sustainability_whyUs.png'
    },
    {
        heaing: "Food Security",
        info: "Growing population demands food systems that are resilient, high-yielding, and free from disease-driven losses. Teora is empowering farmers—big and small —with advanced biotech solutions that ensure stable production, lower risks, and greater profitability even in the face of climatic and global food challenges.",
        title: "Future Proofing Farming For A Growing World",
        image: '/slider/food_security_whyUs.png'
    },
    {
        heaing: "Safety",
        info: "Teora’s vision for safety extends beyond human consumption—we are creating a world where food production protects not just people, —it extends to the entire ecosystem, including animals, aquatic life, crops, and the environment— ensuring a healthier, more ethical, and sustainable food production.",
        title: "Protecting People, Animals, And The Environment Equally. ",
        image: '/slider/security_whyus.png'
    },
    {
        heaing: "CLEAN PROTEIN DEMAND",
        info: "By 2050, food demand will increase by 60%, yet traditional farming cannot keep up. Teora’s solutions optimize protein production while reducing land, water, and feed inputs—creating a low-carbon, highyield alternative for a growing population.",
        title: "TAddressing The Global Protein Challenge",
        image: '/slider/cleanProtein_whyus.png'
    },
     {
        heaing: "Security",
        info: "Teora scaling beyond Aquaculture—With AIpowered design and rapid precision fermentation, we’re shaping a cleaner, scalable future for livestock, poultry, crops, & Pets",
        title: "Sustainability Recognition – Named A We Empower UN SDG Challenge Finalist And Recognised In Media",
        image: '/slider/aboutSlide6.png'
    }
     
]


const WhyusSlicky = () =>{
    return(
        <>
            <div className="sticky_container">
                <div className="sticky-top section-space-2 midPurpleBg sticky_section" style={{zIndex:'2'}}>
                        <TimerCardSwiper 
                          cardcontant={cardcontant} 
                          heading="Teora Is Not Ignoring This. We’re Solving It— Starting With Aquaculture. One Platform. Zero Drama. Real Results."
                          varient="whyusTimerDesign"
                        />
                </div>

                  <div className="sticky-top section-space-2 accentRedBg sticky_section" style={{zIndex:'3'}}>
                         
                 </div>

                  <div className="sticky-top section-space-2 lavenderBg sticky_section" style={{zIndex:'4'}}>
                        <MissionCardSwiper
                             missionCardSwiperData = {missionCardSwiperData}
                             heading="Built to help solve global challenges in food industry"
                        />
                 </div>

                  <div className="sticky-top section-space-2 deepPurple sticky_section" style={{zIndex:'5'}}>
                        <div className="container">
                                <div className="row">
                                    <div className="col-md-6">
                                            <div className="paddingRight">
                                                <span className="rounded-pill buge-style accentBlueBg purpleColor pt-2 pb-2">NO COMPROMISE</span>
                                                <div className="text-primaryBeige">
                                                    <h3 className="m-top-b">
                                                        While Others SellYou Disease hello g deep
                                                        Prevention Or Disease Cure Or Growth
                                                        Enhancement, We Deliver It All In One
                                                        Feed-Top Or Foliar Spray Solution For
                                                        Aquaculture, Agriculture, LivestockAnd
                                                        Companion Animals. 
                                                    </h3>
                                                    <p>
                                                        Because why choose between healthy farmed animals or plants
                                                        and profitably farmed animals or plants when you can have both? 
                                                    </p> 
                                                </div>
                                                <button className="connectBtn mt-4" type="button">Download Brochure</button>
                                            </div>
                                    </div>

                                    <div className="col-md-6">
                                        <img

                                        />
                                    </div>
                                </div>
                        </div>     
                 </div>

                <div className="sticky-top indexpage section-space-2 sticky_section "
                    style={{
                            backgroundImage: 'url("/bgimage/aqualture.png")',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',         
                            backgroundAttachment: 'fixed',
                            zIndex:'6'
                    }}>
                        <div className="container">
                            <WhyMatterCard data={slideCardData} text="FIELD PROVEN IN AQUACULTURE"/>
                        </div>   
                 </div>

                 <div className="sticky-top section-space-2 sticky_section beigeCreamBg" style={{zIndex:'7'}}>
                        <div className="container"> 
                                <h2 className="h1500 revolutionising purpleColor"> HOW DO WE SOLVE LOW VACCINE COVERAGE IN FISH & SHRIMPFARMS ?</h2>
                                <div className={styles.vaccine}>
                                     <img
                                        src="/image/coverage.png"
                                        alt="HOW DO WE SOLVE LOW VACCINE"
                                        className="imageWidths"
                                     />
                                </div>
                        </div>   
                 </div>

            </div>
        </>
    )
}
export default WhyusSlicky;