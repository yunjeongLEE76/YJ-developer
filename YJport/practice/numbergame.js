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

function pickRandomNum() {
  computerNum = Math.floor(Math.random() * 100) + 1;
  console.log("정답", computerNum);
}
pickRandomNum();
