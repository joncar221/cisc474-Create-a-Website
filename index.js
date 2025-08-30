const button = document.getElementById("button1");
const counter = document.getElementById("counter");
const counterNum = 0;

function changeCounter() {
  counterNum += 1;
  counter.textContent = counterNum;
}

button.addEventListener("click", changeCounter);
