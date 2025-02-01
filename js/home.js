// add money to the account
/**
 *  S-1 : add event Hnadler 
 * prevent page reload after form submit
 * S-2: get money to be added to the account balance
 */




// step-1: add an event handler to the add money button inside the form
document.getElementById('btn-add-money').addEventListener('click',function(event){
    // prevent page reload after form submit 
    event.preventDefault();

//step-2: 
const addMoneyInput = document.getElementById('input-add-money').value ;

//get the pin number provide
const pinNumberInput = document.getElementById('input-pin-number').value ;

console.log(addMoneyInput, pinNumberInput)

})