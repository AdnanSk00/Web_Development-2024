console.log("This is 60 strings tutorial on 27th May 2024");
console.log("Strings are immutable - can not change real string")

let a = "Adnan";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
// console.log(a[5]);

console.log(a.length);
console.log(a.startsWith('Ad'));
console.log(a.endsWith('na'));

let real_name = "Ayyubi";
let friend = "Zangi";
console.log("His name is " + real_name + " and his friends name is " + friend);
console.log(`His name is ${real_name} and his friends name is ${friend}`);


let k = "\"Kelvin Clein\"";
console.log(k);
console.log(k.toUpperCase());
console.log(k.toLowerCase());
console.log(k.length);
console.log(k.indexOf('i'));
// console.log(k.indexOf('z'));
console.log(k.charAt(6));
// console.log(k.charAt(2));
console.log(k.slice(1,5));
console.log(k.slice(2),"\n");

console.log(k.replace("Clein", "Code"));
console.log(k.concat(a,"Sk"),"\n");

let f = "   Fan   ";
rf = f.trim();
console.log(f);
console.log(rf);