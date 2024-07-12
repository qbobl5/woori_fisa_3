const a = 5;
console.log(typeof a);

/**
 * java의 경우 int a = 5; 정적 타입의 언어이므로,
 *  컴파일 시점에 결정되어 입력값이 정수가 아니면 오류 발생
 *
 * js는 동적 타입의 언어이므로 실행 시점에 결정됨
 */

/**
 * 값 value (ex. 5, 'you', a)
 * 식 expression (ex. 1+1, 1===1)
 * 문장 statement (ex. const a=5)
 */

// 탬플릿 리터럴 문법 ${} 은 값과 식만 가능
const userName = '유';
console.log('안녕하세요 저는 ' + userName + ' 입니다');
console.log('안녕하세요 저는 ', userName, ' 입니다');
console.log(`안녕하세요 저는 ${userName} 입니다`);
// console.log(`안녕하세요 저는 ${const a = 5} 입니다.`); -> 문장을 넣으면 오류

let c = 5;
console.log(c); // Number

c = 'you';
console.log(c); // String