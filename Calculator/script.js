let display = document.getElementById("display");
function append(input) {
  display.value += input;
  console.log(display);
}

function canc() {
  display.value = "";
  console.log(display);
}

function execute() {
  let primoNumeroStr = "",
    secondoNumeroStr = "",
    trovatoOperatore = false,
    operatore;
  let primoNumeroInt, secondoNumeroInt;

  for (let i = 0; i < display.value.length; i++) {
    if (!isNaN(display.value[i]) && !trovatoOperatore) {
      primoNumeroStr += display.value[i];
    } else if (!trovatoOperatore) {
      operatore = display.value[i];
      trovatoOperatore = true;
    } else {
      secondoNumeroStr += display.value[i];
    }
  }

  primoNumeroInt = parseFloat(primoNumeroStr, 10);
  secondoNumeroInt = parseFloat(secondoNumeroStr, 10);

  switch (operatore) {
    case "+":
      display.value = sum(primoNumeroInt, secondoNumeroInt);
      break;
    case "-":
      display.value = subtraction(primoNumeroInt, secondoNumeroInt);
      break;
    case "*":
      display.value = product(primoNumeroInt, secondoNumeroInt);
      break;
    case "/":
      display.value = division(primoNumeroInt, secondoNumeroInt);
      break;
    default:
      break;
  }
}

// Funzioni per calcolare
function sum(a, b) {
  return a + b;
}
function subtraction(a, b) {
  return a - b;
}
function product(a, b) {
  return a * b;
}
function division(a, b) {
  return a / b;
}
