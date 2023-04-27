import { Button } from "@mui/material";

const LearnContainer = () => {
  return (
    <div className="relative w-[71.88rem] h-[36.79rem] shrink-0">
      <img
        className="absolute top-[0rem] left-[0rem] w-[70.81rem] h-[36.05rem] object-cover"
        alt=""
        src="/pattern@2x.png"
      />
      <img
        className="absolute top-[8.64rem] left-[2.39rem] rounded-61xl w-[72.8rem] h-[38rem] object-cover hidden"
        alt=""
        src="/image3@2x.png"
      />
      <img
        className="absolute top-[3.19rem] left-[4.52rem] w-[6.89rem] h-[6.31rem]"
        alt=""
        src="/1.svg"
      />
      <img
        className="absolute top-[22.48rem] left-[7.97rem] w-[4.39rem] h-[4.02rem]"
        alt=""
        src="/2.svg"
      />
      <img
        className="absolute top-[1.73rem] left-[11.83rem] w-[60.05rem] h-[35.06rem] object-cover"
        alt=""
        src="/bg1@2x.png"
      />
      {/* <Button
        className="absolute top-[8.22rem] left-[10.19rem]"
        sx={{ width: 512.4822387695312 }}
        variant="contained"
        color="primary"
        href="www.google.com"
      >
        Learn about
      </Button> */}
    </div>
  );
};

export default LearnContainer;
