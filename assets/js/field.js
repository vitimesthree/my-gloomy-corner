// Ensure page loads first
$(document).ready(function() {
function moveSanSan(distance) {
    /* Get width of div */
    var width = $("#content").width();
    var percentage = width / 100;

    /* Multiply by the value given */
    var position =  distance * percentage;
    

    /* Position San-San */
    $("#san-san").css("bottom", position);
}

/* San-San height value in percentage */
var distance = 20

moveSanSan(distance)
$(window).on("resize", function(){
    moveSanSan(distance)
});

/* Dissapear when hovered over */
$("#san-san").hover(function(){
    $(this).addClass("fadeout");
});

});