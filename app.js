console.log("APP.js");

const endeCoder = document.querySelector("#en-de-code");
const rgbHex = document.querySelector("#hexrgb");
const timeStamp = document.querySelector("#time-stamp");
const unit = document.querySelector("#unit");
const numberBase = document.querySelector("#number-base");
const textString = document.querySelector("#text-string");

endeCoder.addEventListener("click", () => {
  console.log(window.location.href);
  window.location.href = `./deen-coders/deen-coders.html`;
});

rgbHex.addEventListener("click", () => {
  console.log(window.location.href);
  window.location.href = `./hex-rgb/hex-rgb.html`;
});

timeStamp.addEventListener("click", () => {
  console.log(window.location.href);
  window.location.href = `./timestamp/timestamp.html`;
});

unit.addEventListener("click", () => {
  console.log(window.location.href);
  window.location.href = `./unit/unit.html`;
});

numberBase.addEventListener("click", () => {
  console.log(window.location.href);
  window.location.href = `./numberbase/numberbase.html`;
});

textString.addEventListener("click", () => {
  console.log(window.location.href);
  window.location.href = `./textstring/textstring.html`;
});
