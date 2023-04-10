import React, { useState } from 'react';
import style from "./index.module.css";
import Layout from "../../components/Layout";
import Tuna from './images/tuna.jpg'
import img1 from './images/1.png'
import img2 from './images/2.png'
import img3 from './images/3.png'
import flounder from './images/flounder.jpg'
import img5 from './images/5.png'
import img6 from './images/6.png'
import img7 from './images/7.png'
import dogWhelk from './images/dogWhelk.jpg'
import img8 from './images/8.png'
import img9 from './images/9.png'
import img10 from './images/10.png'
// import correctAud from './sounds/fuzhu.mp3'
// import incorrectAud from './sounds/incorrectSound.wav'

export default function Quiz() {
	const questions = [
		{
			questionText: "I swim fast: up to 70 kilometers (43 miles) per hour. And I migrate vast distances to feed and to lay eggs. I can grow as big as 3 meters (10 feet), but when I was a larva I was the size of a lentil.  Can you find my plankton baby picture?",
			hintImg:{image:Tuna},
			answerOptions: [
				
				{ id : 0, image: img1, isCorrect: false },
				{ id : 1, image: img2, isCorrect: false },
				{ id : 2, image: img3, isCorrect: true },
			],
			answer:{id: 0, image:img3, text:"q1"}
		},
		{
			questionText: 'I lie on my side on the seafloor waiting to ambush prey. Because my left side always faces up, both my eyes are on the left. But when I was a baby, I had eyes on both sides, like other fishes. Can you find my plankton baby picture?',
			hintImg:{image:flounder},
			answerOptions: [
				{ id : 0, image: img5, isCorrect: true },
				{ id : 1, image: img6, isCorrect: false },
				{ id : 2, image: img7, isCorrect: false },
			],
			answer:{id: 0, image:img5, text:"q2"}
		},
		{
			questionText: 'I’m a dog whelk, and I live on rocky shores. My strong, hard, pointed shell protects me from birds and crabs. When I first emerged from my egg capsule, my shell was thin and almost transparent. Can you find my plankton baby picture?',
			hintImg:{image:dogWhelk},
			answerOptions: [
				{ id : 0, image: img8, isCorrect: false },
				{ id : 1, image: img9, isCorrect: true },
				{ id : 2, image: img10, isCorrect: false },
			],
			answer:{id: 0, image:img9, text:"q3"}
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
			} else {
			  setClicked(true);
			//  setSelectedCorrectAnswer(false);
			setIsAnswerCorrect(false);
			setAnswerSelected(true);
			}
			setShowAnswerFeedback(true);
			
		  }
		  setCorrectAnswer(questions[currentQuestion].answer.image);
	}

	if (!gameStarted) {
		return <Layout>
			<h1 className={style.startPage}>These marine adults can look very different from the larvae they once were. Can you find their plankton baby pictures? </h1>
			<button onClick={startGame} className={style.startBtn}>Start</button>;
			
			</Layout>
	  }

	const goNextQusetion = () =>{
		setClicked(false);
		const nextQuestion = currentQuestion +1;

			if(nextQuestion < questions.length){
				setCorrectAnswer(questions[nextQuestion].answer.image);
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

	
	return (
		<Layout>
		
		<div className={style.app}>
			{showScore ? (
				<div>
					<div className={style.completedNotice}>Well done!</div>
					<div className={style.scoresection}> You scored {score} out of {questions.length}</div>
				</div>
			) : (
				<>
					
					<div className={style.questionsection}>
						<div className={style.questioncount}>
							<span>Quiz {currentQuestion+1}</span> of {questions.length}
						</div>
						<img src={questions[currentQuestion].hintImg.image} alt="" className={style.questionImg}/>						
						
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
                Correct Answer is: {correctAnswer}
				
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


