function add(a, b, printBool) {
    if (printBool) {
        return a + b;
    }
    else {
        console.log("error");
    }
}
var a = 10;
var b = 20;
var printBool = true;
var ans = add(a, b, printBool);
console.log(ans);
