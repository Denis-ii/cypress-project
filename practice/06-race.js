function getFast() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('FAST');
        }, 500);
    });
}

function getSlow() {
    return new Promise ((resolve) => {
        serTimeout(() => {
            resolve('slow');
        }, 2000);
    });
}

Promise.race([
    getFast(),
    getSlow()
]).then((result) => {
    console.log(result);
});