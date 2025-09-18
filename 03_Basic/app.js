// UNION  | => This is the sign of union and In typeScript we can say that simble Pipe
function combine(num1, num2, conversionType) {
    var result;
    if (typeof num1 === "number" && typeof num2 === "number" || conversionType === "as-number") {
        result = +num1 + +num2;
    }
    else {
        result = num1.toString() + num2.toString();
    }
    return result;
}
var sum1 = combine("40", 50, "as-number");
var sum2 = combine(40, 50, "as-number");
var combinedName1 = combine("Rajat", "Mern Stack", "as-string");
console.log(sum1, sum2, combinedName1);
var user = {
    name: "Rajat",
    age: 22,
    skills: ["Java", "Python"]
};
//In Funtion
function greet(user) {
    console.log("Hi, can u Listen ".concat(user.name));
}
greet(user);
