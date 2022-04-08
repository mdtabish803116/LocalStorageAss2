

 var cartCount = document.getElementById("countCart");

 if(localStorage.getItem("cartItems") === null){
     localStorage.setItem("cartItems" , JSON.stringify([]));
     cartCount.textContent = "0";
 }else {
     cartCount.textContent = JSON.parse(localStorage.getItem("cartItems")).length;
 }

   var cartItems = JSON.parse(localStorage.getItem("cartItems"));
   console.log(cartItems);
if(cartItems.length === 0){
    console.log("hii")
    var line = document.createElement("h1");
     line.textContent = "Your Cart is Empty ";

     document.getElementById("cartContainer").append(line);
 }else {
    displayCart();
 }

 
    
 function displayCart(){

      var total = 0;
    // if(localStorage.getItem("totalPrice") === null){
    //     localStorage.setItem("totalPrice",JSON.stringify([]));
    // }

    
    document.getElementById("cartContainer").textContent = "";
    var cartItems = JSON.parse(localStorage.getItem("cartItems"));
    var cartBox = document.createElement("div");
    var title = document.createElement("p");
        title.textContent = `My Cart (${JSON.parse(localStorage.getItem("cartItems")).length} items)`;
           title.setAttribute("id" , "title");
          cartBox.append(title);
    
    cartItems.forEach(function(item , index){
    
     var cartDiv = document.createElement("div");
       cartDiv.setAttribute("class", "cartDiv")
     
       var imgCountDiv = document.createElement("div");
           var img = document.createElement("img");
             img.src = item.img_url;

        var countDiv = document.createElement("div");
    
            var minusDiv = document.createElement("div");
              minusDiv.textContent = "-";

              minusDiv.setAttribute("class" , "countBtn")
                
            var zeroDiv = document.createElement("div");
                zeroDiv.textContent = "1";

                zeroDiv.setAttribute("id" , "zeroDiv");
            var plusDiv = document.createElement("div");
               plusDiv.textContent = "+";

               plusDiv.setAttribute("class" , "countBtn");
                     
               var imgCount ;
                   if(localStorage.getItem(`imgCount${item.id}`) === null){
                       zeroDiv.textContent = "1";
                       imgCount = 1;
                   }else {  
                        zeroDiv.textContent = localStorage.getItem(`imgCount${item.id}`)
                       imgCount = localStorage.getItem(`imgCount${item.id}`);
                   }

            
              plusDiv.addEventListener("click" , function(){
                     imgCount++;
                     localStorage.setItem(`imgCount${item.id}` , imgCount)
                     zeroDiv.textContent = localStorage.getItem(`imgCount${item.id}`);
                          
                
                     price.textContent = `Rs. ${item.price*imgCount}`;

                     localStorage.setItem(`itemPrice${item.id}` ,  price.textContent)

                     price.textContent = localStorage.getItem(`itemPrice${item.id}`);

                     window.location.reload();
                    
              });

             

              minusDiv.addEventListener("click" , function(){
                      console.log("hii")
                  if(imgCount <= 1){
                    zeroDiv.textContent = "1";
                    
                  }else{  
                   imgCount--;
                   localStorage.setItem(`imgCount${item.id}` , imgCount);

                zeroDiv.textContent = localStorage.getItem(`imgCount${item.id}`);

                price.textContent = `Rs. ${item.price*imgCount}`;

                localStorage.setItem(`itemPrice${item.id}` ,  price.textContent)

                price.textContent = localStorage.getItem(`itemPrice${item.id}`);


                  window.location.reload();

                  }
               });




               countDiv.append(minusDiv , zeroDiv , plusDiv);
                countDiv.setAttribute("class" , "countDiv");
          imgCountDiv.append(img , countDiv);

        var paraDiv = document.createElement("div");
          paraDiv.setAttribute("class" , "paraDiv");
            var para = document.createElement("p");
              para.textContent = item.name;
            var price = document.createElement("p");
            price.textContent = `Rs. ${item.price}`;
        var removeBtn = document.createElement("button");
           removeBtn.textContent = "Remove";

           removeBtn.addEventListener("click" , function(){
                 var cartItems = JSON.parse(localStorage.getItem("cartItems"));
                 cartItems.splice(index , 1);
                 localStorage.setItem("cartItems", JSON.stringify(cartItems));
                 window.location.reload();
           })
           paraDiv.append(para , price , removeBtn);

        
            // count price functionality//
             if(localStorage.getItem(`itemPrice${item.id}`) === null){
                price.textContent = `Rs. ${item.price}`;
                total = total + parseInt(price.textContent.slice(4));
                localStorage.setItem("totalPrice",JSON.stringify(total));
             }else {  
           price.textContent = localStorage.getItem(`itemPrice${item.id}`);
           total = total + parseInt(price.textContent.slice(4));
           localStorage.setItem("totalPrice",JSON.stringify(total));
            
             }


    cartDiv.append(imgCountDiv , paraDiv);

    cartBox.append(cartDiv);

});

    // console.log(total);
    
    var priceBox = document.createElement("div");
       priceBox.setAttribute("id" , "priceBox");
    var pricePara = document.createElement("p");
        pricePara.textContent = "Price Details";

   var totalPara = document.createElement("p");
     totalPara.setAttribute("id" , "totalPara")
    totalPara.textContent = `Total = Rs. ${total}`;
     
       var label = document.createElement("label");
         label.textContent = "Apply Coupon for discount 30%";
         label.style.display = "block";

    var inputCpn = document.createElement("input");
        inputCpn.setAttribute("id" , "inputCpn")
       inputCpn.setAttribute("placeholder", "e.g. masai30");

    var applyBtn = document.createElement("button");
      applyBtn.textContent = "Apply";

    var paymentBtn = document.createElement("a");
       paymentBtn.textContent = "Proceed for Payment";
       paymentBtn.style.display = "block";
       paymentBtn.style.fontSize = "18px";
       paymentBtn.style.marginTop = "20px";
       paymentBtn.setAttribute("href" , "payment.html")


            var flag = true;
      applyBtn.addEventListener("click", function(){
          var inputCpnVal = document.querySelector("#inputCpn").value;
          var totalVal = document.getElementById("totalPara");
             if(flag){  
          if(inputCpnVal == "masai30"){
              total = parseInt(total - total*(0.3));

              console.log(total);
              alert("Coupon applied succesfully");

              flag = false;
          }else {
              alert("Coupon is not Valid !")
          }

          totalVal.textContent = `Total = Rs. ${total}`;

        }else{
            alert("You have already applied the coupon !");
        }

         

      });
      
    
     priceBox.append(pricePara , totalPara ,label,  inputCpn , applyBtn , paymentBtn);

      document.getElementById("cartContainer").append(cartBox , priceBox);

 }
