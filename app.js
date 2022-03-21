console.log("APP.js");

const endeCoder = document.querySelector("#en-de-code");
const rgbHex = document.querySelector("#hexrgb");

endeCoder.addEventListener("click", () => {
  console.log("THIS IS CLICK");
  console.log(window.location.href);
  window.location.href = `./deen-coders/deen-coders.html`;
});

rgbHex.addEventListener("click", () => {
  console.log("THIS IS CLICK");
  console.log(window.location.href);
  window.location.href = `./hex-rgb/hex-rgb.html`;
});
