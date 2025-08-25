
"use client"
 
import MenuCard from '@/component_admin/MenuCard';
const Headermenu = () =>{

    return(
        <>
            <section>
                    <h4 className="heading_titles purpleColor">Header Menu</h4>
                    <div className="row">
                        <div className="col-12">
                              
                              <MenuCard/>
                         </div>
                    </div>
            </section>
        
        </>
    )
}
export default Headermenu;