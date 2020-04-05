function onReady(callback) {
    var intervalID = window.setInterval(checkReady, 1000);

    function checkReady() {
        if (document.getElementsByTagName('body')[0] !== undefined) {
            window.clearInterval(intervalID);
            callback.call(this);
        }
    }
}


function Anime()
{
    window.sr = ScrollReveal({reset: false});
    sr.reveal('.action', {duration: 2500, delay: 0, distance: '100vw'});
    sr.reveal('.logo-phone', {duration: 2000});
    sr.reveal('.perspective-img', {duration: 2000});
}
            
function Drawing()
{
      var lineDrawing = anime({
      targets: '.header-content .lines path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 5500,
      delay: function(el, i) { return i * 250 },
      direction: 'alternate',
      loop: false
    });
}
            
function show(id, value) {
    document.getElementById(id).style.display = value ? 'block' : 'none';
}

onReady(function () {
    show('container-loader', true);
    show('loading', false);
    Drawing();
    Anime();
});


