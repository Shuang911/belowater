import React from 'react'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import beforeimg from "./image456/before.png";
import afterimg from "./image456/after.png"

export default function Slider() {
  return (
        <div style={{width:"70%",height:"50vh",marginTop:"5vh",marginBottom:"5vh"}}>
        <ReactCompareSlider
            itemOne={<ReactCompareSliderImage src={beforeimg}  alt="Image one" />}
            itemTwo={<ReactCompareSliderImage src={afterimg}  alt="Image two" />}
        />
        </div>
  )
}
