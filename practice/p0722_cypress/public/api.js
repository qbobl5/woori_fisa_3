import { optionsFrom } from "./util.js";

// 언어 감지 요청 기능을 수행하는 함수
export const detectLanguage = async (url, text) => {
  let sourceLanguage; // 감지된 언어값(반환 값으로 활용)
  const options = optionsFrom("POST", { query: text });

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
  const options = optionsFrom("POST", body);

  await fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
      translated = data.message.result.translatedText;
    });

  return translated;
};
