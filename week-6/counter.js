/* 
1. Create variable tracking currentCount

2. Create function addCount to add to the currentCount then update the "counter" p tag

*/

let currentCount = 0;

function showCurrentCount() {
  document.querySelector("#counter"), (innerHTML = currentCount);
}

showCurrentCount();

function addCount() {
  currentCount++;
  document.querySelector("#counter").innerHTML = currentCount;
}