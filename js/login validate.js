function validate()
{
    var email = document.getElementById("exampleInputEmail1");
    var password = document.getElementById("exampleInputPassword1");

  if(emptycheck(email,password))
  {
  if(emailcheck(email))
   {
  if(passwordcheck(password,8,20))
   {
   return true;
     }
    return false;
    }
    return false;
    }
    return false; 
  
}
// ---------------------------------------------------------------------------------

function emptycheck(email,password)
{
    if(email.value == ""|| password.value  =="")
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
   
    if (passid_len == 0 ||passid_len >= my || passid_len < mx)
    {
    alert("Incorrect password");
    password.style.border= "1px solid red";
    password.focus();
    return false;
    }
    return true;
      
}



