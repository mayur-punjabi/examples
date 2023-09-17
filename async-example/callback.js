const displayData = (data) => {
  console.log(data);
};

const delayDisplay = (data, callback) => {
  setTimeout(() => {
    callback(data);
  }, 1000);
};

delayDisplay("Hello", displayData);
