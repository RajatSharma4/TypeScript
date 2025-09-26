//Type guard
// type combinable = string | number;
// type numeric = number|boolean;
// type universal = combinable|numeric;

// function add(a:combinable, b:combinable){
//     //add type guard
//     //this is the first type of type guard -> typeof
//     if(typeof a === "string" || typeof b === "string"){
//         return a.toString() + b.toString();
//     }
//     return a+b;
// }

// console.log(add("10",20));



//
// type Admin = {
//     name:string;
//     privilages: string[];
// }
// type Employee = {
//     name: string;
//     startDate: Date;
// }

// type ElevatedEmployee = Admin&Employee;
// type UnknownEmployee = Admin|Employee;

// const emp1 : ElevatedEmployee = {
//     name:"Rajat",
//     privilages: ["Cliet side issue"],
//     startDate: new Date()
// }

// function printEmployeeInformation(emp: UnknownEmployee){
//     console.log("Name : ", emp.name);
//     // console.log("Privilages : ", emp.privilages); //error

//     //use of (in) keyword in type Guard
//     if( "privilages" in emp){
//         console.log(emp.privilages);
        
//     }
//     if("startDate" in emp){
//         console.log(emp.startDate);
        
//     }
    
    
// }

// printEmployeeInformation(emp1)



//third type (instaceOf) in type guard
// class Dog {
//   bark() {
//     console.log("Woof!");
//   }
// }

// class Cat {
//   meow() {
//     console.log("Meow!");
//   }
// }

// type Animal = Dog|Cat;

// const dog = new Dog()
// const cat = new Cat()

// function makeSound(animal: Animal) {
//   if (animal instanceof Dog) {
//     animal.bark(); 
//   } else {
//     animal.meow(); 
//   }
// }

// makeSound(dog); // Woof!
// makeSound(cat); // Meow!




// Type casting / Type insertion

// const userInput = <HTMLInputElement>document.getElementById("user-input")!; //first way to do this                   // ! -> means this things is exists and not any reason it's null
const userInput = document.getElementById("user-input") as HTMLInputElement;  //second way 
userInput.value = "hi, Vaibhav"

