// 전역 변수
const [sourceSelect, targetSelect] = document.querySelectorAll("select");
const [sourceTextArea, targetTextArea] = document.querySelectorAll("textarea");

// 번역할 언어 change event 추가
let targetLanguage = "en";
targetSelect.addEventListener("change", (e) => {
  targetLanguage = e.target.value;
  console.log(targetLanguage);
});

// 기존 언어 change event
let sourceLanguage = "ko";
sourceSelect.addEventListener("change", (e) => {
  sourceLanguage = e.target.value;
  console.log(sourceLanguage);
});

// 번역 요청 내용 텍스트 숫자 표시 event
sourceTextArea.addEventListener("input", (e) => {
  const text = e.target.value;
  const area = document.querySelector("#word-count");
  area.textContent = text.length;
});

// 번역 요청 내용 언어 감지 후 번역 event
let timeout;
sourceTextArea.addEventListener("keyup", (e) => {
  if (timeout) {
    clearTimeout(timeout);
  }

  timeout = setTimeout(() => {
    const detectData = {
      query: e.target.value,
    };

    // 언어 감지
    const detectXhr = new XMLHttpRequest();
    detectXhr.onload = () => {
      if (detectXhr.readyState === detectXhr.DONE && detectXhr.status === 200) {
        sourceSelect.value = detectXhr.responseText;

        const translateData = {
          source: sourceSelect.value,
          target: targetSelect.value,
          text: sourceTextArea.value,
        };

        // 번역
        const translateXhr = new XMLHttpRequest();
        translateXhr.onload = () => {
          if (translateXhr.readyState === translateXhr.DONE && translateXhr.status === 200) {
            targetTextArea.textContent = translateXhr.responseText;
          }
        };

        const translateUrl = "/translate";
        translateXhr.open("POST", translateUrl);
        translateXhr.setRequestHeader("Content-Type", "application/json");
        translateXhr.send(JSON.stringify(translateData));
      }
    };

    const detectUrl = "/detect";
    detectXhr.open("POST", detectUrl);
    detectXhr.setRequestHeader("Content-Type", "application/json");
    detectXhr.send(JSON.stringify(detectData));
  }, 2000);
});

// 버튼 클릭 시 번역 event
const btn = document.querySelector("#trbtn");
btn.addEventListener("click", () => {
  const data = {
    source: sourceSelect.value,
    target: targetSelect.value,
    text: sourceTextArea.value,
  };

  // 번역
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
