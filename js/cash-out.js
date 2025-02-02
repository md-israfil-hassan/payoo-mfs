
document.getElementById('btn-cash-out')
.addEventListener('click', function(event){
event.preventDefault() ;
const cashOut = document.getElementById('input-cash-out').value ;
const pinNumber = document.getElementById('input-cash-out-pin').value ;



console.log(cashOut, pinNumber) ;
// wrong way to verify pin number
if( pinNumber === '1234'){
    const balance = document.getElementById('account-balance').innerText ;
const balanceNumber = parseFloat(balance) ;
const cashOutNumber = parseFloat(cashOut)
// reuce the balance
const newBalance = balanceNumber - cashOutNumber ;
// update the ui
document.getElementById('account-balance').innerText=newBalance+'$' ;
}
else{
    alert('Failed to cash out, please try again later')
}

})