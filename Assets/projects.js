// Preloader

var loader = document.getElementById('preloader');

function myFunction(){
  loader.style.display = "none";
}




//  Back to Top Button   

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