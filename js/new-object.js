// new Object() 방식
// ES6 이전 javascript 언어조차 객체 리터럴 방식을 권장하기 때문에 참고로만 알아둠.
const user2 = new Object();

user2.age = 10;
user2.name = "Dave";
user2.get_data = function () {
  return 1 + 2;
};
//메소드를 프로퍼리처럼 접근하는 객체 리터럴 방식과 달리, 이 방식에서는 함수처럼 접근
console.log(user2.age, user2.name, user2.get_data());
