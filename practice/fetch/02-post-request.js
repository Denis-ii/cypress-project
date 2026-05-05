async function createUser() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'Post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ //Сервер ждёт JSON-текст. Поэтому JSON.stringify() = "преврати JS объект в JSON строку"
            name: 'Vanya',
            email: 'Vanya@test.com'
        })
    });

    console.log('Status:', response.status);
    console.log('OK:', response.ok);
    if(!response.ok) {
        console.log('❌ Ошибка запроса');
    } else {
         console.log('✅ Всё ок');
    }
    
    const data = await response.json();
    console.log(data);
}

createUser();