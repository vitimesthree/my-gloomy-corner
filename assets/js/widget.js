// Ensure page loads first
$(document).ready(function() {

var count = 0;

// Random number generator
function randomRange(min, max) {
    return Math.round(Math.random()*(max-min) + min);
}

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

    // Fake leaderboard
    var top = randomRange(1162, 1229910);
    function countUp(){
        top += 1
        $("#top-count").html(top);

        setTimeout(countUp, randomRange(49, 526));
    }
    countUp();
});

});