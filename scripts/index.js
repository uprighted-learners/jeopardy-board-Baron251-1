// Do not change the import statement
// THIS STATEMENT IMPORTS THE EXPORTED FILE SO IT'S CONTENTS ARE ACCESSIBLE TO US.
// THIS MAKES THE "placeHolderQuestions" act like a variable essenetially
// 'let'       variable      =
import placeholderQuestions from "./placeholder-questions.js";
// Is an object who's contents are the files data

//! When I need a question/answer I can iterate over the array
let question = document.getElementsByClassName("question");

// ! Input Answer
const answerField = document.getElementById("answerField");

const form = document.querySelector("form");

function checkAnswer(currentAnswer) {
	form.addEventListener("submit", (e) => {
		e.preventDefault();
		if (answerField.value === currentAnswer) {
			console.log("Correct!");
		} else {
			console.log("Incorrect.");
		}
	});
}

// ! Round 1 Questions (The logic is the same in Round 2, the only differences being the class name, and what part of the array is sliced)

// Creating a new array from the imported questions to index off of reasonably
const round1NatureQ = placeholderQuestions.slice(0, 5);

const round1Nature = [...document.getElementsByClassName("nature")];
// A forEach loop that adds an eventListener on every tag with the matching class.
round1Nature.forEach((element, index) => {
	element.addEventListener("click", (e) => {
		e.preventDefault();
		// A homemade index that we can match the new array to
		for (let i = 0; i < round1NatureQ.length; i++) {
			if (i === index) {
				// The logic that displays the question when one of the buttons is clicked
				let currentQuestion = round1NatureQ[i].question;
				question[0].innerText = currentQuestion;
			}
		}
	});
});

const round1AnimalQ = placeholderQuestions.slice(10, 16);

const round1Animal = [...document.getElementsByClassName("animal")];
round1Animal.forEach((element, index) => {
	element.addEventListener("click", (e) => {
		e.preventDefault();
		for (let i = 0; i < round1AnimalQ.length; i++) {
			if (i === index) {
				let currentQuestion = round1AnimalQ[i].question;
				question[0].innerText = currentQuestion;
			}
		}
	});
});

const round1ComputerQ = placeholderQuestions.slice(20, 26);

const round1Computer = [...document.getElementsByClassName("computer")];
round1Computer.forEach((element, index) => {
	element.addEventListener("click", (e) => {
		e.preventDefault();
		for (let i = 0; i < round1ComputerQ.length; i++) {
			if (i === index) {
				let currentQuestion = round1ComputerQ[i].question;
				question[0].innerText = currentQuestion;
			}
		}
	});
});

const round1MythologyQ = placeholderQuestions.slice(30, 36);

const round1Mythology = [...document.getElementsByClassName("mythology")];
round1Mythology.forEach((element, index) => {
	element.addEventListener("click", (e) => {
		e.preventDefault();
		for (let i = 0; i < round1MythologyQ.length; i++) {
			if (i === index) {
				let currentQuestion = round1MythologyQ[i].question;
				question[0].innerText = currentQuestion;
			}
		}
	});
});

const round1HistoryQ = placeholderQuestions.slice(40, 46);

const round1History = [...document.getElementsByClassName("history")];
round1History.forEach((element, index) => {
	element.addEventListener("click", (e) => {
		e.preventDefault();
		for (let i = 0; i < round1HistoryQ.length; i++) {
			if (i === index) {
				let currentQuestion = round1HistoryQ[i].question;
				question[0].innerText = currentQuestion;
			}
		}
	});
});

const round1GeneralQ = placeholderQuestions.slice(50, 56);

const round1General = [...document.getElementsByClassName("general")];
round1General.forEach((element, index) => {
	element.addEventListener("click", (e) => {
		e.preventDefault();
		for (let i = 0; i < round1GeneralQ.length; i++) {
			if (i === index) {
				let currentQuestion = round1GeneralQ[i].question;
				question[0].innerText = currentQuestion;
			}
		}
	});
});
// ! Round 2 Questions

const round2NatureQ = placeholderQuestions.slice(5, 10);
//* I had to distinguish the class names, or the questions from round 2 would display in round 1
const round2Nature = [...document.getElementsByClassName("nature2")];
round2Nature.forEach((element, index) => {
	element.addEventListener("click", (e) => {
		e.preventDefault();
		for (let i = 0; i < round2NatureQ.length; i++) {
			if (i === index) {
				let currentQuestion = round2NatureQ[i].question;
				question[0].innerText = currentQuestion;
			}
		}
	});
});

const round2AnimalQ = placeholderQuestions.slice(15, 20);

const round2Animal = [...document.getElementsByClassName("animal2")];
round2Animal.forEach((element, index) => {
	element.addEventListener("click", (e) => {
		e.preventDefault();
		for (let i = 0; i < round2AnimalQ.length; i++) {
			if (i === index) {
				let currentQuestion = round2AnimalQ[i].question;
				question[0].innerText = currentQuestion;
			}
		}
	});
});

const round2ComputerQ = placeholderQuestions.slice(25, 30);

const round2Computer = [...document.getElementsByClassName("computer2")];
round2Computer.forEach((element, index) => {
	element.addEventListener("click", (e) => {
		e.preventDefault();
		for (let i = 0; i < round2ComputerQ.length; i++) {
			if (i === index) {
				let currentQuestion = round2ComputerQ[i].question;
				question[0].innerText = currentQuestion;
			}
		}
	});
});

const round2MythologyQ = placeholderQuestions.slice(35, 40);

const round2Mythology = [...document.getElementsByClassName("mythology2")];
round2Mythology.forEach((element, index) => {
	element.addEventListener("click", (e) => {
		e.preventDefault();
		for (let i = 0; i < round2MythologyQ.length; i++) {
			if (i === index) {
				let currentQuestion = round2MythologyQ[i].question;
				question[0].innerText = currentQuestion;
			}
		}
	});
});

const round2HistoryQ = placeholderQuestions.slice(45, 50);

const round2History = [...document.getElementsByClassName("history2")];
round2History.forEach((element, index) => {
	element.addEventListener("click", (e) => {
		e.preventDefault();
		for (let i = 0; i < round2HistoryQ.length; i++) {
			if (i === index) {
				let currentQuestion = round2HistoryQ[i].question;
				question[0].innerText = currentQuestion;
			}
		}
	});
});

// ! This one is unique, in that the logic checks if the answer is correct with the function made all the way at the top (None of the others have this because it was a WIP and wasn't working as intended, but it's a testament to how far I got.)
const round2GeneralQ = placeholderQuestions.slice(55, 60);

const round2General = [...document.getElementsByClassName("general2")];
round2General.forEach((element, index) => {
	element.addEventListener("click", (e) => {
		// e.preventDefault();
		for (let i = 0; i < round2GeneralQ.length; i++) {
			if (i === index) {
				let currentQuestion = round2GeneralQ[i];
				let currentAnswer = currentQuestion.answer;
				console.log("Current Question:", currentQuestion);
				question[0].innerText = currentQuestion.question;
				checkAnswer(currentAnswer);
			}
		}
	});
});
