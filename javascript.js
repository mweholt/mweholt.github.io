var itemArray = ["Read a book by the pool", "Go on a hike", "Drink wine in the bath", "Throw up your letters in a bathing suit",
  "Hold a college flag", "Hot dogs are legs", "Make latte art", "Eat an acai bowl", "Go to a concert", "Talk about 'your best friends in the whole wide world'",
  "Talk about how you can't wait for the weekend", "Go camping", "Drive a convertable", "Draw mediocre lettering in a journal", "Go to the gym", "Duck face", "Do yoga",
  "Look at the skyline", "Go mountain biking", "Literally anything in a bikini", "Look at a foggy forest", "Use the snapchat dog filter", "Pose like a bodybuilder", "Buy a puppy",
  "Bake cookies", "Prank your friends", "Decorate your room", "Buy a Sony A7s", "Go to Snoqualmie Falls", "Become a model", "Listen to Drake", "Offer 15% off watches"];
var print = document.getElementById('print');
var currentIndex = 0;

print.innerHTML = "Click for something else to do.";

function nextElement() {
  if (currentIndex == itemArray.length){
    shuffle(itemArray);
    currentIndex = 0;
  }

  print.innerHTML = myArray[currentIndex];
  currentIndex++;
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}
