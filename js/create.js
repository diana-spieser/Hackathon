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
    // edit button_create click

    button = $('#button_create');
    button.click(function() {
    // Get the title
    var title = $('#textarea_title').val();
    // Get the location
    var location = $('#textarea_content').val();
    // Redirect to the create page with the title and location
    window.location.href = 'dashboard.html?title=' + title + '&location=' + location;
});
});
