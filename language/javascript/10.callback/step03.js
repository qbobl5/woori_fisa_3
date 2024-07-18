function a() {
  setTimeout(() => console.log("a() called"), 1000);
}
function b() {
  setTimeout(() => console.log("b() called"), 500);
}
function c() {
  setTimeout(() => console.log("c() called"), 1200);
}
a();
console.log("a() is done");
b();
console.log("b() is done");
c();
console.log("c() is done");

/**
 * Q. setTimeout()을 활용하여 지연 시간에 관계없이 a, b, c 순서로 동작하도록 보장하려면?
 */

function a_st(callback) {
  setTimeout(() => {
    console.log("a_st() called"); // 비동기 처리가 끝난 후에,
    callback(); // 내가 원하는 작업을 수행하고 싶음
  }, 1000); // 1 second delay
}

function b_st(callback) {
  setTimeout(() => {
    console.log("b_st() called");
    callback();
  }, 500); // 0.5 second delay
}

function c_st(callback) {
  setTimeout(() => {
    console.log("c_st() called");
    callback();
  }, 1200); // 1.1 second delay
}

// 콜백 함수를 인수로 전달하여 원하는 작업이 비동기 처리가 수행된 이후에 수행되도록 보장
a_st(() => console.log("a_st() is done!"));
b_st(() => console.log("b_st() is done!"));
c_st(() => console.log("c_st() is done!"));
