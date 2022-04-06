

  var signupArr;
  if(localStorage.getItem("signupArr") == null){
      signupArr = [];
  }else{
      signupArr = JSON.parse(localStorage.getItem("signupArr"));
  }

  document.getElementById("signup").addEventListener("submit" , addToLocalStorage);

  function addToLocalStorage(event){
      event.preventDefault();
     var email =  document.getElementById("email");
      var mobile =  document.getElementById("mobile");
      var password =  document.getElementById("password");

      var userObj = {
        email : email.value,
        mobile : mobile.value,
        password : password.value,
   };

       var flag = true;
       for(var i = 0; i < signupArr.length; i++){
               if(signupArr[i].email === email.value){
                   alert("Account is already exist !");
                   email.value = "";
                   password.value = "";
                   flag = false;
                    break;
               }
       }

      if(flag == true){  
           if(email.value == "" || mobile.value == "" || password.value == ""){
                alert("Please fill the details properly !")
          }else{   
          signupArr.push(userObj);
          localStorage.setItem("signupArr" , JSON.stringify(signupArr));
          alert("You have succesfully created the account");
          window.location.href = "login.html";

      } 
    }
       if(email.value != "" && mobile.value != "" && password.value != ""){  
      document.getElementById("email").value = "";
      document.getElementById("mobile").value = "";
      document.getElementById("password").value = "";
       }
  }