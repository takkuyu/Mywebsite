// import initTilt from './js/tilt';
import initSr from './js/sr';
import './style/main.scss';
import mov from './assets/Maze-Game.mp4';


$('a[href^="#"]').on('click', function(event) {
  var target = $(this.getAttribute('href'));
  if (target.length) {
    event.preventDefault();
    $('html, body')
      .stop()
      .animate(
        {
          scrollTop: target.offset().top
        },
        1000
      );
  }
});

function render_arrows() {
  let vidtag;
  vidtag = document.getElementById('video');
  vidtag.src = mov;
}

initSr();
// initTilt();
render_arrows();

