console.log("TimeStamp Converter");

const dateToEpoc = (input) => new Date(input).valueOf() / 1000;
const epocToDate = (input) => {
  const date = new Date(0);
  date.setUTCSeconds(input);
  return date;
};

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

submitBtn.addEventListener("click", () => {
  if (selectedOption === "") {
    alert("selct atleast one");
  } else if (tempInput.length === 0) {
    alert("Enter the input");
  } else if (selectedOption === "dateToEpoc") {
    outputBox.value = JSON.stringify(dateToEpoc(tempInput));
  } else {
    outputBox.value = epocToDate(tempInput);
  }
});
