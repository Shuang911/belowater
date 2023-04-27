import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import GameContainer from "../../components/GameContainer";
import NavigationContainer from "../../components/NavigationContainer";

const Game = () => {
  const navigate = useNavigate();

  const onFAQsTextClick = useCallback(() => {
    navigate("/fishing");
  }, [navigate]);

  return (
    <div className="relative bg-ghostwhite w-full overflow-hidden flex flex-col py-[4.13rem] px-[0.69rem] box-border items-center justify-start gap-[3.13rem] text-left text-[1.75rem] text-indigo_900 font-catamaran">
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
      <GameContainer />
      <div className="relative w-[71.88rem] h-[33.18rem] shrink-0 text-[2.81rem]">
        <div className="absolute top-[7.33rem] left-[0rem] w-[26.35rem] h-[22.77rem] overflow-hidden">
          <div className="absolute w-4/5 top-[calc(50%_-_188.18px)] left-[0%] leading-[3.88rem] font-black hidden h-[3.56rem]">
            Ocean Helper
          </div>
          <div className="absolute h-[76.88%] w-[80.65%] top-[0%] left-[10.05%] text-[1.06rem] leading-[1.63rem] font-medium font-montserrat text-black inline-block">{`Our amazing and beautiful Ocean friends have a lot of problems that trouble them. One of the biggest problems they have are the plastics that we throw away that end up in the ocean! Being caught up in plastics or eating microplastics that our fishy friends mistake for food are one of the biggest reasons why some of our ocean friends are even endangered! `}</div>
        </div>
        <img
          className="absolute top-[0rem] left-[27.26rem] w-[44.61rem] h-[33.18rem] object-cover"
          alt=""
          src="/image2@2x.png"
        />
      </div>
      <div className="relative text-[3.5rem] leading-[3.88rem] font-black inline-block w-[31.13rem] h-[3.38rem] shrink-0">
        SAVE THE WORLD
      </div>
      <div className="flex flex-row items-start justify-start gap-[1.63rem]">
        <img
          className="relative w-[13.78rem] h-[10rem] shrink-0 object-cover"
          alt=""
          src="/8-1@2x.png"
        />
        <img
          className="relative w-[10.1rem] h-[10rem] shrink-0 object-cover"
          alt=""
          src="/4-5@2x.png"
        />
        <img
          className="relative w-[12.49rem] h-[10rem] shrink-0 object-cover"
          alt=""
          src="/2-2223@2x.png"
        />
        <img
          className="relative w-[10.1rem] h-[10rem] shrink-0 object-cover"
          alt=""
          src="/5-1@2x.png"
        />
        <img
          className="relative w-[12.92rem] h-[10rem] shrink-0 object-cover"
          alt=""
          src="/3-3334@2x.png"
        />
      </div>
      <img
        className="relative w-[8.42rem] h-[0.89rem] shrink-0"
        alt=""
        src="/pagination.svg"
      />
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
        onFAQsTextClick={onFAQsTextClick}
      />
    </div>
  );
};

export default Game;
