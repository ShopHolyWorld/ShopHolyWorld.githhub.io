var navstate = false;
var navdiv = document.getElementById('mobilenavdiv');

document.getElementById('mobilenav').addEventListener('click', function(){
    if(navstate == false){
        anime({
            targets: '#mobilenavdiv',
            right: '0',
            easing: 'easeInOutQuad'
        });
        navstate = true;
    } else {
        anime({
            targets: '#mobilenavdiv',
            right: '-100vw',
            easing: 'easeInOutQuad'
        });
        navstate = false;
    }
});
