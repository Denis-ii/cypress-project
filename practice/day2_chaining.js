function getUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({id: 1, name: 'Alex'});
        }, 1000);
    });
}

function getOrders(userId) {
    return new Promise ((resolve, reject) =>{
        setTimeout(() => {
            if (userId !== 1) {
            reject('error');
            } else {
                resolve(['order1', 'order2']);
            }
        }, 1000);
    });
}

function getOrderDetails(order) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({order, status: 'delivered'});
        }, 1000);
    });
}

getUser()
.then((user) => {
    console.log('User', user);
    return getOrders(user.id);
})
.then((orders) => {
    console.log('Orders:', orders);
    return getOrderDetails(orders[0]);
})
.then((details) => {
    console.log('Details:', details);
})
.catch((error) =>{
    console.log('Error:(', error);
})
.finally(() => {
  console.log('DONE');
});
