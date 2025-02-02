// show the cash out form

document.getElementById('btn-show-cash-out')
.addEventListener('click', function(){

     //show cash out button clickd
     document.getElementById('cash-out-form').classList.remove('hidden')

     // hide the add money form 

     document.getElementById('add-money-form').classList.add('hidden')

})

// show add money form and hidde the cash out button

document.getElementById('btn-show-add-money')
.addEventListener('click', function(){

    //hidden cashout button 
    document.getElementById('cash-out-form').classList.add('hidden') ;
    
    // show add money button clickd
document.getElementById('add-money-form').classList.remove('hidden');


})