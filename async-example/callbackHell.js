const displayData = (data) => {
  console.log(data);
};

const delayDisplay = (data, callback) => {
  setTimeout(() => {
    callback(data);

    setTimeout(() => {
      callback(data);

      setTimeout(() => {
        callback(data);

        setTimeout(() => {
          callback(data);

          setTimeout(() => {
            callback(data);
          }, 5000);
        }, 4000);
      }, 3000);
    }, 2000);
  }, 1000);
};

delayDisplay("Hello", displayData);
