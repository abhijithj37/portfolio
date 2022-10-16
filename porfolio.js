var nameerror=document.getElementById('name-error');
var emailerror=document.getElementById('email-error');
var numerror=document.getElementById('number-error');
var messageerror=document.getElementById('message-error');
var suberror=document.getElementById('error-submit');


function validateName(){
    var name=document.getElementById("contact-name").value;
     if(name.length==0){
        nameerror.innerHTML=" This Field is Required";
        return false;
     }
     if(!name.match(/^[A-Z][a-zA-Z]{3,}(?: [A-Z][a-zA-Z]*){0,2}$/)){
        nameerror.innerHTML=" please Enter your Full name";
        return false;

     }
     
     nameerror.innerHTML='<i class="fa-sharp fa-solid fa-circle-check check-mark"></i>';
     return true;
    }

function validatePhone(){
    var phones=document.getElementById('contact-number').value;
    if(phones.length==0){
        numerror.innerHTML="required";
        return false;


    }
    if(phones.length!==10){
        numerror.innerHTML="should be 10 digits";
        return false;

    }


    if(!phones.match(/^[0-9]{10}$/)){
        numerror.innerHTML="no strings";
        return false;

    }
    numerror.innerHTML='<i class="fa-sharp fa-solid fa-circle-check check-mark"></i>';
    return true;


}
function validateEmail(){
    var emails=document.getElementById('contact-email').value;

    if(emails.length==""){

        emailerror.innerHTML=" this field is required";
        return false;


    }
     if(!emails.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
      emailerror.innerHTML="invalid";
      return false;
    }

    emailerror.innerHTML='<i class="fa-sharp fa-solid fa-circle-check check-mark"></i>';
    return true;


}
function validateMessage(){
    var messages=document.getElementById('contact-message').value;
    

    if(messages.length<30){
        messageerror.innerHTML= 'minimum 30 characters required';
        return false;
        
    }
    messageerror.innerHTML='<i class="fa-sharp fa-solid fa-circle-check check-mark"></i>';
    return true;


} function validateForm(){
    if(!validateEmail()|| !validateMessage() || !validatePhone()|| !validateName()){
         suberror.style.display='block';
        suberror.innerHTML='fix the error to submit';
        setTimeout(function(){suberror.style.display='none';},3000)
        return false;


    }else{
        alert("Click to Submit");
        return true;

    }
    
    

}



