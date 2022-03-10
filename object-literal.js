//객체 리터럴
const user = {
  age: 27,
  name: "jaeho",
  get get_age() {
    return this.age;
  },
  set set_age(val) {
    this.age = val;
  },
};
console.log(user.get_age);
// NOT: console.log(user.set_age(15));
user.set_age = 26;
console.log(user.get_age);
