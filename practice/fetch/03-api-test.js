async function createUserTest() {
    const responce = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: 'Maga',
            email: 'Maga@test.com'
        })
    });
    
    const info = await responce.json();

    if (responce.status !== 201){
        throw new Error('❌ Неверный статус код');
    }

    if (info.name !== 'Ivan') {
        throw new Error('❌ Неверное имя');
    }

    if (info.email !== 'Ivan@test.com') {
        throw new Error('❌ Неверный email');
    }

    console.log('✅ Тест прошёл');
}

createUserTest();
