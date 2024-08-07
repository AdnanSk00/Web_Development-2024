// let obj = {
//     a: 1,
//     b: "Adnan"
// }

// console.log(obj);

// let animal = {
//     eats: true
// };

// let rabbit = {
//     jumps: true
// }

// rabbit.__proto__ = animal;   // sets rabbit.[[Prototype]] = animal

class Animal{
    constructor(name){
        this.name = name;
        // 'this' is a way for us to creat a property of an object
        console.log("Object is created...");
    }
    eats(){
        console.log("Kha raha hu");
    }
    jumps(){
        console.log("Kood raha hu");
    }
    hunt(){
        console.log("Shikar kar raha hu");
    }
}

// 'extends' - No need to copy the data of Animal class in Lion class because due to extends keyword it will be automatically presesnt in Lion class. We can make fresh method or assign new data ahead in Lion class.
class Lion extends Animal{
    constructor(name){
        super(name)
        // 'super' - to call parent constructor
        console.log("Object is created and he is a lion...");
    }
    // Method Overriding -
    eats(){
        super.eats()
        console.log("kha raha hu roar");
    }
}


let a = new Animal("Bunny")
console.log(a);

let l = new Lion("Shera")
console.log(l);


console.log(a instanceof Animal);
console.log(l instanceof Lion);
console.log(a instanceof Lion);
console.log(l instanceof Animal);