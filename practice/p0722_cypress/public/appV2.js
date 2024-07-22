import { detectLanguage, translateLanguage } from "./api.js";

const [sourceSelect, targetSelect] = document.getElementsByTagName("select");
const [sourceTextArea, targetTextArea] =
  document.getElementsByTagName("textarea");
const baseUrl = "http://localhost:3000";

let targetLanguage = "en";
targetSelect.addEventListener(
  "change",
  (event) => (targetLanguage = event.target.value)
);

let timer;
sourceTextArea.addEventListener("input", (event) => {
  if (timer) clearTimeout(timer);

  timer = setTimeout(async () => {
    const text = event.target.value;
    const sourceLanguage = await detectLanguage(`${baseUrl}/detect`, text);
    sourceSelect.value = sourceLanguage;

    const body = {
      source: sourceLanguage,
      target: targetLanguage,
      text, // text: text와 같음
    };

    const translated = await translateLanguage(`${baseUrl}/translate`, body);
    targetTextArea.value = translated;
  }, 1500);
});
