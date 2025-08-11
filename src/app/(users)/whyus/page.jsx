 
import Banner from "@/components/whyus/Banner";
import WhyNotUs from "@/components/whyus/WhyNotUs";
import WhyusSlicky from "@/components/whyus/WhyusSlicky";
import CoreBenefitsSection from "@/components/whyus/CoreBenefitsSection";
import Aquaculture from "@/components/whyus/Aquaculture";
import CompanyComponents from "@/components/home/slickyComponents/CompanyComponents";
import OurBrochure from "@/components/home/OurBrochure";
import LeadershipSection from "@/components/home/LeadershipSection";

const Whyus = () =>{

    return(
        <section>
                <section className="purpleBg">
                        <Banner/>
                </section>

                <section className="corporateBg">
                    <WhyNotUs/>
                </section>

                <section>
                    <WhyusSlicky/>
                </section>

                <section className="purpleBg position-relative">
                    <CoreBenefitsSection/>
                </section>

                <section className="corporateBg">
                        <Aquaculture/>
                </section>

                <section>
                    <CompanyComponents/>
                </section>

                <section className="corporateBg">
                    <OurBrochure
                        classname="purpleBg" 
                        color="text-primaryBeige" 
                        heading = "Smarter Farming Starts Here."
                        discriptions = "Discover how Teora’s breakthrough biotech is transforming disease management and growth across aquaculture, livestock,  crops, and beyond—Real science. Real results. Built for real farms."
                    />

                    <section className="section-space-2 pt-0 "> 
                        <LeadershipSection
                            heading_card1 = "Ready To Feed The Future? Join The Thousands Already Growing Cleaner, Faster, And Smarter."
                            descreption_card1 = "Whether you’re a farmer fighting WSSV, a feed mill seeking differentiation, a distributor wanting shelf-stable winners, or an investor hunting for the next big thing— Teora has your solution." 
                            buttonText_card1 = "Contact Our Team"
                            classname_card1 = "card1_font"

                            heading_card2 = " “We didn’t set out to revolutionize farming.We just got tired of watching it fail. Sowe built some thing better. Some thing that works. Some thing that lasts. Some thing that feeds the future without stealing fromit.” "
                            descreption_card2 = "– Dr. Rishita Changede, Founder & CEO" 
                            buttonText_card2 = "Connect With Leadership"
                            classname_card2 = "card2_font"
                        />
                    </section> 

                </section>

        </section>
    )
}
export default Whyus;