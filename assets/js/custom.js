$(document).ready(function () {
    $('.mob-menu').click(function () {
        $(this).toggleClass('active-menu')
        $('.navigation').toggleClass('active');
    });
});