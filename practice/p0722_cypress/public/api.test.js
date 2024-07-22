import { expect, test } from "vitest";
import { detectLanguage, translateLanguage } from "./api.js";

test("'안녕'이라고 작성할 경우 한국어(ko)로 감지된다.", async () => {
  const expected = "ko"; // 기댓값
  const text = "안녕";
  const url = "http://localhost:3000/detect";

  const result = await detectLanguage(url, text);

  expect(result).toBe(expected);
});

test("'hello'라고 작성할 경우 영어(en)로 감지된다.", async () => {
  const expected = "en";
  const text = "hello";
  const url = "http://localhost:3000/detect";

  const result = await detectLanguage(url, text);

  expect(result).toBe(expected);
});

test("'안녕'을 번역할 경우 'Hi.'로 번역된다.", async () => {
  const expected = "Hi.";
  const text = "안녕";

  const body = {
    source: "ko",
    target: "en",
    text,
  };

  const url = "http://localhost:3000/translate";

  const result = await translateLanguage(url, body);

  expect(result).toBe(expected);
});

test("'hello'를 번역할 경우 '안녕하세요.'으로 번역된다.", async () => {
  const expected = "안녕하세요.";
  const text = "hello";

  const body = {
    source: "en",
    target: "ko",
    text,
  };

  const url = "http://localhost:3000/translate";

  const result = await translateLanguage(url, body);

  expect(result).toBe(expected);
});

test("'It'이라고 작성할 경우 영어(en)으로 감지되고 '그것'으로 해석된다.", async () => {
  const expected = "en";
  const text = "It";
  const url = "http://localhost:3000/detect";

  const result = await detectLanguage(url, text);

  expect(result).toBe(expected);

  const expected2 = "그것";
  const url2 = "http://localhost:3000/translate"
  const body = {
    source: "en",
    target: "ko",
    text,
  };
  
  const result2 = await translateLanguage(url2, body);
  expect(result2).toBe(expected2);
});
