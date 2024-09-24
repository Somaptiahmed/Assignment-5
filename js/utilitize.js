
function getInputFieldValueById(id){
    const donateMoney = document.getElementById(id).value;
    const donateMoneyNumber = parseFloat(donateMoney);
    return donateMoneyNumber;
    
}
function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}

function showSectionById(id){
    document.getElementById('donate-money-form').classList.add('hidden');
    document.getElementById('donate-history').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}

