/* Here goes your JS code */

var show = document.getElementById('show-popup-form');
var popup = document.querySelector('.popup');
var close = document.querySelector('.close');

show.addEventListener('click', function(){
    popup.classList.add('visible')
    show.style.display='none'; // hide CLICK ME! button to prevent show it in responsive view
});

close.addEventListener('click', function(){
    popup.classList.remove('visible')
});


var form = document.querySelector('.form');
var email = document.querySelector('#email');
var password = document.querySelector('#password');


form.addEventListener('submit', function(e){
    e.preventDefault()
    if(email.value == '') {
        alert('Please provide your email address')
    }
    if(password.value == '') {
        alert('Please provide your password')
    }
});
