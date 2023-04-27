import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PlayContainer from "../components/PlayContainer";
import NavigationContainer from "../components/NavigationContainer";

const Quiz1 = () => {
  const navigate = useNavigate();

  const onFAQsTextClick = useCallback(() => {
    navigate("/events");
  }, [navigate]);

  return (
    <div className="relative bg-ghostwhite w-full overflow-hidden flex flex-col py-[4.13rem] px-[0rem] box-border items-center justify-start gap-[3.13rem] text-left text-[1.75rem] text-indigo_900 font-abyssinica-sil">
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
      <div className="relative w-[71.88rem] h-[20.75rem] shrink-0 text-center text-[3.13rem] text-midnightblue-200 font-catamaran">
        <img
          className="absolute h-[60.68%] w-[83.66%] top-[9.22%] right-[6.35%] bottom-[30.1%] left-[9.99%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/layer-6@2x.png"
        />
        <div className="absolute top-[0rem] left-[0rem] w-[71.88rem] h-[20.75rem]">
          <img
            className="absolute top-[0rem] left-[0rem] rounded-31xl w-[71.88rem] h-[20.75rem] object-cover"
            alt=""
            src="/image@2x.png"
          />
          <img
            className="absolute top-[10.75rem] left-[1.39rem] rounded-31xl w-[19.36rem] h-[8.67rem] object-cover"
            alt=""
            src="/06-3@2x.png"
          />
          <div className="absolute h-[88.03%] w-[73.51%] top-[6.03%] right-[8.24%] bottom-[5.94%] left-[18.25%] rounded-31xl overflow-hidden">
            <div className="absolute top-[calc(50%_-_39.15px)] left-[calc(50%_-_317.57px)] leading-[6.88rem] font-black inline-block w-[32.63rem] h-[4.81rem]">
              Ocean Friend Quiz
            </div>
          </div>
        </div>
      </div>
      <PlayContainer />
      <NavigationContainer
        dimensionsText="/vector-1.svg"
        dimensionsText2="/path.svg"
        dimensionsText3="/path1.svg"
        dimensionsText4="/ellipse-1.svg"
        dimensionsText5="/vector-2.svg"
        dimensionsText6="/vector-3.svg"
        dimensionsText7="/vector-4.svg"
        dimensionsText8="/vector-5.svg"
        dimensionsText9="/vector-6.svg"
        dimensionsText10="/vector-7.svg"
        dimensionsText11="/vector-8.svg"
        propPosition="relative"
        propFlexShrink="0"
        propTop="unset"
        propLeft="unset"
        onFAQsTextClick={onFAQsTextClick}
      />
    </div>
  );
};

export default Quiz1;
