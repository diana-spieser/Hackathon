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
    var tags = urlParams.get('tags');
    // Get the bool state of the checkboxes
    var check1 = urlParams.get('check1');
    var check2 = urlParams.get('check2');
    var check3 = urlParams.get('check3');
    var check4 = urlParams.get('check4');
    // Set the badges according to the checkboxes
    $(inlineCheckbox1).prop("checked", check1=="true"?true:false);
    $(inlineCheckbox2).prop("checked", check2=="true"?true:false);
    $(inlineCheckbox3).prop("checked", check3=="true"?true:false);
    $(inlineCheckbox4).prop("checked", check4=="true"?true:false);

    // Set the title
    $('#textarea_title').val(title);
    // Set the location
    $('#lieu_input').val(location);
    // Set the description
    $('#textarea_content').val(description);
    // edit button_create click

    button = $('#button_create');
    button.click(function() {
    // Get the title
    var title = $('#textarea_title').val();
    // Get the desrciption
    var description = $('#textarea_content').val();
    // Get the location
    var location = $('#lieu_input').val();
    // Get the bool state of the checkboxes
    var check1 = $('#inlineCheckbox1').is(':checked');
    var check2 = $('#inlineCheckbox2').is(':checked');
    var check3 = $('#inlineCheckbox3').is(':checked');
    var check4 = $('#inlineCheckbox4').is(':checked');
    // Get the tags
    var tags = $("#tag_input").val();
    if (title == '') {
        alert('Please enter a title');
        return;
    }
    // Redirect to the create page with the data
    window.location.href = 'showmodal.html?title=' + title + '&description=' + description + '&location=' + location + '&tags=' + tags + '&check1=' + check1 + '&check2=' + check2 + '&check3=' + check3 + '&check4=' + check4;
});
});
