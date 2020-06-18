/* Here goes your JS code */

var show = document.getElementById('show-popup-form');
var popup = document.querySelector('.popup');
var close = document.querySelector('.close');

show.addEventListener('click', function(){
    popup.classList.add('visible')
    if (popup.className == 'popup visible') {   //if login form is appear, CLICK ME button is hidding to prevent see it in responsive view
        show.style.display='none'
    }
    
});

close.addEventListener('click', function(){
    popup.classList.remove('visible')
    show.style.display='block'                  //show CLICK ME when user click on "X" button
});


var form = document.querySelector('.form');
var email = document.querySelector('#email');
var password = document.querySelector('#password');

var success = document.querySelector('.success'); //THANK YOU! message


form.addEventListener('submit', function(e){
    e.preventDefault()
    if(email.value == '') {
        alert('Please provide your email address')
    }
    if(password.value == '') {
        alert('Please provide your password')
    }else {
        setTimeout(function() {
            popup.style.display='none';
            show.style.display='none'
            success.style.display='block';
    }, 3000);
}
});
