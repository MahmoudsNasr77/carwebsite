   
function validate() {
    
      
    "use strict";

    var username = document.getElementById("username").value,
        
    
        password = document.getElementById("password").value;

    if (username.length < 3) {
    
        alert("Enter Correct Username");
        return false;

    }
        
    if (password.length < 3) {
    
        alert("Enter Correct password");
        return false;

    }
    return true;
  
}
    