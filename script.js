let input = document.querySelector("input");
let button = document.querySelector("button");
let ul = document.querySelector("ul");
let h = document.querySelector("h4")
document.querySelector("ul");

button.addEventListener("click", function() {
  let val = input.value;
  if (val) {
    let li = document.createElement("li");
    li.textContent = val;
    ul.append(li);
    input.value = "";
    input.focus();
  }
});

let a = document.createElement("a");
a.href = "https://codepen.io/";
a.textContent = "https://codepen.io/";
h.insertAdjacentText("beforeend"," ");
h.insertAdjacentElement("beforeend",a);