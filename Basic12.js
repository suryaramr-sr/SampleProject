let students={
    name:"Arya",
    age:25,
    course:"BA",
};
let jsonData=JSON.stringify(students);
console.log(jsonData);
console.log(typeof jsonData);

const jsonData1='{"name":"Anu","Age":25}';
const student=JSON.parse(jsonData1);
console.log(student);
console.log(typeof student);