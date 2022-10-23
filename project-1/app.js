
const login=document.getElementById("login");

login.addEventListener('click',()=>{
    const loginArea=document.getElementById("login-area");
    loginArea.style.display="none";
    const transaction=document.getElementById("transaction-area");
    transaction.style.display="block";
});

//add deposit button handler

const deposit=document.getElementById("addDeposit");
deposit.addEventListener('click',()=>{

   const depositNumber=getInputNumber("depositAmount");

   updateAmount("currentDeposit",depositNumber);

   updateAmount("currentBalance",depositNumber);

   document.getElementById("depositAmount").value="";
})

//add withdraw button handler
const withdraw=document.getElementById("addWithdraw");

withdraw.addEventListener('click',()=>{
    const withdrawNumber=getInputNumber("withdrawAmount");
    
    updateAmount("currentWithdraw",withdrawNumber);

    updateAmount("currentBalance",-1*withdrawNumber);
    
    document.getElementById("withdrawAmount").value="";
});

function getInputNumber(id){
    const amount=document.getElementById(id).value;

    const amountNumber=parseFloat(amount);

    return amountNumber;
}

function updateAmount(id,added_value){
    const currentValue=document.getElementById(id).innerText;

   const currentNumber=parseFloat(currentValue);
    
   const totalBalance=added_value + currentNumber;

   document.getElementById(id).innerText =totalBalance;
}