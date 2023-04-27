import React, { useState } from 'react';
import style from "./index.module.css";
import img1 from './images2/img1.png';
import img2 from './images2/img2.png';
import img3 from './images2/img3.png';
import img4 from './images2/img4.png';
import img5 from './images2/img5.png';
import img6 from './images2/img6.png';
import img7 from './images2/img7.png';
import img8 from './images2/img8.png';
import img9 from './images2/img9.png';
import img10 from './images2/img10.png';
import img11 from './images2/img11.png';
import img12 from './images2/img12.png';
import correctAud from './sounds/correctSound.wav'
import incorrectAud from './sounds/incorrectSound.wav'

export default function Quiz1() {
	const questions = [
		{
			questionText: "This tiny, big-eyed animal swims in the deep, cold waters off New Zealand. Its bright orange skin is less striking in its dark, bluish environment. It grows slowly and may live more than 100 years. It used to be called 'slimehead' until it became a popular meal. so, Which marine species is it?		",
			
			answerOptions: [
				
				{ id : 0, image: img1, isCorrect: true },
				{ id : 1, image: img2, isCorrect: false},
				{ id : 2, image: img3, isCorrect: false },
			],
			answer:{id: 0, image:img1, text:"It's me ! An orange roughy!"}
		},
		{
			questionText: "This animal can have a wingspan of over 7 feet. To hunt, it flies to great heights and then dives downward to scoop up fish with its large beak. These animals fly in flocks, in long lines or V's, their long necks curved all the way back over their bodies. so, Which marine species is it?",
			
			answerOptions: [
				
				{ id : 0, image: img4, isCorrect: false},
				{ id : 1, image: img5, isCorrect: false},
				{ id : 2, image: img6, isCorrect: true },
			],
			answer:{id: 0, image:img6, text:"It's me !  A brown pelican!"}
		},
		{
			questionText: "This tiny, big-eyed animal swims in the deep, cold waters off New Zealand. Its bright orange skin is less striking in its dark, bluish environment. It grows slowly and may live more than 100 years. It used to be called 'slimehead' until it became a popular meal. so, Which marine species is it?		",
			
			answerOptions: [
				
				{ id : 0, image: img7, isCorrect: true },
				{ id : 1, image: img8, isCorrect: false},
				{ id : 2, image: img9, isCorrect: false },
			],
			answer:{id: 0, image:img7, text:"It's me ! A triton trumpet!"}
		},
		{
			questionText: "With their red plumes sticking out of their white shells, these creatures look like giant lipstick containers. They thrive near the fissures of hydrothermal vents, chimney-like structures on the deep ocean floor. They have bacteria inside that use chemicals in the water to make sugar and other food and use it as energy. so, Which marine species is it?		",
			
			answerOptions: [
				
				{ id : 0, image: img10, isCorrect: false },
				{ id : 1, image: img11, isCorrect: true},
				{ id : 2, image: img12, isCorrect: false },
			],
			answer:{id: 0, image:img11, text:"It's me ! A giant tubeworm!"}
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
		
		if (score < 2) {
			setFeedbackmessage("It seems that you are not very familiar with this topic, cheer up!");
		} 
		else if (score == 2 || score ==3) {
			setFeedbackmessage("Good job! You can do better next time!");
		} 
		else{
			setFeedbackmessage("You have a 100% correct rate, incredible!");
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
					</div> 
		<div className={style.feedbacksection4Q2}>	
					{showAnswerFeedback && (
            <div className={isAnswerCorrect ? style.correct : style.incorrect}>
                {isAnswerCorrect ? "Congratulations on your correct answer!" : "Unfortunately, the answer is incorrect."}
				<br></br>
				Correct Answer is: 
				<img src={answerImagePath} alt={correctAnswer} className={style.answerImg}/>
				<p className={style.answertext}>{answerText}</p>
            </div>
        )}
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



