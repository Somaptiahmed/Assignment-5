
// card1
document.getElementById('btn-donate-money1').addEventListener('click', function(event){
    event.preventDefault();
    const donateMoney = getInputFieldValueById('input-donate-money1');
    if(isNaN(donateMoney) || donateMoney <= 0){
        alert('Invalid Donation Amount');
        return;
         
    
    }
    const balance = getTextFieldValueById('account-balance');
    
    const newBalance = balance + donateMoney;
    console.log(newBalance);
    document.getElementById('account-balance').innerText = newBalance;
    console.log(balance);

    const showMoney = getTextFieldValueById('show-donate-money1');
    const newShowMoney = showMoney + donateMoney;
    document.getElementById('show-donate-money1').innerText = newShowMoney;
    console.log(newShowMoney);
    console.log(donateMoney);

    // add to history
    const p = document.createElement('p');
    p.innerText = `${donateMoney} Taka is Donated for famine-2024 at Feni, Bangladesh\nDate : Tue Sep 17 2024 08:39:11 GMT +0600 (Bangladesh Standard Time)`;
    console.log(p);

// common function
  document.getElementById('donation-content').appendChild(p)

  console.log(document.getElementById('donation-content'))
})

// card2

document.getElementById('btn-donate-money2').addEventListener('click', function(event){
    event.preventDefault();
    
    const donateMoney = getInputFieldValueById('input-donate-money2');
    if(isNaN(donateMoney) || donateMoney <= 0){
        alert('Invalid Donation Amount');
        return;
    }
    
    console.log(donateMoney);

    const balance = getTextFieldValueById('account-balance');
    
    const newBalance = balance + donateMoney;
    console.log(newBalance);
    document.getElementById('account-balance').innerText = newBalance;
    console.log(balance);
    const showMoney = getTextFieldValueById('show-donate-money2');
    const newShowMoney = showMoney + donateMoney;
    document.getElementById('show-donate-money2').innerText = newShowMoney;
    console.log(newShowMoney);
    console.log(donateMoney);
    // add to history
    const p = document.createElement('p');
    p.innerText = `${donateMoney} Taka is Donated for Flood Relief in Feni,Bangladesh\nDate : Tue Sep 17 2024 08:39:11 GMT +0600 (Bangladesh Standard Time)`;
    console.log(p);

// common function
  document.getElementById('donation-content').appendChild(p)

  console.log(document.getElementById('donation-content'))
 
})

// card3
document.getElementById('btn-donate-money3').addEventListener('click', function(event){
    event.preventDefault();
    
    const donateMoney = getInputFieldValueById('input-donate-money3');
    
    console.log(donateMoney);

    const balance = getTextFieldValueById('account-balance');
    
    const newBalance = balance + donateMoney;
    console.log(newBalance);
    document.getElementById('account-balance').innerText = newBalance;
    if(isNaN(donateMoney) || donateMoney <= 0){
        alert('Invalid Donation Amount');
        return;
    }
    console.log(balance);

    const showMoney = getTextFieldValueById('show-donate-money3');
    const newShowMoney = showMoney + donateMoney;
    document.getElementById('show-donate-money3').innerText = newShowMoney;
    console.log(newShowMoney);
    console.log(donateMoney );

    // add to history
    const p = document.createElement('p');
    p.innerText = `${donateMoney} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh\nDate : Tue Sep 17 2024 08:39:11 GMT +0600 (Bangladesh Standard Time)`;
    console.log(p);

// common function
  document.getElementById('donation-content').appendChild(p)

  console.log(document.getElementById('donation-content'))
   

})



        



