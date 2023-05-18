const PlayContainer = () => {
  return (
    <div className="relative w-[60.35rem] h-[41.59rem] shrink-0 text-center text-[1.5rem] text-white font-catamaran">
      <div className="absolute h-[96.09%] w-full top-[3.91%] right-[0%] bottom-[0%] left-[0%] bg-ghostwhite" />
      {/* <b className="absolute h-[13.52%] w-[53.23%] top-[0%] left-[22.45%] text-[3rem] tracking-[-2px] leading-[3.5rem] inline-block font-display-03 text-colors-basic-color-1">
        Ocean Friend Quiz
      </b> */}
      <div className="absolute top-[5.63rem] left-[calc(50%_-_477px)] w-[59.81rem] h-[22.53rem] text-[1.06rem] text-darkslategray-100 font-montserrat">
        <div className="absolute top-[0rem] left-[calc(50%_-_152.3px)] w-[18.24rem] h-[21.11rem] text-[1.56rem] text-midnightblue-100 font-catamaran">
          <div className="absolute top-[3.55rem] left-[calc(50%_-_147.95px)] rounded-11xl bg-white box-border w-[18.49rem] h-[17.69rem] border-[4px] border-solid border-darkorchid" />
          <img
            className="absolute top-[0rem] left-[calc(50%_-_51.47px)] w-[6.48rem] h-[7.4rem]"
            alt=""
            src="/icon.svg"
          />
          <div className="absolute top-[8rem] left-[calc(50%_-_118.18px)] w-[15.11rem] h-[12.62rem] overflow-hidden">
            <b className="absolute top-[calc(50%_-_87.61px)] left-[calc(50%_-_31.65px)] leading-[2.38rem]">{`Part 2 `}</b>
          </div>
        </div>

        <div className="absolute top-[0rem] left-[calc(50%_-_478.5px)] w-[18.24rem] h-[21.11rem] mix-blend-normal">
          <div className="absolute top-[3.55rem] left-[calc(50%_-_147.95px)] rounded-11xl bg-white box-border w-[18.49rem] h-[17.69rem] border-[4px] border-solid border-goldenrod" />
          <img
            className="absolute top-[-0.25rem] left-[calc(50%_-_55.47px)] w-[6.98rem] h-[7.9rem]"
            alt=""
            src="/icon1.svg"
          />
          
          <div className="absolute top-[8.36rem] left-[calc(50%_-_130.23px)] w-[16.34rem] h-[11.24rem] overflow-hidden">
            <a href="/quiz2" className="text-purple hover:bg-red-600">
              <div className="absolute h-[53.37%] top-[42.33%] left-[calc(50%_-_132.68px)] leading-[1.63rem] inline-block w-[16.63rem]">
                Marine Pollution
              </div>
            </a>

            <b className="absolute top-[0.1rem] left-[3.81rem] text-[1.56rem] leading-[2.38rem] inline-block font-catamaran text-black w-[8rem] h-[2.5rem]">{`Part 1 `}</b>
          </div>
        </div>

        <a href="/quiz3" className="text-purple hover:bg-red-600">
          <div className="absolute h-[26.62%] top-[58.25%] left-[calc(50%_-_132.5px)] leading-[1.63rem] inline-block w-[16.63rem]">
          Marine Friend
          </div>
        </a>

        <img
          className="absolute top-[15.19rem] left-[34.02rem] w-[4.67rem] h-[7.35rem]"
          alt=""
          src="/jellyfish.svg"
        />
        <div className="absolute top-[0.02rem] left-[calc(50%_+_186.59px)] w-[18.24rem] h-[21.11rem] text-[1.56rem] text-black font-catamaran">
          <div className="absolute top-[0rem] left-[calc(50%_-_145.95px)] w-[18.24rem] h-[21.11rem]">
            <div className="absolute top-[3.55rem] left-[calc(50%_-_147.95px)] rounded-11xl bg-white box-border w-[18.49rem] h-[17.69rem] border-[4px] border-solid border-goldenrod" />
            <img
              className="absolute top-[0rem] left-[calc(50%_-_51.47px)] w-[6.48rem] h-[7.4rem]"
              alt=""
              src="/icon2.svg"
            />
            {/* <div className="absolute top-[8.36rem] left-[calc(50%_-_130.23px)] w-[16.34rem] h-[11.24rem] overflow-hidden">
              <b className="absolute top-[0.1rem] left-[3.81rem] leading-[2.38rem] hidden w-[8.56rem] h-[4rem]">{`Quiz 3 `}</b>
              <b className="absolute top-[6.22rem] left-[4rem] leading-[2.38rem] hidden w-[9rem] h-[2.88rem]">
                Who am I?
              </b>
            </div> */}
            <div className="absolute top-[7.98rem] left-[calc(50%_-_118.07px)] w-[15.11rem] h-[12.62rem] overflow-hidden text-midnightblue-100">
              <b className="absolute top-[calc(50%_-_87.61px)] left-[calc(50%_-_31.65px)] leading-[2.38rem]">{`Part 3 `}</b>
            </div>
          </div>
        </div>
        <a href="/puzzle" className="text-purple hover:bg-red-600">
          <div className="absolute h-[26.62%] top-[58.25%] left-[calc(50%_+_206.5px)] leading-[1.63rem] inline-block w-[16.63rem]">
          Puzzle
          </div>
        </a>
      </div>
    </div>
  );
};

export default PlayContainer;
