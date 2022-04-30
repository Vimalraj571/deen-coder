console.log("Number Base Converter");

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

const binToDecimal = (input) => parseInt(input, 2);
const binToHex = (input) => parseInt(input, 2).toString(16);
const binToOctal = (input) => parseInt(input, 2).toString(8);
const decToBinary = (input) => parseInt(input, 10).toString(2);
const decToHex = (input) => parseInt(input, 10).toString(16);
const decToOctal = (input) => parseInt(input, 10).toString(8);
const hexToBin = (input) => parseInt(input, 16).toString(10);
const hexToDecimal = (input) => parseInt(input, 16).toString(2);
const hexToOctal = (input) => parseInt(input, 16).toString(2);
const octToBin = (input) => parseInt(input, 8).toString(2);
const octToDecimal = (input) => parseInt(input, 8).toString(2);
const octToHex = (input) => parseInt(input, 8).toString(16);

submitBtn.addEventListener("click", () => {
  if (selectedOption === "") {
    alert("selct atleast one");
  } else if (tempInput.length === 0) {
    alert("Enter the input");
  } else if (selectedOption === "binToDecimal") {
    outputBox.value = binToDecimal(tempInput);
  } else if (selectedOption === "binToHex") {
    outputBox.value = binToHex(tempInput);
  } else if (selectedOption === "binToOctal") {
    outputBox.value = binToOctal(tempInput);
  } else if (selectedOption === "decToBinary") {
    outputBox.value = decToBinary(tempInput);
  } else if (selectedOption === "decToHex") {
    outputBox.value = decToHex(tempInput);
  } else if (selectedOption === "decToOctal") {
    outputBox.value = decToOctal(tempInput);
  } else if (selectedOption === "hexToBin") {
    outputBox.value = hexToBin(tempInput);
  } else if (selectedOption === "hexToDecimal") {
    outputBox.value = hexToDecimal(tempInput);
  } else if (selectedOption === "hexToOctal") {
    outputBox.value = hexToOctal(tempInput);
  } else if (selectedOption === "octToBin") {
    outputBox.value = octToBin(tempInput);
  } else if (selectedOption === "octToDecimal") {
    outputBox.value = octToDecimal(tempInput);
  } else if (selectedOption === "octToHex") {
    outputBox.value = octToHex(tempInput);
  } else {
    outputBox.value = "";
  }
});
