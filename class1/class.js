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
