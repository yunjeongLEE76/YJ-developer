//랜덤번호 지정
//유저가 번호 입력후 go라는 버튼 누름
//유저가 랜덤번호를 맞추면, 정답입니다!!
//랜덤번호 < 유저번호 Down!!!
//랜덤번호 > 유저번호 Up!!
//Reset버튼을 누르면 게임이 리셋된다.
//5번의 기회를 다쓰면 게임이 끝난다( 더 이상 추측불가, 버튼이 disable)
//유저가 1~100범위 밖에 숫자를 입력하면 알려줌, 기회 안깍음.
//유저가 이미 입력한 숫자를 또 입력할시 알려줌, 기회 안깍음

let computerNum = 0;
let playButton = document.querySelector("#play-button");
let userInput = document.querySelector("#user-input");
let result = document.querySelector("#result");
let resetButton = document.querySelector("#reset-button");
let chances = 5;
let gameOver = false;
let resultAreaImg = document.querySelector(".main-img");
let resultText = document.querySelector(".result-text");
let chanceArea = document.querySelector("#chance");
let history = [];

chanceArea.innerHTML = `남은기회:${chances}`;
playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", function () {
  userInput.value = "";
});

function pickRandomNum() {
  computerNum = Math.floor(Math.random() * 100) + 1;
  console.log("정답", computerNum);
}

function play() {
  let userValue = userInput.value;

  if (userValue < 1 || userValue > 100) {
    resultText.textContent = "1과100사이 숫자를 입력해주세요";
    return;
  }

  if (history.includes(userValue)) {
    resultText.textContent = "이미 입력한 숫자입니다 다른 숫자를 입력해주세요";
    return;
  }

  chances--;
  chanceArea.textContent = `남은기회:${chances}번`;
  history.push(userValue);
  if (userValue < computerNum) {
    resultAreaImg.src =
      " https://media0.giphy.com/media/3ov9jExd1Qbwecoqsg/200.gif";
    resultText.textContent = "Up!!!";
  } else if (userValue > computerNum) {
    resultAreaImg.src =
      " https://media.giphy.com/media/r2puuhrnjG7vy/giphy.gif";
    resultText.textContent = "Down!!!";
  } else {
    resultAreaImg.src =
      "https://media.tenor.com/images/0a81b89954678ebe228e15e35044f7a5/tenor.gif";
    resultText.textContent = "맞추셨습니다!!!";
    gameOver = true;
  }

  if (chances < 1) {
    gameOver = true;
  }
  if (gameOver == true) {
    playButton.disabled = true;
    playButton.textContent = "탈락!";
  }
}

function focusInput() {
  userInput.value = "";
}

function reset() {
  userInput.value = "";
  pickRandomNum();
  resultAreaImg.src =
    " https://media1.giphy.com/media/9DinPR8bzFsmf74j9W/giphy.gif";
  resultText.textContent = "죽기 싫다면 맞춰라";
  gameOver = false;
  playButton.disabled = false;
  chances = 5;
  chanceArea.innerHTML = `남은기회:${chances}번`;
  history = [];
}

pickRandomNum();
