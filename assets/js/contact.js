$(document).ready(function(){
    $('input').iCheck({
        checkboxClass: 'icheckbox_square',
        radioClass: 'iradio_square',
        increaseArea: '20%' // optional
    });
});
$('.box2').click(function() {
    $(this).siblings().removeClass('active'); 
    $(this).addClass('active');
})