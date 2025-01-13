function handleProductChange(product, isIncrease){
    const productInput= document.getElementById(product + '-count');
    const productCount= parseInt(productInput.value);
    let newPorductCount = productCount;

    if(isIncrease==true){
        newPorductCount=productCount+1;
    }
    if(isIncrease==false && productCount>=1){
        newPorductCount=productCount-1;
    }

    productInput.value=newPorductCount;
    let productTotal;

    if(product=='laptop'){
        productTotal= newPorductCount*1450;
    }
    else{
        productTotal= newPorductCount*249;
    }

    document.getElementById(product + '-count').innerText=productCount;

    handleCheckout();
}

function handleCheckout(){
    const laptopCount= getItems('laptop');
    // const airpodCount= parseInt(document.getElementById('airpod-count').value);
    const airpodCount= getItems('airpod');

    const totalPrice= laptopCount*1450 + airpodCount*249;
    document.getElementById('sub-total').innerText=totalPrice;

    const tax= Math.round(totalPrice*0.0635);
    document.getElementById('tax-amount').innerText=tax;

    const grandTotal= totalPrice+tax;
    document.getElementById('grand-total').innerText=grandTotal;

}

function getItems(product){
    const productInput= document.getElementById(product + '-count');
    const productCount= parseInt(productInput.value);
    return productCount;
}

function checkout(){
    alert("Thanks for purchasing...");
    location.reload();
}
