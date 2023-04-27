import { useCallback } from "react";
import "antd/dist/antd.min.css";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import OceanFriendQuizContainer from "../components/OceanFriendQuizContainer";
import NavigationContainer from "../components/NavigationContainer";

const Quiz2 = () => {
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
      <OceanFriendQuizContainer />
      <Button
        className="relative"
        style={{ width: "901.2498779296875px" }}
        type="default"
        size="middle"
        shape="default"
      >
        Play now
      </Button>
      <NavigationContainer
        dimensionsText="/vector-16.svg"
        dimensionsText2="/path12.svg"
        dimensionsText3="/path13.svg"
        dimensionsText4="/ellipse-16.svg"
        dimensionsText5="/vector-26.svg"
        dimensionsText6="/vector-36.svg"
        dimensionsText7="/vector-46.svg"
        dimensionsText8="/vector-56.svg"
        dimensionsText9="/vector-66.svg"
        dimensionsText10="/vector-76.svg"
        dimensionsText11="/vector-86.svg"
        propPosition="relative"
        propFlexShrink="0"
        propTop="unset"
        propLeft="unset"
        onFAQsTextClick={onFAQsTextClick}
      />
    </div>
  );
};

export default Quiz2;
