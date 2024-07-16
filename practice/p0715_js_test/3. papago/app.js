// 0. 변수 선언 및 요소 가져오기
// source = 번역 요청 내용, target = 번역 결과 내용
const [sourceSelect, targetSelect] = document.querySelectorAll("select");
const [sourceTextArea, targetTextArea] = document.querySelectorAll("textarea");

// 1. 번역 요청 내용 input event (아래에서 다시 진행)
// sourceTextArea.addEventListener("input", (e) => {
//     const text = e.target.value;
//     console.log(text);
// });

// 2. 번역 결과 언어 change event
let targetLanguage = "en";
targetSelect.addEventListener("change", (e) => {
  targetLanguage = e.target.value;
  console.log(targetLanguage);
});

let sourceLanguage = "en";
sourceSelect.addEventListener("change", (e) => {
  sourceLanguage = e.target.value;
  console.log(sourceLanguage);
});

// 3. 번역 요청 내용 텍스트 숫자 표시 추가
sourceTextArea.addEventListener("input", (e) => {
  const text = e.target.value;
  const area = document.querySelector("#word-count");
  area.textContent = text.length;
});

// 4. 입력한 텍스트의 번역 요청을 한번에 처리 (2초 뒤 출력)
let timeout;

sourceTextArea.addEventListener("keyup", (e) => {
  if (timeout) {
    clearTimeout(timeout);
  }

  timeout = setTimeout(() => {
    console.log(e.target.value);
  }, 2000);
});
