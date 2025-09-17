 
 //core types in typescript
 function add(a:number, b:number, printBool:boolean) {
   if(printBool){
    return a+b
   }else{
    console.log("error");
    
   }
    
}
const a = 10
const b = 20
const printBool = true
const ans = add(a,b,printBool)
console.log(ans);
