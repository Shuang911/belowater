import { useMemo } from "react";

const Navigation = ({
  dimensionsText,
  dimensionsText2,
  dimensionsText3,
  dimensionsText4,
  dimensionsText5,
  dimensionsText6,
  dimensionsText7,
  dimensionsText8,
  dimensionsText9,
  dimensionsText10,
  dimensionsText11,
  propPosition,
  propFlexShrink,
  propTop,
  propLeft,
  onFAQsTextClick,
}) => {
  const footerStyle = useMemo(() => {
    return {
      position: propPosition,
      flexShrink: propFlexShrink,
      top: propTop,
      left: propLeft,
    };
  }, [propPosition, propFlexShrink, propTop, propLeft]);

  return (
    <div
      className="relative w-[71.88rem] h-[15.38rem] shrink-0 text-center text-[0.94rem] text-darkslategray-100 font-montserrat"
      style={footerStyle}
    >
      <div className="absolute h-[90.86%] w-full top-[0%] right-[0%] bottom-[9.14%] left-[0%] rounded-31xl [background:linear-gradient(127.78deg,_#8d2eff,_#6829b3)] box-border border-[12px] border-solid border-darkorchid" />
      <div className="absolute h-[9.06%] w-[44.9%] top-[90.94%] left-[29.32%] leading-[1.63rem] font-semibold inline-block">
        Oceanledge © Kiyomi Team All rights reserved Copyrights 2023
      </div>
      <div className="absolute h-[50.4%] w-[52.82%] top-[20.21%] right-[23%] bottom-[29.39%] left-[24.18%] flex flex-row items-center justify-start gap-[11.19rem] text-left text-[1rem] text-white">
        <div className="relative w-[20.5rem] h-[13rem] shrink-0">
          <div className="absolute h-[62.98%] w-[95.11%] top-[37.02%] left-[4.89%] leading-[1.63rem] font-semibold inline-block">
            Our team is committed to enabling children and parents to grow
            happily through various types of science popularization and
            education.
          </div>
          <div className="absolute w-[37%] top-[calc(50%_-_104px)] right-[57.2%] left-[5.81%] h-[8.41rem] text-[1.5rem] font-catamaran">
            <div className="absolute w-full top-[calc(50%_-_67.27px)] right-[0%] left-[0%] h-[8.41rem]">
              <div className="absolute w-[71.8%] top-[calc(50%_-_67.27px)] left-[28.2%] leading-[6.88rem] font-black inline-block h-[8.41rem]">
                Kiyomi
              </div>
              <img
                className="absolute top-[2.61rem] left-[-0.08rem] w-[1.66rem] h-[1.66rem]"
                alt=""
                src={dimensionsText}
              />
              <img
                className="absolute top-[3.15rem] left-[0.92rem] w-[0.18rem] h-[0.32rem]"
                alt=""
                src={dimensionsText2}
              />
              <img
                className="absolute top-[3.15rem] left-[0.38rem] w-[0.17rem] h-[0.33rem]"
                alt=""
                src={dimensionsText3}
              />
              <img
                className="absolute top-[3.59rem] left-[0.65rem] w-[0.2rem] h-[0.17rem]"
                alt=""
                src={dimensionsText4}
              />
              <img
                className="absolute top-[3.77rem] left-[1.01rem] w-[0.44rem] h-[0.21rem]"
                alt=""
                src={dimensionsText5}
              />
              <img
                className="absolute top-[3.77rem] left-[0.01rem] w-[0.4rem] h-[0.21rem]"
                alt=""
                src={dimensionsText6}
              />
              <img
                className="absolute top-[3.86rem] left-[1rem] w-[0.31rem] h-[0.23rem]"
                alt=""
                src={dimensionsText7}
              />
              <img
                className="absolute top-[3.86rem] left-[0.14rem] w-[0.27rem] h-[0.22rem]"
                alt=""
                src={dimensionsText8}
              />
              <img
                className="absolute top-[3.56rem] left-[0.24rem] w-[0.55rem] h-[0.5rem]"
                alt=""
                src={dimensionsText9}
              />
              <img
                className="absolute top-[3.56rem] left-[0.76rem] w-[0.55rem] h-[0.5rem]"
                alt=""
                src={dimensionsText10}
              />
              <img
                className="absolute top-[3.94rem] left-[0.7rem] w-[0.1rem] h-[0.08rem]"
                alt=""
                src={dimensionsText11}
              />
            </div>
          </div>
          <div className="absolute h-[22.6%] w-[52.43%] top-[14.59%] right-[47.57%] bottom-[62.81%] left-[0%] overflow-hidden" />
        </div>
        <div className="overflow-hidden flex flex-col py-[0.38rem] px-[0.23rem] items-start justify-start gap-[0.56rem] text-ghostwhite font-catamaran">
          <div className="relative text-[1.00rem] leading-[1.63rem] font-black inline-block w-[9.53rem] h-[1.56rem] shrink-0">
            Navigation
          </div>
          {/* <div className="relative leading-[1.25rem] font-semibold inline-block w-[7.62rem]">
            About
          </div> */}
          {/* <div
            className="relative leading-[1.25rem] font-semibold inline-block w-[7.62rem] cursor-pointer"
            onClick={onFAQsTextClick}
          >
            Events
          </div> */}

          <a href="/story">
            <div className="relative leading-[1.25rem] font-semibold inline-block w-[7.62rem] text-white">
              About
            </div>
          </a>
          <a href="/game">
            <div className="relative leading-[1.25rem] font-semibold inline-block w-[7.62rem] text-white">
              Events
            </div>
          </a>
          <a href="/story">
            <div className="relative leading-[1.25rem] font-semibold inline-block w-[7.62rem] text-white">
              Ocean Story
            </div>
          </a>
          <a href="/game">
            <div className="relative leading-[1.25rem] font-semibold inline-block w-[7.62rem] text-white">
              Ocean Game
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
