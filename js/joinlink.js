var t = new Date();

var m = function(d) {
    return (100 * d.getMonth()) + d.getDate() + 101;
};

$(document).ready(function() {
    if (m(t) > 814 && m(t) < 1202) {
        $('.navbar #link-join a').css('color', '#b22222');
        $('.masthead #link-join a').css({
            'color' : '#ffd700',
            'text-shadow' : '1px 1px 2px #002830'
        });
    } else {
        $('#link-join').hide();
    }
});

$(function() {
    $('[data-toggle="tooltip"]').tooltip({ container : 'body' });
});
