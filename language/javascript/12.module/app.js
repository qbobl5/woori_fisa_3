// DOM 작업 처리 작성 파일
import { sum } from "./function.js";

const x = 10;
const y = 5;

const add = document.getElementById("add");
add.textContent = sum(x, y);
