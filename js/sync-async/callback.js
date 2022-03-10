const sayHi = (callback) => {
  setTimeout(() => {
    console.log("hi");
    callback();
  }, 2000);
};

const sayBye = () => {
  console.log("bye");
};

sayHi(sayBye);
