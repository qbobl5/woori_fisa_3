/**
 * 객체(object)는 속성(property)으로 구성된 집합
 * 프로퍼티는 키와 값으로 구성 (key-value)
 */

const dog = {
  age: 2,
};

console.log(dog);
console.log(dog.age); // property 값만 참조 가능

const dog2 = {
  age: 2,
  name: "toto",
  walk: () => console.log("강아지가 걷는다"),
  address: {
    si: "서울시",
    gu: "마포구",
    dong: "상암동",
  },
};

dog2.walk();
console.log(dog2);
console.log(dog2.address);
console.log(dog2.address.si);
