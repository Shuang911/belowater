import React, { useState } from "react";
import style from "./index.module.css";
import CertificatePage from "./CertificatePage";
import Header from "../../../components/Header";
import NavigationContainer from "../../../components/NavigationContainer";
import img1 from "./images/Button 1.jpg";
import img2 from "./images/Button 2.jpg";
import img3 from "./images/Button 3.jpg";
import img4 from "./images/Button 4.jpg";
import img5 from "./images/Button 5.jpg";
import img6 from "./images/Button 6.jpg";
import img7 from "./images/Rectangle 9.jpg";
import img8 from "./images/Rectangle 10.jpg";
import img9 from "./images/Rectangle 11.jpg";
import img10 from "./images/Group 23.jpg";
import img11 from "./images/Group 21.jpg";
import img12 from "./images/Group 22.jpg";
import img13 from "./images/Group 19.jpg";
import img14 from "./images/Group 20.jpg";

import correctAud from "./sounds/correctSound.wav";
import incorrectAud from "./sounds/incorrectSound.wav";

export default function Quiz1() {
  const questions = [
    {
      questionText:
        "Hi My Name is Mallot! I am a Hammer head shark." +
        " What do you think I look Like ?",
      // hintImg:{image:Tuna},
      answerOptions: [
        {
          id: 0,
          image: img1,
          isCorrect: false,
          option: "A",
          feedback: "Thats not quite right," + "\n" + "Try another answer",
        },
        {
          id: 1,
          image: img2,
          isCorrect: false,
          option: "B",
          feedback: "Thats not quite right,Try another answer",
        },
        {
          id: 2,
          image: img3,
          isCorrect: true,
          option: "C",
          feedback:
            "That's Correct! I'm from a big family of sharks Called Sphyrnidae, our hammer shaped heads help us find food hidden under the sand!",
        },
      ],
      answer: {
        id: 0,
        image: img3,
        text: "I”m from a big family of sharks Called Sphyrnidae, our hammer shaped heads help us find food hidden under the sand!",
      },
    },
    {
      questionText: "Where do i like to swim?",

      answerOptions: [
        {
          id: 0,
          image: img4,
          isCorrect: true,
          option: "A",
          feedback:
            "Thats right, Well done! You're a star!   Hammer head sharks like warmer coastal waters",
        },
        {
          id: 1,
          image: img5,
          isCorrect: false,
          option: "B",
          feedback: "Thats not quite right, have another go!",
        },
        {
          id: 2,
          image: img6,
          isCorrect: false,
          option: "C",
          feedback: "Thats not quite right, have another go!",
        },
      ],
      answer: {
        id: 0,
        image: img4,
        text: " Well done! You're a star!  Hammer head sharks like warmer coastal waters",
      },
    },
    {
      questionText: "Whats My Favorite food?",

      answerOptions: [
        {
          id: 0,
          image: img7,
          isCorrect: false,
          option: "A",
          feedback: "Unfortunately that's not quite right, please try again",
        },
        {
          id: 1,
          image: img8,
          isCorrect: false,
          option: "B",
          feedback: "Unfortunately that's not quite right, please try again",
        },
        {
          id: 2,
          image: img9,
          isCorrect: true,
          option: "C",
          feedback:
            "Thats right, Well done! You're a star! Our Favorite food is Stingrays  YUM!",
        },
      ],
      answer: {
        id: 0,
        image: img9,
        text: "Well done! You're a star! Our Favorite food is Stingrays  YUM!",
      },
    },
    {
      questionText: "How long can I live for?",

      answerOptions: [
        {
          id: 0,
          image: img10,
          isCorrect: true,
          option: "A",
          feedback: "Yeah, I can live for almost 20 years!",
        },
        {
          id: 1,
          image: img11,
          isCorrect: false,
          option: "B",
          feedback: "Unfortunately that's not quite right, please try again",
        },
        {
          id: 2,
          image: img12,
          isCorrect: false,
          option: "C",
          feedback: "Unfortunately that's not quite right, please try again",
        },
      ],
      answer: {
        id: 0,
        image: img10,
        text: "Yeah, I can live for almost 20 years!",
      },
    },
    {
      questionText:
        "Due to our love for shallow waters Hammerhead sharks can get a tan?",

      answerOptions: [
        {
          id: 0,
          image: img14,
          isCorrect: true,
          option: "A",
          feedback:
            "Thats Right! Congcratulations! We can get a tan when hanging out in shallow waters",
        },
        {
          id: 1,
          image: img13,
          isCorrect: false,
          option: "B",
          feedback: "That's not right, try again",
        },
      ],
      answer: {
        id: 0,
        image: img14,
        text: "Thats Right! Congcratulations! We can get a tan when hanging out in shallow waters",
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

  const handleAnswerButtonClick1 = (isCorrect) => {
    // if (!clickedAnswers.includes(currentQuestion)) {
    // 	setClickedAnswers([...clickedAnswers, currentQuestion]);
    // const answer1 = questions[currentQuestion].answerOptions.find(option => option.isCorrect === isCorrect);
    // if (answer1) {
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
      // setFeedback({ text: "Yes, Correct !", feedback:answer1.feedback });
    } else {
      setClicked(true);
      setIsAnswerCorrect(false);
      setAnswerSelected(true);
      incorrectSound.play();
      setShowNextButton(false);

      // console.log(questions[currentQuestion].answerOptions.option);

      const selectedAnswer = questions[currentQuestion].answerOptions.find(
        (option) => option.isCorrect === false
      );
      setFeedback({
        text: selectedAnswer.feedback,
        image: selectedAnswer.feedback.image,
      });

      // setFeedback({ text:"Ahh, Incorrect ! Try again..." , feedback:"answer1.feedback"  });
    }
    setShowAnswerFeedback(true);

    setCorrectAnswer(questions[currentQuestion].answer.image);
    setCorrectAnswerText(questions[currentQuestion].answer.text);

    // if (isCorrect && !clickedAnswers.includes(currentQuestion)) {
    // 	setScore(score + 1);
    // 	setIsAnswerCorrect(true);
    // 	setAnswerSelected(true);
    // 	setClickedAnswers([...clickedAnswers, currentQuestion]);
    // 	correctSound.play();
    //   } else if (!isCorrect) {
    // 	setIsAnswerCorrect(false);
    // 	setAnswerSelected(true);
    // 	incorrectSound.play();
    // 	return;
    //   }
    //   setShowAnswerFeedback(true);
    //   setCorrectAnswer(questions[currentQuestion].answer.image);
    //   setCorrectAnswerText(questions[currentQuestion].answer.text);

    if (score <= 2) {
      setFeedbackmessage(
        "It seems that you are not very familiar with this topic, cheer up!"
      );
    } else {
      setFeedbackmessage(
        "You got more than half of the questions right, you're great!"
      );
    }
    // }
  };

  if (!gameStarted) {
    return (
      <div className="relative bg-ghostwhite w-full overflow-hidden flex flex-col py-[4.13rem] px-[0.69rem] box-border items-center justify-start gap-[3.13rem] text-left text-[1.75rem] text-indigo_900 font-catamaran">
        <Header />

        <div className={style.startPage}>
          {/* <h1 className={style.startPageText1}>Test your knowledge of marine lifes!</h1> */}
          <h2 className={style.startPageText2}> Meet Mallot</h2>
          {/* <button onClick={startGame} className={`${style.startBtn} ${style.rightBottom}`}>Start</button> */}
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
          //onFAQsTextClick={onFAQsTextClick}
        />
      </div>
    );
  }

  const goNextQusetion = () => {
    setClicked(false);
    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      // setCorrectAnswer(questions[nextQuestion].answer.image);
      // setCorrectAnswerText(questions[nextQuestion].answer.text);
      // setCurrentQuestion(nextQuestion);
      setCurrentQuestion(nextQuestion);
      setAnswerSelected(false);
      setIsAnswerCorrect(false);
      setShowAnswerFeedback(false);
      setShowNextButton(false);
    } else {
      setShowScore(true);
    }
    // if (isAnswerCorrect) {
    // 	// move to next question
    // 	if (nextQuestion < questions.length) {
    // 	  setCorrectAnswer(questions[nextQuestion].answer.image);
    // 	  setCorrectAnswerText(questions[nextQuestion].answer.text);
    // 	  setCurrentQuestion(nextQuestion);
    // 	  setAnswerSelected(false);
    // 	  setIsAnswerCorrect(false);
    // 	  setShowAnswerFeedback(false);
    // 	} else {
    // 	  setShowScore(true);
    // 	}
    //   } else {
    // 	setClickedAnswers([...clickedAnswers, currentQuestion]);
    // 	setAnswerSelected(true);
    //   }
  };

  const handleNextButtonClick = () => {
    setAnswerSelected(false);
    setShowAnswerFeedback(false);
    goNextQusetion();
  };

  const answerImagePath = `${correctAnswer}`;
  const answerText = `${correctAnswerText}`;

  // function CertificatePage() {
  // 	return
  // 		<div>123</div>;
  //   }

  return (
    <div className="relative bg-ghostwhite w-full overflow-hidden flex flex-col py-[4.13rem] px-[0.69rem] box-border items-center justify-start gap-[3.13rem] text-left text-[1.75rem] text-indigo_900 font-catamaran">
      <Header />
      {/* <div className={style.app}> */}
      {showScore ? (
        <div>
          {/* <div className={style.scoresection}> You scored {score} out of {questions.length}</div>
					<div className={style.gradefeedbackmessage}> {feedbackmessage}</div> */}

          <img src={img3} alt="" className={style.answerImg} />

          <br></br>
          <div className={style.finishPage}>
            <p>Nice to meet you !</p>
            <p>
              I have to keep swimming , but it was great getting to know you.
            </p>
            <p>Catch you later!</p>
          </div>

          <div>
            {!showCertificate ? (
              <button className={style.hookbutton1} onClick={handleButtonClick}>
                Click here to print your certificate
              </button>
            ) : (
              <div>
              
              <CertificatePage />
              
              </div>
            )}
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </div>

          {/* <button className={style.hookbutton1}>Click here to print your certificate</button>	 */}
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
                    {/* <img src={questions[currentQuestion].answerOptions.image} alt="" /> */}
                  </>
                ) : (
                  questions[currentQuestion].questionText
                )}
              </div>

              {/* <div className={style.questiontext}>{questions[currentQuestion].questionText}</div> */}

              {/* <img src={questions[currentQuestion].hintImg.image} alt="" className={style.questionImg}/>							 */}

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
          {/* <div>
					{showAnswerFeedback 
					// && (
					// 	<div className={isAnswerCorrect ? style.correct1 : style.incorrect1}>
					// 		{isAnswerCorrect ? "Congratulations on your correct answer!" : "Unfortunately, the answer is incorrect."}
					// 		<p className={style.CA}>Correct Answer is:</p> 
					// 	</div>)
					}
				</div> */}
          {/* <div>	
					<img src={answerImagePath} alt={correctAnswer} className={style.answerImg}/>
					<p className={style.questionanswertext}>{answerText}</p>
				</div> */}
        </>
      )}
      {/* </div> */}
      {/* {showNextButton &&  !showScore &&(<button className={style.nextQbutton} onClick={handleNextButtonClick}> Next</button>)} */}

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
