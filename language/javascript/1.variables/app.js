console.log("hello");
/**
 * 변수는 선언과 초기화라는 과정을 통해 작성 가능
 *
 * JS에서 변수 선언 (keyword)
 * var  let  const
 */
let userName; // userName 변수 선언
userName = "you"; // userName 변수 초기화
console.log(userName);

console.log(a); // 아래에 var 변수 존재하지만 정의 이전이므로 undefined
var a = 5;

// console.log(b); // 아래에 let 변수로 존재하기 때문에 오류 발생 (정의 이전이므로) -> 따라서 let 지향
let b = 1;

b = 6; // let 변수는 변할 수 있으므로 재할당이 가능
console.log(b);

const allUsers = 5; // const는 상수
const PI = 3.14;
// allUsers = 10; // 상수를 변경할 수 없으므로 오류
console.log(allUsers); // 5 출력

/**
 * 기본적으로 const를 사용하며 방어적으로 작성 후
 * 변경이 필요할 것 같은 경우 let으로 변경
 */
