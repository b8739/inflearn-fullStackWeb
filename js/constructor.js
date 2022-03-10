// 생성자 함수는 함수를 의미함
// new 함수()를 쓰면 객체처럼 사용 가능
// ES6 이전 javascript 언어조차 객체 리터럴 방식을 권장하기 때문에 참고로만 알아둠.

function User(age, name) {
  this.age = age;
  this.name = name;
  this.get_age = function () {
    return this.age;
  };
}

const ron = new User(10, "Ron");

// console.log(typeof ron);
// console.log(ron.age, ron.name);
// //메소드를 프로퍼리처럼 접근하는 객체 리터럴 방식과 달리, 이 방식에서는 함수처럼 접근
// console.log(ron.get_age());

User.prototype.message = function () {
  return "Hello";
};

User.prototype.hobby = "coding";

const james = new User(10, "James", "league of legend");
console.log(james);
