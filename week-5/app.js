// Objects
const codingChallenge = {
  courseNumber: "N220",
  courseTitle: "INtroduction to Media Application Development",
  totalSeats: 20,
  enrolled: 18,
  getAvailability: function () {
    // return (this.totalSeats - this.enrolledStudents) !==0
    return this.totalSeats > this.enrolledStudents;
  },
};

// 1. Are seats available
console.log(`N220 Open: ${codeChallenge.getAvailability()}.`);

// 2. Two more peers
codeChallenge.enrolledStudents += 2;
console.log(`N220 Open: ${codeChallenge.getAvailability}`);

// 3.  Check availability again 
console.long(`N220 Open: ${codeChallenge.getAvailability }`)

// Built-In Objects!!!!
var tacocat "Wednesday";

function IUPUIWebsite() {
    console.log(window.tacocat);
    console.log(`Inner Width: ${windon.innerWidth}`);
    console.log(`Outer Width: ${window.outerWidth}`);

    console.log(window.location);
}
 
function printPage() {
    window.print();
}

document.getElementById("dpDetails").innerHTML += codeChallenge.courseTitle;

document.querySelector("#domain").innerHTML += "Hi";

const updatePTag = document.getElementById("update");
console.log(updatePTag.querySelector("#delete"));

console.log(String(100).length, 100);
console.log(String(100).includes("2"), 100);
console.log("100".replace("0"), 100);
console.log(String(100).length, 100);

