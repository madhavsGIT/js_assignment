/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  // Using map to filter and print developers
  arr.map(employee => {
    if (employee.profession === "developer") {
      console.log(employee);
    }
  });
}

function PrintDeveloperbyForEach() {
  // Using forEach to filter and print developers
  arr.forEach(employee => {
    if (employee.profession === "developer") {
      console.log(employee);
    }
  });
}

function addData() {
  // Adding a new employee to the array
  let newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(newEmployee);
  console.log(arr);
}

function removeAdmin() {
  // Removing employees with the profession of 'admin'
  arr = arr.filter(employee => employee.profession !== "admin");
  console.log(arr);
}

function concatenateArray() {
  // Creating a new array with 3 new employee objects
  let newEmployees = [
    { id: 5, name: "mike", age: "22", profession: "designer" },
    { id: 6, name: "jane", age: "23", profession: "manager" },
    { id: 7, name: "peter", age: "24", profession: "developer" }
  ];
  // Concatenating the two arrays
  let combinedArray = arr.concat(newEmployees);
  console.log(combinedArray);
}
