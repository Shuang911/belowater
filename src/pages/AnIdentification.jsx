//import { useNavigate } from "react-router-dom";
//import BelugaContainer from "../components/BelugaContainer";
import ContainerFooter from "../components/ContainerFooter";
//import { useState, useEffect, useRef } from "react";
//import * as tf from "@tensorflow/tfjs";
import Header from "../components/Header";
//import * as mobilenet from "@tensorflow-models/mobilenet";

const AnIdentification = () => {
  return (
    <div className="relative bg-ghostwhite w-full overflow-hidden flex flex-col py-[4.13rem] px-[0rem] box-border items-center justify-center gap-[3.13rem] text-center text-[1.75rem] text-indigo_900 font-abyssinica-sil">
      <Header />
      <div className="relative w-[73.29rem] h-[21.69rem] shrink-0 text-[3.13rem] text-midnightblue-200 font-catamaran">
        <img
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-61xl max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/image6@2x.png"
        />
        <div className="absolute h-[54.82%] w-[56.77%] top-[18.19%] right-[15.98%] bottom-[26.99%] left-[27.24%] overflow-hidden">
          <div className="absolute top-[calc(50%_-_103.14px)] left-[calc(50%_-_330.87px)] leading-[6.88rem] font-black inline-block w-[32.63rem] h-[4.81rem]">
            {" "}
            Friend Identification
          </div>
          <div className="absolute h-[49.93%] top-[49.86%] left-[calc(50%_-_333.04px)] text-[1.06rem] leading-[1.63rem] font-medium font-montserrat text-darkslategray-100 inline-block w-[31.31rem]">
            Snap or upload a photo of a dolphin with your computer. The model
            will tell you what species it thinks it is from a list of 25. See
            full description with limitations below.
          </div>
        </div>
      </div>
      <div class="relative flex">
        <div>
          <iframe
            src="https://lfer0020-oceanledge-identifier-2.hf.space"
            frameborder="0"
            width="1000"
            height="800"
          ></iframe>
        </div>
        <div class="absolute bottom-0 left-0 right-0 h-32 w-500 bg-ghostwhite"></div>
      </div>

      <ContainerFooter />
    </div>
  );
};

export default AnIdentification;
