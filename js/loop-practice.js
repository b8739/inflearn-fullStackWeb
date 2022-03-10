const boy = {
  name: "james",
  age: 10,
  get_message: function () {
    console.log("hi im james");
  },
};

console.log(Object.keys(boy));

for (let data in boy) {
  console.log(data);
}
// let i = 0;
// while (i < 5) {
//   console.log((i += 1));
// }

for (let i = 0; i < 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}
