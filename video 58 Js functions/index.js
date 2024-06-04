function nice(name) {
    console.log("Hey " + name + " you are nice!");
    console.log("Hey " + name + " you are good!");
    console.log("Hey",name,"your tshirt is nice!");
    console.log("Hey " + name + " your course is good too!");
}

// nice("Adnan");

// nice("Harry");

function sum(a, b, c = 3) {
    // console.log(a + b);
    console.log(a, b, c);
    return a + b + c;
}

// result1 = sum(4);       // NaN - Not a Number
result1 = sum(4, 8);
result2 = sum(2, 5);
result3 = sum(3, 6, 4);

console.log("Sum of these numbers are :", result1);
console.log("Sum of these numbers are :", result2);
console.log("Sum of these numbers are :", result3);

const func1 = (x)=>{
    console.log("I am an arrow function -", x);
}

func1(34);
func1(96);
func1(21);
