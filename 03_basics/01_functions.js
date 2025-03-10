// function SayMyName(){
//     console.log("m");
//     console.log("u");
//     console.log("s");
//     console.log("k");
//     console.log("a");
//     console.log("n");

// }
// SayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1, number2);
    
// }

function addTwoNumbers(number1, number2){

//   let result = number1 + number2 
//   return result   
return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);

function logingUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(logingUserMessage("Muskan"))
// console.log(logingUserMessage("muskan"))

function calculateCardPrice(...num1){
    return num1
}
// console.log(calculateCardPrice(200, 400, 500, 2000));

const user = {
    UserName: "muskan",
    price: 199
}
function handleObject (anyobject){
console.log(`UserName is ${anyobject.UserName} and price is ${anyobject.price}`)
}
// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[0]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));