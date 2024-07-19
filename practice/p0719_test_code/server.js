// import
import express, { json } from "express";
import HTTP from "superagent";
import dotenv from "dotenv";

// env load
dotenv.config();

// app express
const app = express();

// middleware
app.use(express.static("public"));
app.use(json());

// 전역 변수
const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const baseUrl = "https://naveropenapi.apigw.ntruss.com";

// 기본 경로
app.get("/", (_, response) => {
  response.sendFile("index.html");
});

// 언어 감지
app.post("/detect", (request, response) => {
  const url = `${baseUrl}/langs/v1/dect`;

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

// 번역
app.post("/translate", (request, response) => {
  const url = `${baseUrl}/nmt/v1/translation`;

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

// 3000번 포트 서버 구동
const port = 3000;
app.listen(port, () =>
  console.log(
    `http://127.0.0.1:${port}/ 서버 프로세스가 3000번 포트에서 실행 중`
  )
);
