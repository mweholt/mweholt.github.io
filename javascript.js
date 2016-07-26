var myArray = ["Turn up", "Take dumb photos"];
var print = document.getElementById('print');
var myIndex = 1;

print.innerHTML = "Click for something else to do.";

function nextElement() {
   print.innerHTML = myArray[myIndex++%myArray.length];
};
