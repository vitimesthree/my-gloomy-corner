// Ensure page loads first
$(document).ready(function() {

var count = 0;

// Counting Machine MECHANICS!!!
$(document).ready(function() {
    var label = $("#machine-count");

    // Process a button being clicked
    function process(count) {
        label.html(count)

        var feedback = $("#negative-number");
        var fire = 1000000
        if (label.html() > fire || label.html() < -fire) {
            label.addClass("fire");
        }
        else if (label.html() < 0) {
            feedback.show();
        }
        else {
            feedback.hide();
        }
    }

    // When button is clicked...
    $("#machine-plus").click(function () {
        count++;
        process(count);
    });
    $("#machine-minus").click(function () {
        count += -1;
        process(count);
    });
    $("#machine-double").click(function () {
        count *= 2;
        process(count);
    });
});

});