
$('.card-body').on('click', function () {
    console.log('clicking a button on nav!:');
    console.log(this);
})

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

$(document).ready(function(){
    console.log('connected! Document ready!');

    // Get array of objects that need to be initially hidden
    let toBeHiddenObjects = $('.initiallyHidden');

    // For each object in list of objects to be hidden
    for (let i = 0; i < toBeHiddenObjects.length; i++) {
        // Convert to JQuery object then hide
        $(toBeHiddenObjects[i]).hide();
    }

});