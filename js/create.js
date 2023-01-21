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
    $('#lieu_input').val(location);
    // edit button_create click

    button = $('#button_create');
    button.click(function() {
    // Get the title
    var title = $('#textarea_title').val();
    // Get the desrciption
    var description = $('#textarea_content').val();
    // Get the location
    var location = $('#lieu_input').val();
    // Get the checkboxes

    var check1 = $('#inlineCheckbox1').val();
    var check2 = $('#inlineCheckbox2').val();
    var check3 = $('#inlineCheckbox3').val();
    var check4 = $('#inlineCheckbox4').val();
    // Get the tags
    var tags = $("#tag_input").val();
    if (title == '') {
        alert('Please enter a title');
        return;
    }
    // Redirect to the create page with the data
    window.location.href = 'dashboard.html?title=' + title + '&description=' + description + '&location=' + location + '&tags=' + tags + '&check1=' + check1 + '&check2=' + check2 + '&check3=' + check3 + '&check4=' + check4;
});
});
