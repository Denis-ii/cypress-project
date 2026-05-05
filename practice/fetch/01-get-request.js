async function getUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    const data = await response.json(); //сервер присылает body не как JS объект, а как текстовую строку. Мы говорим серверу "распакуй текст JSON в JS объект"
//Есть и другие методы:
//response.text()
//response.blob()
//response.arrayBuffer()
//response.formData()
//Но если сервер прислал JSON — используем .json().

    console.log('Всего пользователей:', data.length);
    console.log('Первый пользователь:', data[0]);
    console.log('Имя первого:', data[0].name);
    console.log('Email первого:', data[0].email);
    
}

