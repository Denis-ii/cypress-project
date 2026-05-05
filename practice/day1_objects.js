const testUser = {
    name: "Aliya",
    age: 23,
    credentials: {
        email: "aliya@test.com",
        password: "Test1234!"
    },
    permsimmions: {
        canRead: true,
        canWrite: false
    }
}

const { name, age } = testUser
const { email, password } = testUser.credentials

console.log(testUser.adress?.city)

const role = "tester"
const shortUser = { name, age, role }

console.log(Object.keys(testUser))