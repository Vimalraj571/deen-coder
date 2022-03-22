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
const base64Encode = (input) => {
  const wordArray = CryptoJS.enc.Utf8.parse(input);
  const base64 = CryptoJS.enc.Base64.stringify(wordArray);
  return base64;
};
const base64Decode = (input) => {
  const parsedWordArray = CryptoJS.enc.Base64.parse(input);
  const parsedStr = parsedWordArray.toString(CryptoJS.enc.Utf8);
  return parsedStr;
};
// const base64Encode = (input) => Buffer.from(input).toString("base64");
// const base64Decode = (input) => Buffer.from(input, "base64").toString("ascii");
const md5 = (input) => CryptoJS.MD5(input);
const sha1 = (input) => CryptoJS.SHA1(input);
const sha256 = (input) => CryptoJS.SHA256(input);
const sha512 = (input) => CryptoJS.SHA512(input);

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
  } else if (selectedOption === "encodeuri") {
    outputBox.value = encoder(tempInput);
  } else if (selectedOption === "decodeuri") {
    outputBox.value = decoder(tempInput);
  } else if (selectedOption === "encodebase64") {
    outputBox.value = base64Encode(tempInput);
  } else if (selectedOption === "decodebase64") {
    outputBox.value = base64Decode(tempInput);
  } else if (selectedOption === "hashmd5") {
    outputBox.value = md5(tempInput);
  } else if (selectedOption === "sha1") {
    outputBox.value = sha1(tempInput);
  } else if (selectedOption === "sha256") {
    outputBox.value = sha256(tempInput);
  } else if (selectedOption === "sha512") {
    outputBox.value = sha512(tempInput);
  }
});
