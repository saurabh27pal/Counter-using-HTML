var counterElement = document.getElementById("counterText");
var incrementBtn = document.getElementById("increment");
var decrementBtn = document.getElementById("decrement");
var resetBtn = document.getElementById("reset");
var counter = counterElement.innerText;


increment.addEventListener("click", function(){
   counter++;
    counterText.innerHTML =counter;
});

decrement.addEventListener("click", function(){
    counter--;
    counterText.innerHTML = counter;

   
    
});

reset.addEventListener("click", function(){
    counter=0;
    counterText.innerHTML = counter;
});



