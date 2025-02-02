/***
 * 1. add event listener to the add money button ( form submit)
 * 2. get the money user want to add 
 * also, get the pin number
 * 3. verify the pin number , for , wrong pin number ==> failed to add for right pin number, allow to add the number to the account balance 
 * 
 * 4. get the current balance 
 * 
 * 5. add money to be added with the current balance 
 * 6. display/ update the balance in the DOM/UI
 */

document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();
//get money and the pin number
const addMoney = document.getElementById('input-add-money').value ;
const addMoneyNumber = parseFloat(addMoney) ;
const pinNumber = document.getElementById('input-pin-number').value ;

if( pinNumber === '1234'){
    //add money to the balance
    const balance = document.getElementById('account-balance').innerText ;
const balanceNumber = parseFloat(balance) ;
// new balance
const newBalance = balanceNumber + addMoneyNumber ;
// update the DOM with update balance
document.getElementById('account-balance').innerText = newBalance ;
}
else{
    alert('Failed to add money . please try again later.')
}
})