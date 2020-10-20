

// no OOP
let baseSalary = 30_000;
let overtime = 10;
let rate = 20;

function getWage(baseSalary, overtime, rate){
    return baseSalary + (overtime * rate);
}

console.log(getWage(baseSalary, overtime, rate));

// OOP encapsulation
let employee = {
    baseSalary: 30_000,
    overtime: 10,
    rate: 20,
    getWage: function(){ // no parameters here
        return this.baseSalary + (this.overtime * this.rate);
    }
};

console.log(employee.getWage());
