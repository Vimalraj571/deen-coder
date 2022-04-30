console.log("Text/String Utility");

const inputBox = document.querySelector("#input-box");
const outputBox = document.querySelector("#output-box");
// const submitBtn = document.querySelector("#submit-btn");
const selectOption = document.querySelector("#select-option");

let tempInput = "";
let selectedOption = "";

const numberOfWords = (input) => {
  let temp = [];
  temp = input.split(" ");
  return temp.length;
};
const numberOfLetters = (input) => input.length;
const upperCase = (input) => input.toUpperCase();
const lowerCase = (input) => input.toLowerCase();
const reverse = (input) => input.split("").reverse().join("");

inputBox.addEventListener("keyup", (e) => {
  tempInput = e.target.value;
  console.log("THIS");
  if (selectedOption === "") {
    alert("selct atleast one");
  } else if (tempInput.length === 0) {
    alert("Enter the input");
  } else if (selectedOption === "numberOfWords") {
    outputBox.value = numberOfWords(tempInput);
  } else if (selectedOption === "numberOfLetters") {
    outputBox.value = numberOfLetters(tempInput);
  } else if (selectedOption === "upperCase") {
    outputBox.value = upperCase(tempInput);
  } else if (selectedOption === "lowerCase") {
    outputBox.value = lowerCase(tempInput);
  } else if (selectedOption === "reverse") {
    outputBox.value = reverse(tempInput);
  }
});

selectOption.addEventListener("change", (e) => {
  selectedOption = e.target.value;
});

// {
//   /* <option value="numberOfWords">Number of Words</option>
// <option value="numberOfLetters">Number of Letters</option>
// <option value="upperCase">Upper Case</option>
// <option value="lowerCase">Lower Case</option>
// <option value="reverse">Reverse</option> */
// }

// submitBtn.addEventListener("click", () => {
//   if (selectedOption === "") {
//     alert("selct atleast one");
//   } else if (tempInput.length === 0) {
//     alert("Enter the input");
//   } else if (selectedOption === "numberOfWords") {
//     outputBox.value = numberOfWords(tempInput);
//   } else if (selectedOption === "numberOfLetters") {
//     outputBox.value = numberOfLetters(tempInput);
//   } else if (selectedOption === "upperCase") {
//     outputBox.value = upperCase(tempInput);
//   } else if (selectedOption === "lowerCase") {
//     outputBox.value = lowerCase(tempInput);
//   } else if (selectedOption === "reverse") {
//     outputBox.value = reverse(tempInput);
//   } else {
//     outputBox.value = "";
//   }
// });
