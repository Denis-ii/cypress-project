interface User{
    id: number;
    name: string;
    email: string;
    age?: number;
}

const OurUser: User = {
    id: 1,
    name: 'Alex',
    email: 'alex@test.com',
    age: 30// можно и без age
    
};

const guys: User[] = [
    {  name: 'Alex', email: 'fe@tomail.com', id: 1 },
    { id: 2, name: 'Biba', email: 'boba@tomail.com', age: 10}
]

console.log(OurUser);

