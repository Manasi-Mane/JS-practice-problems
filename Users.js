// Problem 8 – Mixed Array Methods Challenge
const users = [
  { id:1, name:"Rahul", age:22, active:true },
  { id:2, name:"Priya", age:19, active:false },
  { id:3, name:"Amit", age:25, active:true },
  { id:4, name:"Neha", age:21, active:true }
];
// •	Tasks:
// 71.	Print all user names.
users.forEach(user=>console.log(user.name));

// 72.	Print only active users.
const activeUsers = users.filter(user=> user.active);
console.log(activeUsers);

// 73.	Find the youngest user.
const youngestUser = users.reduce((youngest,curr)=> curr.age<youngest.age? curr:youngest, users[0]);
console.log(youngestUser);

// 74.	Find the oldest user.
const oldestUser = users.reduce((oldest,curr)=> curr.age>oldest.age? curr:oldest, users[0]);
console.log(oldestUser);

// 75.	Calculate the average age.
const totalAge = users.reduce((acc,curr)=> acc+curr.age,0);
const averageAge = totalAge/users.length;
console.log(averageAge);

// 76.	Add an isAdult property.
const usersWithIsAdult = users.map(user=>({
    ...user,
    isAdult: user.age >= 18
}));
console.log(usersWithIsAdult);

// 77.	Find the user with id = 4.
console.log(users.find(user=> user.id===4));

// 78.	Add a new user using the spread operator.
const newuser = {id:5, name:"Riya", age:20, active:false};
const updatedUsers = [...users,newuser];
console.log(updatedUsers);

// 79.	Destructure the first user's name and age.
const {name:firstUserName, age:firstUserAge} = users[0];
console.log(firstUserName, firstUserAge);

// 80.	Return an array containing only the names of active users.
const activeUserNames = users.filter(user=> user.active).map(user=> user.name);
console.log(activeUserNames);
