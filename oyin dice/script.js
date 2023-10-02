const button = document.querySelector("button");
button.addEventListener("click", roll)


const die1 = document.getElementById("d1");
const die2 = document.getElementById("d2");
const total = document.getElementById("ttl");


function roll(){
    var num1 = Math.floor(Math.random() *(6) + 1);
    var num2 = Math.floor(Math.random() *(6) + 1);
   die1.textContent = num1;
   die2.textContent = num2;


   total.textContent = num1 + num2;
}
