// Tuple, object, Array, Enum
//Object Example
// const person : {
//     firstName: string;
//     age: number;
//     skills: string[]
// } = {
//     firstName: "Rajat",
//     age: 22,
//     skills: ["NodeJs", "ReactJs"] //this is the way u can define an array
// }
// console.log(person);
//tuple example
var tupleExample = {
    name: "Rajat",
    age: 22,
    skills: ["TypeScript", "NextJs"],
    product: [10, "Led"] //here tuple have same fixed size and also same Way to write
};
console.log(tupleExample.product[1]);
//enum 
// enum Role {ADMIN, USER, AUTHOR};
// const person1 = {
//     name: "Vaibhav",
//     age:22,
//     skills: ["Html", "Css"],
//     product: [10, "Tv"],
//     role: Role.ADMIN
// }
// if(person1.role === Role.ADMIN){
//     console.log("admin");   
// }
// else if(person1.role === Role.USER){
//     console.log("user");
// }
// else if(person1.role === Role.AUTHOR){
//     console.log("author");
// }
