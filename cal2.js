function f1 ( donate, mainAmount, input, location, num ) {

    let moneyHtml = document.getElementById("page2")
    let div = document.createElement("div");
    let alertPop = document.getElementById("alert");

    if (input <= mainAmount && input > 0 ) {

        const totalAmount = mainAmount - input;
        const donateAmount = input + donate;
        // let num = 0;
    
        document.getElementById("mainAmount").innerHTML = `<span id="mainAmount">${totalAmount}</span>`;
        let ele = document.getElementsByClassName("donate")[num]
        ele.innerHTML = `<span id="donate">${donateAmount}</span>`;
    
        alertPop.classList.remove("hidden");
        document.getElementsByClassName("input")[num].value = "";
        window.scrollTo(0, 0);
    
    
        
        moneyHistory = ` <div class=" lg:mx-40 mx-5 pb-5">
            <div class="p-5 border-solid border-2 rounded-lg">
                <h2 class="text-xl font-bold mb-3">${input} Taka is Donated for ${location}, Bangladesh</h2>
        
                <h4>Date : ${new Date().toLocaleString()} (Bangladesh Standard Time)</h4>
            </div>
        
        </div>`;
        div.innerHTML = moneyHistory;
    
        moneyHtml.insertBefore(div, moneyHtml.firstChild);
        
     } else if (mainAmount == 0) {
        alert("Your Account Balabce is Zero. Please Reload Website");
     } else {
        alert("Please Enter Valid Amount");
     }
    

}