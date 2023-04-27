import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import NavigationContainer from "../../components/NavigationContainer";

const Story = () => {
  const navigate = useNavigate();

  const onFAQsTextClick = useCallback(() => {
    navigate("/events");
  }, [navigate]);


  return (
    <div className="relative bg-ghostwhite w-full h-[150.75rem] overflow-hidden text-left text-[0.88rem] text-black font-catamaran">
      <NavigationContainer
        dimensionsText="/vector-13.svg"
        dimensionsText2="/path6.svg"
        dimensionsText3="/path7.svg"
        dimensionsText4="/ellipse-13.svg"
        dimensionsText5="/vector-23.svg"
        dimensionsText6="/vector-33.svg"
        dimensionsText7="/vector-43.svg"
        dimensionsText8="/vector-53.svg"
        dimensionsText9="/vector-63.svg"
        dimensionsText10="/vector-73.svg"
        dimensionsText11="/vector-83.svg"
        propPosition="absolute"
        propFlexShrink="unset"
        propTop="128.94rem"
        propLeft="3.13rem"
        onFAQsTextClick={onFAQsTextClick}
      />
      <img
        className="absolute top-[9.63rem] left-[3.13rem] w-[71.88rem] h-[20.75rem] object-cover"
        alt=""
        src="/layer-62@2x.png"
      />
      <div className="absolute top-[33.5rem] left-[8.06rem] w-[62rem] h-[33.25rem]">
        <img
          className="absolute top-[0rem] left-[0rem] w-[24.44rem] h-[33.25rem] object-cover"
          alt=""
          src="/789456231-1@2x.png"
        />
        <b className="absolute top-[3.25rem] left-[28.88rem] leading-[1.5rem] inline-block w-[33.13rem] h-[26.88rem]">
          ssssssssssssssssss
        </b>
      </div>
      <div className="absolute top-[69.63rem] left-[6.25rem] w-[66.25rem] h-[40.31rem]">
        <div className="absolute top-[0rem] left-[0rem] rounded-xl bg-gainsboro w-[66.25rem] h-[40.31rem]" />
      </div>
      <div className="absolute h-[8.46%] w-[55.2%] top-[75%] right-[22.4%] bottom-[16.54%] left-[22.4%] text-[1.13rem] text-colors-basic-color-1 font-display-03">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xl box-border border-[1px] border-solid border-lightskyblue" />
        <img
          className="absolute h-[11.76%] w-[3.48%] top-[27.45%] right-[88.84%] bottom-[60.78%] left-[7.68%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/iconslocation.svg"
        />
        <b className="absolute w-[41.45%] top-[calc(50%_-_48px)] left-[13.91%] tracking-[-0.4px] leading-[1.75rem] inline-block">
          Map
        </b>
        <div className="absolute w-[84.93%] top-[calc(50%_-_12px)] left-[13.91%] text-[0.88rem] tracking-[-0.3px] leading-[1.5rem] text-colors-basic-color-2 inline-block">
          sssss
        </div>
      </div>
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
    </div>
  );
};

export default Story;