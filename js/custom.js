 
/* PRE LOADER */

  $(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets    
  });


  /*jQuery Parallax */

    function initParallax() {
    $('#home').parallax("50%", 0.3);

  }
  initParallax();


  /* Back top
  -----------------------------------------------*/
  
  $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
        $('.go-top').fadeIn(200);
        } else {
          $('.go-top').fadeOut(200);
        }
        });   
        // Animate the scroll to top
      $('.go-top').click(function(event) {
        event.preventDefault();
      $('html, body').animate({scrollTop: 0}, 300);
      })
var formName = document.getElementById('formName');
var formEmail = document.getElementById('formEmail');
var form = document.getElementById('whatIs');



form.addEventListener('submit', function(event) {
    if (!formName.value || !formEmail.value) {
        alert("Opsy! Field cannot be empty.")
    } else {
        alert("You are now part of family!")
        
    }
});
            

