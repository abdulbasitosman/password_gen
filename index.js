let passwordEl = document.getElementById("password-box");
let copyEl = document.getElementById("copy-pass");
let buttonEl = document.getElementById("btn");

let characters = [
  "a",
  "b",
  "d",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "!",
  "#",
  "%",
  "^",
  "&",
  "(",
  ")",
  "_",
  "@",
  "?",
  "[",
  "]",
];

passwordEl.textContent = "";

buttonEl.addEventListener("click", () => {
  function getRandomIndex() {
    return Math.floor(Math.random() * characters.length);
  }

  let character1 = characters[getRandomIndex()];
  let character2 = characters[getRandomIndex()];
  let character3 = characters[getRandomIndex()];
  let character4 = characters[getRandomIndex()];
  let character5 = characters[getRandomIndex()];
  let character6 = characters[getRandomIndex()];
  let character7 = characters[getRandomIndex()];
  let character8 = characters[getRandomIndex()];
  let character9 = characters[getRandomIndex()];
  let character10 = characters[getRandomIndex()];
  let character11 = characters[getRandomIndex()];
  let character12 = characters[getRandomIndex()];

  passwordEl.textContent =
    character1 +
    character2 +
    character3 +
    character4 +
    character5 +
    character6 +
    character7 +
    character8 +
    character9 +
    character10 +
    character11 +
    character12;
});
