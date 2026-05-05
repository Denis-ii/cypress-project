function getData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isSuccess = true;
            if (isSuccess){
                resolve('Данные получены');
            } else {
                reject('Ошибка полуения данных');
            }
        }, 1000);
    })
}

console.log('1');
getData()
  .then((data) => {
    console.log('2', data);
  });
console.log('3');

function checkNumber(number){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (number > 5){
                resolve('Больше 5');
            } else {
                reject('Меньше или равно 5');
            }
        }, 1000);
    })
} 

async function run (){
    try {
        const result = await checkNumber(10);
        console.log(result);
    } catch (error) {
        console.log(error);
    } finally {
        console.log('DONE');
    }
}
run();
console.log('END');