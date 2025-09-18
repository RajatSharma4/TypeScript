// UNION  | => This is the sign of union and In typeScript we can say that simble Pipe

// function combine(num1: number | string, num2: number | string){
//     let result;
//     if(typeof num1 === "number" && typeof num2 === "number"){
//         result = num1 +num2
//     }else{
//         result = num1.toString()+num2.toString()
//     }
//     return result;
// }

// const sum = combine(10,20)
// const combinedName = combine("Rajat", "Mern Stack")
// console.log(sum, combinedName);



//LITERAL TYPE -> Literals is use for making our own type

// function combine(num1: number | string, num2: number | string, conversionType: "as-number" | "as-string"){
//     let result;
//     if(typeof num1 === "number" && typeof num2 === "number" || conversionType === "as-number"){
//         result = +num1 + +num2
//     }else{
//         result = num1.toString()+num2.toString()
//     }
//     return result;
// }

// const sum1 = combine("40",50, "as-number")
// const sum2 = combine(40,50, "as-number")
// const combinedName1 = combine("Rajat", "Mern Stack", "as-string")
// console.log(sum1, sum2, combinedName1);




//TYPE ALIAS \ CUSTOM TYPE
//Type Alias -> The tool you use (type) to create new names for types
//Custom types -> The actual type you create (with type, interface, union etc) so, every type alias you create is a custom type

type Combined = number | string
type ConversionType = "as-number" | "as-string"
function combine(num1: Combined, num2: Combined, conversionType: ConversionType){
    let result;
    if(typeof num1 === "number" && typeof num2 === "number" || conversionType === "as-number"){
        result = +num1 + +num2
    }else{
        result = num1.toString()+num2.toString()
    }
    return result;
}

const sum1 = combine("40",50, "as-number")
const sum2 = combine(40,50, "as-number")
const combinedName1 = combine("Rajat", "Mern Stack", "as-string")
console.log(sum1, sum2, combinedName1);


//In Object
type User = {
    name: string;
    age: number;
    skills: string[]
}

const user : User = {
    name: "Rajat",
    age:22,
    skills: ["Java", "Python"]
}

//In Funtion
function greet(user:User){
    console.log(`Hi, can u Listen ${user.name}`);
    
}
greet(user)







