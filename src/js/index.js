/* Here goes your JS code */

var show = document.getElementById('show-popup-form');
var popup = document.querySelector('.popup');
var close = document.querySelector('.close');

show.addEventListener('click', function(){
    popup.classList.add('visible')
});

close.addEventListener('click', function(){
    popup.classList.remove('visible')
});
