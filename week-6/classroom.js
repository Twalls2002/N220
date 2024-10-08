/*
// 1. Create a classroom object with properties / methods for;
// - the list of students
// - class name
// - show students function
// - max students

// 2. The show students function / method for your classroom object should:
//- clear current students shown in p tag
// - loop through list of students and add the to p tag (use <br /> after each student)

// 3. Create a function for adding the new student (make sure it matches the button onclick function call).This function should check if you can is a seat available for the student. If there is not then console.log("No seats available "). If there are then add the student's name to the list of students on the classroom object the run the show students method. 

*/

function functionName() {}
const classroom = {
  students: ["ty"],
  className: "I220 ",

  showStudents() {
    document.getElementById("students").innerHTML = "";
    // this.students.forEach(function (StudentName) {
    //  document.getElementById("students").innerHTML += StudentName + "<br />";
    // });
  },
  maxStudents: 2,
};

classroom.showStudents();

function addNewStudent() {
  const currentStudents = classroom.students.length;
  if (currentStudents >= classroom.maxStudnets) {
    console.log("No seats available");
  } else {
    classroom.students.push(document.getElementById("StudentName").value);
    classroom.showStudents();
  }
}
