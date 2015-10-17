$(function() {
    $('.textContainer .text').hide();
    var numberOfText = $('.textContainer .text').length;
    var counter = 0;
    var textSwapTimer = window.setInterval(function() {
        if (counter == numberOfText) counter = 0; //Go back to the first div
        $('.textContainer .text:eq('+(counter - 1)+')').hide(); //hide effect
        $('.textContainer .text:eq('+counter+')').show(); //show effect
        counter++;
    }, 1000);
});
