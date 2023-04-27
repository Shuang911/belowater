import React, { useState } from 'react';
import style from "./index.module.css";
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
import crab from './images/crab.png'
import img11 from './images/img11.png'
import img12 from './images/img12.png'
import img13 from './images/img13.png'
import correctAud from './sounds/correctSound.wav'
import incorrectAud from './sounds/incorrectSound.wav'

export default function Quiz1() {
	const questions = [
		{
			questionText: "Adult bluefin tuna",
			hintImg:{image:Tuna},
			answerOptions: [
				
				{ id : 0, image: img1, isCorrect: false },
				{ id : 1, image: img2, isCorrect: false },
				{ id : 2, image: img3, isCorrect: true },
			],
			answer:{id: 0, image:img3, text:"Do you know... As a little fish, I hung out in schools with youngsters my own size."}
		},
		{
			questionText:"Flounder is a type of marine fish that has a flat body and is able to hide well on the ocean floor. They can sometimes change color to protect themselves",
			hintImg:{image:flounder},
			answerOptions: [
				{ id : 0, image: img5, isCorrect: true },
				{ id : 1, image: img6, isCorrect: false },
				{ id : 2, image: img7, isCorrect: false },
			],
			answer:{id: 0, image:img5, text:"when I was a baby, I had eyes on both sides, but when I grow up, I become flattened with both eyes on the same side of the head"}
		},
		{
			questionText: 'I’m a dog whelk, and I live on rocky shores. My strong, hard, pointed shell protects me from birds and crabs. When I first emerged from my egg capsule, my shell was thin and almost transparent. So, can you find my plankton baby picture?',
			hintImg:{image:dogWhelk},
			answerOptions: [
				{ id : 0, image: img8, isCorrect: false },
				{ id : 1, image: img9, isCorrect: true },
				{ id : 2, image: img10, isCorrect: false },
			],
			answer:{id: 0, image:img9, text:"Do you know... As a new hatchling, I was so good at crawling that scientists called me a “crawl-away."}
		},
		{
			questionText: "I'm a crab but my long legs make me look like a spider—that’s why I’m called a spider crab. I live in vents and holes deep on the ocean floor. My hard shell helps me scrape up algae and pry open mollusks to eat. But when I was a baby I had no shell. I was transparent! So, can you find my plankton baby picture?",
			hintImg:{image:crab},
			answerOptions: [
				{ id : 0, image: img11, isCorrect: false },
				{ id : 1, image: img12, isCorrect: true },
				{ id : 2, image: img13, isCorrect: false },
			],
			answer:{id: 0, image:img12, text:"Do you know... Until I hatched, my mother carried me and other fertilized eggs on her abdomen."}
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
			<div className={style.startPage}>
			<h1 className={style.startPageText1}>Test your knowledge of marine lifes!</h1>
			<h2 className={style.startPageText2}> Find my baby picture</h2>
			<button onClick={startGame} className={`${style.startBtn} ${style.rightBottom}`}>Start</button>
			</div>			
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
						<img src={questions[currentQuestion].hintImg.image} alt="" className={style.questionImg}/>						
						
						<div className={style.questiontext}>{questions[currentQuestion].questionText}</div>
					</div>
					<div className={style.answersection}>
						{questions[currentQuestion].answerOptions.map((answerOptions) => (							
							<button key={answerOptions.image} onClick={() => handleAnswerButtonClick1(answerOptions.isCorrect)}>
								<img src={answerOptions.image} alt={`Option ${answerOptions.image}`} />
							</button>	
						))
						} 	
					</div> 			
				
				<div className={style.feedbacksection}>
					{showAnswerFeedback && (
						<div className={isAnswerCorrect ? style.correct : style.incorrect}>
							{isAnswerCorrect ? "Congratulations on your correct answer!" : "Unfortunately, the answer is incorrect."}
							<br></br>
							Correct Answer is: 
							<img src={answerImagePath} alt={correctAnswer} className={style.answerImg}/>
							<p className={style.answertext}>{answerText}</p>
						</div>)
					}
				</div>
									{answerSelected && (
				<button className={style.nextQbutton} onClick={handleNextButtonClick}> Next</button>
				)}
				</>
			)}
		</div>
		</Layout>
		
	);
	
}



