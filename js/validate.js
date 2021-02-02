function validate()
{
    var email = document.getElementById("inputEmail4");
    var password = document.getElementById("inputPassword4");
    var number = document.getElementById("inputNumber");

  if(emptycheck(email,password,number))
  {
  if(emailcheck(email))
   {
  if(passwordcheck(password,8,20))
   {
   if(numbercheck(number)) 
  {
    return true;
 }
return false;}
return false;}
return false;}
else{
    return false; }
  
}
// ---------------------------------------------------------------------------------

function emptycheck(email,password,number)
{
    if(email.value =="" || password.value == "" || number.value =="")
    {
        alert("Fields cannt be empty");
        return false;
    }
    else{
        return true;
    }
}

function emailcheck(email)
{
    var mailformat = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    if(email.value.match(mailformat))
    {
    return true;
    }
    else
{
alert("You have entered an invalid email address!");
email.style.border= "1px solid red";
email.focus();
return false;
    }}

function passwordcheck(password,mx,my)
{
   
    var passid_len = password.value.length;
    var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if (passid_len == 0 ||passid_len >= my || passid_len < mx)
    {
    alert("Password should not be empty / length be between "+mx+" to "+my);
    password.style.border= "1px solid red";
    password.focus();
    return false;
    }
    else if(password.value.match(decimal)) 
        { 
    
        return true;
        }
        else
        { 
        alert("password must contain 8 to 15 characters, at least one lowercase letter, one uppercase letter, one numeric digit, and one special character")
        password.style.border= "1px solid red";
        return false;
        }
      
}

function numbercheck(number)
{
  var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if(number.value.match(phoneno))
        {
      return true;
        }
      else
        {
        alert("Enter a valid phone number");
        number.style.border= "1px solid red";

        return false;
        }
}
