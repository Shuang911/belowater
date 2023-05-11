import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PlayContainer from "../../components/PlayContainer";
import NavigationContainer from "../../components/NavigationContainer";
import Header from "../../components/Header";

const Quiz1 = () => {
  const navigate = useNavigate();

  const onFAQsTextClick = useCallback(() => {
    navigate("/events");
  }, [navigate]);

  return (
    <div className="relative bg-ghostwhite w-full overflow-hidden flex flex-col py-[4.13rem] px-[0rem] box-border items-center justify-start gap-[3.13rem] text-left text-[1.75rem] text-indigo_900 font-abyssinica-sil">
      <div className="flex flex-row items-center justify-start gap-[1.31rem] font-abyssinica-sil">
        <Header />
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
            src="/quizIndex.png"
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
            <div className="absolute h-[41.95%] top-[78.26%] left-[calc(54%_-_312.7px)] text-[1.06rem] leading-[1.63rem] font-medium font-montserrat text-purple inline-block w-[28.63rem]">
              Test your knowledge on what you know about ocean and solve problems for ocean friends
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
