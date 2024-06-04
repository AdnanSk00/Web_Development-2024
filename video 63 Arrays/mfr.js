console.log(".....Map, Filter & Reduce in array.....");

let arr = [1, 3, 5, 7, 9, 11];
console.log(arr);
// let newArr = [];

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2);
// }
// console.log(newArr);

let newArr = arr.map((e, index, array)=>{
    return e**2;
});
console.log(newArr);


const greaterThanSeven = (e)=>{
    if(e>7){
        return true;
    }
    return false;
}
console.log(arr.filter(greaterThanSeven));


let arr2 = [2, 4, 6, 5, 3, 1];
const red = (a, b)=>{
    return a+b;
}
console.log(arr2.reduce(red));

// Array.from("Adnan");
// console.log(Array);