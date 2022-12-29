let score = 20;
let highscore = 0;
let min = 1;
let max = 20;
let randomNumber = generateNumber();

window.onload = () => {
  const minEl = document.getElementById('min-value');
  const maxEl = document.getElementById('max-value');
  minEl.textContent = min;
  maxEl.textContent = max;
}

function generateNumber() {
  const x = Math.random() * max + 1;
  return parseInt(x);
}

function handleCheckClicked() {
  const inputEl = document.getElementById('empty-input');
  const value = +inputEl.value;
  console.dir(inputEl);
  if (isNaN(value)) {
    return;
  }

  if (score < 1) {
    const bodyElement = document.body;
    bodyElement.style.backgroundColor = "red";
    return;
  }

  const startEl = document.querySelector('.start-start');
  if (value > randomNumber) {
    startEl.textContent = 'The number is larger';
    decreaseScore();
  } else if (value < randomNumber) {
    startEl.textContent = 'The number is smaller';
    decreaseScore();
  } else {
    startEl.innerHTML = '&#127942; You\'re win...';
    const bodyElement = document.body;
    bodyElement.style.backgroundColor = "green";
    const boxEl = document.querySelector('body span#result-box');
    boxEl.textContent = value;
    handleHighScore();
  }
}

function decreaseScore() {
  score = score - 1;
  const scoreEl = document.getElementById('score');
  scoreEl.textContent = score;
}

function handleHighScore() {
  const currentScore = 20 - score + 1;
  if (highscore === 0) {
    highscore = currentScore;
  } else {
    if (currentScore < highscore) {
      highscore = currentScore;
    }
  }
  const highscoreEl = document.getElementById('highscore');
  highscoreEl.textContent = highscore;
}

function handleReset() {
  const bodyElement = document.body;
  bodyElement.style.backgroundColor = "black";
  const boxEl = document.querySelector('body span#result-box');
  boxEl.textContent = '?';
  const inputEl = document.getElementById('empty-input');
  inputEl.value = '';
  randomNumber = generateNumber();
  score = 20;
  const scoreEl = document.getElementById('score');
  scoreEl.textContent = score;
}

function handleInput(e) {
  e.preventDefault();
  const inputEl = document.getElementById('empty-input');
  const value = +e.target.value;
  if (isNaN(value)) {
    inputEl.value = '';
    return;
  }

  if (value > max || value < min) {
    inputEl.value = value > max ? value.toString()[0] : '';
  } else {
    inputEl.value = value;
  }
}

function handleQuestionClick() {
  min = +prompt('Enter new min number: ', '1');
  const userMax = +prompt('Enter new max number: ', '20');
  if (userMax > min ) {
    max = userMax;
  }
  const minEl = document.getElementById('min-value');
  const maxEl = document.getElementById('max-value');
  minEl.textContent = min;
  maxEl.textContent = max;
}





























