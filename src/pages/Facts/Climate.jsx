import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import NavigationContainer from "../../components/NavigationContainer";
// import Map from "./Map";
import Header from "../../components/Header";

const Climate = () => {
    return (
        <div className="relative bg-ghostwhite w-full overflow-hidden flex flex-col py-[4.13rem] h-[150rem] px-[0.69rem] box-border items-center justify-start gap-[3.13rem] text-left text-[1.75rem] text-indigo_900 font-catamaran" >
      <Header />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <a href='/overfish' className=" top-[84.44rem] left-[9.56rem] rounded-11xl bg-darkorchid-200 box-border w-[12.06rem] h-[7.88rem] flex flex-row py-[0.63rem] px-[1.25rem] items-center justify-center gap-[0.63rem] text-center text-[1.06rem] text-white font-montserrat border-[4px] border-solid border-darkorchid-100" style={{ flex: 1 ,margin: '0 3rem',backgroundColor: 'rgb(104,41,179,1)'}}>
                <img
                className="relative w-[2.76rem] h-[4.72rem]"
                alt=""
                src="/icon--hook.svg"
                />
                <div className="relative leading-[1.63rem]">Over-fishing</div>
            </a>
            <a href="/mining" className=" top-[84.44rem] left-[25.19rem] rounded-11xl bg-goldenrod-200 box-border w-[12.06rem] h-[7.88rem] flex flex-row py-[0.63rem] px-[1.25rem] items-center justify-center gap-[0.63rem] text-center text-[1.06rem] text-white font-montserrat border-[4px] border-solid border-goldenrod-100" style={{ flex: 1,margin: '0 3rem',backgroundColor: 'rgb(255,179,71,1)' }}>
                <img
                className="relative w-[2.76rem] h-[4.72rem]"
                alt=""
                src="/icon--mining.svg"
                />
                <div className="relative leading-[1.63rem]">Mining</div>
            </a>
            <a href='/plastic' className=" top-[84.44rem] left-[40.81rem] rounded-11xl bg-darkorchid-200 box-border w-[12.06rem] h-[7.88rem] flex flex-row py-[0.63rem] px-[1.25rem] items-center justify-center gap-[0.63rem] text-center text-[1.06rem] text-white font-montserrat border-[4px] border-solid border-darkorchid-100" style={{ flex: 1,margin: '0 3rem',backgroundColor: 'rgb(0,0,255,0.7)'}}>
                <img
                className="relative w-[2.76rem] h-[4.72rem]"
                alt=""
                src="/icon--plastic-polution.svg"
                />
                <div className="relative leading-[1.63rem]">
                <p className="m-0">{`Plastic `}</p>
                <p className="m-0">Pollution</p>
                </div>
            </a>
            {/* <a href='/climate' className=" top-[84.44rem] left-[56.44rem] rounded-11xl bg-goldenrod-200 box-border w-[12.06rem] h-[7.88rem] flex flex-row py-[0.63rem] px-[1.25rem] items-center justify-center gap-[0.63rem] text-center text-[1.06rem] text-white font-montserrat border-[4px] border-solid border-goldenrod-100" style={{ flex: 1,margin: '0 3rem',backgroundColor: 'rgb(246, 52, 87,0.7)'}}>
                <img
                className="relative w-[2.76rem] h-[4.72rem]"
                alt=""
                src="/icon--climate-change.svg"
                />
                <b className="relative leading-[1.63rem]">
                <p className="m-0">Climate</p>
                <p className="m-0">Change</p>
                </b>
            </a> */}
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
            src="/climate.png"
          />
          <b className="absolute h-[8.13%] w-[32.23%] top-[7.28%] left-[51.44%] tracking-[-1.6px] leading-[2.88rem] inline-block">{`Climate Change `}</b>
          <div className="absolute w-[32.23%] top-[calc(50%_-_682.5px)] left-[51.44%] text-[1rem] tracking-[-0.36px] leading-[1.63rem] text-colors-basic-color-2 inline-block h-[55.93rem]">
            <p className="m-0">
            Oceans represent 2/3 of the planet's surface and are extremely impacted by climate change. They work to keep our climates stable by storing heat from the sun. 
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
            They have absorbed 93% of the heat created by trapped greenhouse gases thus far. Unfortunately absorbing this much energy has had some major negative effects on the ocean, with ocean temperatures rising, marine heat waves and ocean acidification. 
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
            Consequences are dramatic for marine ecosystems. With the water warming, numerous species living in cold water could be disappearing. And animals and plants that are used to warmer waters, could still lose their homes because warmer waters hold less oxygen, making it difficult for anything to survive.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
            The united nations predict that a 1*c rise in ocean temperatures will affect between 70-90% of all coral reefs and a 2*c rise will damage 99%.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
            Toxic algae could proliferate and make some ecosystems uninhabitable for marine mammals. Finally, the rise of sea waters is alarming. It could be up to between 40 and 100 cm making some islands and coasts disappear.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              <b>
              How can you help? Climate change is caused by greenhouse gases in the atmosphere. The only way to reduce this is to reduce our emissions. Here is some ways you can do this:
              </b>
            </p>
            <p className="m-0">
              • Using green renewable energy such as solar
            </p>
            <p className="m-0">
              • Walking or using public transport instead of driving, whenever possible
            </p>
            <p className="m-0">
              • Research the companies that you or your parents use, encourage them to reduce their carbon footprint.
            </p>
          </div>
        </div>
        
      </div>
      
      </div>
      
    );
  };
  
  export default Climate;
  