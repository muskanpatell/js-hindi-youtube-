//singleton

// object literal
const mySym = Symbol("key1")

const JsUser = {
    name: "Muskan",
    "full name": "Muskan Patel",
    [mySym]: "mykey1",
    age: 21,
    location: "Sehore",
    email: "muskan@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "muskan@chatgpt.com"
Object.freeze(JsUser)
JsUser.email = "muskan@microsoft.com"
console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello Js user")
}