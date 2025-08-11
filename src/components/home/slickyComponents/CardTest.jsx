 'use client';
// import styles from "./slicky.module.css";
import styles from "./slicky.module.css";
import Image from "next/image";
 

const CardTest = () =>{
    return(
        <>
            <div className="col-7 position-relative" style={{height:'100%', overflow:'auto'}}>
                    {/* Sticky Section */}
                    <div  className={`sticky-top bg-info p-all sticky11 ${styles.widths_5} ${styles.sticky_section} `}>
                        <div className="">
                        <p>jjdf</p>
                        </div>
                        <div className="p-5">
                        <h5 className="mb-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, suscipit.
                        </h5>

                        <div className="d-flex align-items-center">
                            <div>
                            <img
                                src="/icons/prevetion.jpg"
                                alt="Teora solutions"
                                width={130}
                                height={130}
                                style={{ borderRadius: '50%' }}
                            />
                            </div>
                            <div style={{ padding: '10px 0 10px 25px' }}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                            <p className="fewerlosses">Lorem, ipsum dolor sit amet consectetur...</p>
                            </div>
                        </div>
                        </div>
                    </div>

                
                    <div className={`sticky-top  p-all bg-danger sticky12 ${styles.widths_5} ${styles.sticky_section}`}>
                            <div className="">
                                <p>jjdf</p>
                                </div>
                                <div className="p-5">
                                <h5 className="mb-5">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, suscipit.
                                </h5>

                                <div className="d-flex align-items-center">
                                    <div>
                                    <Image
                                        src={prevetion}
                                        alt="Teora solutions"
                                        width={130}
                                        height={130}
                                        style={{ borderRadius: '50%' }}
                                    />
                                    </div>
                                    <div style={{ padding: '10px 0 10px 25px' }}>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                                    <p className="fewerlosses">Lorem, ipsum dolor sit amet consectetur...</p>
                                    </div>
                                </div>
                                </div>
                    </div> 
            </div> 
        </>
    )
}

export default CardTest;

