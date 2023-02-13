// Ensure page loads first
$(document).ready(function() {

// Random number generator
function randomRange(min, max) {
    return Math.round(Math.random()*(max-min) + min);
}

// Counting Machine MECHANICS!!!
function countingMachine() {
    var count = 0;
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
};
countingMachine();

// The Cat API
function generateCat($query) {
    $.ajax({
        type: 'GET',
        url: $query,
        success: function(data) {
            $('#cat').append("<img src='" + data[0].url + "' alt='random cat' class='rounded'> not gotten B-(</img>");
        },
        error: function(err) {
          console.log('error:' + err)
        }
    });
}
generateCat('https://api.thecatapi.com/v1/images/search?limit=1&size=thumb&mime_types=gif');

});