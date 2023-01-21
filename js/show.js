$(document).ready(function() {
    // Get the query string
    var urlParams = new URLSearchParams(window.location.search);
    // Get the title
    var title = urlParams.get('title');
    // Get the location
    var location = urlParams.get('location');
    // Get the description
    var description = urlParams.get('description');
    // Get the tags
    // Set the title
    $('#title').val(title);
    console.log(title);
    // Set the location
    $('#textarea_content').val(location);
    // Set the description
    $('#textarea_description').val(description);
    // Set the tags
});
