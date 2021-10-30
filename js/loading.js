var loading = true;
window.addEventListener('scroll', function(){
    if(loading) window.scrollTo(0, 0);
    if(window.scrollY > 0){
        if(document.getElementById('nav') != undefined){
            document.getElementById('nav').id = 'activenav';
        }
    } else {
        if(document.getElementById('activenav') != undefined){
            document.getElementById('activenav').id = 'nav';
        }
    }
});

window.addEventListener('load', function(){
    loading = false;
    anime({
        targets: '.loading',
        opacity: 0,
        left: 100000
    });
});