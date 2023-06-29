function Calcute(First, Second){
    First = document.getElementById("one").value;
    Second = document.getElementById("two").value;
}

function Add(){
    Calcute();

    Adding = First + Number(Second);
    document.getElementById("result").innerHTML = Adding;
}
function Sub(){
    Calcute();

    Subtra = NumbOne - NumbTwo;
    document.getElementById("result").innerHTML = Subtra;
}
function Multi(){
    Calcute();

    Mutlit = NumbOne * NumbTwo;
    document.getElementById("result").innerHTML = Mutlit;
}
function Divi(){
    Calcute();

    Diviide = NumbOne / NumbTwo;
    document.getElementById("result").innerHTML = Diviide;
}