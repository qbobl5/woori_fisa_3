// 2. 배열 (Array)
// 배열 desturcturing
// 배열의 요소들을 개별 변수들로 분해
const date = ["1970", "12", "01"];

// 배열이라 [ ] 사용
const [year, month, day] = date;

// 중첩 배열 destructuring
const nestedArray = [1, 2, [true, "hoya"], 5];
const [one, two, [isTrue, userName], five] = nestedArray;
console.log(one, userName, five);

/**
 * practice
 */

// movie object
const movie = {
  movieTitle: "Spiderman no way home",
  movieActor: {
    firstName: "Tom",
    lastName: "Holland",
  },
  hashTags: ["honey fun", "handsome", "thrill"],
};

const {
  movieTitle,
  movieDate = new Date(), // default Parameter (자체적 할당이 가능하다)
  movieActor,
  movieActor: { firstName }, // 내부에서 디스트럭처링 가능
  hashTags: [tag1, tag2],
} = movie;

console.log(movieDate, movieActor, firstName, tag1, tag2);
