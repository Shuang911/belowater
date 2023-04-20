import React, { useState } from "react";
import Quiz1 from './Quiz1'
import Quiz2 from './Quiz2'
import Quiz3 from './Quiz3'
import Layout from "../../components/Layout";
import style from "./index.module.css";
import { useSpring, animated } from 'react-spring';

function Quiz() {
  const [quizType, setQuizType] = useState("");
  const [hoveringQ1, setHoveringQ1] = useState(false);
  const [hoveringQ2, setHoveringQ2] = useState(false);
  const [hoveringQ3, setHoveringQ3] = useState(false);

  const springPropsQ1 = useSpring({
    transform: hoveringQ1 ? 'scale(1.15)' : 'scale(1)',
    // transform: hoveringQ1 ? 'rotate(3deg)' : 'rotate(0deg)'
  });

  const springPropsQ2 = useSpring({
    transform: hoveringQ2 ? 'scale(1.15)' : 'scale(1)',
    // transform: hoveringQ2 ? 'rotate(3deg)' : 'rotate(0deg)'
  });

  const springPropsQ3 = useSpring({
    transform: hoveringQ3 ? 'scale(1.15)' : 'scale(1)',
    // transform: hoveringQ2 ? 'rotate(3deg)' : 'rotate(0deg)'
  });

  function handleQuizTypeSelection(type) {
    setQuizType(type);
  }

  function renderQuiz() {
    switch (quizType) {
      case "quiz1":
        return <Quiz1 />;
      case "quiz2":
        return <Quiz2 />;
        case "quiz3":
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
        <div>
          <Layout>
          <h1 className={style.QuizType}>Pick one that interests you</h1>
          <div>
          <button className={style.hookbutton} onClick={() => handleQuizTypeSelection("quiz1")}>Find Baby Picture</button>
         </div>
          <div>
          <button className={style.hookbutton} onClick={() => handleQuizTypeSelection("quiz2")}>Guess  Who  I  am</button>
         </div>
         {/* <div>
          <button className={style.hookbutton} onClick={() => handleQuizTypeSelection("quiz3")}>Quiz 3</button>
          </div> */}
          {/* <animated.button
          style={springPropsQ1}
          className={style.QuizTypeBtn}
          onMouseEnter={() => setHoveringQ1(true)}
          onMouseLeave={() => setHoveringQ1(false)}
          onClick={() => handleQuizTypeSelection('quiz1')}
        >
          Find Baby Picture
        </animated.button>  
        
        <animated.button
          style={springPropsQ2}
          className={style.QuizTypeBtn}
          onMouseEnter={() => setHoveringQ2(true)}
          onMouseLeave={() => setHoveringQ2(false)}
          onClick={() => handleQuizTypeSelection('quiz2')}
        >
          Guess  Who  I  am
        </animated.button>
          
        <animated.button
          style={springPropsQ3}
          className={style.QuizTypeBtn}
          onMouseEnter={() => setHoveringQ3(true)}
          onMouseLeave={() => setHoveringQ3(false)}
          onClick={() => handleQuizTypeSelection('quiz3')}
        >
          Quiz 3
        </animated.button> */}
          
          </Layout>
        </div>
      )}
    </div>
  );

}

export default Quiz;


