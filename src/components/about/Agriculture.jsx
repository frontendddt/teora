
import IndustrySlider from "../home/IndustrySlider";
import AgricultureComponents from "./subComponent/AgricultureComponents";

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
      
    return(
        <>
            <div className="container-fluide corporateBg section-space-2" style={{position:'relative', zIndex:'9999'}}> 

                <AgricultureComponents/>

                <section className="aboutIndustrice section-space-2"> 
                          <IndustrySlider data={data} text="THE IMPACT SO FAR IN AQUACULTURE" className="aboutheading"/>
                </section>

            </div>

        </>
    )
}

export default Agriculture