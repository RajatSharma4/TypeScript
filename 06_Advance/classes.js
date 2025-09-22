// class Department {
//     name: string;
//     constructor(n:string){
//         this.name = n
//     }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Department = /** @class */ (function () {
    function Department(id, n) {
        this.name = n;
        this.id = id; // it can initialize once only
        this.employees = [];
    }
    Department.prototype.describe = function () {
        // this.id = "D2" // this can't initialize again due to readonly modifier 
        console.log("Department = " + this.name);
    };
    Department.prototype.addEmployees = function (emp) {
        this.employees.push(emp);
    };
    Department.prototype.printEmployees = function () {
        console.log("Number of Employee = ", this.employees.length);
        console.log(this.employees);
    };
    return Department;
}());
// const accounting = new Department("Accounting")
// accounting.describe()
// accounting.addEmployees("Vaibhva")
// accounting.addEmployees("Anjali")
// accounting.printEmployees()
var accountingDepartment = /** @class */ (function (_super) {
    __extends(accountingDepartment, _super);
    function accountingDepartment(id, reports) {
        var _this = _super.call(this, id, "Accounting") || this;
        _this.reports = reports;
        return _this;
    }
    accountingDepartment.prototype.addReports = function (text) {
        this.reports.push(text);
    };
    accountingDepartment.prototype.printReports = function () {
        console.log(this.reports);
    };
    return accountingDepartment;
}(Department));
var accDep = new accountingDepartment("d1", []);
// accDep.describe()
accDep.addReports("Bugs");
accDep.printReports();
