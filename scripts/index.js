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

// ! Round 1 Questions

let round1Nature = document.getElementsByClassName("nature");
// console.log("Round 1 Nature ", round1Nature);
// // console.log("LOOK AT ME ", typeof round1Nature)
// const round1NatureQ = placeholderQuestions.slice(0, 5);
// // console.log("Round 1 Nature Q", round1NatureQ);

// for (let i = 0; i < round1Nature.length; i++) {
// 	round1NatureQ.forEach((element, index) => {
// 		if (i === index) {
// 			round1Nature[i].innerText = element.question;
// 		}
// 	});
// }

let round1Animal = document.getElementsByClassName("animal");
console.log("Round 1 Animal ", round1Animal);
// console.log("LOOK AT ME ", typeof round1Animal)
const round1AnimalQ = placeholderQuestions.slice(10, 16);
// console.log("Round 1 Animal Q", round1AnimalQ);

for (let i = 0; i < round1Animal.length; i++) {
	round1AnimalQ.forEach((element, index) => {
		if (i === index) {
			round1Animal[i].innerText = element.question;
		}
	});
}

let round1Computer = document.getElementsByClassName("computer");
console.log("Round 1 Computer ", round1Computer);
// console.log("LOOK AT ME ", typeof round1Computer)
const round1ComputerQ = placeholderQuestions.slice(20, 26);
// console.log("Round 1 Computer Q", round1ComputerQ);

for (let i = 0; i < round1Computer.length; i++) {
	round1ComputerQ.forEach((element, index) => {
		if (i === index) {
			round1Computer[i].innerText = element.question;
		}
	});
}

let round1Mythology = document.getElementsByClassName("mythology");
console.log("Round 1 Mythology ", round1Mythology);
// console.log("LOOK AT ME ", typeof round1Mythology)
const round1MythologyQ = placeholderQuestions.slice(30, 36);
// console.log("Round 1 Mythology Q", round1MythologyQ);

for (let i = 0; i < round1Mythology.length; i++) {
	round1MythologyQ.forEach((element, index) => {
		if (i === index) {
			round1Mythology[i].innerText = element.question;
		}
	});
}

// ! Round 2 Questions

// ! Append Child Lines
// document.body.appendChild(round1Nature);

// ! Buttons

let guessBtn = document.getElementById("guessBtn");
let passBtn = document.getElementById("passBtn");
let btn = document.getElementById("displayQ");

btn.addEventListener('click', (e) => {
    e.preventDefault()
	console.log("Round 1 Nature ", round1Nature);
// console.log("LOOK AT ME ", typeof round1Nature)
const round1NatureQ = placeholderQuestions.slice(0, 5);
// console.log("Round 1 Nature Q", round1NatureQ);

for (let i = 0; i < round1Nature.length; i++) {
	round1NatureQ.forEach((element, index) => {
		if (i === index) {
			round1Nature[i].innerText = element.question;
		}
	});
}

    console.log("Hi I got clicked")
});

// guessBtn.disabled = true;
// passBtn.disabled = true;
