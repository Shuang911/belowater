import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import LearnContainer from "../components/LearnContainer";
import TeenageContainer from "../components/TeenageContainer";
import ContainerFooter from "../components/ContainerFooter";
import Header from "../components/Header";

const Home = () => {
  const navigate = useNavigate();

  const onFAQsTextClick = useCallback(() => {
    navigate("/events");
  }, [navigate]);

  return (
    <div className="relative bg-ghostwhite w-full h-[165.94rem] flex flex-col items-center justify-center gap-[3.13rem] text-left text-[1.75rem] text-indigo_900 font-catamaran">
      <Header />
      <LearnContainer />
      <div className="flex flex-row items-center justify-center gap-[3.13rem] text-[3.5rem]">
        <img
          className="relative w-[28.13rem] h-[26.44rem] shrink-0 object-cover"
          alt=""
          src="/image4@2x.png"
        />
        <div className="relative w-[41.06rem] h-[21.88rem] shrink-0 overflow-hidden">
          <div className="absolute w-[80.21%] top-[calc(50%_-_175px)] left-[0%] leading-[3.88rem] font-black inline-block">
            Welcome to Oceanledge
          </div>
          <div className="absolute w-full top-[44%] left-[0%] text-[0.88rem] leading-[1.63rem] font-montserrat text-darkslategray-100 inline-block">
            Let's take you through the charm of the ocean. Our purpose is to let
            children understand and protect the ocean.
          </div>
        </div>
      </div>
      <div className="relative w-[66.25rem] h-[39.63rem] shrink-0 text-[1.5rem] text-sandybrown">
        <div className="absolute top-[13.9rem] left-[1.2rem] leading-[2rem] uppercase font-extrabold">
          collection
        </div>
        <div className="absolute top-[15.9rem] left-[0rem] text-[2.25rem] leading-[4rem] text-darkslategray-200 flex items-center w-[18.31rem] h-[9.63rem]">
          <span className="[line-break:anywhere] w-full">
            <p className="m-0">Our latest</p>
            <p className="m-0">projects</p>
          </span>
        </div>
        <img
          className="absolute top-[0rem] left-[18.31rem] w-[23.13rem] h-[19rem] object-cover"
          alt=""
          src="/about@2x.png"
        />
        <img
          className="absolute top-[0rem] left-[43.06rem] w-[23.13rem] h-[19rem] object-cover"
          alt=""
          src="/ocean-factors@2x.png"
        />
        <img
          className="absolute top-[20.61rem] left-[18.31rem] w-[23.25rem] h-[19.02rem] object-cover"
          alt=""
          src="/ocean-friends@2x.png"
        />
        <img
          className="absolute top-[20.63rem] left-[43.12rem] w-[23.13rem] h-[19rem] object-cover"
          alt=""
          src="/games@2x.png"
        />
      </div>
      <TeenageContainer />
      <ContainerFooter />
    </div>
  );
};

export default Home;
