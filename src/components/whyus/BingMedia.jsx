import Innovation from "../about/subComponent/Innovation";
import Link from "next/link";
const BingMedia = () =>{
    return(
        <>        
            <div className="row position-relative" style={{top:'-50px'}}>
                <div className="col-md-5">
                    <Innovation/>

                    <div className="d-flex gap-3">
                        <Link class="buttons-primary " href="/">Awards & Recognition</Link>
                        <Link class="buttons-Beige" href="/">Explore Media</Link>
                    </div>
                </div>
                <div className="col-md-7">
                        <div className="work_media_flow"> 
                             <h2 className="mutedLavenderColor"> WORK WORTH <br/> BEING IN MEDIA</h2>
                             <img
                                src="/image/work_media1.png"
                                className="w-75"
                             />
                        </div>
                </div>
            </div> 
        </>
    )
}
    export default BingMedia;