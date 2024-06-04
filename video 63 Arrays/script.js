console.log("...............Arrays..............");

let arr = [1, 2, 4, 5, 7];
// Index   0, 1, 2, 3, 4

arr[0] = 92;
console.log(arr, typeof arr);
console.log(arr.length);

console.log(arr[0]);
console.log(arr[2]);
console.log(arr[4]);

console.log(arr.toString());
console.log(arr.join(" and "));

console.log("=================================================");

let a = [6, 5, 4, 3, 2, 1];
console.log(a);
console.log(a.pop());
console.log(a);
console.log(a.push(100));
console.log(a.push("element"));
console.log(a);
console.log(a.shift());
console.log(a);
console.log(a.unshift("Aagaz"));
console.log(a);
console.log(delete a[6]);
console.log(a);
console.log(a.length);
console.log(a[6]);

console.log("=================================================");


let p = [33, 22, 11];
let q = [44, 55, 66];
let r = [99, 88, 77];
console.log(p);
console.log(q);
console.log(r);
console.log(p.concat(r, q));

console.log("=================================================");

let a1 = [6, 5, 4, 3, 2, 1];
console.log(a1);
console.log(a1.sort());
console.log(a1.splice(1, 3, 3741));
console.log(a1);
console.log(a1.slice(4));
console.log(a1.slice(1, 5));
console.log(a1.reverse());





