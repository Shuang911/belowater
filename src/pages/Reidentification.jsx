//import { useNavigate } from "react-router-dom";
//import BelugaContainer from "../components/BelugaContainer";
import ContainerFooter from "../components/ContainerFooter";
//import { useState, useEffect, useRef } from "react";
//import * as tf from "@tensorflow/tfjs";
import Header from "../components/Header";
//import * as mobilenet from "@tensorflow-models/mobilenet";

const ReIdentification = () => {
  return (
    <div className="relative bg-ghostwhite w-full overflow-hidden flex flex-col py-[4.13rem] px-[0rem] box-border items-center justify-center gap-[3.13rem] text-center text-[1.75rem] text-indigo_900 font-abyssinica-sil">
      <Header />
      <div className="relative w-[73.29rem] h-[21.69rem] shrink-0 text-[3.13rem] text-midnightblue-200 font-catamaran">
        <img
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-61xl max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/image6@2x.png"
        />
        <div className="absolute h-[54.82%] w-[56.77%] top-[30.19%] right-[15.98%] bottom-[26.99%] left-[27.24%] overflow-hidden">
          <div className="absolute  bottom-[77.19%] left-[calc(50%_-_330.87px)] leading-[6.88rem] font-black inline-block w-[32.63rem] h-[4.81rem]">
            {" "}
            Can I recycle this?
            
          </div>
          
          <div className="absolute h-[77.93%] top-[20.86%] left-[calc(50%_-_333.04px)] text-[1.06rem] leading-[1.63rem] font-medium font-montserrat text-darkslategray-100 inline-block w-[31.31rem]">
            Recycling is the best thing we can do from home to keep our fish friends safe from plastic (along with reducing the use of plastics
            altogether). But figuring out whether something is recyclable can be tricky some times. Upload a picture of what you want to recycle below and our identifier will tell you whether its recyclable or not.
          </div>
        </div>
      </div>

      <div class="relative">
        <div class="w-850 h-450">
          <iframe
            src="https://lfer0020-oceanledge-recycle-identifier.hf.space"
            frameborder="0"
            width="850"
            height="600"
          ></iframe>
        </div>
        <div class="absolute bottom-0 w-full h-16 bg-white"></div>
      </div>

      <ContainerFooter />
    </div>
  );
};

export default ReIdentification;
