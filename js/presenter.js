var curView = 'league';

$(document).ready(function() {
    curView = $.query.get('view');
    $('#link-' + curView).addClass('active');
    $.get('view/' + curView + '.html', '', function(txt) {
        $('main').html(txt);
    });
});


