const Error404 = () => {
  return (
    <div className="relative bg-ghostwhite w-full h-[52rem] overflow-hidden text-left text-[2.5rem] text-midnightblue-200 font-catamaran">
      <img
        className="absolute top-[5.63rem] left-[48.63rem] w-[29.5rem] h-[46.38rem]"
        alt=""
        src="/bg.svg"
      />
      <img
        className="absolute top-[6.69rem] left-[7.63rem] w-[17.94rem] h-[17.94rem]"
        alt=""
        src="/element1.svg"
      />
      <img
        className="absolute top-[4.56rem] left-[49.38rem] w-[14.94rem] h-[14.88rem]"
        alt=""
        src="/element2.svg"
      />
      <div className="absolute top-[15.63rem] left-[16.63rem] w-[34.69rem] h-[21.31rem] overflow-hidden">
        <div className="absolute top-[calc(50%_-_175.5px)] left-[calc(50%_-_256.5px)] leading-[6.88rem] font-black inline-block w-[48.75rem]">
          Oooops!
        </div>
        <b className="absolute top-[calc(50%_-_38.5px)] left-[calc(50%_-_389.5px)] text-[1.56rem] leading-[2.38rem] inline-block text-midnightblue-100 text-center w-[48.75rem]">
          Page not found
        </b>
      </div>
      <img
        className="absolute top-[8.56rem] left-[41.44rem] w-[36.69rem] h-[43.44rem] object-cover"
        alt=""
        src="/404@2x.png"
      />
    </div>
  );
};

export default Error404;
