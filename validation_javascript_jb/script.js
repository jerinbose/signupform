const form1=document.getElementById("form1");
const username=document.getElementById("username");
const email1=document.getElementById("email");
const passwd=document.getElementById("pass");
const repasswd=document.getElementById("pass_re");




form1.addEventListener("submit",function(e){
    e.preventDefault();
    validate();
    
    
});

function validate(){
    const namevalue=username.value.trim();
    const emailvalue=email.value.trim();
    
    const passwd1=passwd.value.trim();
    const passwd2=repasswd.value.trim();
    var a=passwd1.length;

    const name_css=document.querySelector("#username");
    const email_css=document.querySelector("#email");
    const pass_css=document.querySelector("#pass");
    const repass_css=document.querySelector("#pass_re");

    var format=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;



if(namevalue == ''){
    document.getElementById("small1").innerHTML="Username cannot be blank.";
    name_css.style.border="thin solid red";   
}
if(emailvalue == ''){
    document.getElementById("email_error").innerHTML="Email cannot be blank.";
    email_css.style.border="thin solid red";
}

if (passwd1 == '') {
    
    document.getElementById("small2").innerHTML="Password cannot be blank";
    pass_css.style.border="thin solid red";
}
if (passwd2 == '') {
    document.getElementById("pass_wrong").innerHTML="Password cannot be blank";
    repass_css.style.border="thin solid red";
    
}
if (a < 8 && passwd1 != '') {
    document.getElementById("small2").innerHTML="Minimum Required is 8 Characters";
    pass_css.style.border="thin solid red";
}

if (a>13 && passwd1 !='') {
    document.getElementById("small2").innerHTML="Maximum Required is 13 Character";
    pass_css.style.border="thin solid red";
    
}

if (passwd1 != passwd2) {
    document.getElementById("pass_wrong").innerHTML="Password dosen't match.";
    pass_css.style.border="thin solid red"
    repass_css.style.border="thin solid red";
    
}

if (!email1.value.match(format) && emailvalue != '') {
    document.getElementById("email_error").innerHTML="Invalid Mail Address.";
    
}




if (namevalue != '' && emailvalue != '' && passwd1 != '' && passwd2 != '' && passwd1 == passwd2 && a >= 8 && a <= 13 && email1.value.match(format)) {
    location.href = "welcome.html";

}

}

