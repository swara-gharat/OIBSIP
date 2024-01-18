document.addEventListener('DOMContentLoaded', function() {
const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "clear") {
      display.innerText = "";
    } else if (item.id == "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (display.innerText != "" && item.id == "equal") {
      display.innerText = eval(display.innerText);
    } else if (display.innerText == "" && item.id == "equal") {
      display.innerText = "Empty!";
      setTimeout(() => (display.innerText = ""), 2000);
    } else if (item.id == "."){
        handleDecimalPoint();
    } else if (item.id == "sqrt") {
        handleSquareRoot();
    } else if (item.id == "%") {
        handleModulo();
    } else {
      display.innerText += item.id;
    }
  };
});

function handleDecimalPoint() {
    if(!display.innerText.includes('.')) {
        display.innerText += '.';
    }
}

function handleSquareRoot(){
    if (display.innerText != "") {
        const result = Math.sqrt(parseFloat(display.innerText));
        display.innerText = result.toFixed(2);
    }
}

function handleModulo(){
    if (display.innerText != "") {
        display.innerText = eval(display.innerText) / 100;
    }
}

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true;
themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
};
});