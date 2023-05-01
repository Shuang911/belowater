import { useNavigate } from "react-router-dom";
import BelugaContainer from "../components/BelugaContainer";
import ContainerFooter from "../components/ContainerFooter";
import { useState, useEffect, useRef } from "react";
import * as tf from "@tensorflow/tfjs";
import Header from "../components/Header";
import * as mobilenet from "@tensorflow-models/mobilenet";

const Identification = () => {
  const navigate = useNavigate();
  const [isModelLoading, setIsModelLoading] = useState(false);
  const [model, setModel] = useState(null);
  const [imageURL, setImageURL] = useState(null);
  const [results, setResults] = useState([]);
  const [history, setHistory] = useState([]);

  const imageRef = useRef();
  const inputRef = useRef();

  const fileInputRef = useRef();

  const loadModel = async () => {
    setIsModelLoading(true);
    try {
      const model = await mobilenet.load();
      setModel(model);
      setIsModelLoading(false);
    } catch (error) {
      console.log(error);
      setIsModelLoading(false);
    }
  };

  const uploadImage = (e) => {
    const { files } = e.target;
    if (files.length > 0) {
      const url = URL.createObjectURL(files[0]);
      setImageURL(url);
    } else {
      setImageURL(null);
    }
  };

  const identify = async () => {
    // textInputRef.current.value = ''
    // const results = await model.classify(imageRef.current)
    // setResults(results)
    if (model && imageRef.current) {
      const results = await model.classify(imageRef.current);
      setResults(results);
      console.log(results);
      
    } else {
      console.log("model or Image not defined");
    }
  };

  const handleOnChange = (e) => {
    setImageURL(e.target.value);
    setResults([]);
  };

  const triggerUpload = () => {
    fileInputRef.current.click();
  };

  useEffect(() => {
    loadModel();
  }, []);

  useEffect(() => {
    if (imageURL) {
      setHistory([imageURL, ...history]);
    }
  }, [imageURL]);

  if (!isModelLoading) {
    console.log("1");
  }

  //const navigate = useNavigate();

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
            <b
              className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_24.5px)] tracking-[-0.3px] leading-[1.5rem]"
              onClick={identify}
            >
              Submit
            </b>
          </div>
        </div>

        <div
          className="absolute top-[0rem] left-[0.03rem] w-[37.81rem] h-[23.13rem] text-center text-[0.88rem] text-dimgray font-catamaran"
          onClick={() => inputRef.current.click()}
        >
          <b className="absolute top-[0.3rem] left-[1.38rem] tracking-[-0.3px] leading-[1.5rem] inline-block w-[2.88rem] h-[1.28rem]">
            Input
          </b>
          <img
            className="absolute top-[0rem] left-[0rem] rounded-3xs w-[4.97rem] h-[1.98rem]"
            alt=""
            src="/vector-19.svg"
          />
          <img
            className="absolute h-[6.49%] w-[3.97%] top-[2.41%] right-[3.14%] bottom-[91.1%] left-[92.89%] rounded-3xs max-w-full overflow-hidden max-h-full"
            alt=""
            src="/iconspaper-fail.svg"
          />
          <img
            className="absolute h-[5.26%] w-[3.14%] top-[1.56%] right-[95.37%] bottom-[93.18%] left-[1.49%] rounded-3xs max-w-full overflow-hidden max-h-full"
            alt=""
            src="/iconsimage.svg"
          />
          <div className="absolute h-[100.57%] w-[100.5%] top-[-0.16%] right-[-0.25%] bottom-[-0.41%] left-[-0.25%] rounded-3xs bg-darkgray box-border opacity-[0.1] mix-blend-normal border-[3px] border-solid border-black" />
          <img
            className="absolute h-[100.57%] w-[100.5%] top-[-0.16%] right-[-0.25%] rounded-3xs object-cover"
            alt=""
            src={imageURL}
            crossOrigin="anonymous"
            ref={imageRef}
            width="auto"
            height="auto"
          />
          <img
            className="absolute h-[6.32%] w-[3.97%] top-[2.41%] right-[8.1%] bottom-[91.27%] left-[87.93%] rounded-3xs max-w-full overflow-hidden max-h-full"
            alt=""
            src="/iconsedit-square.svg"
          />
          <input
            type="file"
            accept="image/*"
            capture="camera"
            hidden
            ref={inputRef}
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                const url = URL.createObjectURL(file);
                setImageURL(url);
              }
            }}
          />
        </div>
        <BelugaContainer
          className="absolute top-[1rem] left-[40.94rem] w-[28.44rem] h-[9.75rem] text-dimgray font-catamaran"
          stats={results}
        />

        {/* <div className="absolute top-[0.02rem] left-[40.94rem] w-[28.44rem] h-[9.75rem] text-dimgray font-catamaran"> */}
        {/* <img
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
          /> */}
        {/* </div> */}
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
      <ContainerFooter />
    </div>
  );
};

export default Identification;
