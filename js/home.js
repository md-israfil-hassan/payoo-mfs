// add money to the account
/**
 *  S-1 : add event Hnadler 
 * prevent page reload after form submit
 * S-2: get money to be added to the account balance
 * S-3: verify the pin number
 */




// step-1: add an event handler to the add money button inside the form
document.getElementById('btn-add-money').addEventListener('click',function(event){
    // prevent page reload after form submit 
    event.preventDefault();

//step-2: 
const addMoneyInput = document.getElementById('input-add-money').value ;

//get the pin number provide
const pinNumberInput = document.getElementById('input-pin-number').value ;

console.log(typeof pinNumberInput)

// step: verify pin number
// wrong way to validate pin number
if( pinNumberInput === '1234'){
    console.log('adding money to your account')
    //step-4: get the current balcnce
const balance = document.getElementById('account-balance').innerText;
console.log(typeof balance) ;

//step-5: add addmoney input with balance

const addMoneyNumber = parseFloat(addMoneyInput) ;
const balanceNumber = parseFloat(balance);
const newBalance = addMoneyNumber + balanceNumber ;

// step-6 : update the balance in the UI/DOM
document.getElementById('account-balance').innerText=newBalance ;

}

else{
    alert('faild to add money! please try again')
}

})