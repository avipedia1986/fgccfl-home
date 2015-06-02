var today = new Date();

var mmdd = function(theDate) {
    theMonth = theDate.getMonth() + 1;
    theDay = theDate.getDate() + 1;
    return (100 * theMonth) + theDay;
};

$(document).ready(function() {
    if (mmdd(today) > 514 && mmdd(today) < 1202) {
        $('.navbar #link-join a').css('color', '#b22222');
        $('.masthead #link-join a').css({
            'color' : '#ffd700',
            'text-shadow' : '1px 1px 2px #002830'
        });
    } else {
        $('#link-join').hide();
    }
});
