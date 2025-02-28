document.getElementById('cashout-section').style.display="none"
document.getElementById("add-money").addEventListener('click', function (event) {
    event.preventDefault;
    const amount = document.getElementById("amount").value;
    const convertedAmount = parseFloat(amount);
    const balance = document.getElementById("balance").innerText
    const convertedBalance = parseFloat(balance);
    const pin = document.getElementById("pin").value
    const convertedPin = parseInt(pin)

    if (convertedPin === 1234) {
        const sum = convertedBalance + convertedAmount;
        document.getElementById("balance").innerText = sum;
    }

    else {
        alert('tik nai')
    }

})

document.getElementById('add-money-btn').addEventListener("click", function(){
    document.getElementById('cashout-section').style.display="none"   
    document.getElementById('add-money-section').style.display="block" 
})
document.getElementById('cashout-btn').addEventListener("click", function(){
    document.getElementById('cashout-section').style.display="block"   
    document.getElementById('add-money-section').style.display="none" 
})