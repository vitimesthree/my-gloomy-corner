// Ensure page loads first
$(document).ready(function() {

// Show a different image depending on the month.
function checkMonth() {
    const now = new Date();
    var month = now.getMonth() + 1;

    $(".m" + month).show();
}

checkMonth();

});