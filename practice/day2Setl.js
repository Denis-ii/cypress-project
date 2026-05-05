function getData(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      if (id === 2) {
        reject('Error ' + id);
      } else {
        resolve('Data ' + id);
      }

    }, 1000);
  });
}

Promise.allSettled([
  getData(1),
  getData(2),
  getData(3)
])
  .then((results) => {
     results.forEach((item) => {
  if (item.status === 'fulfilled') {
    console.log('OK:', item.value);
  } else {
    console.log('FAIL:', item.reason);
  }
});
})
