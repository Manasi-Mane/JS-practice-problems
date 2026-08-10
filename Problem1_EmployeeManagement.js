// Problem 1 – Employee Management
const employees = [
  { id: 1, name: "John", department: "IT", salary: 50000 },
  { id: 2, name: "Sarah", department: "HR", salary: 45000 },
  { id: 3, name: "Mike", department: "IT", salary: 60000 },
  { id: 4, name: "Emma", department: "Finance", salary: 70000 }
];
// •	Tasks:
// 1.	Print all employee names.
employees.forEach(employee=>console.log(employee.name));


// 2.	Find employees from the IT department.
const itEmployees = employees.filter(employee=> employee.department==="IT");
console.log(itEmployees);

// 3.	Increase every employee's salary by 10%.
const employeeWithIncreasedSalary = employees.map((employee)=>({
    ...employee,
    salary: employee.salary * 1.1
}));

// 4.	Find the employee with id = 3.
console.log(employees.find(employee=> employee.id===3))

// 5.	Calculate the total salary of all employees.
  let totalSalary = employees.reduce((acc,curr)=> acc+curr.salary)
  console.log(totalSalary)
 

// 6.	Find the average salary.
let averageSalary = totalSalary/employees.length;
console.log(averageSalary);

// 7.	Add a new employee without modifying the original array.
const newEmployee = { id:5, name:"David", department:"Marketing", salary:55000};
const updatesEmployess = [...employees,newEmployee];
console.log(updatesEmployess);

// 8.	Destructure the name and salary of the first employee.
const {name : firstEmployeeName, salary : firstEmployeeSalary} = employees[0];
console.log(firstEmployeeName, firstEmployeeSalary);

// 9.	Find the highest-paid employee.

const highestPaidEmployee = employees.reduce(((max,curr)=> curr.salary>max.salary? curr:max),employees[0]);
console.log(highestPaidEmployee);

// 10.	Create an array containing only employee names.
const employeeNames = employees.map(employee=> employee.name);
console.log(employeeNames);
