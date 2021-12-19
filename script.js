var dom = document;

var word = dom.getElementById("word");

var score = dom.getElementById("score");
var msg = dom.getElementById("alert");

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
var gamescore = 0;

var input = dom.getElementById("input");

word.innerHTML = `${words[0]}`;

function submit() {
  var userinput = input.value;
  if (userinput == word.innerHTML) {
    gamescore++;
  } else {
    msg.innerHTML = `Game Over!!`;
  }

  var index = parseInt(Math.random() * words.length);

  word.innerHTML = `${words[index]}`;

  score.innerHTML = `${gamescore}`;

  input.value = "";
}

//code to press Enter key
input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("btn").click();
  }
});
