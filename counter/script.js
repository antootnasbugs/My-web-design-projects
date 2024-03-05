const increase = document.getElementById("Increase");
const decrease = document.getElementById("Decrease");
const reset = document.getElementById("Reset");
const counter = document.getElementById("Counter");
let count = 0;

increase.onclick = function () {
  count++;
  counter.textContent = count;
};

decrease.onclick = function () {
  count--;
  counter.textContent = count;
};

reset.onclick = function () {
  count = 0;
  counter.textContent = count;
};

console.log(window.innerWidth);
console.log(window.innerWidth);
//! N.B.: for label i got to use ".textContent" attribute while for input boxes i can use ".value"
