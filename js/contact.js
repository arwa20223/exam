var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var phoneError = document.getElementById('phone-error');
var egeError = document.getElementById('ege-error');
var repasswordError = document.getElementById('repassword-error');
var submitError = document.getElementById('submit-error');


function validateName() {
    var name = document.getElementById('contact-name').value;
    
    if (name.length == 0) {
     nameError.innerHTML = 'Special characters and numbers not allowed';
     return false;
    }
    nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
 }
 
 /* email */


function validateEmail(){
    var email = document.getElementById('contact-email').value;
 
    if(email.length == 0){
        emailError.innerHTML = 'email is required';
        /* return false; */
    }

    if (!email.match(/^[A-Za-z]\.\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = 'email Invaild';
/*         return false;
 */       }
      emailError.innerHTML =  '<i class="fas fa-check-circle"></i>';
      return true;
}

        /*       phone        */



     

function validatePhone(){
    var phone = document.getElementById('contact-phone').value;
 
    if(phone.length == 0){
        phoneError.innerHTML = 'phone is required';
        return false;
    }
    if(phone.length !== 10){
        phoneError.innerHTML = 'Enter valid Phone Number';
        return false;
    }
    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = 'only digits please.';
        return false;
       }
      phoneError.innerHTML =  '<i class="fas fa-check-circle"></i>';
      return true;
}

       /*      password    */

       function validatePassword(){
        var password = document.getElementById('contact-Password').value;
     
        if(phone.length == 0){
            PasswordError.innerHTML = 'Password is required';
            return false;
        }
        if(Password.length !== 10){
            PasswordError.innerHTML = 'Enter valid password *Minimum eight characters, at least one letter and one number:*';
            return false;
        }
        if (!Password.match(/^[0-9]{10}$/)) {
            PasswordError.innerHTML = 'only digits please.';
            return false;
           }
           PasswordError.innerHTML =  '<i class="fas fa-check-circle"></i>';
          return true;
    }


    /*      repassword     */
    function validateRpassword(){
        var rpassword = document.getElementById('contact-rPassword').value;
     
        if(phone.length == 0){
            PasswordError.innerHTML = 'Rpassword is required';
            return false;
        }
        if(Rpassword.length !== 10){
            RpasswordError.innerHTML = 'Enter valid repassword*';
            return false;
        }
        if (!Rpassword.match(/^[0-9]{10}$/)) {
            RpasswordError.innerHTML = 'only digits please.';
            return false;
           }
           RpasswordError.innerHTML =  '<i class="fas fa-check-circle"></i>';
          return true;
    }




       /*       submit       */


    function validateForm(){
        if(!validateName() || !validatePhone() || !validateEmail() || !validatemessage()){
            submitError.style.display = 'block';
            submitError.innerHTML = 'please fix error to submit';
            setTimeout(function(){submitError.style.display = 'none';}, 3000)
      }
    }









       