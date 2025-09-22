// class Department {
//     name: string;
//     constructor(n:string){
//         this.name = n
//     }

//     describe(){
//         console.log("Department = " + this.name);
        
//     }
// }

// const accounting = new Department("Accounting")
// accounting.describe()



// Access modifier 

// class Department {
// //    public name: string;
// //    private employees: string[]
//     constructor(public name: string, private employees: string[]){  //shorthand property
//         // this.name = n
//         // this.employees = []
//     }

//     describe(){
//         console.log("Department = " + this.name);
        
//     }
//     addEmployees(emp: string){
//           this.employees.push(emp)
//     }

//     printEmployees(){
//         console.log("Number of Employee = " , this.employees.length);
//         console.log(this.employees);
        
        
//     }
// }

// const accounting = new Department("Accounting", [])
// // accounting.describe()

// accounting.addEmployees("Vaibhva")
// accounting.addEmployees("Anjali")
// accounting.printEmployees()




//readonly
// class Department {
//    public name: string;
//    private employees: string[]
//    private readonly id: string
//     constructor(n:string){ 
//         this.name = n
//         this.id = "D1" // it can initialize once only
//         this.employees = []
//     }

//     describe(){
//         // this.id = "D2" // this can't initialize again due to readonly modifier 
//         console.log("Department = " + this.name);
        
//     }
//     addEmployees(emp: string){
//           this.employees.push(emp)
//     }

//     printEmployees(){
//         console.log("Number of Employee = " , this.employees.length);
//         console.log(this.employees);
        
        
//     }
// }

// const accounting = new Department("Accounting")
// // accounting.describe()

// accounting.addEmployees("Vaibhva")
// accounting.addEmployees("Anjali")
// accounting.printEmployees()




//Inheritance

class Department {
   public name: string;
   private employees: string[]
   private readonly id: string
    constructor(id:string, n: string){ 
        this.name = n
        this.id = id // it can initialize once only
        this.employees = []
    }

    describe(){
        // this.id = "D2" // this can't initialize again due to readonly modifier 
        console.log("Department = " + this.name);
        
    }
    addEmployees(emp: string){
          this.employees.push(emp)
    }

    printEmployees(){
        console.log("Number of Employee = " , this.employees.length);
        console.log(this.employees);
        
        
    }
}

// const accounting = new Department("Accounting")
// accounting.describe()

// accounting.addEmployees("Vaibhva")
// accounting.addEmployees("Anjali")
// accounting.printEmployees()

class accountingDepartment extends Department {

    constructor(id:string, private reports: string[]){
        super(id, "Accounting" )
    }

    addReports(text:string){
        this.reports.push(text)

    }

    printReports(){
        console.log(this.reports);
        
    }

}

const accDep = new accountingDepartment("d1", [])
// accDep.describe()
accDep.addReports("Bugs")
accDep.printReports()
