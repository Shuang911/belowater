import React,{useState} from 'react';
import {Resource1} from "./Resource1";
import Style from "./Gallery.module.css"
import NavigationContainer from "../../components/NavigationContainer";
import Header from "../../components/Header";
import Slider from '../Slider/Slider';

const Gallery =() =>
{
 const [file,setFile]=useState(null);
 const [clicked1,setClicked1]=useState("");

 const buttonClick =() =>{
    setClicked1(true);
 }

  return (
    
    <div className="relative bg-ghostwhite w-full overflow-hidden flex flex-col py-[4.13rem] px-[0.69rem] box-border items-center justify-start gap-[0.01rem] text-center text-[1.75rem] text-indigo_900 font-catamaran">
      <Header />
      <Slider/>
      <br></br>
      <br></br>
      <br></br>
        <div className={Style.container1}>
            <h2>Click each to see how marine debris impact our life...</h2>
            <div className={Style.mediaContainer1}> 
                {
                    Resource1.map((file,index) => (
                        <div className={Style.media} key={index} onClick={() => setFile(file)}>
                        {
                        file.type === "image" 
                        ? <img src ={file.url} alt=""/> 
                        : <video src={file.url} autoPlay muted />
                        
                        }
                        </div>
                         
                        
                    ))         
                }
            </div> 
            
            <div className={Style.popUp} style={{display :file ? "block":"none"}}>
            
                <span onClick={() => setFile(null)}>&times;</span>
                
                {
                    file?.type === "video"
                    ? 
                    <video src={file?.url} muted autoPlay controls/>
                    :
                    <div>
                    <img src={file?.url} />
                    <p className={Style.picText}>Marine pollution is damaging our planet and life...</p>
                    </div>
                    
                }
        
            </div>
            
        </div>
        <br></br>
        <button className={Style.button1} onClick={buttonClick}>Click to know why it happens ...</button>
        
        {clicked1 && (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <a href='/overfish' className=" top-[84.44rem] left-[9.56rem] rounded-11xl bg-darkorchid-200 box-border w-[12.06rem] h-[7.88rem] flex flex-row py-[0.63rem] px-[1.25rem] items-center justify-center gap-[0.63rem] text-center text-[1.06rem] text-white font-montserrat border-[4px] border-solid border-darkorchid-100" style={{ flex: 1 ,margin: '0 3rem',backgroundColor: 'rgb(104,41,179,1)'}}>
                <img
                className="relative w-[2.76rem] h-[4.72rem]"
                alt=""
                src="/icon--hook.svg"
                />
                <div className="relative leading-[1.63rem]">Over-fishing</div>
            </a>
            <a href="/mining" className=" top-[84.44rem] left-[25.19rem] rounded-11xl bg-goldenrod-200 box-border w-[12.06rem] h-[7.88rem] flex flex-row py-[0.63rem] px-[1.25rem] items-center justify-center gap-[0.63rem] text-center text-[1.06rem] text-white font-montserrat border-[4px] border-solid border-goldenrod-100" style={{ flex: 1,margin: '0 3rem',backgroundColor: 'rgb(255,179,71,1)' }}>
                <img
                className="relative w-[2.76rem] h-[4.72rem]"
                alt=""
                src="/icon--mining.svg"
                />
                <div className="relative leading-[1.63rem]">Mining</div>
            </a>
            <a href='/plastic' className=" top-[84.44rem] left-[40.81rem] rounded-11xl bg-darkorchid-200 box-border w-[12.06rem] h-[7.88rem] flex flex-row py-[0.63rem] px-[1.25rem] items-center justify-center gap-[0.63rem] text-center text-[1.06rem] text-white font-montserrat border-[4px] border-solid border-darkorchid-100" style={{ flex: 1,margin: '0 3rem',backgroundColor: 'rgb(0,0,255,0.7)'}}>
                <img
                className="relative w-[2.76rem] h-[4.72rem]"
                alt=""
                src="/icon--plastic-polution.svg"
                />
                <div className="relative leading-[1.63rem]">
                <p className="m-0">{`Plastic `}</p>
                <p className="m-0">Pollution</p>
                </div>
            </a>
            <a href='/climate' className=" top-[84.44rem] left-[56.44rem] rounded-11xl bg-goldenrod-200 box-border w-[12.06rem] h-[7.88rem] flex flex-row py-[0.63rem] px-[1.25rem] items-center justify-center gap-[0.63rem] text-center text-[1.06rem] text-white font-montserrat border-[4px] border-solid border-goldenrod-100" style={{ flex: 1,margin: '0 3rem',backgroundColor: 'rgb(246, 52, 87,0.7)'}}>
                <img
                className="relative w-[2.76rem] h-[4.72rem]"
                alt=""
                src="/icon--climate-change.svg"
                />
                <b className="relative leading-[1.63rem]">
                <p className="m-0">Climate</p>
                <p className="m-0">Change</p>
                </b>
            </a>
      </div>
      )}

        <br></br>

        <NavigationContainer
        dimensionsText="/vector-11.svg"
        dimensionsText2="/path2.svg"
        dimensionsText3="/path3.svg"
        dimensionsText4="/ellipse-11.svg"
        dimensionsText5="/vector-21.svg"
        dimensionsText6="/vector-31.svg"
        dimensionsText7="/vector-41.svg"
        dimensionsText8="/vector-51.svg"
        dimensionsText9="/vector-61.svg"
        dimensionsText10="/vector-71.svg"
        dimensionsText11="/vector-81.svg"
        propPosition="relative"
        propFlexShrink="0"
        propTop="unset"
        propLeft="unset"
        //onFAQsTextClick={onFAQsTextClick}
      />
    </div>
    
    )
}
export default Gallery;
