// Do not change the import statement
// THIS STATEMENT IMPORTS THE EXPORTED FILE SO IT'S CONTENTS ARE ACCESSIBLE TO US.
// THIS MAKES THE "placeHolderQuestions" act like a variable essenetially
// 'let'       variable      =
import placeholderQuestions from "./placeholder-questions.js";
// Is an object who's contents are the files data
console.log({ placeholderQuestions });
// [] when accessing specific array index
console.log(placeholderQuestions[0]);
//! When I need a question/answer I can iterate over the array
let question = document.getElementsByClassName("question");

// ! Round 1 Questions

const round1NatureQ = placeholderQuestions.slice(0, 5);

const round1Nature = [...document.getElementsByClassName("nature")];
round1Nature.forEach((element, index) => {
	element.addEventListener("click", (e) => {
		e.preventDefault();
		for (let i = 0; i < round1NatureQ.length; i++) {
			if (i === index) {
				let currentQuestion = round1NatureQ[i].question;
				question[0].innerText = currentQuestion;
			}
		}
		// console.log("Questions: ", round1NatureQ[0].question);
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
		// console.log("Questions: ", round1AnimalQ[0].question);
	});
});
// ! Round 2 Questions
