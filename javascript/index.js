const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  printMinutes();
  printSeconds();
  printMilliseconds();
}

function printMinutes() {
  let minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDecElement.innerHTML = minutes.split('')[0];
  minUniElement.innerHTML = minutes.split('')[1];
}

function printSeconds() {
  let seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secDecElement.innerHTML = seconds.split('')[0];
  secUniElement.innerHTML = seconds.split('')[1];
}

// ==> BONUS
function printMilliseconds() {
  let miliSeconds = chronometer.computeTwoDigitNumber(chronometer.getMiliseconds());
  milDecElement.innerHTML = miliSeconds.split('')[0];
  milUniElement.innerHTML = miliSeconds.split('')[1];
}

function printSplit(split) {
  const liSplit = document.createElement('li');
  liSplit.innerHTML = split;
  splitsElement.appendChild(liSplit)
}

function clearSplits() {
  splitsElement.innerHTML = ""
}

function setStopBtn() {
  chronometer.stop();
}

function setSplitBtn() {
  let split = chronometer.split();

  printSplit(split);
}

function setStartBtn() {
  chronometer.start(printTime);
}

function setResetBtn() {
  chronometer.reset()
  printTime();
  clearSplits()
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains('start')) {
    setStartBtn();
    btnLeftElement.setAttribute('class', 'btn stop');
    btnLeftElement.innerHTML = 'STOP';

    btnRightElement.setAttribute('class', 'btn split');
    btnRightElement.innerHTML = 'SPLIT';
  } else if (btnLeftElement.classList.contains('stop')) {
    setStopBtn();
    btnLeftElement.setAttribute('class', 'btn start');
    btnLeftElement.innerHTML = 'START';

    btnRightElement.setAttribute('class', 'btn reset');
    btnRightElement.innerHTML = 'RESET';
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if(btnRightElement.classList.contains('split')){
    setSplitBtn();
  }else{
    setResetBtn();
  }
});
