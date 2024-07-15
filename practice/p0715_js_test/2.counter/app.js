// 1. element 가져오기
const num = document.getElementById("number");
const minusBtn = document.getElementById("btn1");
const resetBtn = document.getElementById("btn2");
const plusBtn = document.getElementById("btn3");

// 2. event 추가하기
let tmp = num.innerHTML;

minusBtn.addEventListener("click", () => {
  tmp -= 1;
  num.textContent = tmp;
  if (tmp < 0) {
    num.style.color = "red";
  } else if (tmp == 0) {
    num.style.color = "gray";
  }
});

resetBtn.addEventListener("click", () => {
  tmp = 0;
  num.textContent = tmp;
  num.style.color = "gray";
});

plusBtn.addEventListener("click", () => {
  tmp += 1;
  num.textContent = tmp;
  if (tmp > 0) {
    num.style.color = "green";
  } else if (tmp == 0) {
    num.style.color = "gray";
  }
});
