// Preloader

var loader = document.getElementById('preloader');

function myFunction(){
  loader.style.display = "none";
}


// Stats Counter

$('.counting').each(function() {
  var $this = $(this),
    countTo = $this.attr('data-count');
    
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },
  
  {
    duration: 10000,
    easing:'linear',
    step: function() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function() {
        $this.text(this.countNum);
      }
  });  
});





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