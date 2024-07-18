let post;
const get = (url) => {
  console.log("get() started");
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.send();
  xhr.onload = () => {
    if (xhr.status === 200) {
      console.log(xhr.response);
      post = JSON.parse(xhr.response); // 상위 스코프에 값을 할당
      return JSON.parse(xhr.response); // 값 그 자체를 반환(?)
    } else {
      console.error(`${xhr.status} ${xhr.statusText}`);
    }
  };
  console.log("get() ended");
};
const url = "https://jsonplaceholder.typicode.com/posts/1";
const getResult = get(url);
console.log(getResult);
console.log(post);
