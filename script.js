window.addEventListener("load", init);
var dom = document;

var word = dom.getElementById("word");
var input = dom.getElementById("input");

var score = dom.getElementById("score");
var Displaytime = dom.getElementById("Time");
var msg = dom.getElementById("alert");
var gamescore = 0;
var time = 10;

var playing;

var words = [
  "becalm",
  "blithesome",
  "broadsheet",
  "buffoonish",
  "caprice",
  "caprice",
  "causerie",
  "chivalrous",
  "congratulatory",
  "dapper",
  "debonaire",
  "emblazon",
  "extremum",
  "exultant",
];

function init() {
  showWord(words);

  input.addEventListener("input", mathchWords);

  setInterval(countDown, 1000);
  setInterval(checkStatus, 50);
}
function mathchWords() {
  if (matched()) {
    showWord(words);
    playing = true;
    gamescore++;
    time = 10
    input.value = "";
  }
  score.innerHTML = gamescore;
}
function matched() {
  if (input.value === word.innerHTML) {
    msg.innerHTML = `Correct!!`;
    return true;
  } else {
    msg.innerHTML = "";
    return false;
  }
}

function showWord(words) {
  var index = parseInt(Math.random() * words.length);
  word.innerHTML = words[index];
}
function countDown() {
  if (time > 0) {
    time--;
  } else if (time == 0) {
    playing = false;
  }
  Displaytime.innerHTML = time;
}

function checkStatus() {
  if (!playing && time == 0) {
    msg.innerHTML = `GameOver!!!`;
    gamescore = 0;
  }
}
