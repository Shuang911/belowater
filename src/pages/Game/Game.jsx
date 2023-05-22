import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import GameContainer from "../../components/GameContainer";
import NavigationContainer from "../../components/NavigationContainer";
import Header from "../../components/Header";
const Game = () => {
  //const navigate = useNavigate();

  // const onFAQsTextClick = useCallback(() => {
  //   navigate("/fishing");
  // }, [navigate]);
  const navigate = useNavigate();
  const onClick1 = useCallback(() => {
    navigate("/gallery");
  }, [navigate]);

  return (
    <div className="relative bg-ghostwhite w-full overflow-hidden flex flex-col py-[4.13rem] px-[0.69rem] box-border items-center justify-start gap-[3.13rem] text-left text-[1.75rem] text-indigo_900 font-catamaran">
      <Header />
      <GameContainer />
      <div className="relative w-[71.88rem] h-[33.18rem] shrink-0 text-[2.81rem]">
        <div className="absolute top-[7.33rem] left-[0rem] w-[26.35rem] h-[22.77rem] overflow-hidden">
          <div className="absolute w-4/5 top-[calc(50%_-_188.18px)] left-[0%] leading-[3.88rem] font-black hidden h-[3.56rem]">
            Ocean Helper
          </div>
          <div className="absolute h-[76.88%] w-[80.65%] top-[0%] left-[10.05%] text-[1.06rem] leading-[1.63rem] font-medium font-montserrat text-black inline-block">{`Our amazing and beautiful Ocean friends have a lot of problems that trouble them. One of the biggest problems they have are the plastics that we throw away that end up in the ocean! Being caught up in plastics or eating microplastics that our fishy friends mistake for food are one of the biggest reasons why some of our ocean friends are even endangered! `}</div>
          <button
        className="bottom-0 left-1/4 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-md px-8 py-5 absolute z-50"
        onClick={onClick1}
      >
        View Gallery
      </button>
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
      {/* <img
        className="relative w-[8.42rem] h-[0.89rem] shrink-0"
        alt=""
        src="/pagination.svg"
      /> */}
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
  );
};

export default Game;
