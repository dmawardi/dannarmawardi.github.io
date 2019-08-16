console.log('connected!');

$('.card-body').on('click', function () {
    console.log('clicking a button on nav!:');
    console.log(this);
})

$('.card-body').hover(function () {
    // Mouse Enter
    console.log(this);
    // Grab ID of hovered element
    var cardID = $(this).attr('id')

    // Use card id to select icons within and show/hide
    $('#' + cardID + ' #hovered').show();
    $('#' + cardID + ' #notHovered').hide();

}, function () {

    // Grab ID of hovered element
    var cardID = $(this).attr('id')
    
    // Mouse Leave
    $('#' + cardID + ' #hovered').hide();
    $('#' + cardID + ' #notHovered').show();
})