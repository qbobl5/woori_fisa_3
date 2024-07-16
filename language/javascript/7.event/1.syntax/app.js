// const button = document.querySelector("#btn"); 아래와 같음
const button = document.getElementById("btn");
console.log(button);

/**
 * 버튼 클릭 시 "클릭됨!"이라는 메시지 출력하기
 * 1. button에 event 추가
 * 2. addEventListener('이벤트종류', 콜백함수) = 이게 시그니처
 * 3. button click 시 발생할 함수 정의
 */

// 1번 방식
const clickHandler = () => console.log("클릭됨!");
button.addEventListener("click", clickHandler);

// 2번 방식
button.addEventListener("click", () => console.log("클릭됨! 2번째 함수 호출"));
