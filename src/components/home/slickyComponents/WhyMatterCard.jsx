'use client';
import Image from "next/image";
import styles from "./slicky.module.css";


const WhyMatterCard = ({ data, text, buttons }) => {
    const lengths = data.length;

    return (

            <>  
                <div className="row">
                          <div className="col-md-5 col-12 text-primaryBeige">
                                <div className="sticky-top" style={{top:'180px'}}>
                                    <h1>{text}</h1>  
                                    {buttons ? 
                                        <div className="">
                                            <button className="connectBtn m-2">Aquaculture Products</button>
                                            <button className="buttons-primary border1px m-2 bg-transparent" href="/">Why Teora ?</button>
                                        </div> : ''
                                    }
                                </div>
                         </div>

                <div className="col-md-7 position-relative">
                    {
                        data.map((elements, index) => (
                            <div className={`sticky-top ${elements.class} ${elements.color} p-all sticky11 ${styles.widths_5} `} key={index}>
                                <div className="h-100">
                                    <div className="">
                                        <p className="mb-0"> {index + 1}/{lengths}</p>
                                    </div>
                                    {
                                        elements.banner && elements.explore_results_btn ?
                                            <div className="" style={{ height: '85%' }} >
                                                <div className="d-flex justify-content-center h-100" >
                                                    <img
                                                        src={elements.banner}
                                                        alt=""
                                                        style={{ width: '95%' }}
                                                    />
                                                </div>


                                                {elements.explore_results_btn ?
                                                    <div className={`explore_results mt-3 ${elements.none ? elements.none : ''}`}>
                                                        <a className="buttons-primary " href="/">{elements.explore_results_btn} </a>
                                                    </div> : ''
                                                }
                                            </div> :

                                            <div className="p-5 remove_padding">
                                                {
                                                    elements.heading ? 
                                                    <h5 className="mb-5 gaurd_h5">
                                                        {elements.heading}
                                                    </h5> :
                                                        <div className="d-flex align-items-center  gap-3 mb-5">
                                                            <span><img src="/icons/about-icon1.png" width="100" alt="BUILT TO FIGHT BACK &amp; PROTECT"/></span>
                                                            <div className="m-0">
                                                                <span className="rounded-pill buge-style accentRedBg text-primaryBeige pt-2 pb-2">DISEASE MANAGEMENT- SHRIMPS &amp; FISH</span>
                                                                <h2 className="m-0">GUARD SERIES</h2>
                                                                <p className="m-0">PREVENT. COMBAT. KEEP CALM. FARM ON.</p>
                                                            </div>
                                                        </div>
                                                } 

                                                <div className="d-flex align-items-center gap-2 card_images">
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
                                                        <p className="title_discreptions">{elements.title} {elements.titleBold ? <b>{elements.titleBold}</b> : ''}</p>
                                                        <p className="fewerlosses ">{elements.bold}</p>
                                                    </div>
                                                </div>

                                            </div>
                                    }
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