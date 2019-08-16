

console.log('connected!');

$('.card-body').on('click', function() {
    console.log('clicking a button on nav!:');
    console.log(this);
})

$('.card-body').hover(function(){
    // Mouse Enter
    $('#hovered').show();
    $('#notHovered').hide();

}, function(){
    // Mouse Leave
    $('#hovered').hide();
    $('#notHovered').show();
})