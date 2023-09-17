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

// console.log(myPromise);

myPromise
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

// myPromise
//   .then((data) => {
//     console.log(data);
//     return data * 10;
//   })
//   .then((data2) => {
//     console.log(data2);
//     return data2 * 10;
//   })
//   .then((data3) => {
//     console.log(data3);
//     return data3 * 10;
//   })
//   .catch((err) => {
//     console.log(err);
//   });
