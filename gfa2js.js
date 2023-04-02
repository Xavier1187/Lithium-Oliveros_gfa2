function function_name(argument) {
	// body...
}

 function addition() {
  var x = parseFloat(document.getElementById("num1").value);
  var y = parseFloat(document.getElementById("num2").value);
  var display = (x + y);
   document.getElementById("akongtext").innerHTML = display;
}
function subtraction() {
  var x = parseFloat(document.getElementById("num1").value);
  var y = parseFloat(document.getElementById("num2").value);
  var display = (x - y);
   document.getElementById("akongtext").innerHTML = display;
}
function multiplication() {
  var x = parseFloat(document.getElementById("num1").value);
  var y = parseFloat(document.getElementById("num2").value);
  var display = (x * y);
   document.getElementById("akongtext").innerHTML = display;
}
function division() {
  var x = parseFloat(document.getElementById("num1").value);
  var y = parseFloat(document.getElementById("num2").value);
  var display = (x / y);
   document.getElementById("akongtext").innerHTML = display;
}
function remainder() {
  var x = parseFloat(document.getElementById("num1").value);
  var y = parseFloat(document.getElementById("num2").value);
  var display = (x % y);
   document.getElementById("akongtext").innerHTML = display;
}