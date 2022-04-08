
var nam = document.getElementById("name");
var cardNumber = document.getElementById("cardNumber");
var cvv = document.getElementById("cvv").value;
var expiryDate = document.getElementById("expiry");
var mobile = document.getElementById("mobile");

var OTPBtn = document.getElementById("OTPBtn");

OTPBtn.addEventListener("click", function(){
    if(nam.value == "" || cardNumber.value == "" || cvv.value == "" || mobile.value == ""){
        alert("Please fill the details properly !");
    }else if(cardNumber.value.length != 16) {  
           alert("cardNumber must be of 16 digits !");
     }else{
        alert("OTP has been sent to to your registered mobile number");
        window.location.href = "OTP.html";
    }
})