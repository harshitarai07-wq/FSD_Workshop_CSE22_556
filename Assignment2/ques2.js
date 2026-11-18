/* Q2. (File Handling using fs module)
Create a program to maintain a student attendance list in a file called attendance.txt. Your program should be able to: add a student's name,
 show all names, update a name, and delete a name from the file.*/

const fs = require('fs');

const fileName = 'attendance.txt';

// Create file if it does not exist
if (!fs.existsSync(fileName)) {
    fs.writeFileSync(fileName, '');
}

// 1. Add a student's name
function addStudent(name) {
    fs.appendFileSync(fileName, name + '\n');
    console.log(name + " added successfully.");
}

// 2. Show all student names
function showStudents() {
    const data = fs.readFileSync(fileName, 'utf8');

    console.log("Student Attendance List:");

    if (data.trim() === '') {
        console.log("No students found.");
    } else {
        console.log(data);
    }
}

// 3. Update a student's name
function updateStudent(oldName, newName) {
    let students = fs.readFileSync(fileName, 'utf8')
        .split('\n');

    let index = students.indexOf(oldName);

    if (index !== -1) {
        students[index] = newName;
        fs.writeFileSync(fileName, students.join('\n'));
        console.log("Name updated successfully.");
    } else {
        console.log("Student not found.");
    }
}

// 4. Delete a student's name
function deleteStudent(name) {
    let students = fs.readFileSync(fileName, 'utf8')
        .split('\n');

    let updatedList = students.filter(student => student !== name);

    if (students.length === updatedList.length) {
        console.log("Student not found.");
    } else {
        fs.writeFileSync(fileName, updatedList.join('\n'));
        console.log(name + " deleted successfully.");
    }
}

// Performing operations
addStudent("Harshita");
addStudent("Rahul");
addStudent("Priya");

showStudents();

updateStudent("Rahul", "Aman");

showStudents();

deleteStudent("Priya");

showStudents();
