console.log("APP.js");

const endeCoder = document.querySelector("#en-de-code");

endeCoder.addEventListener("click", () => {
  console.log("THIS IS CLICK");
  console.log(window.location.href);
  const urlComponents = new URL(window.location.href);
  window.location.href = `./deen-coders/deen-coders.html`;
});
