$(document).ready(function () {
    // Get the query string
    var urlParams = new URLSearchParams(window.location.search);
    // Get the title
    var title = urlParams.get('title');
    // Get the location
    var location = urlParams.get('location');
    // Get the description
    var description = urlParams.get('description');
    // Get the tags
    var tags = urlParams.get('tags');
    // Get the bool state of the checkboxes
    var check1 = urlParams.get('check1');
    var check2 = urlParams.get('check2');
    var check3 = urlParams.get('check3');
    var check4 = urlParams.get('check4');
    // Set the badges according to the checkboxes
    if (check1 == 'true') {
        $('#badge1').show();
    } else {
        $('#badge1').hide();
    }
    if (check2 == 'true') {
        $('#badge2').show();
    } else {
        $('#badge2').hide();
    }
    if (check3 == 'true') {
        $('#badge3').show();
    } else {
        $('#badge3').hide();
    }
    if (check4 == 'true') {
        $('#badge4').show();
    } else {
        $('#badge4').hide();
    }

    // Set the title
    console.log(title);
    console.log($('#title'));
    if (title != null) {
        $('#title').text(title);
        console.log(title);
        // Set the location
        $('.show-localisation').text(location);
        // Set the description
        $('#descr').text(description);
        // Set the tags
    }
});
