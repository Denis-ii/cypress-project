const baseUrl = "https://example.com"
let loginAttempts = 0

const testUser = {
  email: "test@example.com",
  password: "Test1234!",
  role: "admin",
  isActive: true
}

const testUrls = ["/login", "/register", "/profile"]

console.log(baseUrl)
console.log(testUser)
console.log(testUrls)

const canLogin = (user) => user.isActive && user.age >= 18

const testUser1 = { name: "Aliya", age: 25, isActive: true }
const testUser2 = { name: "Dias", age: 17, isActive: true }
const testUser3 = { name: "Marat", age: 30, isActive: false }

console.log(canLogin(testUser1))  
console.log(canLogin(testUser2))  
console.log(canLogin(testUser3))  
console.log(getUserInfo("Aliya", "admin"))
console.log(getUserInfo("Dias"))

users.forEach(user => {
  console.log(`${user.name} - ${user.isActive ? "active" : "not active"}`)
})