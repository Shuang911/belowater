import React, { useState } from 'react';
import style from "./index.css";
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

export default function Quiz() {
	const questions = [
		{
			questionText: "I swim fast: up to 70 kilometers (43 miles) per hour. And I migrate vast distances to feed and to lay eggs. I can grow as big as 3 meters (10 feet), but when I was a larva I was the size of a lentil.Can you find my plankton baby picture?",
			hintImg:{image:Tuna},
			answerOptions: [
				
				{ id : 0, image: img1, isCorrect: false },
				{ id : 1, image: img2, isCorrect: false },
				{ id : 2, image: img3, isCorrect: true },
			],
		},
		{
			questionText: 'I lie on my side on the seafloor waiting to ambush prey. Because my left side always faces up, both my eyes are on the left. But when I was a baby, I had eyes on both sides, like other fishes.Can you find my plankton baby picture?',
			hintImg:{image:flounder},
			answerOptions: [
				{ id : 0, image: img5, isCorrect: true },
				{ id : 1, image: img6, isCorrect: false },
				{ id : 2, image: img7, isCorrect: false },
			],
		},
		{
			questionText: 'I’m a dog whelk, and I live on rocky shores. My strong, hard, pointed shell protects me from birds and crabs. When I first emerged from my egg capsule, my shell was thin and almost transparent. Can you find my plankton baby picture?',
			hintImg:{image:dogWhelk},
			answerOptions: [
				{ id : 0, image: img8, isCorrect: false },
				{ id : 1, image: img9, isCorrect: true },
				{ id : 2, image: img10, isCorrect: false },
			],
		},
	];
	
	
	const [currentQuestion,setCurrentQuestion] =useState(0);
	const [showScore,setShowScore] = useState(false);
	const [score,setScore] = useState(0);

	const handleAnswerButtonClick1 = (isCorrect) =>{
		if (isCorrect) {
			alert('Correct answer!');
			setScore(score+1);
			const nextQuestion = currentQuestion +1;
			if(nextQuestion < questions.length){
				setCurrentQuestion(nextQuestion);
			}else{
				alert("Congratulation! you finished all the question ");
				setShowScore(true);
			}
				
		  }else {
			alert('Incorrect answer!');
			const nextQuestion = currentQuestion +1;
			if(nextQuestion < questions.length){
				setCurrentQuestion(nextQuestion);
			}else{
				alert("you finished all the question!");
				setShowScore(true);
			}
		  }
		
	}
	
	return (
		 <Layout>
		<div className='app'>
			{showScore ? (
				<div className='score-section'>You scored {score} out of {questions.length}</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Quiz{currentQuestion+1}</span>/{questions.length}
						</div>
						<img src={questions[currentQuestion].hintImg.image} alt="" />						
						
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOptions) => (
							<button key={answerOptions.image} onClick={() => handleAnswerButtonClick1(answerOptions.isCorrect)}>
								<img src={answerOptions.image} alt={`Option ${answerOptions.image}`} />
							</button>
						))}
					</div>
				</>
			)}
		</div>
		</Layout>
		
	);
	
}


