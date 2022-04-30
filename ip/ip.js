const ipContainer = document.querySelector("#ip-container");
ipContainer.setAttribute("style", "text-align:center");

const request = new Request("https://api.ipify.org/?format=json", {
  method: "GET",
});

fetch(request)
  .then((res) => res.json())
  .then((json) => {
    // console.log(json)
    const tempElement = document.createElement("h1");
    const textNode = document.createTextNode(json.ip);
    tempElement.appendChild(textNode);
    ipContainer.appendChild(tempElement);
  });

// const promise = new Promise((resolve, reject) => {});

// const onSuccess = (res) => {};

// const onError = (err) => {};

// window.addEventListener("load", () => {});
