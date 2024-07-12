/**
 * 1. 선택박스(Select box)와 '결과' 부분에 해당하는 HTML, Tag들을 JS코드 상으로 가져와야 함
 * JS가 HTML 태그를 제어하기 위해서
 */

// HTML 문서에게 id==cookie인 태그를 요청
const selectButton = document.getElementById("cookie");
console.log(selectButton);

// id==result인 태그 요청해보기
const result = document.getElementById("result");
console.log(result);

// setResult 함수 생성
function setResult() {
  // .value: select의 값 출력해보기
  // console.log(selectButton.value);
  const choice = selectButton.value;

  if (choice == "one") {
    // result의 textContent에 추가하여 화면에 출력
    result.textContent = "착한 아이구나?";
  } else if (choice == "two") {
    result.textContent = "맞을래?";
  } else {
    result.textContent = "가만히 있어";
  }
}

// selectButton에 변화가 발생하면 위의 setResult를 실행하는 event를 추가
selectButton.addEventListener("change", setResult);
