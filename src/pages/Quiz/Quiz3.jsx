import React, { useState } from 'react';
import style from "./index.module.css";
import Layout from "../../components/Layout";
import img1 from './images2/img1.png';
import img2 from './images2/img2.png';
import img3 from './images2/img3.png';
import correctAud from './sounds/correctSound.wav'
import incorrectAud from './sounds/incorrectSound.wav'

export default function Quiz1() {
	const questions = [
		{
			questionText: "This tiny, big-eyed animal swims in the deep, cold waters off New Zealand. Its bright orange skin is less striking in its dark, bluish environment. It grows slowly and may live more than 100 years. It used to be called 'slimehead' until it became a popular meal. So who I am ?		",
			// hintImg:{image:Tuna},
			answerOptions: [
				
				{ id : 0, image: img1, isCorrect: true },
				{ id : 1, image: img2, isCorrect: false},
				{ id : 2, image: img3, isCorrect: false },
			],
			answer:{id: 0, image:img1, text:"It's me ! An orange roughy!"}
		},
		
	];
	
	const [gameStarted, setGameStarted] = useState(false);
	const [currentQuestion,setCurrentQuestion] =useState(0);
	const [showScore,setShowScore] = useState(false);
	const [score,setScore] = useState(0);
	// const [answerStatus, setAnswerStatus] = useState(null);
	const [clicked, setClicked]  =useState(false);
	const [clickedAnswers, setClickedAnswers] = useState([]);
	// const [selectedCorrectAnswer, setSelectedCorrectAnswer] = useState(false);

	const [correctAnswer, setCorrectAnswer] = useState('');
	const [showAnswerFeedback, setShowAnswerFeedback] = useState(false);
	const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
	const [answerSelected, setAnswerSelected] = useState(false);

	
	const correctSound = new Audio(correctAud);
	const incorrectSound = new Audio(incorrectAud);

	const [correctAnswerText,setCorrectAnswerText] = useState('');
	const [feedbackmessage, setFeedbackmessage] = useState('');
	// const handleAnswerButtonClick1 = (isCorrect) =>{
	// 	if (isCorrect) {
			
	// 		setAnswerStatus(true);
	// 		setScore(score+1);
	// 		setClicked(true)
	// 		const nextQuestion = currentQuestion +1;
	// 		if(nextQuestion < questions.length){
	// 			setCurrentQuestion(nextQuestion);
	// 		}else{
			
	// 			setShowScore(true);
	// 		}
				
	// 	  }else {
			
	// 		setAnswerStatus(false);
	// 		const nextQuestion = currentQuestion +1;
	// 		if(nextQuestion < questions.length){
	// 			setCurrentQuestion(nextQuestion);
	// 		}else{
				
	// 			setShowScore(true);
	// 		}
	// 	  }
		
	// }
	// const optionStyle = {
	// 	backgroundColor: "transparent",
	// 	border: "2px solid transparent",
	//   };
	//   const correctOptionStyle = {
	// 	backgroundColor: "green",
	// 	border: "2px solid green",
	//   };
	//   const incorrectOptionStyle = {
	// 	backgroundColor: "red",
	// 	border: "2px solid red",
	//   };
	const startGame = () => {
		setGameStarted(true);
	  };
	
	const  handleAnswerButtonClick1 = (isCorrect) =>{
		if (!clickedAnswers.includes(currentQuestion)) {
			setClickedAnswers([...clickedAnswers, currentQuestion]);
		
			if (isCorrect && !clickedAnswers.includes(currentQuestion)) {
			  setScore(score + 1);
			//    setSelectedCorrectAnswer(true);
			setIsAnswerCorrect(true);
			setAnswerSelected(true);
			correctSound.play();
			} else {
			  setClicked(true);
			//  setSelectedCorrectAnswer(false);
			setIsAnswerCorrect(false);
			setAnswerSelected(true);
			incorrectSound.play();
			}
			setShowAnswerFeedback(true);
			
		  }
		  setCorrectAnswer(questions[currentQuestion].answer.image);
		  setCorrectAnswerText(questions[currentQuestion].answer.text);
		if (score <= 2) {
			setFeedbackmessage("It seems that you are not very familiar with this topic, cheer up!");
		  } 
		else {
			setFeedbackmessage("You got more than half of the questions right, you're great!");
		  } 
	}

	if (!gameStarted) {
		return <Layout>
			<h1 className={style.startPage2}>From the sunny shallow waters to the unseen deep waters, the ocean is home to many species of creatures. Can you find the right answer from the clues?</h1>
			<button onClick={startGame} className={style.startBtn}>Start</button>;
			
			</Layout>
	  }

	const goNextQusetion = () =>{
		setClicked(false);
		const nextQuestion = currentQuestion +1;

			if(nextQuestion < questions.length){
				setCorrectAnswer(questions[nextQuestion].answer.image);
				setCorrectAnswerText(questions[nextQuestion].answer.text);
				setCurrentQuestion(nextQuestion);

				
    			

			}else{
				
				setShowScore(true);
			}

	}

	const handleNextButtonClick = () => {
		setAnswerSelected(false);
		setShowAnswerFeedback(false);
		goNextQusetion();
		
	};

	const answerImagePath = `${correctAnswer}`;
	const answerText = `${correctAnswerText}`;

	return (
		<Layout>
		
		<div className={style.app}>
			{showScore ? (
				<div>
					<div className={style.completedNotice}>Well done!</div>
					<div className={style.scoresection}> You scored {score} out of {questions.length}</div>
					<div className={style.feedbackmessage}> {feedbackmessage}</div>
				</div>
			) : (
				<>
					
					<div className={style.questionsection}>
						<div className={style.questioncount}>
							<span>Quiz {currentQuestion+1}</span> of {questions.length}
						</div>
						{/* <img src={questions[currentQuestion].hintImg.image} alt="" className={style.questionImg}/>						 */}
						
						<div className={style.questiontext}>{questions[currentQuestion].questionText}</div>

						

					</div>
					<div className={style.answersection}>
						 {questions[currentQuestion].answerOptions.map((answerOptions) => (							
							<button 
								key={answerOptions.image} 
								
								onClick={() => handleAnswerButtonClick1(answerOptions.isCorrect)}
 							>
								<img src={answerOptions.image} alt={`Option ${answerOptions.image}`} />
								
							
							</button>
							
						))} 
						
						{/* {questions[currentQuestion].answerOptions.map((answerOption) => {
								const isCorrect = answerOption.isCorrect;
								const image = answerOption.image;
								const style = clicked ? (isCorrect ? correctOptionStyle : incorrectOptionStyle) : optionStyle;
								return (
									<button 
									key={image}
									style={style}
									onClick={() => handleAnswerButtonClick1(isCorrect)}
									>
									<img src={image} alt={`Option ${image}`} />
									</button>
								);
								})} */}

						
					</div> 
					
					{showAnswerFeedback && (
            <div className={isAnswerCorrect ? style.correct : style.incorrect}>
                {isAnswerCorrect ? "Congratulations on your correct answer!" : "Unfortunately, the answer is incorrect."}
				<br></br>
				<br></br>
				
                {/* Correct Answer is: {correctAnswer} */}
				Correct Answer is: 
				<img src={answerImagePath} alt={correctAnswer} className={style.answerImg}/>
				<p>{answerText}</p>
            </div>
        )}
					{/* <div>
						<button className={style.nextQbutton} onClick={handleNextButtonClick}> Next</button>
					</div> */}
					{answerSelected && (
  <button className={style.nextQbutton} onClick={handleNextButtonClick}> Next</button>
)}


					{/* {answerStatus !== null && (
						<div className={style.answerstatus}>
						{answerStatus ? (
							<div className={style.correct}>
							<span>your choose for last quiz is Correct!</span>
							</div>
						) : (
							<div className={style.incorrect}>
							<span>your choose for last quiz is Incorrect!</span>
							</div>
						)}
		</div>
					)} */}
				</>
			)}
		</div>
		</Layout>
		
	);
	
}



