import React, { useState } from "react";
import style from "./index.module.css";
import styles from "./Certificate.module.css";
import CertificatePage from "./CertificatePage";
import Header from "../../../components/Header";
import NavigationContainer from "../../../components/NavigationContainer";

import img1 from "./images1/1.1.jpeg";
import img2 from "./images1/1.2.jpeg";
import img3 from "./images1/1.3.jpeg";
import img4 from "./images1/2.1.jpeg";
import img5 from "./images1/2.2.jpeg";
import img6 from "./images1/2.3.png";
import img7 from "./images1/3.1.jpeg";
import img8 from "./images1/3.2.jpeg";
import img9 from "./images1/3.3.jpeg";
import img10 from "./images1/4.1.png";
import img11 from "./images1/4.2.png";



import correctAud from "./sounds/correctSound.wav";
import incorrectAud from "./sounds/incorrectSound.wav";

export default function Quiz1() {
  const questions = [
    {
      questionText:
        "What trash can be thrown into the ocean?",
      answerOptions: [
        {
          id: 0,
          image: img1,
          isCorrect: false,
          option: "A",
          feedback: "incorrect, it cannot be thrown into the ocean.",
        },
        {
          id: 1,
          image: img2,
          isCorrect: false,
          option: "B",
          feedback: "incorrect, it cannot be thrown into the ocean.",
        },
        {
          id: 2,
          image: img3,
          isCorrect: true,
          option: "C",
          feedback:
            "Actually, we should not throw any trash into the ocean.",
        },
      ],
      answer: {
        id: 0,
        image: img3,
        text: "Actually, we should not throw any trash into the ocean.",
      },
    },

    {
      questionText: "What are microplastics?",
      answerOptions: [
        {
          id: 0,
          image: img4,
          isCorrect: false,
          option: "A",
          feedback: "Incorrect, try again.",
        },
        {
          id: 1,
          image: img5,
          isCorrect: false,
          option: "B",
          feedback: "Incorrect, try again.",
        },
        {
          id: 2,
          image: img6,
          isCorrect: true,
          option: "C",
          feedback:
            "microplastics are extremely small plastic fragments.",
        },
      ],
      answer: {
        id: 0,
        image: img6,
        text: "microplastics are extremely small plastic fragments.",
      },
    },

    {
      questionText: "What is the most common garbage in the ocean?",
      answerOptions: [
        {
          id: 0,
          image: img7,
          isCorrect: true,
          option: "A",
          feedback: "Yes, plastic bottles is the most common garbage people throw into ocean.",
        },
        {
          id: 1,
          image: img8,
          isCorrect: false,
          option: "B",
          feedback: "Incorrect, try again.",
        },
        {
          id: 2,
          image: img9,
          isCorrect: false,
          option: "C",
          feedback: "Incorrect,  try again.",
        },
      ],
      answer: {
        id: 0,
        image: img7,
        text: "Yes, plastic bottles is the most common garbage people throw into ocean.",
      },
    },
    {
      questionText:
        "How can we protect the ocean?",

      answerOptions: [
        {
          id: 0,
          image: img10,
          isCorrect: true,
          option: "A",
          feedback:
            "  We can help to collect trash from the beach and do not litter on beach.",
        },
        {
          id: 1,
          image: img11,
          isCorrect: false,
          option: "B",
          feedback: "No, throwing trash into ocean will harm the ocean.",
        },
      ],
      answer: {
        id: 0,
        image: img10,
        text: " We can help to collect trash from the beach and do not litter on beach.",
      },
    },
  ];

  const [gameStarted, setGameStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [clickedAnswers, setClickedAnswers] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [showAnswerFeedback, setShowAnswerFeedback] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [answerSelected, setAnswerSelected] = useState(false);
  const [showNextButton, setShowNextButton] = useState("");

  const correctSound = new Audio(correctAud);
  const incorrectSound = new Audio(incorrectAud);
  const [correctAnswerText, setCorrectAnswerText] = useState("");
  const [feedbackmessage, setFeedbackmessage] = useState("");
  const [feedback, setFeedback] = useState({ text: "", feedback: "" });

  const [showCertificate, setShowCertificate] = useState(false);

  const handleButtonClick = () => {
    setShowCertificate(true);
  };

  const startGame = () => {
    setGameStarted(true);
  };

  function handleClick() {
    window.location.href = "/Quiz"; 
  }
  
  

  const handleAnswerButtonClick1 = (isCorrect) => {
    if (isCorrect && !clickedAnswers.includes(currentQuestion)) {
      setScore(score + 1);
      setIsAnswerCorrect(true);
      setAnswerSelected(true);
      correctSound.play();
      setShowNextButton(true);
      const selectedAnswer = questions[currentQuestion].answerOptions.find(
        (option) => option.isCorrect === true
      );
      setFeedback({
        text: selectedAnswer.feedback,
        image: questions[currentQuestion].answer.image,
      });
    } else {
      setClicked(true);
      setIsAnswerCorrect(false);
      setAnswerSelected(true);
      incorrectSound.play();
      setShowNextButton(false);
      
      
      const selectedAnswer = questions[currentQuestion].answerOptions.find(
        (option) => option.isCorrect === false 
      );
      setFeedback({
        text: selectedAnswer.feedback,
        image: selectedAnswer.feedback.image,
      });
      
    }
    
    setShowAnswerFeedback(true);
    

    setCorrectAnswer(questions[currentQuestion].answer.image);
    setCorrectAnswerText(questions[currentQuestion].answer.text);
   
    if (score <= 2) {
      setFeedbackmessage(
        "It seems that you are not very familiar with this topic, cheer up!"
      );
    } else {
      setFeedbackmessage(
        "You got more than half of the questions right, you're great!"
      );
    }
  };

  if (!gameStarted) {
    return (
      <div className="relative bg-ghostwhite w-full overflow-hidden flex flex-col py-[4.13rem] px-[0.69rem] box-border items-center justify-start gap-[3.13rem] text-left text-[1.75rem] text-indigo_900 font-catamaran">
        <Header />

        <div className={style.startPage}>
          <h2 className={style.startPageText2}> Marine Pollution Knowledge Test</h2>
          <button onClick={startGame} className={style.startBtn}>
            Start
          </button>
        </div>

        <NavigationContainer
          dimensionsText="/vector-11.svg"
          dimensionsText2="/path2.svg"
          dimensionsText3="/path3.svg"
          dimensionsText4="/ellipse-11.svg"
          dimensionsText5="/vector-21.svg"
          dimensionsText6="/vector-31.svg"
          dimensionsText7="/vector-41.svg"
          dimensionsText8="/vector-51.svg"
          dimensionsText9="/vector-61.svg"
          dimensionsText10="/vector-71.svg"
          dimensionsText11="/vector-81.svg"
          propPosition="relative"
          propFlexShrink="0"
          propTop="unset"
          propLeft="unset"
        />
      </div>
    );
  }

  const goNextQusetion = () => {
    setClicked(false);
    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setAnswerSelected(false);
      setIsAnswerCorrect(false);
      setShowAnswerFeedback(false);
      setShowNextButton(false);
    } else {
      setShowScore(true);
    }
  };

  const handleNextButtonClick = () => {
    setAnswerSelected(false);
    setShowAnswerFeedback(false);
    goNextQusetion();
  };

  const answerImagePath = `${correctAnswer}`;
  const answerText = `${correctAnswerText}`;

  return (
    <div className="relative bg-ghostwhite w-full overflow-hidden flex flex-col py-[4.13rem] px-[0.69rem] box-border items-center justify-start gap-[3.13rem] text-left text-[1.75rem] text-indigo_900 font-catamaran">
      <Header />
      {showScore ? (
        <div className={style.end1}>
            {/* {!showCertificate ? (
              <button className={style.hookbutton1} onClick={handleButtonClick}>
                Click here to print your certificate
              </button>
            ) : (
              <div style={{position: "relative", zIndex: 1}}>
              <CertificatePage />
            
              </div>
            )}  */}
            <p className={style.end1Text}>Good job! you finished this part</p>
            <button className={styles.hookbutton1} onClick={handleClick}>Back</button>
        </div>
      ) : (
        <>
          <div className={style.questionAndAnswer}>
            <div className={style.questionsection}>
              <div className={style.questioncount}>
                <span>Quiz {currentQuestion + 1}</span> of{" "}
                <span>{questions.length}</span>
              </div>
              <div className={style.questiontext}>
                {showAnswerFeedback ? (
                  <>
                    <p>{feedback.text}</p>
                    <img
                      src={feedback.image}
                      alt=""
                      className={style.questionImg}
                    />
                    
                  </>
                ) : (
                  questions[currentQuestion].questionText
                )}
              </div>
              {showNextButton && !showScore && (
                <button
                  className={style.nextQbutton}
                  onClick={handleNextButtonClick}
                >
                  {" "}
                  Next
                </button>
              )}
            </div>

            <div className={style.answersection}>
              {questions[currentQuestion].answerOptions.map((answerOptions) => (
                <button
                  key={answerOptions.image}
                  onClick={() =>
                    handleAnswerButtonClick1(answerOptions.isCorrect)
                  }
                  className={style.answersectionSub}
                >
                  <div className={style.answerImgAndABC}>
                    <p className={style.answerOptionsABC}>
                      {answerOptions.option}
                    </p>
                    <img
                      src={answerOptions.image}
                      alt={`Option ${answerOptions.image}`}
                      className={style.answerImg}
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </>
      )}
      {/* <br></br>
      <br></br>
      <br></br>
      <br></br> */}

      <NavigationContainer
        dimensionsText="/vector-11.svg"
        dimensionsText2="/path2.svg"
        dimensionsText3="/path3.svg"
        dimensionsText4="/ellipse-11.svg"
        dimensionsText5="/vector-21.svg"
        dimensionsText6="/vector-31.svg"
        dimensionsText7="/vector-41.svg"
        dimensionsText8="/vector-51.svg"
        dimensionsText9="/vector-61.svg"
        dimensionsText10="/vector-71.svg"
        dimensionsText11="/vector-81.svg"
        propPosition="relative"
        propFlexShrink="0"
        propTop="unset"
        propLeft="unset"
        //onFAQsTextClick={onFAQsTextClick}
      />
    </div>
  );
}
