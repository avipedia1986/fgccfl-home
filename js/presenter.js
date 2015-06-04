var view = 'league';

setView = function() {
    v = $.query.get('view');
    if (v == 'league' || v == 'tournaments' || v == 'join') {
        view = v;
    }
};

loadView = function() {
    $('#link-' + view).addClass('active');
    $.get('view/' + view + '.html', '', showInMain);
};

showInMain = function(txt, stat, xhr) {
    $('main').html(txt);
};

$(document).ready(function() {
    setView();
    loadView();
});


