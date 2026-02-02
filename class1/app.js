// export {};
var userName = 'Amir shah';
console.log(userName);
var str = "Hello world";
console.log(str);
var num1 = 20;
var num2 = 30;
// var num3 = '20';
var total = num1 + num2;
console.log("Total is: " + total);
var num = 42;
console.log(num);
var myAge = 25;
console.log(myAge);
var i = 10;
console.log(i);
// let person : {name: string, age:number} =
// {
//     name:'Amir shah',
//     age: 25
// }
var id = '12345'; //if you want to assign multiple types to a variable
console.log(id);
id = 67890;
console.log(id);
// interface user {
//     name: string;
//     age: number;
// }
var numb = '20';
// Number Array 
var numArray = [10, 20, 30, 40, 50];
// for (let i = 0; i < numArray.length; i++) {
//     console.log(numArray[i])
// }
// for (const element of numArray) {
//     console.log("Array of numbers " + element);
// }
var strArray = ['Amir', 'Shah', 'is', 'a', 'good', 'boy'];
for (var _i = 0, strArray_1 = strArray; _i < strArray_1.length; _i++) {
    var element = strArray_1[_i];
    console.log("Array of strings " + element);
}
var anytypeofData = 100;
anytypeofData = "Now I'm a string";
anytypeofData = true;
// anytypeofData = {name: 'Amir shah', age: 25};
console.log(anytypeofData);
// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }
var number = 20; //Union Type
console.log(number);
number = 'Twenty';
console.log(number);
var item = true;
// console.log(item)
if (item) {
    console.log('The item value is true');
}
else {
    console.log('The item value is false ');
}
// null and undefined
var n = null;
// var u: undefined = undefined;
console.log(n);
// console.log(u);
// var a: number = 10;
// var b: number = 20;
// console.log('a = '+ a + " b ="+ b);
// 1️⃣ Number
// Declare a variable age as a number and assign your age to it.
var age = 25;
console.log("I am  ".concat(age, " Years old"));
// Create a function that takes two numbers and returns their sum.
function add(a, b) {
    return a + b;
}
var callFunc = add(20, 230);
console.log("a  + b = ".concat(callFunc));
// 2️⃣ String
// Declare a variable userName as a string and print "Hello, [userName]".
var userName = 'Amir shah';
console.log("Hello ".concat(userName));
// Create a function that takes a string and returns its length.
function strLength(a, b) {
    return a.length + b.length;
}
var totalLength = strLength('amir shah', 'khan');
console.log(totalLength);
// 3️⃣ Null
// Declare a variable result that can be either null or a number. Assign it null first, then a number.
var result = null;
console.log(result);
result = 20;
console.log(result);
// 4️⃣ Any
// Create a variable data of type any. Assign a string, then a number, then a boolean to it.
var data = 'String value';
data = 200;
data = true;
// Create a function that takes any type parameter and prints it.
function anyData(a) {
    console.log(a);
}
anyData('My Name is Amir shah ');
anyData(20);
anyData(500);
// 5️⃣ Union
// Declare a variable id that can be either string or number. Assign both types to it in different lines.
var id1;
id1 = 20;
id1 = 'Hello world ';
// Create a function that takes a string | number parameter and returns its string representation.
function unionData(a) {
    return a.toString();
}
var strData = unionData('khan');
console.log(strData);
var strData = unionData(123);
console.log(strData);
// 6️⃣ Array
// Create an array of numbers [1, 2, 3, 4]. Add one more number using push().
var arr1 = [10, 20, 30, 40];
arr1.push(50);
console.log(arr1);
// console.log(arr1[0]);
// console.log(arr1[1]);
// console.log(arr1[2]);
// console.log(arr1[3]);
// console.log(arr1[4]);
// for (const element of arr1) {
//     console.log(element)
// }
// Create a string array of names and loop over it to print each name.
// var stdName: string[] = ['amir shah', 'obaid', 'junaid ', 'saif ullah ', 'khanzala', 'Ismail'];
// console.log(stdName);
// for (const element of stdName) {
//     console.log(element)
// }
// 7️⃣ Object
// Declare an object person with properties name (string) and age (number). Print name and age.
var persons = {
    fullName: 'Sohail khan',
    age: 20
};
console.log(persons.fullName);
// console.log(persons.age);
// Update the object’s age and print the updated object.
persons.age = 21;
console.log(age);
// 1️⃣ Function: Print only numbers from an array of string | number
// function printNumbers (item:(string | number)[]) {
//      item.forEach(element =>{
//         if (typeof element === 'number') {
//             console.log(element);
//         }
//      })
// }
// printNumbers([10, 'amir', 20, 'shah', 30, 'khan']);
function printNumbers(arr) {
    arr.filter(function (element) {
        if (typeof element === 'string') {
            console.log(element);
        }
    });
}
printNumbers([10, 'amir', 20, 'shah', 30, 'khan']);
// 2️⃣ Variable that can be string | null and handling both cases
var maybeName = 'Amir ';
function greet(name) {
    if (name === null) {
        console.log('Hello , Guest!');
    }
    else {
        console.log("Hello ".concat(name));
    }
}
greet(null);
greet(maybeName);
var user = {
    id: 1,
    name: 'Amir shah',
    status: 'active '
};
console.log(user);
user.status = 'inactive ';
console.log(user);
// 🟢 Level 1 – Basics
// Declare a variable price that can be a number or string.
// Assign 100 first, then "Free".
var price;
price = 100;
console.log(price);
price = 'Free';
console.log(price);
// Create a function that takes a string and returns true if its length is greater than 5, otherwise false.
function findLength(s) {
    if (s.length > 5) {
        return true;
    }
    else {
        return false;
    }
}
console.log(findLength('amir shah'));
// Create an array of numbers and calculate the sum of all elements.
var arr3 = [20, 30, 40, 50, 100];
var calculateArr = 0;
for (var index = 0; index < arr3.length; index++) {
    var element = arr3[index];
    calculateArr += element;
}
console.log(calculateArr);
// 🟡 Level 2 – Union & Null
// Declare a variable email that can be string | null.
// Write a function that prints "No email provided" if it is null.
var email = null;
function printEmail(email) {
    if (email === null) {
        console.log('NO Email Provided ');
    }
    else {
        console.log('email', email);
    }
}
printEmail(email);
// Create a function that accepts number | string.
// If number → multiply by 2
// If string → convert to uppercase
function checkNum(a) {
    if (typeof a === 'number') {
        console.log(a * 2);
    }
    else if (typeof a === 'string') {
        var covnertedToUperrcase = a.toUpperCase();
        console.log(covnertedToUperrcase);
    }
}
checkNum('amir shah');
//  Create an array that can contain only strings or numbers.
// Loop and print each element.
var mixArray = [1, 'khan', 20, 2, 'shah'];
for (var _a = 0, mixArray_1 = mixArray; _a < mixArray_1.length; _a++) {
    var element = mixArray_1[_a];
    console.log(element);
}
