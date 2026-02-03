// export {};

var userName: string = 'Amir shah';
console.log(userName);

var str: string = "Hello world";
console.log(str);

var num1: number = 20;
var num2: number = 30;
// var num3 = '20';
var total:number = num1 + num2;
console.log("Total is: " + total);
var num : number = 42;
console.log(num);


let myAge: number = 25;
console.log(myAge);

let i: number = 10;
console.log(i);

// let person : {name: string, age:number} =
// {
//     name:'Amir shah',
//     age: 25
// }

let id : number | string = '12345'; //if you want to assign multiple types to a variable
console.log(id);

id = 67890;
console.log(id);

// interface user {
//     name: string;
//     age: number;

// }

var numb = '20';


// Number Array 
var numArray: number[] = [10,20,30,40,50];

// for (let i = 0; i < numArray.length; i++) {
//     console.log(numArray[i])
// }

// for (const element of numArray) {
//     console.log("Array of numbers " + element);
// }



let strArray : string[] = ['Amir', 'Shah', 'is', 'a', 'good', 'boy'];


for (const element of strArray) {
    console.log("Array of strings " + element);
}


let anytypeofData : any = 100;
anytypeofData = "Now I'm a string";
anytypeofData = true;
// anytypeofData = {name: 'Amir shah', age: 25};
console.log(anytypeofData);
// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }


var number : number | string = 20;    //Union Type
console.log(number)
number = 'Twenty';
console.log(number);

var item:boolean = true;
// console.log(item)

if(item){
    console.log('The item value is true')
}
else {
    console.log('The item value is false ')
}


// null and undefined

var n: null = null;
// var u: undefined = undefined;
console.log(n);
// console.log(u);


// var a: number = 10;
// var b: number = 20;

// console.log('a = '+ a + " b ="+ b);

// 1️⃣ Number
// Declare a variable age as a number and assign your age to it.

var age:number = 25;
console.log(`I am  ${age} Years old`)
// Create a function that takes two numbers and returns their sum.
function add(a:number , b: number){
    return a + b;
}

var callFunc = add(20,230);
console.log(`a  + b = ${callFunc}`)


// 2️⃣ String
// Declare a variable userName as a string and print "Hello, [userName]".
var userName: string = 'Amir shah';
console.log(`Hello ${userName}`)
// Create a function that takes a string and returns its length.
function strLength(a:string, b:string){
    return a.length + b.length;

}

var totalLength = strLength('amir shah', 'khan')
console.log(totalLength)


// 3️⃣ Null
// Declare a variable result that can be either null or a number. Assign it null first, then a number.

var result: null | number = null;
console.log(result)
result = 20;
console.log(result)


// 4️⃣ Any
// Create a variable data of type any. Assign a string, then a number, then a boolean to it.
var data:any = 'String value';
data = 200;
data = true;

// Create a function that takes any type parameter and prints it.
function anyData(a:any){
console.log(a);
}

anyData('My Name is Amir shah ');
anyData(20);
anyData(500);


// 5️⃣ Union
// Declare a variable id that can be either string or number. Assign both types to it in different lines.
var id1:string | number;
id1 = 20;
id1 = 'Hello world ';

// Create a function that takes a string | number parameter and returns its string representation.
function unionData(a:string | number){
    return a.toString();
}

var strData = unionData('khan');
console.log(strData);
var strData = unionData(123);
console.log(strData);


// 6️⃣ Array
// Create an array of numbers [1, 2, 3, 4]. Add one more number using push().
var arr1: number[] = [10,20,30,40];
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
let persons: {fullName:string, age:number }= {
fullName : 'Sohail khan',
age: 20
}

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



function printNumbers( arr: (string | number )[]){
    arr.filter( (element) => {
        if (typeof element === 'string') {
        console.log(element);
    }   
})

}

printNumbers([10, 'amir', 20, 'shah', 30, 'khan']);



// 2️⃣ Variable that can be string | null and handling both cases
var maybeName: string | null = 'Amir '
function greet (name: string | null){
    if (name === null) {
        console.log('Hello , Guest!')
    }
    else{
        console.log(`Hello ${name}`);
    }
}

greet(null)
greet(maybeName);



// Object with properties id, name, and status ("active" | "inactive")
// type Status = "active" | "inactive";

// var user: {id:number , name:string , status:Status} = {
//     id:1,
//     name:'Aziz ullah',
//     status:'active'
// }

// console.log(user);

// user.status = 'inactive';
// console.log(user)


type Status = 'active ' | 'inactive ';

var user: {id:number , name:string, status:Status} = {
   
   id:1,
name:'Amir shah',
status:'active '

}

console.log(user)
user.status = 'inactive ';
console.log(user )


// 🟢 Level 1 – Basics

// Declare a variable price that can be a number or string.
// Assign 100 first, then "Free".
var price: number | string;
price = 100;
console.log(price)
price = 'Free';
console.log(price)

// Create a function that takes a string and returns true if its length is greater than 5, otherwise false.
function findLength(s:string){
 if (s.length > 5 ) {
    return true;
 }
 else{
    return false;
 }
}

console.log(findLength('amir shah'));
// Create an array of numbers and calculate the sum of all elements.
var arr3:number[] = [20,30,40,50,100];
var calculateArr = 0;
for (let index = 0; index < arr3.length; index++) {
    const element = arr3[index];
    calculateArr += element;
    
}

console.log(calculateArr)


// 🟡 Level 2 – Union & Null
// Declare a variable email that can be string | null.
// Write a function that prints "No email provided" if it is null.

var email : string | null = null;

function printEmail(email:string | null){
    if (email === null ) {
        console.log('NO Email Provided ')
    }
    else{
        console.log('email', email);
    }
}

printEmail(email);

// Create a function that accepts number | string.
// If number → multiply by 2
// If string → convert to uppercase

function checkNum(a:number | string){
   if (typeof a === 'number') {
    console.log(a * 2)
   }
   else if (typeof a === 'string'){
    var covnertedToUperrcase = a.toUpperCase();
    console.log(covnertedToUperrcase)
   }
   
  }

  checkNum('amir shah');


//  Create an array that can contain only strings or numbers.
// Loop and print each element.
  
var mixArray: (number | string)[] = [1,'khan', 20, 2, 'shah'];

for (const element of mixArray) {
    console.log(element)
}


// Create an object product with:
// id (number)
// name (string)
// price (number)
// Write a function that prints product details.

var obj: {id:number, name:string , price:number} ={
    id:1,
    name:'Apple',
    price:200
    
}

function printProducts(){
   console.log(`Product ID: ${obj.id}, Product Name: ${obj.name}, Product Price: ${obj.price}`)
}


printProducts();

// Create a function that accepts an array of string | number and returns only strings.
// Method 1
// var mixArr: (string | number)[] = [1,2,'khan', 4,5, 'amir', 'shah', 'from pakistan'];

// function checkArr(){
//        mixArr.forEach((ele)=>{
//         if (typeof ele === 'string') {
//            console.log(ele)
//         }
//     })
// }

// checkArr();


// Method 2
// function filterStrings(arr: (string | number)[]): string[] {
//     return arr.filter((item): item is string => typeof item === 'string');
// }

// var mixArr: (string | number)[] = [1,2,'khan', 4,5, 'amir', 'shah', 'from pakistan'];
// var stringArr = filterStrings(mixArr);
// console.log(stringArr);



// function filterStrings(arr:(string | number )[]):string[]{
//     return arr.filter((ele)=> typeof ele === 'string');
// }
 
 
// var mixArr: (string | number)[] = [1,2,'khan', 4,5, 'amir', 'shah', 'from kpk pakistan'];

// var stringArr = filterStrings(mixArr);
// console.log(stringArr);



function filString(arr:(string | number )[]): string[]{
    return arr.filter((ele)=> typeof ele === 'string');
    
}

var mixArr: (string | number)[] = [1,2,'khan', 4,5, 'amir', 'shah', 'from pakistan'];
var strArr = filString(mixArr);
console.log(strArr);


// Declare an object user with:
// id (number)
// name (string | null)
// Write a function that safely prints the user name.

var obj1: {id:number , name:(string | null)} = {
    id:1,
    name:null
}

function objFunction(){
    if(obj1.name === null){
        console.log("hello")
    }
    else {
        console.log(obj1.name);
    }
}
objFunction();



// Create an array of objects where each object has:
// title (string)
// status ("active" | "inactive")
// Filter only the active items.

// type Status1 = 'active' | 'inactive ';
// var objArray: {title:string, status:Status1}[]= 
// [{
//     title:'Item 1',
//     status:'active'
// },
// {
//     title:'Item 2',
//     status:'inactive '
// },  
// {
//     title:'Item 3',
//     status:'active'
// }]

// var activeItems = objArray.filter((item) => item.status === 'active');
// console.log(activeItems);




// Level 1 – Strengthen Basics
// Declare a variable score that can be number | null.
// Write a function that returns "No score" if null, otherwise returns the score.

var score: number | null = null;
function  checkScore(score) {
    if (score === null) {
        console.log('No Score')
    }
    else{
        console.log(score)
    }
}

checkScore(score)

// Create a function that takes two parameters:
// name (string)
// age (number | string)
// Print a formatted message.

function stdData(name:string , age:number |string){
    console.log(`My Name is ${name} and i am ${age} years old`)
}
stdData('sohail shah', 25)

// Create an array of numbers and return the largest number.

// var numArray1: number[] = [10,20,30,40,50,100,5];
// var largestNum = Math.max(...numArray1);
// console.log(largestNum);


// 🟡 Level 2 – Union + Arrays
// Create a function that takes an array of number | null and returns only valid numbers.
function filterNumbers(arr: (number | null)[]): number[] {
    return arr.filter((item)=> item !== null) as number[];

}

var mixedArray: (number | null)[] = [10, null, 20, 30, null, 40];
var validNumbers = filterNumbers(mixedArray);
console.log(validNumbers);


// Declare an array that can store only strings.
// Try pushing a number and observe the TypeScript error.
var stringOnlyArray: string[] = []

var pushString = stringOnlyArray.push('Amir shah');
// var pushNumber = stringOnlyArray.push(100); // This will cause a TypeScript error
console.log(stringOnlyArray);

// Create a function that accepts an array of string | number and returns the count of numbers.
// function countNumbers(arr: (string | number)[]): number {
//     return arr.filter((item) => typeof item === 'number').length;
// }

// var mixedArr: (string | number)[] = ['amir', 20, 'shah', 30, 'khan', 40];
// var numberCount = countNumbers(mixedArr);
// console.log(numberCount);


// Create an object student with:
// id (number)
// name (string)
// marks (number | null)
// Write a function that prints "Marks not available" if null.

var student: {id:number, stdName:string, marks:(number | null)} ={
    id : 2,
    stdName : 'Daud shah',
    marks : null
}

function checkMarks(){
    if(student.marks === null){
        console.log('Marks not available')
    }
    else{
        console.log(student)
    }
}

checkMarks();


// Create a function that accepts an object with:
// title (string)
// price (number | "free")
// Print different messages based on price type.

function printProductDetails(product: {title:string, price:number | 'free'}){
    if (product.price === 'free') {
        console.log(`The product ${product.title} is free of cost.`)
    }
    else{
        console.log(`The product ${product.title} costs $ ${product.price}.`)
    }
}

printProductDetails({title:'Book', price: 'free'});
printProductDetails({title:'Laptop', price: 999});
