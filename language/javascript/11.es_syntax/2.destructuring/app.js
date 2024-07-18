/**
 * 구조 분해 할당
 * -> (배열, 객체)
 * 구조를 분해해서 새로운 변수에 할당한다
 */

// 1. 객체 (Object)
const book = {
  id: 1,
  title: "The great Gatsby",
  pubDate: "10/04/1925",
};

// 기존 방식
const olderId = book.id;
const olderTitle = book.title;
const olderPubDate = book.pubDate;

// 객체의 구조 분해 = { }
const { id, title, pubDate } = book;
console.log(id, title, pubDate);

// id 변수 말고 다른 변수 사용하고 싶다면?
const { id: myId, title: myTitle, pubDate: myPubDate } = book;
console.log(myId, myTitle, myPubDate);

const anotherBook = {
  id: 2,
  title: "The old man and the sea",
  pubDate: "08/09/1952",
  author: {
    firstName: "Ernest",
    lastName: "Hemingway",
  },
};

// destructuring 중첩해서 표기
const {
  anId,
  anTitle,
  anPubDate,
  author: { firstName, lastName },
} = anotherBook;
console.log(firstName, lastName);
// console.log(author); 불가능 (중첩 객체 바로 추출은 접근 불가)

// 추후 react 작성 시 아래와 같은 방법으로 활용된다. (예시)
// import {useState} from "react";
