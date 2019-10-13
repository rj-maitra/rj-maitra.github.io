// Scroll to the top
var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
// Scroll reveal calls
window.sr = ScrollReveal();
sr.reveal('.sr-icons', {
  duration: 600,
  scale: 0.3,
  distance: '0px'
}, 200);
sr.reveal('.sr-button', {
  duration: 1000,
  delay: 200
});
sr.reveal('.sr-contact', {
  duration: 600,
  scale: 0.3,
  distance: '0px'
}, 300);