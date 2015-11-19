//index page

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

//sneaker page

document.getElementById("lakers").onclick = function losAngeles () {
  $("#lalakers").show("fast");
}

document.getElementById("lalakers").onclick = function doStuff () {
  $("#lalakers").hide();
}

document.getElementById("heat").onclick = function () {
  $("#miami").show("fast");
}

document.getElementById("miami").onclick = function () {
  $("#miami").hide();
}

document.getElementById("cavs").onclick = function () {
  $("#lebron").show("fast");
  $("#kyrie").show("fast");
}

document.getElementById("lebron").onclick = function () {
  $("#lebron").hide();
  $("#kyrie").hide();
}

document.getElementById("kyrie").onclick = function () {
  $("#lebron").hide();
  $("#kyrie").hide();
}

document.getElementById("bulls").onclick = function () {
  $("#chicago").show("fast");
}

document.getElementById("chicago").onclick = function () {
  $("#chicago").hide();
}

document.getElementById("warriors").onclick = function () {
  $("#golden").show("fast");
}

document.getElementById("golden").onclick = function () {
  $("#golden").hide();
}

document.getElementById("clippers").onclick = function () {
  $("#laclippers").show("fast");
}

document.getElementById("laclippers").onclick = function () {
  $("#laclippers").hide();
}
document.getElementById("knicks").onclick = function () {
  $("#nyc").show("fast");
}

document.getElementById("nyc").onclick = function () {
  $("#nyc").hide();
}

document.getElementById("thunder").onclick = function () {
  $("#okc").show("fast");
}

document.getElementById("okc").onclick = function () {
  $("#okc").hide();
}

document.getElementById("trailblazers").onclick = function () {
  $("#portland").show("fast");
}

document.getElementById("portland").onclick = function () {
  $("#portland").hide();
}

document.getElementById("wizards").onclick = function () {
  $("#washington").show("fast");
}

document.getElementById("washington").onclick = function () {
  $("#washington").hide();
}
