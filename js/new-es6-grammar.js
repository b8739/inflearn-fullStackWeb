const data = [1, 2];
// 삼항 연산자
data.length === 2 ? console.log("Length is Two") : console.log("nope");
let student = data.length === 2 ? "jaeho" : "not jaeho";
console.log(student);

// 객체 구조 분해 할당
const person = {
  name: "jaeho",
  age: 27,
};
const { name, age } = person;
console.log(age);

//배열 분해 할당
let myArray = [1, 2, 3, 4, 5];
let [first, second, third, fourth] = myArray;
console.log(first, second, third, fourth);
// ... 문법
let myArray2 = [1, 2, 3, 4, 5];
// let [initial, ...rest,rest2] = myArray2는 안됨, ...뒤는 하나만 가능
let [initial, ...rest] = myArray2;
console.log(rest);
