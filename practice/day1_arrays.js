const users = [
  { name: "Aliya", age: 25, isActive: true,  role: "tester" },
  { name: "Dias",  age: 17, isActive: false, role: "developer" },
  { name: "Marat", age: 30, isActive: true,  role: "tester" },
  { name: "Zara",  age: 22, isActive: false, role: "admin" }
]

const activeUsers = users.filter(user => user.isActive)

const names = users.map(user => user.name)

const allActive = users.every(user => user.isActive)

const foundUser = users.find(user => user.name = "Zara")

const hasMinors = users.some(user => user.age < 18)

users.forEach(user => {
    console.log(`${user.name} - ${user.isActive ? "active" : "not active"}`)
})

const baseUser = { email: "test@test.com", password: "Test1234!" }
const adminUser = { ...baseUser, role: "admin" }
const guestUser = { ...baseUser, role: "guest" }

console.log("Активные:", activeUsers)
console.log("Имена:", names)
console.log("Найден:", foundUser)
console.log("Есть несовершеннолетние:", hasMinors)
console.log("Все активны:", allActive)
console.log("Admin:", adminUser)
console.log("Guest:", guestUser)

