import React, { useState } from 'react'

export default function Slider({ pictures }) {
    const [indexImage , setindexImage] = useState(0)


    const nextButton = ()=> {
        setindexImage((index)=>{
            if(index >= (pictures.length - 1)){
                  return 0
              }else{
                  return index +1
              }
        })
    }

    const prevButton = ()=> {
        setindexImage((index)=>{
            if(index === 0 ){
                  return pictures.length - 1
              }else{
                  return index - 1
              }
        })
    }

  return (
    <div className='logementSliderContainer'>
        <img src={pictures[indexImage]} alt="" />
        <button className='sliderButton' onClick={nextButton}>{'>'}</button>
        <button className='sliderButton' onClick={prevButton}>{'<'}</button>
        <h3>{indexImage+1 +'/'+ (pictures.length )}</h3>
    </div>
  )
}
