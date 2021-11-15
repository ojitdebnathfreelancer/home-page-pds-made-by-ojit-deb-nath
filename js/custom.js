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

    // testimonial slider
    // $(".testimonial-slider").slick({
    //     arrows:false,
    // });
});