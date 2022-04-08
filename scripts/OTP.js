

let OTPNumber = document.getElementById('OTPNumber');

document.getElementById('OTPButton').addEventListener("click" , function(){
    if(OTPNumber.value === "1234"){
        alert("Payment Successful");
        setTimeout(function(){  
            alert("Cotinue Shopping"); 

            window.location.href = "men.html";
         } , 1000)
    }else {
        alert("Invalid OTP");
    }
})