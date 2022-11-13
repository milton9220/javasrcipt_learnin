
function handleProductChange(product,isInrease){
    const  itemInput=document.getElementById(product+'-amount');
    const itemCount=parseInt(itemInput.value);
    let itemNewCount=0;
    if(isInrease==true){
        itemNewCount=itemCount+1;
    }
    if(isInrease==false && itemCount >0){
        itemNewCount=itemCount-1;
    }
    itemInput.value=itemNewCount;
    let itemNewPrice=0;
    if(product=="phone"){
        itemNewPrice=itemNewCount*1219;
    }
    if(product=="case"){
        itemNewPrice=itemNewCount*59;
    }
    document.getElementById(product+'-price').innerText="$"+itemNewPrice;
    calculateSubTotal();
}

function calculateSubTotal(){
    const phoneQtn=getInputValue('phone-amount');
    const caseQtn=getInputValue('case-amount');
    let subtotal = parseFloat(phoneQtn*1219+caseQtn*59);
    document.getElementById('sub-total-amount').innerText="$"+subtotal;
    const tax=Math.round(subtotal*0.1);
    document.getElementById('tax').innerText="$"+tax;

    const totalAmount=subtotal + tax;
    document.getElementById('total-amount').innerText="$"+totalAmount;
}
function getInputValue(input_id){
    var itemQtn=document.getElementById(input_id);
    itemQtn=parseInt(itemQtn.value);
    return itemQtn;
}

