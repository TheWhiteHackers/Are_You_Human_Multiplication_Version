let correct = 0;
let incorrect = 0;
let qanswered = 0;
let diff = 4;
let num1 = Math.floor(Math.random() * diff );
let num2 = Math.floor(Math.random() * diff );
let theans = num1*num2;

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
    
    let text = num1 + " X " + num2 + " =";

    console.log(num1, num2, theans);
    
    document.getElementById("equ").innerHTML=text;
}
function checkans(e){
    if(e.keyCode === 13){
        e.preventDefault();
        console.log("enter pressed");
        let yourans = document.getElementById("yourans").value*1;

        if(yourans === theans){
            alert("yay its correct");
        } else{
            alert("nooo its not correct");
        }
    
    
    
    
    }
}