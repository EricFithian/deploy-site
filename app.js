console.log("Hello world!");

// declaration is just the variable and it'll be set later
let someVar;
// prompt is a built in function by the creators of JS to allow us to enter whatever we want as a user in the code
// let username = prompt("Enter your username"); 
someVar = "5";
// someVar is a string of 5
// += is just shorthand for saying someVar = someVar + 3;
someVar += 3;
// -= is just shorthand for saying someVar = someVar - 2;
someVar -= 2;
// console.log(username);
// someVar = username.length;
console.log(someVar);
let thisItem = [1, "something", {a: "b"}, [4, 5], 7];

// if("+" && typeof item1 === "string" && typeof item2 === 'number') {
//     item2.toString()
// } else if("-" && typeof item1 === "string" && typeof item2 === 'number') {
//     // parseInt(item1);
//     // parseFloat(item1).toFixed(2);
// }

for(let i = 0; i < thisItem.length; i++) {
    console.log(`The value at index ${i} is ${thisItem[i]}`);
}
console.log(thisItem[3][0]);

let myObject = {
    key: "value",
    someArr: [1, 2, 3, 5]
}

// if(someStatement) {
//     // Run this code
// } else {
//     // Run this other code 
// }

console.log(typeof someVar);

let myName = "Eric";
const anotherName = "Luke";
// console.log(myName);

// const and let

// let means it can be updated. const means it better not be

myName = "John";
// anotherName = "Joshua";

// console.log(anotherName);

// Showing that I can strings together. 
let firstName = "eric";
let lastName = "fithian";
let fullName = `My full name is: ${firstName} ${lastName}`;
// console.log(`I am writing something
// that will be on multiple lines
// when it prints out`);
console.log(fullName);