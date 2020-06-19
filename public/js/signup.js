let email = document.getElementById("email").value;
let pno = document.getElementById("pno").value;
let pwd = document.getElementById("pwd").value;
let pwd1 = document.getElementById("pwd1").value;
let error = document.getElementById("error");
let error1 = document.getElementById("error1");
let error2 = document.getElementById("error2");
let error3 = document.getElementById("error3");
let error4 = document.getElementById("error4");



    var reg = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    var reg1 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,15}$/
    var reg2 = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
    

function validate()
{
    
    let email = document.getElementById("email").value;
let pno = document.getElementById("pno").value;
let pwd = document.getElementById("pwd").value;
let pwd1 = document.getElementById("pwd1").value;
let error = document.getElementById("error");
let error1 = document.getElementById("error1");
let error2 = document.getElementById("error2");
let error3 = document.getElementById("error3");
let error4 = document.getElementById("error4");
 
    if(reg.test(email)&&reg1.test(pwd)&&reg2.test(pno)){
        error.innerHTML = "Valid";
        error1.innerHTML = "Valid pwd";
        error.style.color = "blue";
        error1.style.color = "blue";
        error3.innerHTML = "Valid";
        error3.style.color = "blue";
        return true
        ontype();
         
    }
        
    else  if(reg.test(email.value)) {
        error.innerHTML = "Valid Email";
        error.style.color = "blue";
        return false;
        
    }
    else if(reg.test!=(email.value)){
        error.innerHTML = "Invalid Email";
        error.style.color = "red";
        return false;
    }
    else if(reg2.test(pno.value)){
        error3.innerHTML = "Valid Number";
        error3.style.color = "blue";
        return false;
    }
    else if(reg2.test!=(pno.value)){
        error3.innerHTML = "Invalid Number";
        error3.style.color = "red";
        return false;
    }

    else {
        error1.innerHTML = "Invalid pwd";
        error.style.color = "red";
    }

   
   
    
    
}
function ontype(){
    if(pwd.value.length<8) {
        error1.innerHTML = "Invalid Pwd";
        error1.style.color = "red";
        
    }
    else if(pwd.value.length==8||pwd.value.length<=10){
        error1.innerHTML = "poor";
        error1.style.color="red";
    }
    else if(pwd.value.length==11||pwd.value.length<=13){
        error1.innerHTML = "medium";
        error1.style.color="skyblue";
    }
    else {
        error1.innerHTML = "strong";
        error1.style.color = "green";
    }
    
}
function check(){
    if(reg1.test!=(pwd.value)){
       error2.innerHTML = "Password must contain an uppercase,a lowercase,a digit,special character!!.";
       error2.style.color = "red";
       return true;
    }
    
}
function check2(){
    if(pwd1.value==pwd.value){
        error4.innerHTML = "Passwords Match";
        error4.style.color = "green";
        return false;

    }
    else{
        error4.innerHTML = "Passwords Mismatch";
        error4.style.color = "red";
        return true;
 
    }
}
function numbercheck(){
    if(pno.value.length==10){
        error3.innerHTML = "Valid Number";
        error3.style.color = "blue";
        return false;
    }
    else{
        error3.innerHTML = "Invalid Number";
        error3.style.color = "red";
        return true;
    }
}
