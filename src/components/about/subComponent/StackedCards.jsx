

'use client'; // For Next.js App Router (if needed)
import React, { useState } from 'react';
import styles from './StackedCards.module.css';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';  
const stackCadrSlide = [
   {
    titleName: 'SAFETY',
    image:'/icons/boosting.png',
    hedings: "SAFE FROM START TO SCALE",
    subHeading: "Safe for Animals. Crops. People. Planet.",
    title:"Teora protects animals, crops, and ecosystems with stress-free, chemical-free biologics—making food safer for people, and farming gentler on the planet.",
    bgClass:"midBeigeBg"
  },
  {
    titleName: 'FOOD SECURITY',
    image:'/icons/emission.png',
    hedings: "BUILT FOR RESILIENCE",
    subHeading: "90% Survival. 30% Less Waste. More yield ",
    title:"By boosting immunity and reducing losses via biologics, SOLAQ™ helps farms stand strong against disease and supply chain disruptions- Prepared to feed 10 Billion.",
    bgClass:"accentBlueBg"
  },
   {
    titleName: 'FOOD SECURITY',
    image:'/icons/scales.png',
    hedings: "SCALES WITH YOU",
    subHeading: "Any Farm. Any Species. Any Season",
    title:"From smallholders to industrial setups, Teora’s biotech plugs right into existing routines of farm—no injections, no cold chain, no barriers to scale",
    bgClass:"mutedLavenderBg"
  },

  {
    titleName: 'SUSTAINABILITY',
    image:'/icons/emission.png',
    hedings: "BUILT TO REGENERATE,NOT DEPLETE",
    subHeading: "Less Emissions. More Ecosystem.",
    title:"By improving feed efficiency and disease resilience, we reduce waste, boosts yields while shrinking carbon emissions , conserving resources, and restoring balance.",
    bgClass:"accentLimebg"
  },

  {
    titleName: 'SUSTAINABILITY',
    image:'/icons/planet.png',
    hedings: "TOXIN-FREE BY DESIGN",
    subHeading: "Zero Residues. Zero Runoff. No Bans",
    title:"We cut chemicals, antibiotics, and wasteful inputs—replacing them with clean biologics that works in sync with nature to keep food, soil, and water safe for generations",
    bgClass:"lightgreyBg"
  }, 
  
]

const StackedCards = () => {
  // const initialLefts = [0, 760, 720, 680, 640]; 
  const fixedLeft = "30%"
  const initialLefts = ["61%", "58%", "55%", "52%", "0%"]; 
  // const initialLefts = ["61%", "58%", "55%", "52%", "49%"];  
  const [positions, setPositions] = useState(initialLefts.slice());
  const [movedCount, setMovedCount] = useState(0); 
  const [zIndexes, setZIndexes] = useState([1, 2, 3, 4, 5]);
  const moveTargetBase = 40;
  const moveGap = 40;
// const count = stackCadrSlide.length - movedCount;

  const handleMoveLeft = () => {
    // if (movedCount >= stackCadrSlide.length) return;
      if (movedCount >= stackCadrSlide.length - 1) return; 
    const newPositions = [...positions];
    const newZIndexes = [...zIndexes];
    // const index = stackCadrSlide.length - 1 - movedCount;
    const index = stackCadrSlide.length - 2 - movedCount;
    newPositions[index] = moveTargetBase + movedCount * moveGap;
    newZIndexes[index] = Math.max(...zIndexes) + 1;
    setPositions(newPositions);
    setZIndexes(newZIndexes);
    setMovedCount(movedCount + 1);
  };

  const handleMoveRight = () => {
    if (movedCount <= 0) return;
    const index = stackCadrSlide.length - 2 - (movedCount - 1);
    // const index = stackCadrSlide.length - movedCount;
  
    const newPositions = [...positions];
    const newZIndexes = [...zIndexes];
    newPositions[index] = initialLefts[index];
    newZIndexes[index] = Math.max(...zIndexes) + 1;
    setPositions(newPositions);
    setZIndexes(newZIndexes);
    setMovedCount(movedCount - 1);
  };

  return (
     <div>
           <div className="d-flex justify-content-between align-items-center"> 
                <div> 
                    <h2 className="text-primaryBeige">ON A MISSION TO BUILD THE FUTURE  OF SAFE, SUSTAINABLE FARMING </h2> 
                </div>
                
                <div className={`countscroll text-primaryBeige`}>
                    <div 
                        onClick={handleMoveLeft} disabled={movedCount >= stackCadrSlide.length}
                        className='d-flex justify-content-center align-items-center' 
                        style={{ cursor: "pointer" }}
                      ><MdArrowBackIos size={24} />
                    </div>

                    <div className={`d-flex justify-content-center align-items-center values_border `}>
                          { /*<span>{count} </span> */}
                          <span>{movedCount+1}</span> 
                    </div> 

                    <div 
                        onClick={handleMoveRight} disabled={movedCount <= 0}
                        className='d-flex justify-content-center align-items-center' 
                        style={{ cursor: "pointer" }}
                      ><MdArrowForwardIos size={24} />
                    </div>
                </div>   
          </div>
 
            <div>
                  <div className="position-relative w-100"> 
                      {stackCadrSlide.map((label, i) => ( 
                        <div className={`${styles.card} w-100 purpleColor ${styles.cardSlide} ${label.bgClass}`}
                              key={i}
                              style={{ 
                                left: positions[i],
                                zIndex: zIndexes[i], 
                          }}  >
                              <div>
                                  <p className='text-end'><strong>{label.titleName}</strong></p> 
                                  <div>
                                      <img
                                        src={label.image}
                                        width={120}
                                        alt=''
                                      />
                                  </div>
                                  <h3 className='fw600 mb-0 mt-3'> {label.hedings}</h3>
                                  <h5 className='mt-1 mb-1'><b>{label.subHeading}</b></h5>
                                  <p>{label.title}</p>
                              </div>
                        </div>  
                        ))} 
                    </div>
            </div>
            

                
          

        </div> 

  );
};

export default StackedCards;
