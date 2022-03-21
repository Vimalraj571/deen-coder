console.log("TEST");
// Also included in index.html
const selectedValue = document.querySelector("#select_fn");

selectedValue.addEventListener("change", (e) => {
  console.log(e.target.value);
});

// {
//   /* <div class="custom_in_out_text">
// <textarea id="input_box" class="custom_input"></textarea>
// <input type="submit" id="submit_btn"/>
// <textarea id="output_box" class="custom_input"></textarea>
// </div> */
// }

const newElement = document.createElement("div");
newElement.setAttribute("class", "custom_in_out_text");
const textareaInputElement = document.createElement("textarea");
const textareaOutputElement = document.createElement("textarea");
const submitBtnElement = document.createElement("input");

textareaInputElement.setAttribute("id", "input_box");
textareaInputElement.setAttribute("class", "custom_input custom_margin_right");
textareaOutputElement.setAttribute("id", "output_box");
textareaOutputElement.setAttribute("class", "custom_input");
submitBtnElement.setAttribute("id", "submit_btn");
submitBtnElement.setAttribute("class", "custom_margin_right");
submitBtnElement.setAttribute("type", "button");
submitBtnElement.setAttribute("value", "Submit");

newElement.appendChild(textareaInputElement);
newElement.appendChild(submitBtnElement);
newElement.appendChild(textareaOutputElement);

const inputBox = document.querySelector("#input_box");
const ouputBox = document.querySelector("#output_box");
const submitBtn = document.querySelector("#submit_btn");

console.log(newElement);

const bodyElement = document.querySelector("body");
bodyElement.appendChild(newElement);

console.log(submitBtn);

// async(
//   await console.log(submitBtn);
// );

setTimeout(() => {
  submitBtn.addEventListener("click", () => {
    console.log("CLICK");
  });
}, 1000);
