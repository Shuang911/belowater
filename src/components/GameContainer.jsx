import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const GameContainer = () => {
  const navigate = useNavigate();
  const onClick = useCallback(() => {
    navigate("/fishing");
  }, [navigate]);

  return (
    <div className="relative w-[71.88rem] h-[21.69rem] shrink-0 text-left text-[1.5rem] text-white font-catamaran">
      {/* <img
          className="absolute top-0 left-0 rounded-31xl w-72 h-21 object-cover"
          alt=""
          src="/image1@2x.png"
        /> */}
      <button
        className="bottom-0 left-2/4 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-md px-4 py-2 absolute z-50"
        onClick={onClick}
      >
        Play Now
      </button>

      <img
        className="absolute h-[99.68%] w-[98.25%] top-[0%] right-[0.9%] bottom-[0.32%] left-[0.85%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/layer-61@2x.png"
      />
      <div className="absolute h-[57.33%] w-[65.33%] top-[16.42%] right-[5%] bottom-[26.24%] left-[29.68%] rounded-31xl overflow-hidden text-center text-[3.13rem] text-midnightblue-200">
        <div className="absolute top-[calc(50%_-_111.5px)] left-[calc(50%_-_265.92px)] leading-[6.88rem] font-black inline-block w-[22.88rem]">
          Ocean Helper
        </div>
        <div className="absolute h-[60.49%] top-[39.7%] left-[calc(50%_-_351.62px)] text-[1.06rem] leading-[1.63rem] font-medium font-montserrat text-black inline-block w-[39.69rem]">
          The plastics that we have thrown away have ended up in the ocean and
          are harming our fishy friends! Play the Ocean helper game to help
          clean up the ocean and help our fishy friends!
        </div>
      </div>
      <img
        className="absolute top-[0.74rem] left-[0.72rem] rounded-31xl w-[21.48rem] h-[20.22rem] object-cover"
        alt=""
        src="/dugongs1-1@2x.png"
      />
    </div>
  );
};

export default GameContainer;
