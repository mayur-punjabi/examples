const fn1 = () => {
  console.log("1");
};

const fn2 = () => {
  console.log("22");
};

const fn = () => {
  console.log("3");
};

export default () => {
  console.log("4");
};

export { fn1, fn2, fn as fn3 };
