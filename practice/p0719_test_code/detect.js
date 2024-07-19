// 설치한 모듈을 server.js 에서 사용하기 위해 불러오기
import HTTP from "superagent";

const clientId = "edwgz9by0h";
const clientSecret = "iFetxOwqbqP0xVjwxvNQiRlxa1n4vB1XywWJBqou";
const url = "https://naveropenapi.apigw.ntruss.com/langs/v1/dect"; // papago 언어 감지 api 요청 처리 주소
const query = "안녕하세요";

// query 라는 프로퍼티를 가진 data 객체
const data = {
  query: query,
};

// 요청 전송
// superagent는 request 모듈을 대체할 다른 라이브러리
HTTP.post(url)
  .send(data)
  .set("Content-Type", "application/json")
  .set("X-NCP-APIGW-API-KEY-ID", clientId)
  .set("X-NCP-APIGW-API-KEY", clientSecret)
  .end((error, result) => {
    if (result.statusCode === 200) {
      console.log(result.body);
    } else {
      console.log(error);
    }
  });
