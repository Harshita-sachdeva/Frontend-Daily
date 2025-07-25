function start(){
    var ans=confirm("Do you want to calculate ?");
    // if(ans){
    //     document.getElementById("dashboard").innerHTML="<b>Operators guide !! </b> <br> 1 : addition <br> 2 : Subtraction <br> 3 : multiplication <br> 4 : division <br> 5 : power "
    // }
}
function validation1(){
    if(isNaN(document.getElementById("no1").value)){
        document.getElementById("num1_valid").innerHTML="Please enter the valid numbers ! "
    }
}
function validation2(){
    if(isNaN(document.getElementById("no2").value)){
        document.getElementById("num2_valid").innerHTML="Please enter the valid numbers ! "
    }
}
function validop(){
    if(document.getElementById("op").value==="/" && document.getElementById("no2").value==0){
        document.getElementById("divideByZero").innerHTML="Can't divide by zero !"
    }
}
function cal(){
    var first_num=parseFloat(document.getElementById("no1").value);
    var second_num=parseFloat(document.getElementById("no2").value);
    var op=document.getElementById("op").value;
    
    var rdm=Math.random();
    if(rdm<0.1){
        if(op=="+"){
            op="-"
        }
        else if(op=="*"){
            op="+"
        }
        else if(op=="-"){
            op="/"
        }
        else if(op=="/"){
            op="**"
        }
    }
    switch(op){
        case "+":
            return first_num+second_num;

        case "-":
            return first_num-second_num;

        case "*":
            return first_num*second_num;

        case "/":
            return first_num/second_num;

        case "**":
            return first_num**second_num;
    }
    
}
function result(){
    var result=cal();
    document.getElementById("ans").innerHTML="<b>Answer : </b>"+result;
}