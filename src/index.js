// answer 변수를 아래에서 사용할 수 있게 밖에서 선언해줌
let answer;
// 초기 점수가 0이라는 기억을 하고 있는 부분
let score = 0
// 코드 중복을 피하기 위한 코드
const rightModalEl = document.querySelector('.right-modal')
const wrongModalEl = document.querySelector('.wrong-modal')


// 랜덤 색 세가지를 생성하는 코드
function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// 한 번만 실행되는 코드
document.querySelectorAll(".option").forEach((optionEl, index) => {
  optionEl.addEventListener("click", e => {
    if (answer === index) {
      // 정답일 때 실행되는 코드 : 1. 점수증가 2. 모달 띄어주기
      score++
      rightModalEl.classList.add('open')
    } else {
      document.querySelector('.score-in-modal').textContent = score
      score = 0
      wrongModalEl.classList.add('open')
    }
    // 점수를 표현하기 위한 부분 : 맞았을 때도, 틀렸을 때도 실행되는 부분(공통)
    document.querySelector('.score').textContent = "SCORE : " + score
  });
});


// 공통으로 쓰이는 코드 함수로 만들기
function newStage() {
  // 이 배열에 있는 랜덤 컬러를 쓰는 코드
  const options = [randomColor(), randomColor(), randomColor()];
  // 클래스가 option인 것 전체를 선택해서 배열의 각 요소에 대해 함수를 호출한다
  document.querySelectorAll(".option").forEach((optionEl, index) => {
    optionEl.style.backgroundColor = options[index];
  });
  // 정답 컬러를 위한 코드
  answer = Math.floor(Math.random() * 3);

  // 정답이 될 랜덤 색
  document.querySelector(".color-text").textContent = options[answer];
}


// 함수 호출하는 부분
newStage();

// 이벤트 리스너가 한 번만 등록되어야 하기때문에 바깥 스코프에 코드 작성
document.querySelector('.next-stage').addEventListener("click", e => {
  newStage()
  rightModalEl.classList.remove('open')
})
document.querySelector('.play-again').addEventListener("click", e => {
  newStage()
  wrongModalEl.classList.remove('open')
})


