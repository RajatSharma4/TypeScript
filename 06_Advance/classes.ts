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
//Override and protected access modifier

class Department {
    public name: string;
    protected employees: string[]
    private readonly id: string
    constructor(id: string, n: string) {
        this.name = n
        this.id = id // it can initialize once only
        this.employees = []
    }

    describe() {
        // this.id = "D2" // this can't initialize again due to readonly modifier 
        console.log("Department = " + this.name);

    }
    addEmployees(emp: string) {
        this.employees.push(emp)
    }

    printEmployees() {
        console.log("Number of Employee = ", this.employees.length);
        console.log(this.employees);


    }
}

// const accounting = new Department("Accounting")
// accounting.describe()

// accounting.addEmployees("Vaibhva")
// accounting.addEmployees("Anjali")
// accounting.printEmployees()

class accountingDepartment extends Department {

    constructor(id: string, private reports: string[]) {
        super(id, "Accounting")
    }

    addReports(text: string) {
        this.reports.push(text)

    }

    printReports() {
        console.log(this.reports);

    }

    addEmployees(emp: string): void {
        if (emp === "Patel") {
            return
        }
        this.employees.push(emp)
    }

    get getReports() {
        if (this.reports.length > 0) {
            return this.reports
        }
        else {
            throw new Error("Report not found")
        }
    }

    set setReports(value: string) {
        if (!value) {
            throw new Error("Please enter valid value")
        }
        else {
            this.reports.push(value)
        }
    }

}

const accDep = new accountingDepartment("d1", [])
// accDep.describe()
accDep.addReports("Bugs")
// accDep.printReports()

accDep.addEmployees("Patel")
accDep.addEmployees("Rajat")
// accDep.printEmployees()

//printing getter and setter
// console.log(accDep.getReports);
// accDep.setReports = "Some error occurs"
// console.log(accDep.getReports);



//static method
class Department2 {
    public name: string;
    protected employees: string[]
    private readonly id: string
    constructor(id: string, n: string) {
        this.name = n
        this.id = id // it can initialize once only
        this.employees = []
    }

    describe() {
        // this.id = "D2" // this can't initialize again due to readonly modifier 
        console.log("Department = " + this.name);

    }
    addEmployees(emp: string) {
        this.employees.push(emp)
    }

    printEmployees() {
        console.log("Number of Employee = ", this.employees.length);
        console.log(this.employees);
    }

    static getSalary() {
        return { "salary": 500000 }
    }
}

const salary = Department2.getSalary()  //with the help of static keyword we don't need too create object of the class only through the class name we can easily access thm
// console.log(salary);



//abstract classes
abstract class Department3{
     name: string;
    protected employees: string[] = []
    protected readonly id: string
    constructor(id: string, n: string) {
        this.name = n
        this.id = id // it can initialize once only
    }

    abstract describe(this:Department3) : void;
    abstract printName():void;
}
class Subclass extends  Department3{
    constructor(id:string, private reports :string[]){
        super(id, "Accounting")
    }

    describe(): void {
        console.log("Department : ", this.id);
        
    }
    printName(): void {
        console.log(this.name);
        
    }
}

const newClass = new Subclass("D1", [])
newClass.describe()
newClass.printName()


