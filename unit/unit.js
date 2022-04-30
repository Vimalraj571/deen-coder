console.log("Unit Converter");

const inputBox = document.querySelector("#input-box");
const outputBox = document.querySelector("#output-box");
const submitBtn = document.querySelector("#submit-btn");
const selectOption = document.querySelector("#select-option");

let tempInput = "";
let selectedOption = "";

inputBox.addEventListener("change", (e) => {
  tempInput = e.target.value;
});

selectOption.addEventListener("change", (e) => {
  selectedOption = e.target.value;
});

const kgToPounds = (input) => input * 2.2046;
const poundsToKG = (input) => input / 2.2046;
const kmToMiles = (input) => input * 0.621371;
const milesToKM = (input) => input / 0.621371;

submitBtn.addEventListener("click", () => {
  if (selectedOption === "") {
    alert("selct atleast one");
  } else if (tempInput.length === 0) {
    alert("Enter the input");
  } else if (selectedOption === "kgToPounds") {
    outputBox.value = kgToPounds(tempInput);
  } else if (selectedOption === "poundsToKG") {
    outputBox.value = poundsToKG(tempInput);
  } else if (selectedOption === "kmToMiles") {
    outputBox.value = kmToMiles(tempInput);
  } else {
    outputBox.value = milesToKM(tempInput);
  }
});
