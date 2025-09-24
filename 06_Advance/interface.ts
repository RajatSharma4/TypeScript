//interface -> we can use to define the things we can put in any object and interface is different from
// class is like we can initialize the varibale within the class but in interface we can't initialize only declare thier type
//when we use union like | so we can use type but when we can use to define object like things so we can use interface

// interface Person {
//     name:string;
//     age:number;
//     greet(text:string): void;
// }

// let user: Person = {
//     name:"Rajat",
//     age:22,
//     greet(text){
//         console.log(`${text} ${this.name}`);
        
//     }
// }
// console.log(user.name);



// interface Greeting {
//     name:string
//     greet(text:string):void;
// }
// class accessInterface implements Greeting{  //here we can implements multiple interfaces
//     name:string;
//     constructor(n:string){
//         this.name = n
//     }
//     greet(text: string): void {
//         console.log(`${text} ${this.name}`);
        
//     }
// }

// const aC = new accessInterface('Rajat Sharma')
// aC.greet("Hi")


// interface Greeting {
//     readonly name:string
//     greet(text:string):void;
// }
// class accessInterface implements Greeting{  //here we can implements multiple interfaces
//     name:string;
//     constructor(n:string){
//         this.name = n
//     }
//     greet(text: string): void {
//         console.log(`${text} ${this.name}`);
        
//     }
// }

// let user1 : Greeting
// user1 = new accessInterface("Rajat")
// user1.name("Vaibhva") // error because of readonly initialize only one time




//extending interface

// interface Named{
//     readonly name:string
// }
// interface Greeting extends Named{
//     greet(text:string): void
// }

// class Person implements Greeting{
//     name:string;
//     constructor(n:string){
//         this.name = n
//     }
//     greet(text: string): void {
//         console.log(`${text} ${this.name}`);
        
//     }
// }

// let user2: Greeting
// user2 = new Person("Ayush")
// // user2.greet("Hi")




// // type addFun = (n1:number, n2:number) => number;

// interface addFun {
//     (n1:number,n2:number) : number;
// }

// let add : addFun

// add = (n1:number,n2:number) : number=>{
//     return n1+n2
// }

// console.log(add(60,40));


//optional (?)

interface Named{
    name:string;
    age ?: number;
}

class New implements Named{
    name:string
    constructor(n:string){
        this.name = n
    }
    //see here we can't define age however don't show any error this is the use of optional 
}


