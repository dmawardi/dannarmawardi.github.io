
// On Nav card button click
$('.card-body').on('click', function () {
    // Assign value of data-link attribute of clicked element to variable
    let urlLink = $(this).attr('data-link');

    // Add to URL for linking
    window.location.href = urlLink;
})

// card-body hover effects
$('.card-body').hover(function () {
    // Mouse Enter
    // Grab ID of hovered element
    var cardID = $(this).attr('id')

    // Use card id to select icons within and show/hide
    $('#' + cardID + ' #hovered').show();
    $('#' + cardID + ' #notHovered').hide();

}, function () {
    // Mouse Leave

    // Grab ID of hovered element
    var cardID = $(this).attr('id');

    // Use card id to select icons within and show/hide
    $('#' + cardID + ' #hovered').hide();
    $('#' + cardID + ' #notHovered').show();
})



// Arguments begin below
// (When document ready)
$(document).ready(function(){

    // Get array of objects that need to be initially hidden
    let toBeHiddenObjects = $('.initiallyHidden');

    // For each object in list of objects to be hidden
    for (let i = 0; i < toBeHiddenObjects.length; i++) {
        // Convert to JQuery object then hide
        $(toBeHiddenObjects[i]).hide();
    }

});