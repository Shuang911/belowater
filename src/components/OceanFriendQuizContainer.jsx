const OceanFriendQuizContainer = () => {
  return (
    <div className="relative w-[71.88rem] h-[21.69rem] shrink-0 text-center text-[3.13rem] text-midnightblue-200 font-catamaran">
      <img
        className="absolute top-[0rem] left-[0rem] rounded-31xl w-[71.88rem] h-[21.69rem] object-cover"
        alt=""
        src="/image5@2x.png"
      />
      <img
        className="absolute top-[11.24rem] left-[1.38rem] rounded-31xl w-[19.38rem] h-[9.06rem] object-cover"
        alt=""
        src="/06-32@2x.png"
      />
      <div className="absolute h-[88.03%] w-[73.51%] top-[6.03%] right-[8.24%] bottom-[5.94%] left-[18.25%] rounded-31xl overflow-hidden">
        <div className="absolute top-[calc(50%_-_124.77px)] left-[calc(50%_-_344.7px)] leading-[6.88rem] font-black inline-block w-[32.63rem] h-[4.81rem]">
          Ocean Friend Quiz
        </div>
        <div className="absolute h-[41.95%] top-[38.26%] left-[calc(50%_-_312.7px)] text-[1.06rem] leading-[1.63rem] font-medium font-montserrat text-darkslategray-100 inline-block w-[28.63rem]">
          Test your knowledge on what you know about our ocean friends!
        </div>
        <div className="absolute top-[12.5rem] left-[16.63rem] rounded-lg [background:radial-gradient(50%_50%_at_50%_50%,_#9258dc,_#862bb1)] h-[4.31rem] flex flex-row py-[1.06rem] px-[2.25rem] box-border items-center justify-center text-left text-[1.5rem] text-white">
          <div className="relative leading-[146.5%]">Play now</div>
        </div>
      </div>
    </div>
  );
};

export default OceanFriendQuizContainer;
