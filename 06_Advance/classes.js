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
//Override and protected access modifier
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
    accountingDepartment.prototype.addEmployees = function (emp) {
        if (emp === "Patel") {
            return;
        }
        this.employees.push(emp);
    };
    Object.defineProperty(accountingDepartment.prototype, "getReports", {
        get: function () {
            if (this.reports.length > 0) {
                return this.reports;
            }
            else {
                throw new Error("Report not found");
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(accountingDepartment.prototype, "setReports", {
        set: function (value) {
            if (!value) {
                throw new Error("Please enter valid value");
            }
            else {
                this.reports.push(value);
            }
        },
        enumerable: false,
        configurable: true
    });
    return accountingDepartment;
}(Department));
var accDep = new accountingDepartment("d1", []);
// accDep.describe()
accDep.addReports("Bugs");
// accDep.printReports()
accDep.addEmployees("Patel");
accDep.addEmployees("Rajat");
// accDep.printEmployees()
//printing getter and setter
// console.log(accDep.getReports);
// accDep.setReports = "Some error occurs"
// console.log(accDep.getReports);
//static method
var Department2 = /** @class */ (function () {
    function Department2(id, n) {
        this.name = n;
        this.id = id; // it can initialize once only
        this.employees = [];
    }
    Department2.prototype.describe = function () {
        // this.id = "D2" // this can't initialize again due to readonly modifier 
        console.log("Department = " + this.name);
    };
    Department2.prototype.addEmployees = function (emp) {
        this.employees.push(emp);
    };
    Department2.prototype.printEmployees = function () {
        console.log("Number of Employee = ", this.employees.length);
        console.log(this.employees);
    };
    Department2.getSalary = function () {
        return { "salary": 500000 };
    };
    return Department2;
}());
var salary = Department2.getSalary(); //with the help of static keyword we don't need too create object of the class only through the class name we can easily access thm
// console.log(salary);
//abstract classes
var Department3 = /** @class */ (function () {
    function Department3(id, n) {
        this.employees = [];
        this.name = n;
        this.id = id; // it can initialize once only
    }
    return Department3;
}());
var Subclass = /** @class */ (function (_super) {
    __extends(Subclass, _super);
    function Subclass(id, reports) {
        var _this = _super.call(this, id, "Accounting") || this;
        _this.reports = reports;
        return _this;
    }
    Subclass.prototype.describe = function () {
        console.log("Department : ", this.id);
    };
    Subclass.prototype.printName = function () {
        console.log(this.name);
    };
    return Subclass;
}(Department3));
var newClass = new Subclass("D1", []);
newClass.describe();
newClass.printName();
