// Do not change the import statement
// THIS STATEMENT IMPORTS THE EXPORTED FILE SO IT'S CONTENTS ARE ACCESSIBLE TO US.
// THIS MAKES THE "placeHolderQuestions" act like a variable essenetially
// 'let'       variable      =  
import placeholderQuestions from "./placeholder-questions.js";
// Is an object who's contents are the files data
console.log({ placeholderQuestions });
// [] when accessing specific array index
console.log(placeholderQuestions[0]);
// When I need a question/answer I can iterate over the array
let guessBtn = document.getElementById("guessBtn")
let passBtn = document.getElementById("passBtn")

let categories = document.getElementsByClassName("categories")
categories.innerText = placeholderQuestions
console.log(categories)
document.body.appendChild(categories)

guessBtn.disabled = true
passBtn.disabled = true

