const name = "muskan"
const repoCount = 50

// console.log(name + repoCount + "Value")

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('hiteshhc')

console.log(gameName[1])

// console.log(gameName. __proto__)
// console.log(gameName.toUpperCase())
// console.log(gameName.length)
// console.log(gameName.charAt(2))

const newString = gameName.substring(0, 4)
console.log(newString)

const anotherString = gameName.slice(-8, 4)
console.log(anotherString)

const newStringOne = "     hitesh   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://muskan.com/muskan%20patel"
console.log(url.replace('%20', '_'))

console.log(url.includes('patel'))
console.log(url.includes('sundar'))

console.log(gameName.split('_'))