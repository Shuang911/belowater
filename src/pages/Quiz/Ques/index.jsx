import React, { useState } from "react";
import Quiz1 from "./Quiz1copy";
import Puzzle from "../Puzzle";
import Quiz3 from "./Quiz3";

import Layout from "../../components/Layout";
import style from "./index.module.css";
import QuizIntro from "./images/quiz.jpg";
import quiz1Btn from "./images/quiz1Button.jpg";
import quiz2Btn from "./images/quiz2Button.jpg";
import quiz3Btn from "./images/quiz3Button.jpg";
import { useSpring, animated } from "react-spring";

function Quiz() {
  const [quizType, setQuizType] = useState("");
  const [hoveringQ1, setHoveringQ1] = useState(false);
  const [hoveringQ2, setHoveringQ2] = useState(false);
  const [hoveringQ3, setHoveringQ3] = useState(false);

  const springPropsQ1 = useSpring({
    transform: hoveringQ1 ? "scale(1.15)" : "scale(1)",
    // transform: hoveringQ1 ? 'rotate(3deg)' : 'rotate(0deg)'
  });

  const springPropsQ2 = useSpring({
    transform: hoveringQ2 ? "scale(1.15)" : "scale(1)",
    // transform: hoveringQ2 ? 'rotate(3deg)' : 'rotate(0deg)'
  });

  const springPropsQ3 = useSpring({
    transform: hoveringQ3 ? "scale(1.15)" : "scale(1)",
    // transform: hoveringQ2 ? 'rotate(3deg)' : 'rotate(0deg)'
  });

  function handleQuizTypeSelection(type) {
    setQuizType(type);
  }

  function renderQuiz() {
    switch (quizType) {
      case "quiz1":
        return <Quiz1 />;
      case "puzzle":
        return <Puzzle />;
      case "Quiz3":
        return <Quiz3 />;
      default:
        return null;
    }
  }

  return (
    <div>
      {quizType ? (
        renderQuiz()
      ) : (
        <div className={style.quizBg}>
          <Layout>
            {/* <h1 className={style.QuizType}>Quiz Outline</h1> */}

            <img src={QuizIntro} alt="" className={style.quizIntroPic} />
            <br></br>
            <br></br>
            <div style={{ display: "flex" }}>
              <div className={style.quiz1Btn}>
                <button onClick={() => handleQuizTypeSelection("quiz1")}>
                  <img src={quiz1Btn} alt="Custom Button" />
                </button>
              </div>

              <div className={style.quiz1Btn}>
                <button onClick={() => handleQuizTypeSelection("puzzle")}>
                  <img src={quiz2Btn} alt="Custom Button" />
                </button>
              </div>

              <div className={style.quiz1Btn}>
                <button onClick={() => handleQuizTypeSelection("Quiz3")}>
                  <img src={quiz3Btn} alt="Custom Button" />
                </button>
              </div>
            </div>

            {/* <div>
          <button className={style.hookbutton} onClick={() => handleQuizTypeSelection("puzzle")}>Puzzle</button>
         </div> */}

            {/* <div>
          <button className={style.hookbutton} onClick={() => handleQuizTypeSelection("quiz3")}>Quiz 3</button>
          </div> */}

            {/* <animated.button
          style={springPropsQ1}
          className={style.QuizTypeBtn1}
          onMouseEnter={() => setHoveringQ1(true)}
          onMouseLeave={() => setHoveringQ1(false)}
          onClick={() => handleQuizTypeSelection('quiz1')}
        >
          Find Baby Picture
        </animated.button>  
        
        <animated.button
          style={springPropsQ2}
          className={style.QuizTypeBtn1}
          onMouseEnter={() => setHoveringQ2(true)}
          onMouseLeave={() => setHoveringQ2(false)}
          onClick={() => handleQuizTypeSelection('quiz2')}
        >
          Guess  Who  I  am
        </animated.button>
          
        <animated.button
          style={springPropsQ3}
          className={style.QuizTypeBtn1}
          onMouseEnter={() => setHoveringQ3(true)}
          onMouseLeave={() => setHoveringQ3(false)}
          onClick={() => handleQuizTypeSelection('quiz3')}
        >
          Quiz 3
        </animated.button>
        </div> */}
          </Layout>
        </div>
      )}
    </div>
  );
}

export default Quiz;
