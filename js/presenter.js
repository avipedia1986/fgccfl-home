var view = 'league';

$(document).ready(function() {
    v=$.query.get('view');
    if (v == 'league' || v =='tournaments' || v == 'join') {
        view = v;
    }
    $('#link-'+view).addClass('active');
});