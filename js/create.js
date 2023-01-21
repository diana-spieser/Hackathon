$(document).ready(function() {
    // Get the query string
    var urlParams = new URLSearchParams(window.location.search);
    // Get the title
    var title = urlParams.get('title');
    // Get the location
    var location = urlParams.get('location');
    // Set the title
    $('#textarea_title').val(title);
    // Set the location
    $('#textarea_content').val(location);
});