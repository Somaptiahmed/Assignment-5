// console.log('add money');
const donationButton = document.getElementById('btn-donate-money1');
donationButton.addEventListener('click', function(event){
    event.preventDefault();
    
    const donateMoney = document.getElementById('input-donate-money1').value;
    const newDonateMoney = parseFloat(donateMoney);
    const donateMoneyNumber = parseFloat(donateMoney);
    const showMoney = document.getElementById('show-donate-money1').innerText;
    const showMoneyNumber = parseFloat(showMoney);
    const newShowMoney = showMoneyNumber + donateMoneyNumber;
    document.getElementById('show-donate-money1').innerText = newShowMoney;
    console.log(newShowMoney);
    console.log(donateMoney);
    const balance = document.getElementById('account-balance').innerText;
    console.log(balance);
    const balanceNumber = parseFloat(balance);

    const newBalance = donateMoneyNumber + balanceNumber;
    document.getElementById('account-balance').innerText = newBalance;
    console.log(newBalance);

    // card2

    

    // card3
   

})



