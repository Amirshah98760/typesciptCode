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