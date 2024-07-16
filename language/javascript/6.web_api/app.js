// DOM 객체
console.dir(document);

/**
 * document는 객체이다.
 * 여러 개의 프로퍼티들을 가진다.
 */

// window 객체 (최상위 객체)
console.log(window);
// console.log(alert("알람 모달")); window.alert인데 그냥 alert라고 쓸 수 있다 (document도 마찬가지)

// 둘이 같은지 확인
console.log(window.document === document); // window가 상위 객체이므로 true
console.log(1 == "1"); // 같은 숫자 1이라 true
console.log(1 === "1"); // 타입이 다르므로 false

/**
 * DOM을 통한 HTML element 조작
 */

const h1 = document.querySelector("h1");
console.log(typeof h1); // object
console.dir(h1);
console.log(h1.innerHTML);

// h1이 HTMLHeadingElement의 요소인지 확인
console.log(h1 instanceof HTMLHeadingElement); // true

/**
 * li 태그 전부 가져오기 + 출력
 */
const liList = document.querySelectorAll("li");
console.log(liList);

// 텍스트 추출
console.log(liList[1].textContent);

// 클래스명으로도 가져올 수 있다
const liList2 = document.getElementsByClassName("list-item");
console.log(liList2);
