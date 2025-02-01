
// search: form submit reloading the page
//step: -1 set event handler

// document.getElementById('btn-login').addEventListener('click', function(event){
//     //step-2: perventDefault behavior ( prevent reloading browser )
//     event.preventDefault(); //<-----vejal to beginer --->
//     console.log('login button Click')
// //step-3: get the phone number and the pin number
// const phoneNumber = document.getElementById('phone-number').value ;
// const pinNumber = document.getElementById('pin-number').value ;
// console.log(phoneNumber, pinNumber)

// //step-4 : validate phone and pin
// // this is temporary. you should do like this
// if( phoneNumber === '5' && pinNumber === '123'){
//     console.log('you are logged in') ;
// }
// else{
//     alert('wrong phone number or pin')
// }

// })


document.getElementById('btn-login').addEventListener('click', function(event){
event.preventDefault() ;

// get phone number and pin
const phoneNumber = document.getElementById('phone-number').value 
const pinNumber = document.getElementById('pin-number').value 
// console.log(phoneNumber, pinNumber)

// bad way to validate 
if( phoneNumber === '013' && pinNumber === '1234' ){
    console.log('you are logged in ')
    window.location.href ='/home.html'
}
else{
    alert('wrong phone number & pin number')
}
})