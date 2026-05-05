interface APIUser {
    id: number;
    name: string;
    email: string;
}

async function getUsersList(): Promise<APIUser[]>{ //function имяФункции(): ТипВозврата {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data: APIUser[] = await response.json();
    return data;
}
// шаблон:
//async function fn(): Promise<Type> {
//  const response = await fetch(url);
//  const data: Type = await response.json();
//  return data;
//}
async function run() {
  const users = await getUsersList();

  console.log(users[0].name);
}

run();

async function fetchData<T>(url: string): Promise<T> {
    const response = await fetch(url);
    const data: T = await response.json();
    return data;
}

interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

async function runComments() {
    const comments = await fetchData<Comment[]>(
        'https://jsonplaceholder.typicode.com/comments'
    );
    
    console.log(comments[0].email);
    console.log(comments[0].body);
    
}

runComments();