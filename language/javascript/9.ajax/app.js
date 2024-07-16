// 1. XMLHttpRequest 객체 생성 (XHR API 활용하기 위해 불러오는 작업)
const xhr = new XMLHttpRequest();
console.log(xhr);

// 2. 서버로부터 응답이 완료되었을 경우 동작시킬 이벤트 추가
xhr.onload = () => {
  // onload 프로퍼티(변수)에 화살표 함수 할당
  if (xhr.readyState === xhr.DONE && xhr.status === 200) {
    const responseData = xhr.responseText; // 서버로부터 응답받은 데이터
    console.log(responseData);
    console.log(typeof responseData); // String
    const parsedData = JSON.parse(responseData); // 역직렬화
    console.log(parsedData);
  }
};

// 3. 요청 준비 - open() 사용
const url = "https://jsonplaceholder.typicode.com/users/1";
xhr.open("GET", url);

// 4. 요청 전송
xhr.send();
