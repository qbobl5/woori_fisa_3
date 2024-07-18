/**
 * Spread - 전개 문법
 *
 * ...(Spread syntax)
 * 하나로 뭉쳐진 여러 값들의 집합을 펼쳐서 (전개, 분산 = spread)
 * 개별적인 값들의 목록으로 바꿔주는 문법
 *
 * 사용 가능 대상: Array, String, Map, Set, DOM Collection
 */

// 1. Spread with Array
const fruits = ["apple", "banana"];
const otherFruits = ["kiwi", "grape"];

// 두 배열을 연결하려면? (Array.prototype.concat())
const allFruits = fruits.concat(otherFruits);
console.log(allFruits);

const myFruits = [...fruits, ...otherFruits];
console.log(myFruits);

// spread 활용 방식
const users = [
  // 배열의 요소로 객체를 가지고 있음
  { id: 1, userName: "Coo" },
  { id: 2, userName: "Kie" },
];

console.log(users);

// 새로운 고객을 users 배열 뒤에 추가하려면?
const newUser = { id: 3, userName: "Yoo" };
users.push(newUser);

console.log(users);

// spread로 하려면?
const users2 = [
  // 배열의 요소로 객체를 가지고 있음
  { id: 1, userName: "Coo" },
  { id: 2, userName: "Kie" },
];

const allUsers = users2.concat(newUser);
console.log(allUsers);
