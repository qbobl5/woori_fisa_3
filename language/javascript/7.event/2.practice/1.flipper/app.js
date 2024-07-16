// 1. element 가져오기
const btn = document.getElementById("color_btn");
const sp = document.getElementById("rgb_box");

// 2. event 추가하기
btn.addEventListener("click", () => {
  const c1 = Math.floor(Math.random() * 256);
  const c2 = Math.floor(Math.random() * 256);
  const c3 = Math.floor(Math.random() * 256);

  document.body.style.backgroundColor = `rgb(${c1}, ${c2}, ${c3})`;
  sp.textContent = `rgb(${c1}, ${c2}, ${c3})`;
});
