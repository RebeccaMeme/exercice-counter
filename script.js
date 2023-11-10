let buttonDECREASE = document.getElementById("decrease");
let buttonRESET = document.getElementById("reset");
let buttonINCREASE = document.getElementById("increase");
let counterElement = document.getElementById("Count");

let count = 3;
let decrease = -1;
let increase = 1;


function incrementCount(){
    count++;
    counterElement.textContent = count;  
  }
  function decrementCount () {
    count--;
    counterElement.textContent = count;
  }
  function resetCount() {
    count = 3;
    counterElement.textContent = count;  
  }
buttonDECREASE.addEventListener("click", decrementCount);
buttonINCREASE.addEventListener("click", incrementCount);
buttonRESET.addEventListener("mouseover", resetCount);

 


  
