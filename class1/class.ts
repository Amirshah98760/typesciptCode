class Product {
    name:  string
    price: number
    pId: number
    inCard: boolean = false
    isOrdered: boolean = false
    constructor(name: string, price: number, pId: number){
        this.name = name;
        this.price = price;
        this.pId = pId;
    }

addtoCard():void{
    this.inCard = true;
    console.log(`${this.name} is added to card`);
}

buyProduct():void{
    if(this.inCard){
        this.isOrdered = true;
        console.log(`${this.name} is ordered successfully`);
    }else{
        console.log(`Please add ${this.name} to card before ordering`);
    }
}
} 


var product1 = new Product("Iphone", 100000, 1); 
product1.addtoCard();
product1.buyProduct();
console.log(product1.name);
console.log(product1.price);
console.log(product1.pId);

// Create a Person class with:
// name (string)
// age (number)
// a method greet() that prints a greeting


class Person {
    name: string
    age:number
    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }
}

var person1 = new Person('amir shah', 25);
console.log(`Person name is :${person1.name}, and person age is : ${person1.age}`);


// Create a class Car with:
// brand
// year

// class Car {
//     brand: string
//     year: number
//     // Add a method that returns how old the car is.
//   constructor(brand:string, year:number){
//     this.brand = brand;
//     this.year = year;
//   }

//   getCarAge(): number {
//     const currentYear = new Date().getFullYear();
//     return currentYear - this.year;
//   }
// }

// var car1 = new Car('Toyota', 2010);
// console.log(`Car brand is : ${car1.brand}, and car age is : ${car1.getCarAge()} years`);


// Make a class Student with a constructor that takes name and grade.

class Student {
    name: string
    grade: string 

    constructor(name: string , grade: string){
        this.name = name ;
        this.grade = grade;
    }
}


var student1 = new Student('khan', 'A');
console.log(student1);