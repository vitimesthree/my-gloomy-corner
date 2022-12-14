// Ensure page loads first
$(function(){$(window).bind('load', function(){

// Show a different image depending on the month.
function checkMonth() {
    const now = new Date();
    var month = now.getMonth() + 1;

    $(".m" + month).show();
}

checkMonth();

});});