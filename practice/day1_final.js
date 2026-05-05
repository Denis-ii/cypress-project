const users = [
  { name: "Aliya", age: 25, isActive: true,  role: "tester" },
  { name: "Dias",  age: 17, isActive: false, role: "developer" },
  { name: "Marat", age: 30, isActive: true,  role: "tester" },
  { name: "Zara",  age: 22, isActive: false, role: "admin" }
]

const baseCredentials = { email: "test@test.com", password: "Test1234!" }
const adminUser = { ...baseCredentials, role: "admin" }
const guestUser = { ...baseCredentials, role: "guest" }

const getActiveAdults = (users) => {
  return users.filter(user => user.isActive && user.age >= 18)
}

const getNamesByRole = (users, role) => {
  return users
    .filter(user => user.role === role)
    .map(user => user.name)
}

const findUser = (users, name) => {
  const found = users.find(user => user.name === name)
  return found ?? null
}

const hasActiveTesters = (users) => {
  return users.some(user => user.role === "tester" && user.isActive)
}

console.log("Активные взрослые:", getActiveAdults(users))
console.log("Тестировщики:", getNamesByRole(users, "tester"))
console.log("Найден:", findUser(users, "Marat"))
console.log("Не найден:", findUser(users, "Никто"))
console.log("Есть активные тестировщики:", hasActiveTesters(users))
console.log("Admin credentials:", adminUser)
console.log("Guest credentials:", guestUser)

