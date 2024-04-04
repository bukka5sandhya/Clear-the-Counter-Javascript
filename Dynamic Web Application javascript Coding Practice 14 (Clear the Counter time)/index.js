let counterValueEle = document.getElementById('counterValue');
let clearBtnEle = document.getElementById9("clearBtn");

let counter = 0;

let counterTimer = function(){
    counter = counter+1;
    counterValueEle.textContent = counter;

}
let intervalId = setInterval(counterTimer,2000);

clearInterval(intervalId)