var parallaxElements = [];
var windowHeight = 0;

$(document).ready(function() {
  $("#sebulba-wrapper").hide();
  windowHeight = $(window).height();
  $('html,body').scrollTop(1); // auto scroll to top
  setTimeout(function() {
    $("#sebulba-wrapper").addClass('animated slideInUp');
    $("#sebulba-wrapper").show();
  }, 2000);
});