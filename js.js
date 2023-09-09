let correct = 0;
let incorrect = 0;
let qanswered = 0;
let diff = 4;
let num1 = 0;
let num2 = 0;

window.onload=start();

function start(){
    document.getElementById("shadow").style.display="none";
    document.getElementById("explainpopup").style.display="none";
}
function closebtn(){
    document.getElementById("shadow").style.display="none";
    document.getElementById("explainpopup").style.display="none";
}
function explain() {
    document.getElementById("shadow").style.display="block";
    document.getElementById("explainpopup").style.display="block";
}
function begin(){
    document.getElementById("startbox").style.display="none";
    createequ();
    // STARTS TIMER!!!!!
    countdown();
}
function checkans(e){
    if(e.keyCode === 13){
        e.preventDefault();
        console.log("enter pressed");
        let yourans = document.getElementById("yourans").value*1;
        let theans = num1*num2;

        if(yourans === theans){
            qanswered+=1;
            correct+=1;
        } else{
            qanswered+=1;
            incorrect+=1;
        }
        document.getElementById("totalq").innerHTML=qanswered+" questions answered";
        document.getElementById("totalc").innerHTML=correct+" correct";
        document.getElementById("totali").innerHTML=incorrect+" incorrect";
        createequ();
    }
}
function createequ(){
    num1 = Math.floor(Math.random() * diff );
    num2 = Math.floor(Math.random() * diff );
    let text = num1 + " X " + num2 + " =";    
    document.getElementById("equ").innerHTML=text;
    document.getElementById("yourans").value="";
    console.log(num1, num2);
}

function countdown() {
    var seconds = 10;
    function tick() {
      var counter = document.getElementById("counter");
      seconds--;
      counter.innerHTML =
        "00 : " + (seconds < 10 ? "0" : "") + String(seconds);
      if (seconds > 0) {
        setTimeout(tick, 1000);
      } else {
        gameisover()
      }
    }
    tick();
  }

function gameisover(){
    alert("hi")    
};