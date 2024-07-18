/**
 * My code
 */

function a(callback) {
  setTimeout(() => {
    console.log("a() called");
    callback();
  }, 1000);
}

function b(callback) {
  setTimeout(() => {
    console.log("b() called");
    callback();
  }, 500);
}

function c(callback) {
  setTimeout(() => {
    console.log("c() called");
    callback();
  }, 1200);
}

a(() => {
  console.log("a() is done!");
  b(() => {
    console.log("b() is done!");
    c(() => console.log("c() is done!"));
  });
});

/*
    step04.js
    b,a,c가 각 네트워크의 응답 시간이라고 가정할 경우,
    즉, a의 작업이 끝나야 b 작업을 수행해야 하고, b가 끝나야 c 작업을 수행해야 하는 경우
*/

function a(callback) {
  setTimeout(() => {
    console.log("a() called");
    callback();
  }, 1000);
}

function b(callback) {
  setTimeout(() => {
    console.log("b() called");
    callback();
  }, 500);
}

function c(callback) {
  setTimeout(() => {
    console.log("c() called");
    callback();
  }, 1200);
}

a(() => {
  console.log("a() is done!");

  b(() => {
    console.log("b() is done!");

    c(() => {
      console.log("c() is done!");
    });
  });
}); // → 콜백 헬 발생(가독성, 코드 이해도 저하)
