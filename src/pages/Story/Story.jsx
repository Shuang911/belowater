import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import NavigationContainer from "../../components/NavigationContainer";
import Map from "./Map";
import Header from "../../components/Header";

const Story = () => {
  const navigate = useNavigate();

  const onFAQsTextClick = useCallback(() => {
    navigate("/events");
  }, [navigate]);

  return (
    <div className="relative bg-ghostwhite w-full overflow-hidden flex flex-col py-[4.13rem] h-[150rem] px-[0.69rem] box-border items-center justify-start gap-[3.13rem] text-left text-[1.75rem] text-indigo_900 font-catamaran" >
      <Header />
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
        // propLeft="23.13rem"
        onFAQsTextClick={onFAQsTextClick}
      />
      {/* <img
        className="flex top-[9.63rem] left-[3.13rem] w-[71.88rem] h-[20.75rem] object-cover"
        alt=""
        src="/layer-62@2x.png"
      /> */}
      <div className="relative w-[71.88rem] h-[20.75rem] shrink-0 text-center text-[3.13rem] text-darkslategray-300 font-catamaran">
        <img
          className="absolute top-[0rem] left-[0rem] w-[71.88rem] h-[20.75rem] object-cover"
          alt=""
          src="/layer-62@2x.png"
        />
        <div className="absolute top-[6.06rem] left-[22.56rem] leading-[6.88rem] font-black inline-block w-[25.56rem] h-[8.44rem]">
          Ocean Story
        </div>
      </div>

      <div className="relative top-[0.5rem] left-[5.06rem] w-[62rem] h-[33.25rem]">
        <img
          className="absolute top-[0rem] left-[0rem] w-[24.44rem] h-[33.25rem] object-cover"
          alt=""
          src="/story1.jpeg"
        />
        <b className="absolute top-[3.25rem] left-[26.88rem] leading-[2rem] inline-block w-[33.13rem] h-[36.88rem]">
       I am a liitle dolphin, as I and my friend were swimming in the sea, we noticed human on a boat coming into us. They were shouting, so we curiously approached them. Suddenly, they pointed to a deep part of the sea, and we saw a huge whale! We happily played with them, showing off our graceful movements. It was a wonderful encounter, and we hope to play with people again in the future and share our stories.
        </b>
      </div>
      <div className="relative top-[0.63rem] left-[0rem] w-[66.25rem] h-[40.31rem]">
        <div className="absolute top-[0rem] left-[0rem] rounded-xl bg-gainsboro w-[66.25rem] h-[40.31rem]" />
        <Map />
      </div>
      <div className="absolute h-[8.46%] w-[55.2%] top-[75%] right-[22.4%] bottom-[16.54%] left-[22.4%] text-[1.13rem] text-colors-basic-color-1 font-display-03">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xl box-border border-[1px] border-solid border-lightskyblue" />
        <img
          className="absolute h-[21.76%] w-[5.18%] top-[27.45%] right-[88.84%] bottom-[60.78%] left-[7.68%] max-w-full overflow-hidden max-h-full"
          alt=""
          // src="/iconslocation.svg"
          src="/dolphin copy.png"
        />
        
        <b className="absolute w-[41.45%] top-[calc(50%_-_48px)] left-[13.91%] tracking-[-0.4px] leading-[1.75rem] inline-block">
          Dolphin distribution in Australia
        </b>
        <div className="absolute w-[84.93%] top-[calc(50%_-_12px)] left-[13.91%] text-[0.88rem] tracking-[-0.3px] leading-[1.5rem] text-colors-basic-color-2 inline-block">
          You can find us in the map above, see...
        </div>
      </div>
    </div>
  );
};

export default Story;
