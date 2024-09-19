function calculateInterest() {
  var principle = parseFloat(document.getElementById("principle").value);
  var rate = parseFloat(document.getElementById("rate").value);
  var time = parseFloat(document.getElementById("time").value);

  var total = principle * (1 + rate * time);
  document.getElementById("result").innerHTML =
    "Total Amount after " + time + " years: $" + total.toFixed(2);
}
