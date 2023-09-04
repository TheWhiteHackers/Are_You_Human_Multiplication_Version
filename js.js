let correct = 0;
let incorrect = 0;
let qanswered = 0;
let diff = 4;

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
    
    let num1 = Math.floor(Math.random() * diff );
    let num2 = Math.floor(Math.random() * diff );
    let text = num1 + " X " + num2 + " =";
    let theans = num1*num2;


    console.log(num1, num2, theans);
    
    document.getElementById("equ").innerHTML=text;
}    