 
// pages/_app.js or _app.tsx
 // pages/_app.js or _app.tsx
import '@/styles/globals.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 


import Carousel from "@/components/home/Carousel";
import AboutTeora from "@/components/home/AboutTeora"; 
import CountersSection from "@/components/home/CountersSection"; 
import CurrentSolution from "@/components/home/CurrentSolution";
import StickySection from "@/components/home/StickySection";
import IndustrySlider from "@/components/home/IndustrySlider";
import OurBrochure from "@/components/home/OurBrochure"; 
import LeadershipSection from '@/components/home/LeadershipSection';
import BlogSection from '@/components/home/BlogSection';
 
 
export default function Home() {

const counterData = [
        {
            counter: 70,
            discriptions: "of aquaculture stock is lost to infections- 21% lower global production",
            strong: ">$50B annual losses"
        },
         {
            counter: 40,
            discriptions: "of global crop is lost annually to Pests and diseases- ",
            strong: "$220 Billion annual losses"
        },
         {
            counter: 20,
            discriptions: "of global animal protein is lost annually to livestock diseases -",
            strong: "$358.4 billion / yr production losses"
        },
         {
            counter: 30,
            discriptions: "of poultry globally are affected by disease each year-",
            strong: "$ 5.6 billion annual losses in egg production."
        }
    ]

 /// IndustrySlider slider data
 const IndustrySliderData = [
    {
        title: 'FOOD INSECURITY',
        image: "/icons/foodIns.png",
        text: "1 in 3 people lack food security 582 Million people will stay undernourished by 2030 and 800 million people go to bed hungry each night.",
        bold: '(Cargill Hunger rising faster than solutions.',
        widths: 150,
        heights:150,
      },
      {
        title: 'FOOD SAFETY',
        image: "/icons/word-icon.png",
        text: '600 million people/ yr fall sick from contaminated food.Harmful chemicals used at the farms can increase risk of diseases such as AMR, cancer, autism.',
        bold: 'A global health threat.',
         widths: 150,
        heights:150,
      },
      {
        title: 'WASTED HARVESTS',
        image: "/aboutAssets/icons/dangerimg.png",
        text: '1.3B tons of food lost yearly—before it’s ever eaten, i.e. 1 in 3 calories is lost to pests and diseases. ',
        bold: 'Disease, waste, and poor logistics',
         widths: 150,
        heights:150,
      },
      {
        title: 'ENVIRONMENTAL COST',
        image: "/icons/emissions.png",
        text: '$2.9T in hidden damage from toxic inputs in farming- ',
        bold: '24% of global emissions from how we grow food.',
         widths: 150,
        heights:150,
      }, 
        {
        title: 'RESOURCE BURNOUT',
        image: "/icons/resource.png",
        text: 'Farming uses 70% of freshwater, overfishes 90% of wild stocks, and ',
        bold: 'devours half the planet’s land',
        widths: 150,
        heights:150,
      }, 
    
      {
        title: 'FARMERS STRUGGLES',
        image: "/icons/framers.png",
        text: 'Rising costs, disease losses, & antibiotic bans are pushing farmers to the edge. ',
        bold: 'Margins shrinking. Pressure is rising.',
         widths: 150,
        heights:150,
      }, 
      
      {
        title: 'ANIMAL FEED IMPACT',
        image: "/icons/impact.png",
        text: '60% of animal & aquatic farm spend goes to feed.  ',
        bold: 'Much of it is wasted due to poor conversion.',
         widths: 150,
        heights:150,
      },
 ]

  return (
      <>
          <Carousel/> 
          <section className="corporateBg"> 
             <AboutTeora/>
          </section>

           <section className="corporateBg section-space ">
             <IndustrySlider data={IndustrySliderData} text="State of the Industry" className="homeheading"/> 
          </section>
          
          <section >
              <CountersSection counterData={counterData} className="purpleBg tectureBg"/> 
          </section>

          <section className="corporateBg">
              <CurrentSolution/>
          </section>  
         
          <section> 
               <StickySection/> 
          </section>

          <section className="corporateBg">
             <OurBrochure 
                classname="midBeigeBg" 
                color="purpleColor"
                heading = "Smarter Farming Starts With Teora."
                discriptions = "Discover how Teora’s breakthrough biotech is transforming disease management and growth across aquaculture, livestock,  crops, and beyond—Real science. Real results. Built for real farms."
                />

             <section className="section-space"> 
                <LeadershipSection
                    heading_card1 = "Want To Grow Smarter, Cleaner, And More Profitably?"
                    descreption_card1 = "Let’s help you ditch the stress and scale clean. Reach out for trials, bulk orders, or product info— we’re ready when you are." 
                    buttonText_card1 = "Connect Our Team"
                    classname_card1 = "card1_font"

                    heading_card2 = "Interested In Backing The Future Of Food?"
                    descreption_card2 = " SOLAQ™ is scaling fast—and globally. If you’re ready to invest in biotech with purpose and proof, we’d love to talk." 
                    buttonText_card2 = "Connect With Leadership"
                     classname_card2 = "card2_font"
                />
            </section> 

             <section>
                <BlogSection/>
            </section>

          </section>

         
       
      </>
  );
}
