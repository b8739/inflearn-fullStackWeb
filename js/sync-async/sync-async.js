//1st Example
const runPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let num = 10;
    if (num > 11) {
      resolve(num);
    } else reject("error");
  }, 1000);
});
runPromise
  //then부분이 또 하나의 promise인 셈
  .then(
    //resolve
    (item) => {
      console.log("success", item);
    }, //reject
    (err) => {
      console.log(err);
    }
  )
  .then(
    () => {
      //resolve
      console.log("success2");
    },
    () => {
      //reject
      console.log("error2");
    }
  );

let menu = "pasta";

//2nd Example
const pastaLover = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (menu === "pasta") {
      resolve("파스타네, 먹을게");
    } else {
      reject("파스타 아니네, 끼니 거를게");
    }
  }, 1000);
});

pastaLover.then(
  (res) => {
    console.log(res);
  },
  (err) => {
    console.log(err);
  }
);
