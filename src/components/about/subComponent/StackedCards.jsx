

'use client'; 
import React, { useState } from 'react';
import { useAnimationContext } from "@/context/AnimationContext";
import { MotionWrapper } from "@/context/MotionWrapper";
 
import styles from './StackedCards.module.css';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';  
import { FaArrowRight } from "react-icons/fa6";
import Link from 'next/link';
import { FaRegSquareCheck } from "react-icons/fa6";

const StackedCards = ({stackCadrSlide, heading}) => {

const {fadeDown} = useAnimationContext();

  // /// new  is this 
  // const moveTargetBase = 40;  
  // const moveGap = 40;        
  // const startLeft = 61;     
  // const stepLeft = 3;       

  // const initialLefts = stackCadrSlide.map((_, i) => `${startLeft - i * stepLeft}%`); 
  // const [positions, setPositions] = useState(initialLefts);
  // const [zIndexes, setZIndexes] = useState(
  //   Array.from({ length: stackCadrSlide.length }, (_, i) => i + 1)
  // );
  //   const [movedCount, setMovedCount] = useState(0);
  //     // Move left

  // const handleMoveLeft = () => {
  //   if (movedCount >= stackCadrSlide.length - 1) return;
  //   const index = stackCadrSlide.length - 1 - movedCount;
  //   const newPositions = [...positions];
  //   const newZIndexes = [...zIndexes];

  //   newPositions[index] = `${moveTargetBase + movedCount * moveGap}px`;
  //   newZIndexes[index] = Math.max(...zIndexes) + 1;
  //   // newZIndexes[2];
  //   setPositions(newPositions);
  //   setZIndexes(newZIndexes);
  //   setMovedCount(movedCount + 1);
  // };

  // // Move right
  // const handleMoveRight = () => {
  //   if (movedCount <= 0) return;
  //   const index = stackCadrSlide.length - movedCount;
  //   const newPositions = [...positions];
  //   const newZIndexes = [...zIndexes];
  //   newPositions[index] = initialLefts[index];
  //   newZIndexes[index] = Math.max(...zIndexes) + 1;

  //   setPositions(newPositions);
  //   setZIndexes(newZIndexes);
  //   setMovedCount(movedCount - 1);
  // };




  /// old is this 
  
  const generateInitialLefts = (length) => {
  const step = 3; 
  const base = 61;
  const positions = [];

  for (let i = 0; i < length - 1; i++) {
    positions.push(`${base - i * step}%`);
  }
  positions.push("0%"); // last card always left
  return positions;
};

const initialLefts = generateInitialLefts(stackCadrSlide.length);


  // const initialLefts = ["61%", "58%", "55%", "52%", "0%"]; 
  const [positions, setPositions] = useState(initialLefts.slice());
  const [movedCount, setMovedCount] = useState(0); 
  // const [zIndexes, setZIndexes] = useState([1, 2, 3, 4, 5]);
  const [zIndexes, setZIndexes] = useState(
  Array.from({ length: stackCadrSlide.length }, (_, i) => i + 1)
);
  const moveTargetBase = 40;
  const moveGap = 40;

  const handleMoveLeft = () => {
      if (movedCount >= stackCadrSlide.length - 1) return; 
    const newPositions = [...positions];
    const newZIndexes = [...zIndexes];
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
                    <h2 className="text-primaryBeige mb-0">{heading} </h2> 
                </div> 

                <div className={`countscroll text-primaryBeige`}>
                    <div 
                        onClick={handleMoveLeft} disabled={movedCount >= stackCadrSlide.length}
                        className='d-flex justify-content-center align-items-center' 
                        style={{ cursor: "pointer" }}
                      ><MdArrowBackIos size={24} />
                    </div>

                    <div className={`d-flex justify-content-center align-items-center values_border `}> 
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
                  <MotionWrapper 
                    className="position-relative w-100"
                    variant={fadeDown}
                    > 
                      {stackCadrSlide.map((label, i) => ( 
                        <div className={`${styles.card} w-100 ${label.colors ? 'text-primaryBeige' : 'purpleColor' } ${styles.cardSlide} ${label.bgClass}`}
                              key={i}
                              style={{ 
                              left: positions[i],
                              zIndex: zIndexes[i], 
                          }}  >
                              <div>
                              {
                                label.titleName ? <p className='text-end mb-0'><strong>{label.titleName}</strong></p>
                                 :  
                                 <div className="col-12 d-flex justify-content-end">
                                   <Link className="linksElements" href="/"> Learn More  <FaArrowRight/></Link>
                                </div>
                                } 
                                    <img
                                      src={label.image}
                                      width={110}
                                      alt={label.subHeading}
                                      className={` ${label.rowImage ? 'd-none' : '' }`}
                                    />   
                                    <h3 className={`fw600 mb-0 mt-3 ${ label.listTitles ? 'h5list' : '' } `}> {label.hedings}</h3> 
                                    <div>
                                      {
                                        label.rowImage ? 
                                        <div className='d-flex gap-3 mt-2'>
                                            <img
                                                src={label.rowImage}
                                                width={55}
                                                alt={label.subHeading}
                                              /> 
                                            <div> 
                                                <p className='pb-0 mb-0' ><strong>AI-driven pathogen profiling</strong></p>
                                                <p className='pb-0 mb-1'>identifies threats & inefficiencies </p>

                                                 <p className='pb-0 mb-0' ><strong>Synthetic biology creates targeted </strong></p>
                                                 <p className='pb-0 mb-1'>solutions and boosts response  </p>

                                                 <p className='pb-0 mb-0' ><strong>Precision fermentation naturally </strong></p>
                                                 <p className='pb-0 mb-1'>scales production sustainably  </p>

                                                 <p className='pb-0 mb-0' ><strong>Advanced encapsulation locks</strong></p>
                                                 <p className='pb-0 mb-1'>biologics ensures precision delivery.   </p>

                                                  <p className='pb-0 mb-0' ><strong>Feed or foliar spray integration </strong></p>
                                                 <p className='pb-0 mb-1'>makes adoption effortless </p>
                                            </div> 
                                        </div> 
                                        : ''  
                                      }
                                        <div className={` ${label.rowImage ? 'd-none' : '' }`}>
                                            <h5 className={`mt-1 mb-1 `}><b>{label.subHeading}</b></h5>
                                            {label.listTitles ? 
                                               label.listTitles.map((list, index) =>(
                                                  <div className='mb-1 d-flex gap-2 align-items-center' key={index} >
                                                      <div style={{fontSize:'23px', marginRight:'5px'}}><FaRegSquareCheck/></div> 
                                                      <div> {list.title}</div>
                                                   </div>
                                               ))
                                              :
                                              <p>{label.title}</p> 
                                            } 
                                            
                                        </div> 

                                   </div>
                                   
                              </div>
                        </div>  
                        ))} 
                  </MotionWrapper>
            </div> 
          

        </div> 

  );
};

export default StackedCards;
