

document.getElementById("submit").addEventListener("click" , loginFn);

function loginFn(){
    var signupArr = JSON.parse(localStorage.getItem("signupArr"));
    console.log(signupArr);

    var enterdEmail = document.getElementById("email");
    var enterdPassword = document.getElementById("password");


       var flag = false;
    signupArr.forEach(function(user){
        if(user.email === enterdEmail.value && user.password === enterdPassword.value){
            flag = true;
        }
    })

    if(flag == true){
        alert("You have loged in succesfully !");
    }else {
        alert("invalid Credentials !");
    }
}