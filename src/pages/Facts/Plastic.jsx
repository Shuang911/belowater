import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import NavigationContainer from "../../components/NavigationContainer";
// import Map from "./Map";
import Header from "../../components/Header";
import styles from "../Quiz/Ques/Certificate.module.css";

const Plastic = () => {

function handleClick() {
  window.location.href = "/Gallery";
}

  
    return (
      <div className="relative bg-ghostwhite w-full overflow-hidden flex flex-col py-[4.13rem] h-[150rem] px-[0.69rem] box-border items-center justify-start gap-[3.13rem] text-left text-[1.75rem] text-indigo_900 font-catamaran">
        <Header />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <a
            href="/overfish"
            className=" top-[84.44rem] left-[9.56rem] rounded-11xl bg-darkorchid-200 box-border w-[12.06rem] h-[7.88rem] flex flex-row py-[0.63rem] px-[1.25rem] items-center justify-center gap-[0.63rem] text-center text-[1.06rem] text-white font-montserrat border-[4px] border-solid border-darkorchid-100"
            style={{
              flex: 1,
              margin: "0 3rem",
              backgroundColor: "rgb(104,41,179,1)",
            }}
          >
            <img
              className="relative w-[2.76rem] h-[4.72rem]"
              alt=""
              src="/icon--hook.svg"
            />
            <div className="relative leading-[1.63rem]">Over-fishing</div>
          </a>
          <a
            href="/mining"
            className=" top-[84.44rem] left-[25.19rem] rounded-11xl bg-goldenrod-200 box-border w-[12.06rem] h-[7.88rem] flex flex-row py-[0.63rem] px-[1.25rem] items-center justify-center gap-[0.63rem] text-center text-[1.06rem] text-white font-montserrat border-[4px] border-solid border-goldenrod-100"
            style={{
              flex: 1,
              margin: "0 3rem",
              backgroundColor: "rgb(255,179,71,1)",
            }}
          >
            <img
              className="relative w-[2.76rem] h-[4.72rem]"
              alt=""
              src="/icon--mining.svg"
            />
            <div className="relative leading-[1.63rem]">Mining</div>
          </a>
          {/* <a href='/plastic' className=" top-[84.44rem] left-[40.81rem] rounded-11xl bg-darkorchid-200 box-border w-[12.06rem] h-[7.88rem] flex flex-row py-[0.63rem] px-[1.25rem] items-center justify-center gap-[0.63rem] text-center text-[1.06rem] text-white font-montserrat border-[4px] border-solid border-darkorchid-100" style={{ flex: 1,margin: '0 3rem',backgroundColor: 'rgb(0,0,255,0.7)'}}>
                <img
                className="relative w-[2.76rem] h-[4.72rem]"
                alt=""
                src="/icon--plastic-polution.svg"
                />
                <div className="relative leading-[1.63rem]">
                <p className="m-0">{`Plastic `}</p>
                <p className="m-0">Pollution</p>
                </div>
            </a> */}
          <a
            href="/climate"
            className=" top-[84.44rem] left-[56.44rem] rounded-11xl bg-goldenrod-200 box-border w-[12.06rem] h-[7.88rem] flex flex-row py-[0.63rem] px-[1.25rem] items-center justify-center gap-[0.63rem] text-center text-[1.06rem] text-white font-montserrat border-[4px] border-solid border-goldenrod-100"
            style={{
              flex: 1,
              margin: "0 3rem",
              backgroundColor: "rgb(246, 52, 87,0.7)",
            }}
          >
            <img
              className="relative w-[2.76rem] h-[4.72rem]"
              alt=""
              src="/icon--climate-change.svg"
            />
            <b className="relative leading-[1.63rem]">
              <p className="m-0">Climate</p>
              <p className="m-0">Change</p>
            </b>
          </a>
        </div>
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
          // onFAQsTextClick={onFAQsTextClick}
        />
        <div className="relative bg-colors-basic-color-3 w-full h-[109.06rem] overflow-hidden text-center text-[1.06rem] text-colors-basic-color-3 font-montserrat">
          <div className="absolute h-[99.74%] w-full top-[0.13%] right-[0%] bottom-[0.13%] left-[0%] text-left text-[2.25rem] text-colors-basic-color-1 font-headline-01">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-colors-basic-color-3" />
            <img
              className="absolute h-[42.94%] w-[32.24%] top-[5.79%] right-[54.4%] bottom-[61.27%] left-[13.36%] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/image@2x.png"
            />
            <b className="absolute h-[8.13%] w-[32.23%] top-[7.28%] left-[51.44%] tracking-[-1.6px] leading-[2.88rem] inline-block">{`Plastic pollution `}</b>
            <div className="absolute w-[32.23%] top-[calc(50%_-_682.5px)] left-[51.44%] text-[1rem] tracking-[-0.36px] leading-[1.63rem] text-colors-basic-color-2 inline-block h-[55.93rem]">
              <p className="m-0">
                Plastic pollution is one of the biggest problems facing the
                ocean right now. It is the largest source of ocean
                contamination.
              </p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">
                Plastic is one of the most commonly used materials and its
                production worldwide is increasing. It's lightweight, easy to
                make, tough and long lasting, however these qualities are also
                its biggest problem.
              </p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">
                Unwanted plastic products such as drink bottles, plastic bags,
                candy wrappers, are often not disposed of properly. This
                unwanted plastic waste is normally just thrown away and is moved
                by the wind and the rain, ending up in rivers and streams and
                eventually the ocean. 
              </p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">
                Here ocean currents carry them around, spreading them all over
                the world. As the plastic waste travels it doesn’t break down,
                it just breaks into smaller and smaller pieces. In many cases
                birds, fish and other sea life mistake these little bits of
                garbage for food, eating them and making them very sick.
              </p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">
                For the bigger pieces of plastic, they are much tougher to break
                down and occasionally get trapped together and form huge groups
                of floating plastic, sometimes called a swath due to its size.
                One of the biggest is called the great pacific garbage patch and
                is twice the size of NSW (almost 20% the size of Australia).
              </p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">
                <b>
                  Some easy ways to cut down on the amount of plastic that ends
                  up in the ocean are:
                </b>
              </p>
              <p className="m-0">
                • Stop using single use plastics such as plastic bags, plastic
                takeaway containers, plastic straws and lolly wrappers.
              </p>
              <p className="m-0">
                • Disposing of plastic products properly, check to see if it has
                a recycling logo on it, if so recycle
              </p>
              <p className="m-0">
                • Tidy up after yourself – don’t just throw it away, put
                unwanted plastics in the bin.
              </p>
              <button className={styles.hookbutton1} onClick={handleClick}>
                Back to Gallery
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Plastic;
  