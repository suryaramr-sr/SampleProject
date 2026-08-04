/*let student1="Arya";
let student2="Neena";
let student3="Ajay";
let students=["Arya","Neena","Ajay"];
console.log(students[0]);
console.log(students[1]);*/

let fruits=["Apple","Orange","Grapes"];
console.log(fruits.length);
//Add element at the end of an array
fruits.push("Banana");
console.log(fruits);
//To removes the last element
fruits.pop();
console.log(fruits);
//To add element at the beginning
fruits.unshift("Kiwi");
console.log(fruits);
fruits.shift();
console.log(fruits);
//return the index of an elemnt
console.log(fruits.indexOf("Grapes"));
console.log(fruits.indexOf("Lichi"));
//check whether an elemnt exists
console.log(fruits.includes("Apple"));
console.log(fruits.includes("Kiwi"));