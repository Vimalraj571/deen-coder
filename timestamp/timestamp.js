console.log("TimeStamp Converter");

const dateToEpoc = (input) => {
  const tempDateObj = new Date(0);
  tempDateObj.setUTCSeconds(input);
  return {
    year: tempDateObj.getFullYear(),
    month: tempDateObj.getMonth() + 1,
    date: tempDateObj.getDate(),
    hours: tempDateObj.getHours(),
    minutes: tempDateObj.getMinutes(),
    seconds: tempDateObj.getSeconds(),
  };
};
const epocToDate = () => {};

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
  } else if (selectedOption === "dateToEpoc") {
    outputBox.value = dateToEpoc(tempInput);
  } else {
    const tempInArray = [];
    const temp = ["Date", "Month", "Year", "Hour", "Minutes", "Second"];
    for (let i = 0; i < temp.length; i += 1) {
      tempInArray.push(tempIn);
    }
    outputBox.value = epocToDate(tempInput);
  }
});
