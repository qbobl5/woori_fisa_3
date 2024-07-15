/**
 * 기본적인 함수 정의
 * <함수 선언문> 방식
 */

// 함수 시그니처
/**
 * 두 수를 받아서 덧셈 결과를 반환
 *
 * @param {number} a
 * @param {number} b
 * @returns {number} a + b
 * @author qbobl5
 */
function add(a, b) {
  return a + b;
}

// 함수 호출
add(3, 5);

/**
 * 2번째 함수 생성 방식
 * <함수 표현식> 방식
 * 함수를 변수에 할당 (JS는 가능)
 * --> JS에서 함수는 1급 객체로 취급되기 때문
 */
const mtp = function (a, b) {
  return a * b;
};

console.log(add(3, 5), mtp(3, 5));

/**
 * <화살표 함수>
 * ES6, 2015년 등장한 문법
 */
const sub = (a, b) => a - b; // 코드가 1줄이면 return 사용 X, 암묵적 리턴
const sub2 = (a, b) => {
  return a - b;
}; // return 사용 가능하기는 한데 중괄호 필요 (중괄호 안에 다른 코드도 입력 가능)
console.log(sub(5, 3));

// 별도의 파라미터가 없을 경우
const hello = () => console.log("hello!");
hello();

// 파라미터가 1개인 경우 (둘 다 가능)
const square = (x) => x * x;
const square2 = x => x * x;
