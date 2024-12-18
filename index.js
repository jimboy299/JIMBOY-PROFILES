function plusFuntion(){
    let num1 = document.getElementById("num1").value
    let num2 = document.getElementById("num2").value
    document.getElementById("result").innerHTML=parseInt(num1) + parseInt (num2)
}
function multiplyFuntion(){
    let num1 = document.getElementById("num1").value
    let num2 = document.getElementById("num2").value
    document.getElementById("result").innerHTML=parseInt(num1) * parseInt (num2)
}
function divideFuntion(){
    let num1 = document.getElementById("num1").value
    let num2 = document.getElementById("num2").value
    document.getElementById("result").innerHTML=parseInt(num1) / parseInt (num2)
}
function minusFuntion(){
    let num1 = document.getElementById("num1").value
    let num2 = document.getElementById("num2").value
    document.getElementById("result").innerHTML=parseInt(num1) - parseInt (num2)
}

function GGinputfunction(){
    var gginput = document.getElementById('gg').value
    console.log;
    if(parseInt(gginput) >=18){
        console.log ("legal age");
    }else  if(parseInt(gginput) < 18){
        console.log ("minor");

     }else {
        console.log("you are old enough");
     }
}
