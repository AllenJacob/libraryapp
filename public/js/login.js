



    var reg = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    var reg1 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,15}$/
    

function validate()
{
    
    
let email = document.getElementById("email").value;
let pwd = document.getElementById("pwd").value;
let error = document.getElementById("error");
let error1 = document.getElementById("error1");
let error2 = document.getElementById("error2");


console.log(email);

    
    if(reg.test(email)&&reg1.test(pwd)){
        error.innerHTML = "Valid";
        error1.innerHTML = "Valid pwd";
        error.style.color = "blue";
        error1.style.color = "blue";
        return true
        ontype();
         
    }

        
    else  if(reg.test(email.value)) {
        error.innerHTML = "Valid Email";
        error.style.color = "blue";
        return true;
        
    }
    else {
        error.innerHTML = "Invalid Email";
        error.style.color = "red";
        return false;
    }
    // else {
    //     error1.innerHTML = "Invalid pwd";
    //     error.style.color = "red";
    // }

   
    
    
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
        error1.style.color="orange";
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
       return false;
    }
    else{
        error2.innerHTML = "Password is ok.";
        error2.style.color = "blue";
        return true;
    }
}