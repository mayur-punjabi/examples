const shouldResolve = true;

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (shouldResolve) {
      resolve(10);
    } else {
      reject("rejected");
    }
  }, 1000);
});

const fn1 = async () => {
  try {
    const result = await myPromise;
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

fn1();

// (async () => {
//   try {
//     const first = await myPromise;
//     console.log(first);
//     const second = await myPromise;
//     console.log(second * 10);
//   } catch (err) {
//     console.log(err);
//   }
// })();

// const pause = (time) => new Promise((resolve) => setTimeout(resolve, time));

// (async () => {
//   try {
//     console.log(10);
//     await pause(1000);
//     console.log(100);
//     await pause(1000);
//     console.log(1000);
//   } catch (err) {
//     console.log(err);
//   }
// })();
