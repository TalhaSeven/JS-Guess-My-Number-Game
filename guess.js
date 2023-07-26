let randomNumber = Math.round(Math.random() * 100);
console.log(randomNumber);

const inputElement = document.querySelector(".guess-input");
const buttonElement = document.querySelector(".guess-button");
const messageElement = document.querySelector(".message-display");
const chanceElement = document.querySelector(".chances-area");
const containerElement = document.querySelector("#container");
const scoreElement = document.querySelector(".score-area");
const highScoreElement = document.querySelector(".highestscore-area");
const againButton = document.querySelector(".again-button");
let score = 10;
let highestScore = 0;

scoreElement.textContent = score;
highScoreElement.textContent = highestScore;

const displayMessage = (msg) => {
  messageElement.textContent = msg;
};

buttonElement.addEventListener("click", () => {
  let guess = inputElement.value;
  if (!guess) {
    displayMessage("Lütfen Geçerli Bir Giriş Yapınız");
  } else if (Number(guess) === randomNumber) {
    containerElement.className = "bg-green";
    displayMessage("Tebrikler Bildiniz!");
    if (score > highestScore) {
      highestScore = score;
      highScoreElement.textContent = highestScore;
    }
    buttonElement.disabled = true;
    chanceElement.textContent = "";
  } else {
    score -= 1;
    if (score > 0) {
      if (Number(guess) > randomNumber) {
        displayMessage(`Azaltın, Girdiğiniz Sayı: ${guess}`);
      } else {
        displayMessage(`Arttırın, Girdiğiniz Sayı: ${guess}`);
      }
      chanceElement.textContent = `Kalan Hak Sayısı: ${score}`;
    } else {
      displayMessage("Kaybettiniz");
      containerElement.className = "bg-red";
      buttonElement.disabled = true;
      chanceElement.textContent = "";
    }
  }
  scoreElement.textContent = score;
  inputElement.value = "";
});
inputElement.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    buttonElement.click();
  }
});

againButton.addEventListener("click", () => {
  randomNumber = Math.round(Math.random() * 100);
  console.log(randomNumber);
  containerElement.className = "bg-begin";
  displayMessage("Start Guessing..");
  buttonElement.disabled = false;
  chanceElement.textContent = "";
  score = 10;
  scoreElement.textContent = score;
});
