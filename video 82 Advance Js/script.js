async function sleep(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(45)
        }, (1000));
    })
}

// IIFE :-
// (async function main(){
    // let a = await sleep()
    // console.log(a);
    // let b = await sleep()
    // console.log(b);
// })()
// Above function() invoked immediately i.e IIFE 
// IIFE - is a JavaScript function that runs as soon as it is defined.
// ... --> spread operator 


// Destructing & Spread Syntax :-
function sum(a, b, c){
    return a+b+c;
}

// (async function main(){
//     // // let x, y = [1, 5]
//     // let [x, y, ...z] = [1, 5, 7, 8, 9, 10]
//     // // console.log(x, y, ...z);
//     // console.log(x, y, z);

//     let obj = {
//         a: 1, 
//         b: 2, 
//         c: 3
//     }
//     let {a, b} = obj
//     console.log(a, b);

//     let arr = [1, 5, 8]
//     // console.log(arr[0] + arr[1] + arr[2]);
//     console.log(sum(arr[0], arr[1], arr[2]));
//     console.log(sum(...arr));

//     let arr1 = [12, 42, 30]
//     let obj1 = {...arr1}
//     console.log(obj1);

//     const p = "the", q = "no"
//     const r = {p, q}
//     console.log(r);

// })()


// Hoisting :-
// Hoisting is unable to be done in 'let & const'
(async function main(){
    // var z1
    console.log(z1);



    var z1 = 9;
    // var z1 -> declaration will be gone into the top of this block only(local variable) therefor console.log() will display 'undefined'
    // let & const --> If we do same access before initialization with let & const, console display 'error'
})()


hello("Adnan")          
function hello(name){       // func() declaration
    console.log(name);
}