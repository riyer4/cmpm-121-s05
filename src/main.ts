// CMPM 121 Smelly Code Activity

// == COUNTER VARIABLE == //
let c = 0;

// == CONSTANTS == //
const incrementID = "increment",
  counterID = "counter",
  headerText = "CMPM 121 Project";

// == RENDER UI == //
function renderUI() {
  document.body.innerHTML = `
    <h1>${headerText}</h1>
    <p>Counter: <span id="${counterID}">0</span></p>
    <button id="${incrementID}">Click Me!</button>
    <button id="decrement">Decrement</button>
    <button id="reset">Reset</button>
  `;
}

// == GET ELEMENTS == //
function getElements() {
  const incrementButton = document.getElementById(incrementID);
  const decrementButton = document.getElementById("decrement");
  const resetButton = document.getElementById("reset");
  const counter = document.getElementById(counterID);

  if (!incrementButton || !decrementButton || !resetButton || !counter) {
    return null;
  }

  return { incrementButton, decrementButton, resetButton, counter };
}

// == EVENT HELPERS == //
function updateDisplay(counter: HTMLElement) {
  counter.innerHTML = `${c}`;
  document.title = "Clicked " + c;
  document.body.style.backgroundColor = c % 2 ? "pink" : "lightblue";
}

function attachEventListeners(elements: {
  incrementButton: HTMLElement;
  decrementButton: HTMLElement;
  resetButton: HTMLElement;
  counter: HTMLElement;
}) {
  const { incrementButton, decrementButton, resetButton, counter } = elements;

  incrementButton.addEventListener("click", () => {
    c++;
    updateDisplay(counter);
  });

  decrementButton.addEventListener("click", () => {
    c--;
    updateDisplay(counter);
  });

  resetButton.addEventListener("click", () => {
    c = 0;
    updateDisplay(counter);
  });
}

// == SETUP == //
function setup() {
  renderUI();
  const elements = getElements();
  if (!elements) return;
  attachEventListeners(elements);
}

// == START == //
function start() {
  setup();
}

start();
