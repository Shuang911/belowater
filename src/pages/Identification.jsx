import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import InputContainer from "../components/InputContainer";
import BelugaContainer from "../components/BelugaContainer";
import NavigationContainer from "../components/NavigationContainer";
import { useState, useEffect, useRef } from 'react';
//import * as mobilenet from "@tensorflow-models/mobilenet";
const Identification = () => {
    const navigate = useNavigate();
    const [isModelLoading, setIsModelLoading] = useState(false)
    const [model, setModel] = useState(null)
    const [imageURL, setImageURL] = useState(null);
    const [results, setResults] = useState([])
    const [history, setHistory] = useState([])

    const imageRef = useRef()
    const textInputRef = useRef()
    const fileInputRef = useRef()

    const loadModel = async () => {
        setIsModelLoading(true)
        try {
            const model = await mobilenet.load()
            setModel(model)
            setIsModelLoading(false)
        } catch (error) {
            console.log(error)
            setIsModelLoading(false)
        }
    }

    const uploadImage = (e) => {
        const { files } = e.target
        if (files.length > 0) {
            const url = URL.createObjectURL(files[0])
            setImageURL(url)
        } else {
            setImageURL(null)
        }
    }

    const identify = async () => {
        textInputRef.current.value = ''
        const results = await model.classify(imageRef.current)
        setResults(results)
    }

    const handleOnChange = (e) => {
        setImageURL(e.target.value)
        setResults([])
    }

    const triggerUpload = () => {
        fileInputRef.current.click()
    }

    useEffect(() => {
        loadModel()
    }, [])

    useEffect(() => {
        if (imageURL) {
            setHistory([imageURL, ...history])
        }
    }, [imageURL])

    if (isModelLoading) {
        return <h2> Model Loading...</h2>
    }

  //const navigate = useNavigate();

  const onFAQsTextClick = useCallback(() => {
    navigate("/events");
  }, [navigate]);

  return (
    <div className="relative bg-ghostwhite w-full overflow-hidden flex flex-col py-[4.13rem] px-[0rem] box-border items-center justify-center gap-[3.13rem] text-center text-[1.75rem] text-indigo_900 font-abyssinica-sil">
     <div className="flex flex-row items-center justify-start gap-[1.31rem] font-abyssinica-sil">
        <a
          href="/"
          className="relative w-[2.38rem] h-[2.38rem] shrink-0 overflow-hidden"
        >
          <img className="w-full h-full" alt="" src="/logo2.svg" />
        </a>
        <div className="relative leading-[109.5%] inline-block w-[10.63rem] h-[2rem] shrink-0">
          Oceanledge
        </div>
        <div className="flex flex-row items-center justify-center gap-[3.13rem] text-[1.13rem]">
          <a
            href="/home"
            className="relative w-[3.63rem] h-[1.5rem] shrink-0 text-[1.38rem]"
          >
            <div className="absolute h-[166.67%] w-[179.31%] top-[-33.33%] right-[-39.66%] bottom-[-33.33%] left-[-39.66%] rounded-lg bg-ghostwhite box-border hidden border-[3px] border-solid border-goldenrod" />
            <div className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_29px)] leading-[1.5rem]">
              Home
            </div>
          </a>
          <a
            href="/game"
            className="relative leading-[155.5%] inline-block w-[7.38rem] h-[1.75rem] shrink-0"
          >
            Ocean Helper
          </a>
          <a
            href="/quiz1"
            className="relative leading-[155.5%] inline-block w-[9.88rem] h-[1.81rem] shrink-0"
          >
            Ocean Friend Quiz
          </a>
          <a
            href="/identification"
            className="relative leading-[155.5%] inline-block w-[10.56rem] h-[1.81rem] shrink-0"
          >
            Identification
          </a>
          {/* <a
            href="/facts"
            className="relative leading-[155.5%] inline-block w-[7.38rem] h-[1.69rem] shrink-0"
          >
            Ocean Facts
          </a> */}
        </div>
      </div>
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
            full description with limitations below
          </div>
        </div>
      </div>
      <div className="relative w-[69.56rem] h-[42.33rem] shrink-0 text-[0.88rem] text-colors-basic-color-1 font-display-03">
        <div className="absolute h-[7.09%] w-[25.25%] top-[59.54%] right-[74.75%] bottom-[33.37%] left-[0%]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] overflow-hidden">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-antiquewhite" />
            <b className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_17.5px)] tracking-[-0.3px] leading-[1.5rem]">
              Clear
            </b>
          </div>
        </div>
        <div className="absolute h-[7.09%] w-[25.25%] top-[59.54%] right-[45.64%] bottom-[33.37%] left-[29.11%] rounded-3xs">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] overflow-hidden">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-colors-action-color-1" />
            <b className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_24.5px)] tracking-[-0.3px] leading-[1.5rem]">
              Submit
            </b>
          </div>
        </div>
        <InputContainer />
        <BelugaContainer />
        <div className="absolute top-[0.02rem] left-[40.94rem] w-[28.44rem] h-[9.75rem] text-dimgray font-catamaran">
          <img
            className="absolute top-[0.11rem] left-[0.22rem] rounded-3xs w-[15.28rem] h-[2.03rem]"
            alt=""
            src="/vector-181.svg"
          />
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs box-border opacity-[0.1] mix-blend-normal border-[3px] border-solid border-black" />
          <b className="absolute top-[0.42rem] left-[2.53rem] tracking-[-0.3px] leading-[1.5rem] inline-block w-[12.56rem] h-[1.38rem]">
            Image contains a whale/dolphin?
          </b>
          <img
            className="absolute h-[15.38%] w-[5.27%] top-[3.64%] right-[91.32%] bottom-[80.97%] left-[3.41%] rounded-3xs max-w-full overflow-hidden max-h-full"
            alt=""
            src="/iconsmore.svg"
          />
        </div>
        <div className="absolute top-[34.52rem] left-[0rem] w-[63.5rem] h-[7.81rem]">
          <div className="absolute top-[0rem] left-[1.13rem] w-[43.13rem] h-[7.81rem] flex flex-row items-start justify-start gap-[1.63rem]">
            <img
              className="relative w-[12.5rem] h-[7.81rem] shrink-0 object-cover"
              alt=""
              src="/dolphin1-1@2x.png"
            />
            <img
              className="relative w-[12.38rem] h-[7.81rem] shrink-0 object-cover"
              alt=""
              src="/0badd37cb8b4ab-1@2x.png"
            />
            <img
              className="relative w-[10.19rem] h-[7.81rem] shrink-0 object-cover"
              alt=""
              src="/000e246888710c-1@2x.png"
            />
            <img
              className="relative w-[7.45rem] h-[7.81rem] shrink-0 object-cover"
              alt=""
              src="/0bb575ddc04614-1@2x.png"
            />
            <img
              className="relative w-[15.1rem] h-[7.81rem] shrink-0 object-cover"
              alt=""
              src="/0badd37cb8b4ab-2@2x.png"
            />
          </div>
        </div>
      </div>
      <NavigationContainer
        dimensionsText="/vector-17.svg"
        dimensionsText2="/path14.svg"
        dimensionsText3="/path15.svg"
        dimensionsText4="/ellipse-17.svg"
        dimensionsText5="/vector-27.svg"
        dimensionsText6="/vector-37.svg"
        dimensionsText7="/vector-47.svg"
        dimensionsText8="/vector-57.svg"
        dimensionsText9="/vector-67.svg"
        dimensionsText10="/vector-77.svg"
        dimensionsText11="/vector-87.svg"
        onFAQsTextClick={onFAQsTextClick}
      />
    </div>
  );
};

export default Identification;