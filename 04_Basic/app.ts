// function return type

// function sum(num1: number, num2: number):number{
//     return num1+num2
// }
// console.log(sum(20,30));


//void because its not return anything
// function greet(name:string):void{
//     console.log(`Hi, ${name}`);  
// }


// let combinedFunction :Function;

// combinedFunction = 10 //invalid
// combinedFunction = function(){} //valid

// combinedFunction = sum; //vaild
// combinedFunction = greet; //valid
// console.log(combinedFunction(40,50));
//but but but Above all are not a good practise




//use Good practice

// let combinedFunction: (a:number,b:number) => number;
// combinedFunction = sum;
// console.log(combinedFunction(100,200));



//function type and callback

type Cb = (n:number)=>void
function addHandle(num1:number, num2:number, cb: Cb){
    const result = num1 + num2

    cb(result);
}
addHandle(30,40, (result: number)=>{
    console.log(result);
    
})





