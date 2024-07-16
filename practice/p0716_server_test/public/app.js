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
    const data = {
      query: e.target.value,
    };

    const xhr = new XMLHttpRequest();

    xhr.onload = () => {
      if (xhr.readyState === xhr.DONE && xhr.status === 200) {
        const result = JSON.parse(xhr.responseText);
        const detectLang = result.langCode;
        sourceSelect.value = detectLang;

        const xhr2 = new XMLHttpRequest();

        const data2 = {
          source: sourceSelect.value,
          target: targetSelect.value,
          text: sourceTextArea.value,
        };

        xhr2.onload = () => {
          if (xhr2.readyState === xhr2.DONE && xhr2.status === 200) {
            targetTextArea.textContent = xhr2.responseText;
          }
        };

        const url2 = "/translate";
        xhr2.open("POST", url2);
        xhr2.setRequestHeader("Content-Type", "application/json");
        xhr2.send(JSON.stringify(data2));
      }
    };

    const url = "/detect";
    xhr.open("POST", url);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(data));
  }, 2000);
});

// 5. 번역

const btn = document.querySelector("#trbtn");
btn.addEventListener("click", () => {
  const data = {
    source: sourceSelect.value,
    target: targetSelect.value,
    text: sourceTextArea.value,
  };

  const xhr = new XMLHttpRequest();

  xhr.onload = () => {
    if (xhr.readyState === xhr.DONE && xhr.status === 200) {
      targetTextArea.textContent = xhr.responseText;
    }
  };

  const url = "/translate";
  xhr.open("POST", url);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify(data));
});
