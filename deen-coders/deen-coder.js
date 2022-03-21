console.log("Encode/Decode URI");

const encoder = (input) => encodeURIComponent(input);
const decoder = (input) => decodeURIComponent(input);

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
  } else if (selectedOption === "encode") {
    outputBox.value = encoder(tempInput);
  } else {
    outputBox.value = decoder(tempInput);
  }
});
