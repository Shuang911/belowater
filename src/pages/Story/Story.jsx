import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import NavigationContainer from "../../components/NavigationContainer";
import Map from './Map';
import Header from '../../components/Header'

const Story = () => {
  const navigate = useNavigate();

  const onFAQsTextClick = useCallback(() => {
    navigate("/events");
  }, [navigate]);


  return (

    <div className="relative bg-ghostwhite w-full overflow-hidden flex flex-col py-[4.13rem] px-[0.69rem] box-border items-center justify-start gap-[3.13rem] text-left text-[1.75rem] text-indigo_900 font-catamaran">
          <Header />
          
          
          
          
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
        <Map />
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
    
            
          
          
          
          
          
  );
};

export default Story;
