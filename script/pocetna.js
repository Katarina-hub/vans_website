var slideIndex = 1;
$(document).ready(function(){
    showSlides(slideIndex);
    
    $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 900, function(){
            window.location.hash = hash;
        });
      }
    });
    
    $(window).scroll(function() {
      $(".slideanim").each(function(){
        var pos = $(this).offset().top;
  
        var winTop = $(window).scrollTop();
          if (pos < winTop + 600) {
            $(this).addClass("slide");
          }
      });
    });

    $('#previD').click(function(){ 
        showSlides(slideIndex -= 1);   
    });

    $('#nextiD').click(function(){ 
        showSlides(slideIndex += 1);
    });
})

/* galerija */

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    if (n > 7) {slideIndex = 1}    
    if (n < 1) {slideIndex = 7}

    $(".mySlides").each(function( index ) {
        $( this ).css("display", "none");
    });
    
    $(".mySlides").eq((slideIndex - 1) % 7).css("display", "inline-block");
    $(".mySlides").eq((slideIndex) % 7).css("display", "inline-block");
    $(".mySlides").eq((slideIndex + 1) % 7).css("display", "inline-block");
    
    $( ".dot" ).each(function( index ) {
        $( this ).removeClass("active");
    });
    $(".dot").eq((slideIndex - 1) % 7).addClass("active");
    $(".dot").eq((slideIndex) % 7).addClass("active");
    $(".dot").eq((slideIndex + 1) % 7).addClass("active");

}

function prikaziPatike(){
    location.href = "patike.html"
}


function prikaziOdecu(){
    location.href = "odeca.html"
}


function prikaziDizajniraj(){
    location.href = "dizajniraj.html"
}
