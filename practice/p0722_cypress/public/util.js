// 동일한 국적의 언어로 번역 요청 시 다른 언어로 자동 변경해주는 기능
export const changeLanguage = (sourceLanguage, targetLanguage) => {
  if (sourceLanguage == targetLanguage) {
    if (sourceLanguage == "ko") targetLanguage = "en";
    else if (sourceLanguage == "en") targetLanguage = "ko";
  }
  return targetLanguage;
};

// fetch 에 대한 util function
export const optionsFrom = (method, body, headers) => {
  const options = {
    method: method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: JSON.stringify(body),
  };
  
  return options;
};
