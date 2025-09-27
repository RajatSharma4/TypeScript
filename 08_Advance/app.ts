// Generic intro => one type is connected to another type that is called generic
//type placeholders that make code flexible and type-safe. 
// In TypeScript, a generic is a feature that allows you to create reusable components (functions, classes, interfaces)
// that can work with different data types without losing type safety.


//with object
type Person = {
    name: string;
    age: number;
}

const fruits: Array<Person> = [{ name: "Rajat", age: 22 }]
// fruits.push("Apple")
// fruits.push("Banana")
// console.log(fruits);



//example2
function merge<T, U>(Obj1: T, Obj2: U) {
    return { ...Obj1, ...Obj2 }
}
const result = merge({ name: "Rajat" }, { role: "Software developer" })
// console.log(result);



//Generic constrains
function createObject<T extends string, U extends number, V extends boolean>(
    key: T,
    value: U,
    isActive: V
): { key: T, value: U, isActive: V } {
    return { key, value, isActive }
}

const res = createObject("age", 22, true);
// console.log(res);



//Generic with interface
interface Box<T>{
    value:T;
}

const numberBOx : Box<number> = {value:200}
const stringBox : Box<string> = {value: "Rajat"}
// console.log(numberBOx);
// console.log(stringBox);




//Generic default

interface User<T = string>{
    data:T,
    status:number
}

type Person1 ={
   name: string,
   age:number
}

const response: User = {data: "Vaibhav", status:200}
const objRes: User<object> = {data: {key:"some"}, status:300}
const objRes1: User<Person1> = {data: {name:"Rajat", age:22}, status:300}

// console.log(response);
// console.log(objRes);
// console.log(objRes1);






//Generic with class

class Container<T>{
    private content : T
    constructor(content:T){
        this.content = content
    }
    getContainer():T{
       return this.content
    }
}

// const stringType = new Container<string>("Hello sir")
// console.log(stringType.getContainer());

// const numberType = new Container<number>(222)
// console.log(numberType.getContainer());





//generic with array

function getFirts<T>(arr: T[]):T{
    return arr[0]
}

const getNumber = getFirts([1,2,3,4,5])
const getString = getFirts(["Vaubhav", "Rajat", "Ayush"])

// console.log(getNumber);
// console.log(getString);




// generic with keyof
// function getProperty(obj:object, key:string){
//     return obj[key];
// }
// const res3 = getProperty({}, "narrow")   //show error becaouse in obj it's not found a key 

function getProperty<T extends object, K extends keyof T>(obj:T, key:K):T[K]{
   return obj[key]
}

const person = {name:"Anivehs", age:22}
const res5 = getProperty(person, "name")
console.log(res5);









