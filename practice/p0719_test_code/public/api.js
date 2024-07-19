// 언어 감지 요청 기능을 수행하는 함수
export const detectLanguage = async (url, text) => {
  let sourceLanguage; // 감지된 언어값(반환 값으로 활용)

  const options = {
    // fetch 요청 전송 시 사용할 요청 정보들을 모아둔 객체
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: text }),
  };

  await fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
      sourceLanguage = data.langCode;
    });

  return sourceLanguage;
};

// 언어 번역 요청 기능을 수행하는 함수
export const translateLanguage = async (url, body) => {
  let translated;

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };

  await fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
      translated = data.message.result.translatedText;
    });

  return translated;
};
