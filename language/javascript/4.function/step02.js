/**
 * 콜백 함수 기본
 */

// Hello {name}을 출력하는 함수
// function greeting(name) {
//     console.log(`Hello ${name}`);
// }

const greeting = (name) => {
  console.log(`Hello ${name}`);
};
greeting("qbobl5");

function processUserInput(name, callbackFn) {
  callbackFn(name);
}

processUserInput("qbobl5", greeting);

/**
 * 쿠팡에서 사과를 기다리는 함수
 * waitCoupang(allpeBox, callback)
 * 함수의 동작: '쿠팡에서 {appleBox}가 도착했다'를 출력
 */

/**
 * bringItToNeighbor()
 * 함수의 동작: '옆집 아주머니에게 전달 완료'를 출력
 */

const bringItToNeighbor = () => console.log("옆집 아주머니께 전달 완료");
function waitCoupang(appleBox, callback) {
  console.log(`쿠팡에서 ${appleBox}가 도착했다`);
  callback();
}

waitCoupang("사과", bringItToNeighbor);

// forEach == 이것도 결국 콜백 함수
const numbers = [1, 2, 3, 4];
// numbers.forEach((number) => {
//   console.log(number);
// });

// 그래서 위의 forEach를 아래와 같이도 표현 가능
const callbackFn = (number) => console.log(number);
numbers.forEach(callbackFn);
