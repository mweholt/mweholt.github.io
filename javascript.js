var myArray = ["Read a book by the pool", "Go on a hike", "Drink wine in the bath", "Throw up your letters in a bathing suit",
  "Hold a college flag", "Hot dogs are legs", "Make latte art", "Eat an acai bowl", "Go to a concert", "Talk about 'your best friends in the whole wide world'",
  "Talk about how you can't wait for the weekend", "Go camping", "Drive a convertable", "Draw mediocre lettering in a journal", "Go to the gym", "Duck face", "Do yoga",
  "Look at the skyline", "Go mountain biking", "Literally anything in a bikini", "Look at a foggy forest", "Use the snapchat dog filter"];
var print = document.getElementById('print');
var myIndex = 1;

print.innerHTML = "Click for something else to do.";

function nextElement() {
   print.innerHTML = myArray[myIndex++%myArray.length];
};
