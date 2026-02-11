var Product = /** @class */ (function () {
    function Product(name, price, pId) {
        this.inCard = false;
        this.isOrdered = false;
        this.name = name;
        this.price = price;
        this.pId = pId;
    }
    Product.prototype.addtoCard = function () {
        this.inCard = true;
        console.log("".concat(this.name, " is added to card"));
    };
    Product.prototype.buyProduct = function () {
        if (this.inCard) {
            this.isOrdered = true;
            console.log("".concat(this.name, " is ordered successfully"));
        }
        else {
            console.log("Please add ".concat(this.name, " to card before ordering"));
        }
    };
    return Product;
}());
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
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}());
var person1 = new Person('amir shah', 25);
console.log("Person name is :".concat(person1.name, ", and person age is : ").concat(person1.age));
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
var Student = /** @class */ (function () {
    function Student(name, grade) {
        this.name = name;
        this.grade = grade;
    }
    return Student;
}());
var student1 = new Student('khan', 'A');
console.log(student1);
var Person1 = /** @class */ (function () {
    function Person1(name, age) {
        this.name = name;
        this.age = age;
    }
    Person1.prototype.greet = function () {
        console.log("Hello, my name is ".concat(this.name, " and I am ").concat(this.age, " years old."));
    };
    return Person1;
}());
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
var Player = /** @class */ (function () {
    function Player(name, score) {
        this.name = name;
        this.score = score;
    }
    Player.prototype.increaseScore = function (points) {
        this.score += points;
        console.log("".concat(this.name, "'s score increased by ").concat(points, ", new score is ").concat(this.score));
    };
    return Player;
}());
var player1 = new Player('Shahid Afridi', 50);
player1.increaseScore(6);
// Create a class with:
// public
// private
// protected properties
// Try accessing them inside and outside the class.
var Employee = /** @class */ (function () {
    function Employee(name, salary, department) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }
    Employee.prototype.getSalary = function () {
        return this.salary;
    };
    Employee.prototype.getDepartment = function () {
        return this.department;
    };
    return Employee;
}());
var emp1 = new Employee('John Doe', 50000, 'IT');
console.log(emp1.name);
console.log(emp1.getSalary());
console.log(emp1.getDepartment());
// Use readonly in a class (like an id that cannot change).
var User = /** @class */ (function () {
    function User(id, name) {
        this._id = id;
        this.name = name;
    }
    return User;
}());
var user1 = new User(1, 'Alice');
console.log(user1._id);
console.log(user1.name);
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.area = function () {
        return Math.PI * this.radius * this.radius;
    };
    return Circle;
}());
var circle1 = new Circle(5);
console.log("Area of the circle is: ".concat(circle1.area()));
