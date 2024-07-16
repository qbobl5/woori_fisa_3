// express 기반으로 동작할 서버 로직 작성 파일
// express 모듈을 사용하기 위해 express import
import express, { json } from "express";
import HTTP from "superagent";

// app -> express 모듈을 활용할 수 있는 객체
// app 을 통해 express 설정들을 조작, 관리
const app = express();

// 미들웨어 추가
// public 폴더를 정적 리소스가 제공되는 디렉토리로 명시
app.use(express.static("public"));
app.use(json());

// 사용자가 브라우저에서 http://localhost:3000/ 경로 요청 시 응답할 Handler 구현
// app.get("/", (req, res) => res.sendFile("index.html", { root: "." }));
app.get("/", (_, response) => {
  response.sendFile("index.html");
});

app.post("/detect", (request, response) => {
  const clientId = "edwgz9by0h";
  const clientSecret = "iFetxOwqbqP0xVjwxvNQiRlxa1n4vB1XywWJBqou";
  const url = "https://naveropenapi.apigw.ntruss.com/langs/v1/dect";

  HTTP.post(url)
    .send(request.body)
    .set("Content-Type", "application/json")
    .set("X-NCP-APIGW-API-KEY-ID", clientId)
    .set("X-NCP-APIGW-API-KEY", clientSecret)
    .end((error, result) => {
      if (result.statusCode === 200) {
        response.send(result.body);
      } else {
        console.log(error);
      }
    });
});

app.post("/translate", (request, response) => {
  const clientId = "edwgz9by0h";
  const clientSecret = "iFetxOwqbqP0xVjwxvNQiRlxa1n4vB1XywWJBqou";
  const url = "https://naveropenapi.apigw.ntruss.com/nmt/v1/translation";

  HTTP.post(url)
    .send(request.body)
    .set("Content-Type", "application/json")
    .set("X-NCP-APIGW-API-KEY-ID", clientId)
    .set("X-NCP-APIGW-API-KEY", clientSecret)
    .end((error, result) => {
      if (result.statusCode === 200) {
        response.send(result.body.message.result.translatedText);
      } else {
        console.log(error);
      }
    });
});

const port = 3000;
app.listen(port, () =>
  console.log(
    `http://127.0.0.1:${port}/ 서버 프로세스가 3000번 포트에서 실행 중`
  )
);
