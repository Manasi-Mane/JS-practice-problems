// Problem 7 – University Students
const students = [
  { id:1, name:"Rahul", age:20, marks:90, address:{city:"Delhi",state:"Delhi"} },
  { id:2, name:"Priya", age:21, marks:82, address:{city:"Mumbai",state:"Maharashtra"} },
  { id:3, name:"Amit", age:22, marks:70 }
];
// •	Tasks:
// 61.	Print all student names.
students.forEach(student=>console.log(student.name));

// 62.	Print only students with marks above 80.
const highMarksStudents = students.filter(student=> student.marks>80);
console.log(highMarksStudents);


// 63.	Safely print each student's city using optional chaining.
students.forEach(student=>{
    const city = student.address?.city || 'City Not Available';
    console.log(`${student.name}: ${city}`);
})

// 64.	Destructure name, marks, and city.
students.forEach(student=>{
    const {name, marks, address:{city}={}} = student;
    console.log(`Name: ${name}, Marks: ${marks}, City: ${city || 'City Not Available'}`);
});

// 65.	Add a grade property.
students.forEach(student=>{
    if(student.marks>=90){
        student.grade = 'A';
    }
});
console.log(students);

// 66.	Find the topper.
const topper = students.reduce((max,curr)=> curr.marks>max.marks? curr:max, students[0]);
console.log(topper);    
// 67.	Calculate average marks.
const totalMarks = students.reduce((acc,curr)=> acc+curr.marks,0);
const averageMarks = totalMarks/students.length;
console.log(averageMarks);

// 68.	Add a new student using the spread operator.
const newStudent = {id:4, name:"Sneha", age:23, marks:88, address:{city:"Bangalore", state:"Karnataka"}};
const updatedStudents = [...students,newStudent];
console.log(updatedStudents);

// 69.	Find student with id = 2.
const studentWithId2 = students.find(student=> student.id===2);
console.log(studentWithId2);
    
// 70.	Print 'City Not Available' if the address is missing.
students.forEach(student=>{
    const city = student.address?.city || 'City Not Available';
    console.log(`${student.name}: ${city}`);
});
