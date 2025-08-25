
"use client"
 import MenuCard from "@/component_admin/MenuCard";

const FooterMenu = () =>{
      
    return(
        <>
               <section>
                    <h4 className="heading_titles purpleColor">Footer Menu</h4>
                    <div className="row">
                        <div className="col-12">
                            <MenuCard title="Navigation" />
                            <MenuCard title="Solutions" />
                        </div>
                    </div>
                </section>
        </>
    )
}
export default FooterMenu;