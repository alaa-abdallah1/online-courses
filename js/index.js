



function resize() {
    if ($(window).width()  < 991) {
     $('.change-width').addClass('container-fluid');
    }
    else {$('.change-width').removeClass('container-fluid');}
}

$(document).ready( function() {
    $(window).resize(resize);
    resize();
});

/* left-slider*/
$(".btn-slider").click(function(){
    $("#mySidebar").toggle();
}); 


function w3_close() {
  
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("openNav").style.display = "inline-block";
}


/* search icon*/
$(".search").hide();


$("#icon-search").click(function(){
    $(".search").toggle();
}); 

/*=================btn scroll========*/

$("#go-to-top").click(function() {
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
});
 
  