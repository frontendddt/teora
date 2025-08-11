 'use client';
import Image from "next/image";
import styles from "./slicky.module.css";
  
 
const WhyMatterCard = ({data, text}) =>{  
    const lengths = data.length; 
    
    return(  

            <>  
                <div className="row">
                          <div className="col-5 text-primaryBeige">
                                <h1 className="sticky-top" style={{top:'180px'}}>{text}</h1>  
                         </div>

                         <div className="col-md-7 position-relative">
                                  {
                                    data.map((elements, index) =>(
                                         <div className={`sticky-top ${elements.class} ${elements.color} p-all sticky11 ${styles.widths_5} `} key={index}>
                                                <div className="">
                                                        <p> {index+1}/{lengths}</p>
                                                </div>
                                                <div className="p-5">
                                                    <h5 className="mb-5">
                                                        {elements.heading}
                                                    </h5>

                                                    <div className="d-flex align-items-center">
                                                        <div>
                                                        <Image
                                                            src={elements.img}
                                                            alt="Teora solutions"
                                                            width={130}
                                                            height={130}
                                                            style={{ borderRadius: '50%' }}
                                                        />
                                                        </div>
                                                        <div style={{ padding: '10px 0 10px 25px' }}>
                                                                <p>{elements.title}</p>
                                                                <p className="fewerlosses">{elements.bold}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                        </div> 
                                    ))
                                  }   
                         </div>
                </div>   
            </>
    )
}

export default WhyMatterCard;