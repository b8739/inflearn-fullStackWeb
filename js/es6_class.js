//javascript es6와 클래스
// es6에서 다른 언어의 객체 지향 문법과 유사한 class키워드 기반 객체 생성 문법이 표준화됨
// 하지만 지금 까지도 javascript 객체 리터럴로 코드 작성이 일반적
// javascript로 그렇게 복잡한 코드를 작성할 일이 별로 없고, 기존 객체 리터럴 방식에 익숙한 개발자가 많기 떄문

// 이 안에서는 function이라는 keyword를 쓰지 않음
class Person {
  constructor(name) {
    this.name = name;
  }
  get_message() {
    return "hello";
  }
}
const coco = new Person("coco");
console.log(coco.get_message());

class Brand extends Person {
  constructor(name, brand) {
    super(name);
    this.brand = brand;
  }
}
const coco_chanel = new Brand("coco", "coco_chanel");

console.log(coco_chanel.brand);
