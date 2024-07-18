// https://www.jsv9000.app/에서 아래의 코드로 실행해보기
function a(callback) {
  const aCallback = () => {
    console.log("a() called");
    callback();
  };

  setTimeout(aCallback, 1000);
}

function b(callback) {
  const bCallback = () => {
    console.log("b() called");
    callback();
  };

  setTimeout(bCallback, 500);
}

function c(callback) {
  const cCallback = () => {
    console.log("c() called");
    callback();
  };

  setTimeout(cCallback, 1200);
}

a(() => {
  console.log("a() is done!");

  b(() => {
    console.log("b() is done!");

    c(() => {
      console.log("c() is done!");
    });
  });
});
