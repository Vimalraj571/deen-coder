console.log("Hex/RGB");

const toRgb = (inputArr) => {
  const r = parseInt(inputArr[1] + inputArr[2], 16);
  const g = parseInt(inputArr[3] + inputArr[4], 16);
  const b = parseInt(inputArr[5] + inputArr[6], 16);
  return `${r},${g},${b}`;
};

// const util = (color) => {
//   const hexadecimal = color.toString(16);
//   return hexadecimal.length === 1 ? `0${hexadecimal}` : hexadecimal;
// };

// const toHex = (inputArr) =>
//   `#${util(inputArr[0])}${util(inputArr[1])}${util(inputArr[2])}`;

function toHex(r, g, b) {
  console.log(r+''+g+''+b);
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}

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
  console.log(e.target.value);
  selectedOption = e.target.value;
});

submitBtn.addEventListener("click", () => {
  if (selectedOption === "") {
    alert("selct atleast one");
  } else if (selectedOption === "hex") {
    outputBox.value = toHex(tempInput);
  } else {
    // console.log(tempInput[1] + tempInput[2],tempInput[3] + tempInput[4],tempInput[5] + tempInput[6]);
    outputBox.value = toRgb(
      tempInput[1] + tempInput[2],
      tempInput[3] + tempInput[4],
      tempInput[5] + tempInput[6]
    );
  }
});
