console.log("Encode/Decode");

// URL Encode Decode - URL Percent Encoding and Decoding.
// Base64 Decode
// Base64 Encode
// MD5 Hash Generator
// SHA-1 Hash Generator
// SHA-256 Hash Generator
// SHA-512 Hash Generator

const encoder = (input) => encodeURIComponent(input);
const decoder = (input) => decodeURIComponent(input);
const base64Encode = (input) => Buffer.from(input).toString("base64");
const base64Decode = (input) => Buffer.from(input, "base64").toString("ascii");
const md5 = (input) => hashing("md5", input);
const sha1 = (input) => hashing("sha1", input);
const sha256 = (input) => hashing("sha256", input);
const sha512 = (input) => hashing("sha512", input);

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
    alert("Select At least One");
  } else if (selectedOption === "encode") {
    outputBox.value = encoder(tempInput);
  } else {
    outputBox.value = decoder(tempInput);
  }
});
