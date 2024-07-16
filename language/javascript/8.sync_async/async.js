/**
 * 비동기
 * 현재 실행중인 작업이 아직 종료되지 않은 상태라고 해도
 * 다음 작업을 곧바로 수행할 수 있는 방식
 */

function first() {
  console.log("first() called");
}

function second() {
  console.log("second() called");
}

// 비동기적인 처리를 지원하는 함수 중 하나
setTimeout(first, 3000);
second();
