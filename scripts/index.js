// Do not change the import statement
// tHIS STATEMENT IMPORTS THE EXPORTED FILE SO IT'S CONTENTS ARE ACCESSIBLE TO US.
// tHIS MAES THE "placeHolderQuestions" act like a variable essenetially
import placeholderQuestions from "./placeholder-questions.js";
// Is an object who's contents are the files data
console.log({ placeholderQuestions });
console.log(placeholderQuestions[0]);

let guessBtn = document.getElementById("guessBtn")
let passBtn = document.getElementById("passBtn")


guessBtn.disabled = true
passBtn.disabled = true

