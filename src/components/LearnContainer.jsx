import { Button } from "@mui/material";

const LearnContainer = () => {
  return (
    // <div className="relative w-[71.88rem] h-[36.79rem] shrink-0">
    //   <img
    //     className="absolute top-[0rem] left-[0rem] w-[70.81rem] h-[36.05rem] object-cover"
    //     alt=""
    //     src="/pattern@2x.png"
    //   />
    //   <img
    //     className="absolute top-[8.64rem] left-[2.39rem] rounded-61xl w-[72.8rem] h-[38rem] object-cover hidden"
    //     alt=""
    //     src="/image3@2x.png"
    //   />
    //   <img
    //     className="absolute top-[3.19rem] left-[4.52rem] w-[6.89rem] h-[6.31rem]"
    //     alt=""
    //     src="/1.svg"
    //   />
    //   <img
    //     className="absolute top-[22.48rem] left-[7.97rem] w-[4.39rem] h-[4.02rem]"
    //     alt=""
    //     src="/2.svg"
    //   />
    //   <img
    //     className="absolute top-[1.73rem] left-[11.83rem] w-[60.05rem] h-[35.06rem] object-cover"
    //     alt=""
    //     src="/bg1@2x.png"
    //   />
    <div className="relative w-[70.83rem] h-[36.2rem] shrink-0">
      <img
        className="absolute top-[0.7rem] left-[0rem] w-[70.83rem] h-[32.46rem] object-cover"
        alt=""
        src="/pattern@2x.png"
      />
      <img
        className="absolute top-[7.45rem] left-[3.13rem] rounded-61xl w-[72.8rem] h-[38rem] object-cover hidden"
        alt=""
        src="/image@2x.png"
      />
      <img
        className="absolute top-[22.15rem] left-[7.99rem] w-[4.39rem] h-[4.02rem]"
        alt=""
        src="/2.svg"
      />
      <img
        className="absolute top-[0rem] left-[0.01rem] w-[70.81rem] h-[36.2rem] object-cover"
        alt=""
        src="/bg@2x.png"
      />
      <div className="absolute top-[6.22rem] left-[1.19rem] leading-[1.63rem] text-blue-900 font-montserrat text-darkslategray-100 text-[2.5rem] font-bold" >
      Welcome to Oceanledge
      </div>

      <div className="absolute top-[9.22rem] left-[3.19rem] text-purple-900" >
        Where Ocean + Knowledge = Fun
      </div>

      <div className="absolute top-[14.22rem] left-[2.19rem] text-white" >
        Our fishy friends are in trouble!
      </div>
      <div className="absolute top-[16.22rem] left-[2.19rem] text-white">
      Learn more about how you can help with 
      </div>
      <div className="absolute top-[18.22rem] left-[2.19rem] text-white">
      these fun and interactive games.
      </div>
      <div className="absolute top-[25rem] left-[2.19rem] space-x-4">
        <a href="/game">
          <button className="px-8 py-4 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
          Ocean helper game
          </button>
        </a>
        <a href="/quiz">
          <button className="px-8 py-4 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
          Ocean Friends quiz
          </button>
        </a>
        <a href="/identification">
          <button className="px-8 py-4 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
          Friend identification
          </button>
        </a>
        <a href="/gallery">
          <button className="px-8 py-4 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
          Gallery
          </button>
        </a>
      </div>
      
      
    </div>
  );
};

export default LearnContainer;
