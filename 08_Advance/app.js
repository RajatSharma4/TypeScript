// Generic intro => one type is connected to another type that is called generic
//type placeholders that make code flexible and type-safe. 
// In TypeScript, a generic is a feature that allows you to create reusable components (functions, classes, interfaces)
// that can work with different data types without losing type safety.
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var fruits = [{ name: "Rajat", age: 22 }];
// fruits.push("Apple")
// fruits.push("Banana")
// console.log(fruits);
//example2
function merge(Obj1, Obj2) {
    return __assign(__assign({}, Obj1), Obj2);
}
var result = merge({ name: "Rajat" }, { role: "Software developer" });
// console.log(result);
//Generic constrains
function createObject(key, value, isActive) {
    return { key: key, value: value, isActive: isActive };
}
var res = createObject("age", 22, true);
var numberBOx = { value: 200 };
var stringBox = { value: "Rajat" };
var response = { data: "Vaibhav", status: 200 };
var objRes = { data: { key: "some" }, status: 300 };
var objRes1 = { data: { name: "Rajat", age: 22 }, status: 300 };
// console.log(response);
// console.log(objRes);
// console.log(objRes1);
//Generic with class
var Container = /** @class */ (function () {
    function Container(content) {
        this.content = content;
    }
    Container.prototype.getContainer = function () {
        return this.content;
    };
    return Container;
}());
// const stringType = new Container<string>("Hello sir")
// console.log(stringType.getContainer());
// const numberType = new Container<number>(222)
// console.log(numberType.getContainer());
//generic with array
function getFirts(arr) {
    return arr[0];
}
var getNumber = getFirts([1, 2, 3, 4, 5]);
var getString = getFirts(["Vaubhav", "Rajat", "Ayush"]);
// console.log(getNumber);
// console.log(getString);
// generic with keyof
// function getProperty(obj:object, key:string){
//     return obj[key];
// }
// const res3 = getProperty({}, "narrow")   //show error becaouse in obj it's not found a key 
function getProperty(obj, key) {
    return obj[key];
}
var person = { name: "Anivehs", age: 22 };
var res5 = getProperty(person, "name");
console.log(res5);
