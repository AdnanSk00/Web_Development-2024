console.log("Hello I am 56 conditional tutorial");

let age = 1;
// let grace = 2;

// age += grace;
// console.log(age);

// console.log(age + grace);
// console.log(age - grace);
// console.log(age * grace);
// console.log(age / grace);
// console.log(age ** grace);
// console.log(age % grace);

/* 
Hii I am a 
multiline
comment 
*/

if(age==18){
    console.log("You can drive");
}

else if(age == 0){
    console.log("Are you kidding?");
}
else if(age == 1){
    console.log("Are you agian kidding?");
}

else{
    console.log("You can not drive");
}

a = 6;
b = 8;
let c = a > b ? (a - b) : (b - a);
console.log(c);
/*
translates to :-
if(a>b){
    let c = a - b;
}
else{
    let c = b - a;
}
*/