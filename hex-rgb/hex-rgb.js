console.log("Hex/RGB");

const toHex = (red, green, blue) => {
  const rgb = (red << 16) | (green << 8) | (blue << 0);
  return `#${(0x1000000 + rgb).toString(16).slice(1)}`;
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

const toRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `(${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(
        result[3],
        16
      )})`
    : null;
};

submitBtn.addEventListener("click", () => {
  if (selectedOption === "") {
    alert("selct atleast one");
  } else if (selectedOption === "hex") {
    if (tempInput.indexOf("(") !== -1 || tempInput.indexOf(")") !== -1) {
      tempInput = tempInput.slice(1, tempInput.length - 1);
    }
    const arr = tempInput.split(",");
    outputBox.value = toHex(arr[0], arr[1], arr[2]);
  } else {
    outputBox.value = toRgb(tempInput);
  }
});
