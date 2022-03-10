// 변수값 교환하기

let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(b);

//함수 리턴 시 여러 데이터 넘겨주기
function getData() {
  return [1, 2, 3];
}
let [one, two] = getData();
console.log(one, two);

//문자열 분리해서, 각각 변수에 대입

let data = "Hello World Jaeho";

console.log(data.split(" "));

//문자열 분리해서, 각각 변수에 대입

let [word1, word2, word3] = data.split(" ");
console.log(word1, word2, word3);

//Rest 파라미터

function getDataRest(...rest) {
  console.log(rest);
}

getDataRest(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

//Spread 파라미터
let words = ["Hello", "World", "I'm", "coder"];
console.log(...words);

//Spread 활용 (배열의 원소를 각각의 패러미터로 넣으려고 할 때 유용 )
const func = (a, b, c) => {
  console.log(a);
  console.log(b);
  console.log(c);
};

func(...words);

//Spread 활용
const data1 = [1, 2, 3];
const data2 = [0, ...data1, 4, 5];
console.log(...data2);

//concat with spread
const arrayarray = [1, 2, 3];
const arrayarray2 = [8, 9, 10];
console.log(arrayarray.concat([4, 5, 6, 7], ...arrayarray2));
