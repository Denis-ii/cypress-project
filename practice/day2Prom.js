function getData(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Data ' + id);
    }, 1000);
  });
}

Promise.all([
  getData(1),
  getData(2),
  getData(3)
])
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.log(error);
  });

  for (let id of [1, 2, 3]) {
  const data = await getData(id);
  console.log(data);
}

const promises = [1, 2, 3].map(id => getData(id));

const results = await Promise.all(promises);

console.log(results);