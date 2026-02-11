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


class Person1 {
    name: string 
    age: number
    constructor(name: string , age : number){
        this.name = name;
        this.age = age;
    }

    greet():void {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

var p1 = new Person1('amir shah', 25);

p1.greet();



// Add a method to a class that updates a property (example: increase score, change name, etc).

// class Player {
//     name: string
//     score: number
//     constructor(name: string, score: number){
//         this.name = name;
//         this.score = score;
//     }
//     increaseScore(points: number): void {
//         this.score += points;
//         console.log(`${this.name}'s score increased by ${points}. New score: ${this.score}`);
//     }

// }


// var player1 = new Player('Shahid Afridi', 50);
// player1.increaseScore(10);


class Player {
    name: string
    score: number

    constructor(name:string, score: number){
        this.name = name;
        this.score = score;
    }

    increaseScore(points: number):void{
        this.score += points;
        console.log(`${this.name}'s score increased by ${points}, new score is ${this.score}`)
    }
}

var player1 = new Player('Shahid Afridi', 50);
player1.increaseScore(6)


// Create a class with:
// public
// private
// protected properties
// Try accessing them inside and outside the class.

class Employee{
    public name: string 
    private salary : number
    protected department: string 
    constructor(name: string, salary: number , department: string){
        this.name = name;
        this.salary = salary;
        this.department = department;
    }

    getSalary(): number {
        return this.salary;
    }
    
    getDepartment(): string {
        return this.department;
    }
}


var emp1 = new Employee('John Doe', 50000, 'IT');
console.log(emp1.name); 
console.log(emp1.getSalary()); 
console.log(emp1.getDepartment()); 


// Use readonly in a class (like an id that cannot change).

class User {
    readonly _id: number
    name:string 
    constructor(id: number, name: string){
        this._id = id;
        this.name = name;
    }
}

var user1 = new User(1, 'Alice');
console.log(user1._id); 
console.log(user1.name);

// Create a class that implements an interface.

interface Shape {
    area(): number;
}

class Circle implements Shape {
    radius: number  
    constructor(radius: number){
        this.radius = radius;
    }
    area(): number {
        return Math.PI * this.radius * this.radius;
    }
}

var circle1 = new Circle(5);
console.log(`Area of the circle is: ${circle1.area()}`);

