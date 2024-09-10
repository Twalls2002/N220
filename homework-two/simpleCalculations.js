//Dating Section
const ticketPrice = 14.0;
const numberOfTickets = 3;
const totalTicketCost = ticketPrice * numberOfTickets;

document.getElementById("ttCost").innerHTML += totalTicketCost.toFixed(2);

//Shopping Section
const initialBankBalance = 235.87;
const jacketPrice = 70;
const sweaterPrice = 55;
const shirtPrice = 35;
const pantsPrice = 75;
const skirtPrice = 49;
const sandalsPrice = 30;
const shoesPrice = 60;

const totalShoppingCost = shirtPrice + pantsPrice + shoesPrice;
const remainingBalance = initialBankBalance - totalShoppingCost;

document.getElementById("bank").innerHTML =
  "Remaining Balance: $" + remainingBalance.toFixed(2);

const canAddJacket = remainingBalance >= jacketPrice;
document.getElementById("addJacket").innerHTML = canAddJacket;

//Pizza Section
const totalPizzas = 4;
const slicesPerPizza = 8;
const piecesPerStudent = 2.5;

const totalSlices = totalPizzas * slicesPerPizza;
const totalStudents = Math.floor(totalSlices / piecesPerStudent);
const leftoverPieces = totalSlices % piecesPerStudent;

document.getElementById(
  "profPizza"
).innerHTML = `Total Students Fed: ${totalStudents}<br/>Leftover Pieces: ${leftoverPieces}`;

//Monty's Mega Bar Section
const adultPrice = 12.0;
const childPrice = 6.0;
const drinkPrice = 1.5;

const numAdults = 2;
const numChildren = 1;
const numDrinks = 3;

const totalPrice =
  numAdults * adultPrice + numChildren * childPrice + numDrinks * drinkPrice;
document.getElementById("Monty").innerHTML =
  "Total Price: $" + totalPrice.toFixed(2);

//Average Earned Tips Section
const week1 = 202.45;
const week2 = 134.97;
const week3 = 256.63;
const week4 = 178.22;

const totalTips = week1 + week2 + week3 + week4;
const averageTips = totalTips / 4;

document.getElementById("tips").innerHTML =
  "Average Weekly Tips: $" + averageTips.toFixed(2);
