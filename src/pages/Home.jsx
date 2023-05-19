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
    // <div className="relative bg-ghostwhite w-full min-h-[165.94rem] flex flex-col items-center justify-center gap-[3.13rem] text-left text-[1.75rem] text-indigo_900 font-catamaran">
    <div
      className="relative bg-ghostwhite w-full h-[165.94rem] flex flex-col items-center justify-center gap-[3.13rem] text-left text-[1.75rem] text-indigo_900 font-catamaran"
      style={{ overflowX: "hidden" }}
    >
      <Header />
      <LearnContainer />
      <div className="flex flex-row items-center justify-center gap-[3.13rem] text-[3.5rem]">
        <img
          className="relative w-[28.13rem] h-[26.44rem] shrink-0 object-cover"
          alt=""
          src="/image4@2x.png"
        />

        <div className="relative w-[41.06rem] h-[21.88rem] shrink-0 overflow-hidden">
          <div className="absolute w-[89.95%] top-[calc(50%_-_123.57px)] left-[-0.08%] leading-[3.88rem] font-black inline-block h-[7.19rem] text-blue-900 ">
            What Oceanledge is about
          </div>

          <div className="absolute h-[53.43%] w-[93.91%] top-[40.12%] left-[0.08%] text-[0.88rem] leading-[1.63rem] font-montserrat text-darkslategray-100 inline-block">
            <br></br>
            <br></br>
            <p className="m-0">
              The ocean is in serious trouble! Our continued use of plastics
              which often end up in the ocean as well as issues like over
              fishing have endangered a lot of ocean animals around Australia.
              If we continue this way, we might never even see these beautiful
              creatures in the future. But it’s not too late! We can still help!
              We believe that learning about ocean animals is the first step
              towards caring about these animals and wanting to protect them.
            </p>
            <p className="m-0">
              That is where Oceanledge comes from - Ocean + Knowledge
            </p>
          </div>
        </div>
      </div>

      <div className="relative w-[66.25rem] h-[39.63rem] shrink-0 text-[1.5rem] text-sandybrown">
        {/* <div className="absolute top-[13.9rem] left-[0.5rem] leading-[2rem] uppercase font-extrabold">
            Get started !
            
            <p className=" text-[0.2rem] text-black">
              We have games, quizzes and even a way 
            </p >
            <p className="text-[0.2rem] text-black ">
            to identify a fishy friend if you saw one!
            </p >
        </div> */}

        <div className="relative w-[66.12rem] h-[39.63rem] shrink-0 text-center text-[1.5rem] text-gray font-catamaran">
          <div className="absolute top-[13.9rem] left-[1.08rem] leading-[2rem] uppercase font-extrabold text-sandybrown text-left">
            Get started !
          </div>
          <div className="absolute top-[16.62rem] left-[0rem] text-[1rem] leading-[4rem] text-darkslategray-200 text-left flex items-center w-[18.31rem] h-[9.63rem]">
            We have games, quizzes and even a way to identify a fishy friend if
            you saw one!
          </div>
          <img
            className="absolute top-[0rem] left-[18.19rem] w-[23.13rem] h-[19rem] object-cover"
            alt=""
            src="/about@2x.png"
          />
          <div className="absolute top-[0rem] left-[42.94rem] w-[23.13rem] h-[19rem]">
            <div className="absolute top-[0rem] left-[0rem] rounded-3xs bg-darkslategray-200 w-[23.13rem] h-[19rem]" />
            <img
              className="absolute top-[0rem] left-[0rem] rounded-3xs w-[23.25rem] h-[19rem] object-cover"
              alt=""
              // src="/-1@2x.png"
              src="/oceanFr.png"
            />
            <div className="absolute top-[3.93rem] left-[5.5rem] leading-[2.5rem] flex items-center w-[14.63rem] h-[9.75rem] text-white">
              <span className="[line-break:anywhere] w-full">
                <a href=" " className="text-white">
                  <p className="m-0 [text-decoration:underline]">
                    Ocean friends quiz
                  </p>
                </a>
                <p className="m-0 text-[1rem] text-snow">
                  Learn more about our fishy friends & test your knowledge by
                  quizzing yourself!
                </p>
              </span>
            </div>
          </div>

          <div className="absolute top-[20.61rem] left-[18.19rem] w-[23.25rem] h-[19.02rem] text-white">
            <div className="absolute top-[0.02rem] left-[0rem] rounded-3xs bg-darkslategray-200 w-[23.13rem] h-[19rem]" />
            <img
              className="absolute top-[0rem] left-[0rem] rounded-3xs w-[23.25rem] h-[19rem] object-cover"
              alt=""
              src="/dolphin1-1@2x.png"
            />
            <div className="absolute top-[5.14rem] left-[3.13rem] leading-[1.88rem] flex items-center w-[17.56rem] h-[11.81rem]">
              <span className="[line-break:anywhere] w-full">
                <a href="/identification" className="text-white">
                  <p className="m-0 [text-decoration:underline]">
                    Friend Identifier
                  </p>
                </a>
                <p className="m-0 text-[1rem] text-snow">{`Did you see a fishy friend when you went whale or dolphin watching but don't sure about who they are? We have a neat little tool to help you identify them if you take a pic! `}</p>
              </span>
            </div>
          </div>

          <div className="absolute top-[20.63rem] left-[43rem] w-[23.13rem] h-[19rem] text-white">
            <div className="absolute top-[0.02rem] left-[0rem] rounded-3xs bg-darkslategray-200 w-[23.13rem] h-[19rem]" />
            <img
              className="absolute top-[0rem] left-[0rem] rounded-3xs w-[23.25rem] h-[19rem] object-cover"
              alt=""
              src="/oceanF.png"
            />
            <div className="absolute top-[4.62rem] left-[5.19rem] leading-[2.5rem] flex items-center w-[14.63rem] h-[9.75rem] text-white">
              <span className="[line-break:anywhere] w-full">
                <a href="/plastic" className="text-white">
                  <p className="m-0 [text-decoration:underline]">Ocean facts</p>
                </a>
                <p className="m-0 text-[1rem] text-snow">
                  Learn more about our fishy friends (which will help with the
                  quizzes) & how to protect them!
                </p>
              </span>
            </div>
          </div>

          <div className="absolute top-[4.18rem] left-[24rem] leading-[2.5rem] flex items-center w-[14.63rem] h-[9.75rem] text-white">
            <span className="[line-break:anywhere] w-full">
              <a href="/game" className="text-white">
                <p className="m-0 [text-decoration:underline]">
                  Ocean helper game
                </p>
              </a>
              <p className="m-0 text-[1rem] text-snow">
                Help our fishy friends by removing plastics in the ocean in a
                fun little game!
              </p>
            </span>
          </div>
        </div>
      </div>
      <TeenageContainer />
      <ContainerFooter />
    </div>
  );
};

export default Home;
