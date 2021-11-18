$(document).ready(function(){
    // mix it up for galery
    var mixer = mixitup(".galery-slider");

    // venobox for galery 
    $('.venobox').venobox({
        arrowsColor:"#00bbff",
        closeColor:"orange",
        overlayColor:"rgba(0,0,0,0.8)",
        framewidth : '600px',
        spinner:"cube-grid",
    });

    // sroll top 
    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();

        if(scrolling > 500){
            $(".back-top").fadeIn();
        }

        else{
            $(".back-top").fadeOut();
        }
    });

    $(".back-top").on("click",function(){
        $("html,body").animate({
            scrollTop:"0px",
        },1500);
    })

    // chat typeing 
   $(".chat-1").typeWrite({
       speed:0,
       repeat:true,
       interval: 2000,  
   });

//    $(".chatTow").typeWrite({
//     speed:1,
//     repeat:true,
//     interval: 2000,  
// });

$('.item').directionalHover({
    overlay:"overlay",
});


});

