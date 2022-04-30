console.log("Translator");

const inputBox = document.querySelector("#input-box");
const outputBox = document.querySelector("#output-box");
// const submitBtn = document.querySelector("#submit-btn");
const selectOptionFrom = document.querySelector("#select-option-from");
const selectOptionTo = document.querySelector("#select-option-to");

const langTranslate = document.querySelector("#lang-translate");

let tempInput = "";
let selectedOptionFromValue = "en-GB";
let selectedOptionToValue = "af-ZA";

inputBox.addEventListener("change", (e) => {
  tempInput = e.target.value;
});

selectOptionFrom.addEventListener("change", (e) => {
  selectedOptionFromValue = e.target.value;
});

selectOptionTo.addEventListener("change", (e) => {
  selectedOptionToValue = e.target.value;
});

const baseUrl = "https://api.mymemory.translated.net/";

const formQueryParamsUrl = (baseurl, from, to, queryInput) => {
  // https://api.mymemory.translated.net/get?q=Hello World!&langpair=en|it
  // https://api.mymemory.translated.net/get?q=test&langpair=gyn|az
  // https://mymemory.translated.net/search.php?q=aaa&lang=en&sl=Autodetect&tl=en-GB
  // make the qs with url before hitting the endpoints
  let url = "";
  url = `${baseurl}get?q=${queryInput.input}&langpair=${from}|${to}`;
  return url;
};

const responseRender = (res) => {
  const tempResStr = JSON.stringify(res);
  if (tempResStr.indexOf("quotaFinished") === -1) {
    alert("Free Quota Finished, Try Some other Time");
  } else if (res.matches.length >= 1) {
    outputBox.value = res.matches[0].translation;
  } else {
    alert("Sorry Unknown Error Occured!");
  }
};

const getReqUrl = (url) => {
  fetch(url)
    .then((res) => res.json())
    .then((json) => responseRender(json));
};

langTranslate.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(langTranslate);
  tempInput = Object.fromEntries(formData);
  const url = formQueryParamsUrl(
    baseUrl,
    selectedOptionFromValue,
    selectedOptionToValue,
    tempInput
  );
  getReqUrl(url);
});
