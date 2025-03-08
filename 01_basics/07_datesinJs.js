// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocslString());
// console.log(typeof myDate);

// let myCreatedData  = new Date(2003, 3, 23)
// let myCreatedData  = new Date(2003, 3, 23, 5, 3)
// let myCreatedData  = new Date("2003-04-23")
let myCreatedData  = new Date("03-04-2003")
// console.log(myCreatedData.toDateString());
// console.log(myCreatedData.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedData.getTime())
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate)
// console.log(newDate.getDate())
// console.log(newDate.getMonth())
// console.log(newDate.getDay())

// `${newDate.getDay()} and the time`

newDate.toLocaleString('default', {
    weekday: "long",
})

